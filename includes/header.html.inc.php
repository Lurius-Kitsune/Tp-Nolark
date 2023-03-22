<header>
    <picture>
        <?php
        
        include 'getFileRoot.inc.php';
        
        $banner = "images/banniere.png";
        $bannerSmall = "images/banniere_small.png";
        echo '<source media="(max-width:576px)" srcset="'.$otherPage.$bannerSmall.'">';
        echo '<source srcset="'.$otherPage.$banner.'">';
        echo '<img src="'.$otherPage.$bannerSmall.'" alt="Nolark : Protect your minds ! Cette bannière
                         montre un coucher de soleil avec une femme embrassant un homme réalisant en
                         stoppie sur sa moto.">
                    <!-- Image basée sur la création originale de ShiftGraphiX sur Pixabay :
                    https://pixabay.com/fr/couple-stoppie-sportive-vélomoteur-3156613/ -->';
        ?>
    </picture>
    <nav>
        <!-- ICONE BURGER -->
        <input type="checkbox">
        <span></span>
        <span></span>
        <span></span>
        <ul>
            <?php
            include 'lienspages.inc.php';
            ?>
        </ul>
    </nav>
</header>


