<?php
require_once("./include.php");
function error($cat)
{
    echo ("- Vous n'avez pas rempli le champ " . $cat . " !<br>");
}
function login($post, $bdd)
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
    if (empty($post['mdp'])) {
        error('Mot de passe');
        $valid = false;
    }
    if ($valid) {
        $rep = $bdd->query('SELECT * FROM `comptes` WHERE email="'.htmlspecialchars($post['pseudo']).'" OR pseudo="'.htmlspecialchars($post['pseudo']).'"');
        $fetched = $rep->fetch();
        $fetched2 = $rep->fetch();
        if(!$fetched) {
            echo("error");
        } elseif($fetched2 != false) {
            echo("Deux comptes ont soit la même adresse soit le même nom, veuillez contacter le webmaster pour gêgler le probleme");
        }else {
            var_dump($fetched);
        }
        return true;
    } else {
        return false;
    }
}
