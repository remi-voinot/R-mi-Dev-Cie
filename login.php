<?php
session_start();
require_once("./include.php");
require_once("./logintraitement.php");
if ($_POST) {
    $outtt = login($_POST, bdd());
    if(empty($outtt)) {
        flashvar()->success("Vous êtes connecté !");
        header('Location: ./../index.php');
        exit();
    }
}
if(isset($outtt)) flashvar()->error($outtt, null, true);
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

    <?php headimport("Connexion"); ?>

</head>

<body id="page-top">

    <?php hheader() ?>

    <div class="container h-100 o1">
        <form action="./login.php" method="post">
            <div class="row o2" style="padding: auto">
                <div class="col-12 col-md-12" style="height: 20px"></div>
                <div class="col-12 col-md-12 md-txtc sm-undrlin md-undrlin">Se connecter</div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">Pseudo / Email : </div>
                <div class="col-12 col-md-6 md-txtr"><input <?php if ($_POST && $_POST["pseudo"]) echo ('value="' . $_POST["pseudo"] . '"') ?>type="text" name="pseudo" placeholder="Votre pseudo/email" maxlength="20" size="25" class="form-control form-rounded"></div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">Mot de passe : </div>
                <div class="col-12 col-md-6 md-txtr"><input type="password" name="mdp" placeholder="Votre mot de passe" maxlength="20" size="25" class="form-control form-rounded"></div>
                <div class="w-100 space-10px"></div>
                <div class="col-md-6"></div>
                <div class="col-md-6"><button type="submit" id="submite" class="btn btn-primary mb-2 sm-float-right">Se connecter</button></div>
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