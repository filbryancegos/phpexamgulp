<?php
    include('menu.php')
?>

<?php
    include('lib/includes/header.php')
?>

<section id="contact-us">
    <div class="container">
        <div class="row text-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12-xs slideDown">
                <h2>Contact Us</h2>
                <p class="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem nesciunt ipsum praesentium sunt, repellat deserunt unde fuga reprehenderit, numquam suscipit in, error ipsa explicabo, aspernatur quo ipsum rem aperiam. Facere nulla fugit suscipit voluptatem repellendus a ut voluptatibus eaque aspernatur sunt consequatur cupiditate animi aut, molestias ea totam ullam harum eos! Error iste harum animi maxime rem?</p>
            </div>
        </div>
    </div>
</section>


<section id="contact-form">
    <div class="container">
        <div class="row d-flex align-items-center justify-content-end ">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12-xs slideLeft">
                <h3>Feel Free to reach out</h3>
                <form action="contact-form.php" class="mt-5" id="form" method="post">
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" name="name" aria-describedby="nameHelp" placeholder="Enter name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="message" name="message" rows="3"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-1">Submit</button>
                </form> 
                
            </div>
            <?php include('lib/includes/contact.php') ?>
        </div>
    </div>
</section>


<?php
    include('lib/includes/footer.php')
?>