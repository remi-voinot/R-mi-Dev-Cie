<?php
require_once("./include.php");
function error($cat)
{
    echo ("- Vous n'avez pas rempli le champ " . $cat . " !<br>");
}
function signin($post, $bdd)
{
    $valid = true;
    if (!isset($post)) {
        echo ("- Une erreur interne est survenue, veuillez réessayez<br>");
        $valid = false;
        return;
    } elseif ($post == []) {
        echo ("- Une erreur interne est survenue, veuillez réessayez<br>");
        $valid = false;
        return;
    }
    if (empty($post['pseudo'])) {
        error('Pseudo');
        $valid = false;
    }
    if (empty($post['email'])) {
        error('Email');
        $valid = false;
    }
    if (empty($post['mdp'])) {
        error('Mot de passe');
        $valid = false;
    }
    if (empty($post['cmdp'])) {
        error('Confirmation du mot de passe');
        $valid = false;
    }
    if (empty($post['cguv'])) {
        error('J\'accepte les CGUV');
        $valid = false;
    }
    if ($post['mdp'] != $post['cmdp']) {
        echo ("Les champs Mot de passe et Confirmation du mot de passe ne sont pas identiques");
        $valid = false;
    }
    if (strpos($post['mdp'], " ") || strpos($post['mdp'], "_") || strpos($post['mdp'], "-")) {
        echo ("Le mot de passe ne doit pas contenir d'espace, l'underscore (_) ou de tiret (-)");
        $valid = false;
    }
    if (strpos($post['pseudo'], " ") || strpos($post['pseudo'], "_") || strpos($post['pseudo'], "-")) {
        echo ("Le pseudo ne doit pas contenir d'espace, l'underscore (_) ou de tiret (-)");
        $valid = false;
    }
    if(filter_var($post['email'], FILTER_VALIDATE_EMAIL)){
        echo ("Votre email n'est pas valide ( format non autorisé )");
        $valid = false;
    }
    if ($valid) {
        $req = $bdd->prepare('INSERT INTO comptes(email, pseudo, user_password) VALUES(?, ?, ?)');
        $req->execute([$post['pseudo'], $post['email'], $post['mdp']]);
        echo ("<span style=\"color:green\">Vous avez bien créer votre compte !</span>");
        return true;
    } else {
        return false;
    }
}
