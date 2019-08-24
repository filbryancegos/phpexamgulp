const slideDown =  document.querySelectorAll('.slideDown');
const slideLeft =  document.querySelectorAll('.slideLeft');
const slideRight =  document.querySelectorAll('.slideRight');

const timeOut = (el) => {
    setTimeout(() => {
        el.classList.remove('animated', 'slideInDown');
        el.classList.remove('animated', 'slideInLeft');
        el.classList.remove('animated', 'slideInRight');
    },1000)
    
}

const down = () => {
    slideDown.forEach((el) => {
        el.classList.add('animated', 'slideInDown');
        timeOut(el);
    })
}

const left = () => {
    slideLeft.forEach((el) => {
        el.classList.add('animated', 'slideInLeft');
        timeOut(el);
    })
}

const right = () => {
    slideRight.forEach((el) => {
        el.classList.add('animated', 'slideInRight');
        timeOut(el);
    })
}

const addSlide = () => {
    down();
    left();
    right();
}

addSlide();

var resizeTimer;
const resizeSlide = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        addSlide();
        left();
        right();
    }, 500);
}

window.addEventListener("resize", resizeSlide);
//window.addEventListener("scroll", resizeSlide);

// fixed nav
const nav = document.querySelector('header');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}
window.addEventListener('scroll', fixNav);
// end of fixed nav


// progress bar
const progress = document.querySelectorAll('#our-expertise .progress-wrap');
const classprogress = ['branding','design','development'];
var counter = 0;
var width = 0;

const percentprogress = function(el,percentvalue) {
    const bar = el.querySelector('.progress-bar');
            const percent = el.querySelector('.content .percent');
            width = 0;
            var id = setInterval(frame, 50);
            function frame() {
              if (width >= percentvalue) {
                clearInterval(id);
              } else {
                width++; 
                bar.style.width = width + '%'; 
                percent.innerText = width + '%';
                percent.style.left = width + 5 + '%';
              }
            }
}

progress.forEach(el => {
    if (counter >= 3) {
        counter = 1
    } else {
        let elclass = classprogress[counter];
        el.classList.add(elclass);

        if (el.classList.contains('branding')) {
            var percentvalue = 90;
            percentprogress(el,percentvalue)
        } else if (el.classList.contains('design')) {
            var percentvalue = 80;
            percentprogress(el,percentvalue)
        } else if (el.classList.contains('development')) {
            var percentvalue = 85;
            percentprogress(el,percentvalue)
        } 
        counter++;
    }
})
// end of progress bar

