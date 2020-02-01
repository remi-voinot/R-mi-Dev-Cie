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

    <?php headimport("Mentions Légales"); ?>

</head>

<body id="page-top">

    <div class="container-fluid"></div>
    <div class="row">
        <div class="col-12">

            <div class="space-50px"></div>
            <div class="display-4 text-secondary text-center">Conditions Dev'&'Cie</div>
            <div class="ml-5 mr-5 text-secondary text-center display-4-copy">

                <div class="space-2em"></div>
                <span class="dc-2x">Informations</span>
                <div class="space-2em"></div>

                <span class="dc-1-5x">En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance économique et
                    numérique, il est précisé aux utilisateurs du site http://www.devandcie.com l'identité des différents
                    intervenants dans le cadre de sa réalisation et de son suivi : Conformément à la loi « informatique et libertés » du 6
                    janvier 1978 modifiée en 2004, vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent,
                    que vous pouvez exercer en vous adressant à devandcie@gmail.com.</span>

                <div class="space-2em"></div>
                <span class="dc-2x">Reproduction</span>
                <div class="space-2em"></div>

                <span class="dc-1-5x">
                    L'ensemble de ce site relève des législations internationales sur le droit d'auteur et la propriété intellectuelle.
                    Tous les droits de reproduction sont réservés.</span>

                <div class="space-2em"></div>
                <span class="dc-2x">Hebergement</span>
                <div class="space-2em"></div>

                <span class="dc-1-5x">devandcie.com est hébergé par la société OVH.</span>

                <div class="space-2em"></div>
                <span class="dc-2x">Déclaration</span>
                <div class="space-2em"></div>


                <span class="dc-1-5x">Propriétaire : Rémi Voinot <br>
                    Responsable publication : Rémi Voinot - +33610678136 <br>
                    Le responsable publication est une personne physique ou une personne morale.<br>
                    Webmaster : Rémi Voinot<br>
                    Hébergeur : OVH – 2 Rue Kellermann 59100 Roubaix 1007

                Email: devandcie@gmail.com<br>

                Téléphone : +33 6 10 67 81 36</span>

                <div class="space-2em"></div>

                <a class="btn btn-primary btn-xl text-uppercase" href="index">RETOUR</a>

                <div class="space-50px"></div>
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