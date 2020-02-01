<?php
session_start();
require_once("./include.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>

  <?php headimport("Dev'&'Cie"); ?>

</head>

<body id="page-top">

  <?php hheader(false) ?>

  <!-- Header -->
  <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in">Dev'&'Cie</div>
        <div class="intro-heading text-uppercase">UN SERVICE WEB/BOT INEDIT !</div>
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Plus d'info ...</a>
        <link rel="icon" type="image/png" href="img/logos/logo Dev'&'Cie.png">
      </div>
    </div>
  </header>

  <!-- Services -->
  <section class="page-section" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Pourquoi Dev'&'Cie ?</h2>
          <h3 class="section-subheading text-muted">Notre entreprise a pour but de satisfaire gratuitement nos clients en leurs offrant des bots discord de qualité. <br/> 
          Nous vous proposons également des services payants qui vous permettront d'avoir vos propres bots personnalisés. <br/> Vous avez aussi la possibilité de commander des sites internet.</h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-server fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">Serveurs dernière génération</h4>
          <p class="text-muted">Des machines avec les meilleurs composants du marché, optimisées pour garantir une qualité maximale à nos clients.</p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">Interface web de configuration</h4>
          <p class="text-muted">Vous pouvez gérer les options de votre bot Discord via une interface web. Ajouter des fonctionnalités sera un jeu d'enfant pour vous !</p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">Sécurité oblige !</h4>
          <p class="text-muted">Comme votre bot et vos sites sont susceptibles de contenir des informations sensibles, nous garantissons leurs sécurités en empêchant toute intrusion dans les fichiers. Les bases de données sont cryptés pour garantir une sécurité maximale.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Grid -->
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Nos offres !</h2>
          <h3 class="section-subheading text-muted">Voici les différentes offres que nous proposons à Dev'&'Cie </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link"  href="shop.php">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="src/freebot-400x300.png" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>Free Bot</h4>
            <p class="text-muted">Un bot multifonction gratuit et efficace !</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link"  href="shop.php">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>Premium Bot </h4>
            <p class="text-muted">Accèdez à toutes les commandes VIP grâce à Premium Bot !</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link"  href="shop.php">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>Custom Bot</h4>
            <p class="text-muted">Avec Custom Bot concevez vos propres bots sur mesure !</p>
          </div>
        </div>
        
          
  </section>

  <!-- About -->
  <section class="page-section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Notre équipe</h2>

          <h3 class="section-subheading text-muted">Nous vous présentons notre équipe de passionnés au service de nos clients </h3>

        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/logos/avatar-gratuit5.png" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Rémi</h4>
                  <h4 class="subheading">Fondateur de Dev'&'Cie et Développeur Web</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Il gère toute l'entreprise <br />et les sites internet !</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/logos/avatar-gratuit-w.png" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Noé</h4>
                  <h4 class="subheading">Co-Fondateur de Dev'&'Cie, Développeur Web et bot</h4>
                </div>
                <div class="timeline-body">

                  <p class="text-muted">IL s'occupe de développement du site web Dev'&'Cie et il gère l'équipe de Développeur bot </p>

                </div>
              </div>
            </li>
            <li>
            
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/logos/avatar-gratuit1.png" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Dialex</h4>
                  <h4 class="subheading">Développeur bot</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">C'est lui qui est chargé de faire vos bots discord</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/logos/avatar-gratuit.png" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Martisse</h4>
                  <h4 class="subheading">Community Manager</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Si vous avez un problème n'hésitez pas à le contacter !</p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/logos/avatar-gratuit7.png" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Arthur</h4>
                  <h4 class="subheading">Développeur bot</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Il contribue à la création des bots discord</p>
                </div>
              </div>
            </li>
                </div>
              </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Contactez-nous</h2><br>
          
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder="Votre pscedo *" required="required" data-validation-required-message="Votre pscedo est manquant">
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="email" type="email" placeholder="Votre mail *" required="required" data-validation-required-message="Veuillez mettre votre email pour vous recontactez">
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="phone" type="tel" placeholder="Votre numéro" required="required" data-validation-required-message="C'est pas obliger mais c'est cool de l'avoir">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Mais merde, mettez un putain de message ! On vous a apris la politesse ?"></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Envoyer a Dev'&'Cie</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

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
  <script src="js/agency.min.js"></script>

</body>

</html>