<?php
require_once("./include.php");
$bdd = bdd();
function error($cat) {
    echo("- Vous n'avez pas rempli le champ ".$cat." !<br>");
}
function signin($post) {
    $valid = true;
    if(!isset($post)) {
        echo("- Une erreur interne est survenue, veuillez réessayez<br>");
        $valid = false;
        return;
    }elseif($post == []) {
        echo("- Une erreur interne est survenue, veuillez réessayez<br>");
        $valid = false;
        return;
    }
    if(empty($post['pseudo'])) {
        error('Pseudo');
        $valid = false;
    }
    if(empty($post['email'])) {
        error('Email');
        $valid = false;
    }
    if(empty($post['mdp'])) {
        error('Mot de passe');
        $valid = false;
    }
    if(empty($post['cmdp'])) {
        error('Confirmation du mot de passe');
        $valid = false;
    }
    if(empty($post['cguv'])) {
        error('J\'accepte les CGUV');
        $valid = false;
    }
    if($valid) {
        echo("Tout est bon !");
    }
}
