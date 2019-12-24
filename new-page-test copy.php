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

    <?php headimport("Page de Test"); ?>

</head>

<body id="page-top">

    <?php hheader() ?>

    <div class="container h-100 o1">
        <div class="row o2" style="padding: auto">
            <div class="col-sm-12 col-md-12 md-txtc sm-undrlin md-undrlin">qqch</div>
        <div class="w-100 space-10px"></div>
            <div class="col-sm-12 col-md-6 md-txtr">r 1 c 1</div>
            <div class="col-sm-12 col-md-6 md-txtr">r 1 c 2</div>
        <div class="w-100 space-10px"></div>
            <div class="col-sm-12 col-md-6 md-txtr">r 2 c 1</div>
            <div class="col-sm-12 col-md-6 md-txtr">r 2 c 2</div>
        <div class="w-100 space-10px"></div>
            <div class="col-sm-md-6"></div>
            <div class="col-sm-md-6"></div>
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