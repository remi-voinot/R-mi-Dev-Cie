<?php
session_start();
require_once("./include.php");
require_once("./signintraitement.php");
if ($_POST) {
    $outtt = signin($_POST, bdd());
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

    <?php headimport("Inscription"); ?>

    <script type="text/javascript">
        function affiche_bouton() {
            var isChecked = false;
            for (i = 0; i < document.getElementsByTagName("input").length; i++)
                if (document.getElementsByTagName("input")[i].type == "checkbox")
                    if (document.getElementsByTagName("input")[i].id == "cgu")
                        if (document.getElementsByTagName("input")[i].checked)
                            isChecked = true;
            if (isChecked) {
                document.getElementById('submite').disabled = '';
            } else {
                document.getElementById('submite').disabled = 'disabled';
            }
        }
    </script>

</head>

<body id="page-top" onload="affiche_bouton()">

    <?php hheader() ?>

    <div class="container h-100 o1">
        <form action="./signin.php" method="post">
            <div class="row o2" style="padding: auto">
                <div class="col-12 col-md-12" style="height: 20px"></div>
                <div class="col-12 col-md-12 md-txtc sm-undrlin md-undrlin">S'inscrire</div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">Pseudo : </div>
                <div class="col-12 col-md-6 md-txtr"><input <?php if ($_POST && $_POST["pseudo"]) echo ('value="' . $_POST["pseudo"] . '"') ?>type="text" name="pseudo" placeholder="Votre pseudo" size="25" class="form-control form-rounded"></div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">Email : </div>
                <div class="col-12 col-md-6 md-txtr"><input <?php if ($_POST && $_POST["email"]) echo ('value="' . $_POST["email"] . '"') ?>type="email" name="email" placeholder="Votre adresse email" size="25" class="form-control form-rounded"></div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">Mot de passe : </div>
                <div class="col-12 col-md-6 md-txtr"><input type="password" name="mdp" placeholder="Votre mot de passe" size="25" class="form-control form-rounded"></div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">Confirmation du mot de passe : </div>
                <div class="col-12 col-md-6 md-txtr"><input type="password" name="cmdp" placeholder="Votre mot de passe" size="25" class="form-control form-rounded"></div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">J'accepte les CGUV</div>
                <div class="col-12 col-md-6"><input type="checkbox" name="cguv" id="cgu" onclick="affiche_bouton()" class="form-control" style="width: 25px; height: 25px" checked></div>
                <div class="w-100 space-10px"></div>
                <div class="col-12 col-md-6 md-txtr">Je souhaite recevoir les emails contenant des offres commerciales.</div>
                <div class="col-12 col-md-6"><input type="checkbox" name="new" onclick="affiche_bouton()" class="form-control" style="width: 25px; height: 25px" checked></div>
                <div class="w-100 space-10px"></div>
                <div class="col-md-6"></div>
                <div class="col-md-6"><button type="submit" id="submite" disabled="disabled" class="btn btn-primary mb-2 sm-float-right">S'inscrire</button></div>
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