<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>

<style>html,
body {
  height: 100%
}</style>

  <meta charset="utf-8">
  <!--<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">-->
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

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" style="" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Dev'&'Cie</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#services">Acceuil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#portfolio">Nouvelle commande</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">Nous rejoindre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#team">A propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Se connecter</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<div class="container h-100 o1" style="">
    <form action="" method="post">
        <div class="row o2" style="padding: auto">
            <div class="col-12 col-md-6 md-txtr">Pscedo : </div>
            <div class="col-12 col-md-6 md-txtr"><input type="text" name="" placeholder="Votre Pscedo" maxlength="20" size="25" class="form-control form-rounded"></div>
        <div class="w-100 space-10px"></div>
            <div class="col-12 col-md-6 md-txtr">Mot de passe : </div>
            <div class="col-12 col-md-6 md-txtr"><input type="password" name="" placeholder="Votre Pscedo" maxlength="20" size="25" class="form-control form-rounded"></div>
        <div class="w-100 space-10px"></div>
            <div class="col-12 col-md-6 md-txtr">Confirmation du mot de passe : </div>
            <div class="col-12 col-md-6 md-txtr"><input type="password" name="" placeholder="Votre Pscedo" maxlength="20" size="25" class="form-control form-rounded"></div>
        <div class="w-100 space-10px"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><button type="submit" class="btn btn-primary mb-2 sm-float-right">Submit</button></div>
        
        </div>
    </form>
</div>

<!--<input type="text" name="" placeholder="Votre Pscedo" maxlength="20" size="25" class="form-control form-rounded">-->

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; Dev'&'Cie 2019</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#">Mentions légales</a>
            </li>
            <li class="list-inline-item">
              <a href="#">CGU</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

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
