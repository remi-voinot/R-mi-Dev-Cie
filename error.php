<?php
session_start();
require_once("./include.php");
$b = printhost();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png" sizes="144x144">

    <title>Erreur</title>

    <link href="https://fonts.googleapis.com/css?family=Montserrat:700,900" rel="stylesheet">

    <link type="text/css" rel="stylesheet" href="http://<?php echo $b;?>/errorfile/style.css" />
    <link type="text/css" rel="stylesheet" href="http://<?php echo $b;?>/errorfile/style2.css" />
    <script src="http://<?php echo $b;?>/errorfile/script.js"></script>
</head>

<body>
    <div id="notfound">
        <div class="notfound">
            <div class="notfound-404">
                <h1 class="err1">ERROR</h1>
                <h2 class="err2">Une erreur est survenue, veuillez recharger la page ou vous diriger vers l'acceuil</h2>
            </div>
            <a href="/" class="err3">Accueil</a>
        </div>
    </div>
    <script type="text/javascript">
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-23581568-13');
    </script>
</body>

</html>