<?php
require_once("./include.php");
function error($cat)
{
    return "- Vous n'avez pas rempli le champ " . $cat . " !<br>";
}
/**
     * Function login
     * 
     * @param  Array  $post ($_POST)  The post
     * @param  PDO  $bdd ( bdd() )    The Database connexion
     * @return object
     * 
     */
function login(Array $post, PDO $bdd)
{
    $varr="";
    $valid = true;
    if (!isset($post)) {
        $varr .= "- Une erreur interne est survenue, veuillez réessayez";
        $valid = false;
        return $varr;
    } elseif ($post == []) {
        $varr .= "- Une erreur interne est survenue, veuillez réessayez";
        $valid = false;
        return $varr;
    }
    if (empty($post['pseudo'])) {
        $varr .= error("Pseudo");
        $valid = false;
    }
    if (empty($post['mdp'])) {
        $varr .= error("Mot de passe");
        $valid = false;
    }
    if ($valid) {
        $rep = $bdd->query('SELECT * FROM `comptes` WHERE email="'.htmlspecialchars($post['pseudo']).'" OR pseudo="'.htmlspecialchars($post['pseudo']).'"');
        $fetched = $rep->fetch();
        $fetched2 = $rep->fetch();
        if(!$fetched) {
            $varr .= 'Le mot de passe ou l\'identifiant est faux.';
        } elseif($fetched2 != false) {
            $varr .= "Deux comptes ont soit la même adresse soit le même nom, veuillez contacter le webmaster pour gêgler le probleme";
        }else {
            if(password_verify($post['mdp'], $fetched["user_password"])) {
                $varr = "";
            }else{
                $varr .= 'Le mot de passe ou l\'identifiant est faux.';
            }
        }
        if(substr($varr, -4) == "<br>") {
            $varr = trim($varr, "<br>");
        }
        return $varr;
    } else {
        if(substr($varr, -4) == "<br>") {
            $varr = trim($varr, "<br>");
        }
        return $varr;
    }
}
