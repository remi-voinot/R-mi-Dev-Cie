<?php
require_once("./include.php");
require_once("./tools/FlashMessages.php");
?>

<nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
  <div class="container">
    <a class="navbar-brand js-scroll-trigger" href="#page-top"><span class="dc dc-logo" style="padding-right: 10px"></span>Dev'&'Cie</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav text-uppercase ml-auto">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="/">Acceuil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="shop">Boutique</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="signin">S'inscrire</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="login">Se connecter</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<?php if (!empty($_SESSION["flash_messages"])) {
  echo ('<div style="z-index: 100;position: fixed; margin-top: 64px; float: right; width: 95%; margin-left: 2.5%; margin-right: 2.5%">');
  flashvar()->display();
  echo ("</div>");
} ?>