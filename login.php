<?php
session_start();
require_once("./include.php");
if ($_POST) {
    var_dump($_POST);
}
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

    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Connexion</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="css/agency.min.css" rel="stylesheet">

    <link rel="stylesheet" href="./custom.css">

</head>

<body id="page-top">

    <?php hheader() ?>

    <div class="container h-100 o1">
        <form action="" method="post">
            <div class="row o2" style="padding: auto">
                <div class="col-12 col-md-12 md-txtc sm-undrlin md-undrlin">Se connecter</div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">Pseudo / Email : </div>
                <div class="col-12 col-md-6 md-txtr"><input type="text" name="" placeholder="Votre pseudo ou votre adresse mail" maxlength="20" size="25" class="form-control form-rounded"></div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">Mot de passe : </div>
                <div class="col-12 col-md-6 md-txtr"><input type="password" name="" placeholder="Votre mot de passe" maxlength="20" size="25" class="form-control form-rounded"></div>
                <div class="w-100 space-10px"></div>
                <div class="col-md-6"></div>
                <div class="col-md-6"><button type="submit" class="btn btn-primary mb-2 sm-float-right">Submit</button></div>
            </div>
        </form>
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