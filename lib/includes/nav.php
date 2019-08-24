
<ul class="d-flex">
    <?php 
    if (is_array($menu)) { foreach ($menu as $m) {
        printf("<li><a href='%s' target='_%s'>%s</a></li>", $m['link'], $m['target'], $m['label']);
    }}
    ?>
</ul>

