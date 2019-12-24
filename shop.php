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
            <div class="col-sm-12 col-md-3 txtc shop-frame">
                <div class="space-1em"></div>
                FreeBot
                <div class="space-1em"></div>
            </div>
            <div class="col-md-1 sm-md-col-1-spacer"></div>
            <div class="col-sm-12 col-md-3 txtc shop-frame">
                <div class="space-1em"></div>
                PremiumBot
                <div class="space-1em"></div>
            </div>
            <div class="col-md-1 sm-md-col-1-spacer"></div>
            <div class="col-sm-12 col-md-3 txtc shop-frame">
                <div class="space-1em"></div>
                CustomBot
                <div class="space-1em"></div>
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