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

    <div class="container h-100 o1">
        <div class="row o2 textc" style='font-family: "Myriad pro Semibold"; font-weight: 550; font-size: 1.5em'>
            <div class="col-sm-12 col-md-4 txtc">
                <div class="shop-frame">
                    <div class="space-10px"></div>
                    FreeBot
                    <div class="shop-separate"></div>
                    <div><span class="dc dc-freebot dc-2x"></span></div>
                    <div>FreeBot est un bot multifonction, gratuit ! IL a été conçut pour les personnes voulant un bot de qualité sans devoir débourser la moindre somme d'argent.
                    Ce robot possède une grande gamme de commandes tel que les commandes de modération, de musique ou même les commandes utilitaire.   
                    </div><br/>
                    <a class="soulignement" href="#">
                <div class="bouton">ACCÈDEZ MAINTENANT </div>
            </a>
                    <div class="space-10px"></div>
                </div>
            </div>
            <div class="sm-spacer"></div>
            <div class="col-sm-12 col-md-4 txtc">
                <div class="shop-frame">
                    <div class="space-10px"></div>
                    PremiumBot
                    <div class="shop-separate"></div>
                    <div><span class="dc dc-premiumbot dc-2x"></span></div>
                    <div>PremiumBot permet au utilisateur de FreeBot d'accèder à l'intégralité des commandes VIP. Vous pourrez ansi à un prix très abordable accèder à des commandes
                    que vous ne verez jamais sur un autre bot que celui-ci ! De plus vous aurez la possibilité d'accèder au rôle client bot sur notre serveur discord. </div><br/> 
                    <a class="soulignement" href="#">
                <div class="bouton">ACCÈDEZ MAINTENANT </div>
            </a>
                    <div class="space-10px"></div>
                </div>
            </div>
            
            <div class="sm-spacer"></div>
            <div class="col-sm-12 col-md-4 txtc">
                <div class="shop-frame">
                    <div class="space-10px"></div>
                    CustomBot
                    <div class="shop-separate"></div>
                    <div><span class="dc dc-freebot dc-2x"></span></div>
                    <div>Vous n'etes pas encore satisfait, vous cherchez un bot sur mesure qui répond entièrement à vos attente ? Ne vous inquiètez pas, CustomBot est fait pour vous ! 
                    Un prix attractif, commandez rapidement et reçevait votre bot sur mesure en seulement 1 semaines. Alors qu'attendez vous ?  </div><br/>
                    <a class="soulignement" href="#">
                <div class="bouton">ACCÈDEZ MAINTENANT </div>
            </a>
                    <div class="space-10px"></div>
                </div>
            </div>
        </div>
    </div>
    <?php footer(); ?>

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