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
    if ($valid) {
        if ($post['mdp'] != $post['cmdp']) {
            echo ("Les champs Mot de passe et Confirmation du mot de passe ne sont pas identiques");
            return false;
        } else {
            $req = $bdd->prepare('INSERT INTO comptes(email, pseudo, password) VALUES(:pscedo, :email, :mdp)');
            $req->exec($post);
            return true;
        }
    } else {
        return false;
    }
}
