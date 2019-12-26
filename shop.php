<?php
session_start();
require_once("./include.php");
?>
<!DOCTYPE html>
<html lang="en">

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
                    <div>Un bot simple et gratuit</div>
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
                    <div>Un bot payant mais très facile a utiliser et des options inédites</div>
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