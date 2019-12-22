<?php
session_start();
require_once("./include.php");
/*$status = $_SERVER['REDIRECT_STATUS'];
$codes = array(
       403 => array('403 Forbidden', 'The server has refused to fulfill your request.'),
       404 => array('404 Not Found', 'The document/file requested was not found on this server.'),
       405 => array('405 Method Not Allowed', 'The method specified in the Request-Line is not allowed for the specified resource.'),
       408 => array('408 Request Timeout', 'Your browser failed to send a request in the time allowed by the server.'),
       500 => array('500 Internal Server Error', 'The request was unsuccessful due to an unexpected condition encountered by the server.'),
       502 => array('502 Bad Gateway', 'The server received an invalid response from the upstream server while trying to fulfill the request.'),
       504 => array('504 Gateway Timeout', 'The upstream server failed to send a request in the time allowed by the server.'),
);

$title = $codes[$status][0];
$message = $codes[$status][1];
if ($title == false || strlen($status) != 3) {
       $message = 'Please supply a valid status code.';
}*/
$title = "moi";
?>
<!DOCTYPE html>
<html lang="en">

<head>

<style>
html,body {
    height: 100%
  }
.errordiv {
    min-width: 30%;
    min-height: 30%;
    width: 33%;
    height: 33%;
    background-color: #c4c4c4;
}
</style>

  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Connexion</title>

  <!-- Bootstrap core CSS -->
  <link href="startbootstrap-agency-gh-pages/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="startbootstrap-agency-gh-pages/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="startbootstrap-agency-gh-pages/css/agency.min.css" rel="stylesheet">

  <link rel="stylesheet" href="./startbootstrap-agency-gh-pages/custom.css">

</head>

<body id="page-top">

<?php hheader() ?>

<div class="container h-100 o1" style="">
        <div class="row o2" style="padding: auto">
            <div class="col-md-4"></div>
            <div class="col-12 col-md-4 md-txtc errordiv" style="">Se connecter</div>
            <div class="col-md-4"></div>
        </div>
</div>
  <?php footer(); ?>

  <!-- Bootstrap core JavaScript -->
  <script src="startbootstrap-agency-gh-pages/vendor/jquery/jquery.min.js"></script>
  <script src="startbootstrap-agency-gh-pages/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="startbootstrap-agency-gh-pages/vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Contact form JavaScript -->
  <script src="startbootstrap-agency-gh-pages/js/jqBootstrapValidation.js"></script>
  <script src="startbootstrap-agency-gh-pages/js/contact_me.js"></script>

  <!-- Custom scripts for this template -->
  <script src="startbootstrap-agency-gh-pages/js/login.js"></script>

</body>

</html>
