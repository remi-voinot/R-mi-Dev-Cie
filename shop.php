<?php
session_start();
require_once("./include.php");
?>
<!DOCTYPE html>
<html lang="fr">

<head>

    <style>
        html,
        body {
            height: 100%
        }
    </style>

    <?php headimport("Boutique"); ?>

</head>

<body id="page-top">

    <?php hheader() ?>

    <div class="container h-100 o1 ">
        <div class="row o2 textc" style='font-family: "Myriad pro Semibold"; font-weight: 550; font-size: 1.5em'>
            <div class="col-sm-12 col-lg-4 txtc">
                <div class="shop-frame">
                    <div class="space-10px"></div>
                    <span>FreeBot</span>
                    <div class="shop-separate"></div>
                    <div><span class="dc dc-freebot dc-2x"></span></div>
                    <div class="pad-txt-shop"><span class="segoi f-s-75"> FreeBot est un bot multifonction, gratuit ! Il a été conçut pour les personnes voulant un bot de qualité sans devoir débourser la moindre somme d'argent. Ce robot possède une grande gamme de commandes tel que les commandes de modération, de musique ou même des commandes utilitaires.</span></div>
                    <div class="space-1em"></div>
                    <button type="button" class="btn btn-secondaryy">L'ajouter à mon serveur</button>
                    <div class="space-10px"></div>
                </div>
            </div>
            <div class="sm-spacer lg-hide"></div>
            <div class="col-sm-12 col-lg-4 txtc">
                <div class="shop-frame">
                    <div class="space-10px"></div>
                    <span>PremiumBot</span>
                    <div class="shop-separate"></div>
                    <div><span class="dc dc-premiumbot dc-2x"></span></div>
                    <div class="pad-txt-shop"><span class="segoi f-s-75"> PremiumBot permet aux utilisateurs de FreeBot d'accéder à l'intégralité des commandes VIP. Vous pourrez ainsi à un prix très abordable accéder à des commandes que vous ne verez jamais sur un autre bot que celui-ci ! De plus vous aurez la possibilité d'accéder au rôle client bot sur notre serveur discord. </span></div>
                    <div class="space-1em"></div>
                    <button type="button" class="btn btn-secondaryy">Débloquer les options</button>
                    <div class="space-10px"></div>
                </div>
            </div>

            <div class="sm-spacer lg-hide"></div>
            <div class="col-sm-12 col-lg-4 txtc">
                <div class="shop-frame">
                    <div class="space-10px"></div>
                    <span>CustomBot</span>
                    <div class="shop-separate"></div>
                    <div><span class="dc dc-freebot dc-2x"></span></div>
                    <div class="pad-txt-shop"><span class="segoi f-s-70"> Vous n'êtes pas encore satisfait, vous cherchez un bot sur mesure qui répond entièrement à vos attentes ? Ne vous inquiétez pas, CustomBot est fait pour vous ! Un prix attractif, commandez rapidement et recevait votre bot sur mesure et totalement personnalisé en seulement 1 semaines. Alors qu'attendez vous ?</span></div>
                    <div class="space-1em"></div>
                    <button type="button" class="btn btn-secondaryy">Acheter maintenant</button>
                    <div class="space-10px"></div>
                </div>
            </div>

        </div>
    </div>
    <?php footer() ?>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Contact form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Custom scripts for this template -->
    <script src="js/login.js"></script>

</body>

</html>