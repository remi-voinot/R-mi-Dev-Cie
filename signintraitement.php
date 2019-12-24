<?php
require_once("./include.php");
function error(String $cat)
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
function signin(Array $post, PDO $bdd)
{
    $varr = "";
    $valid = true;
    if (!isset($post)) {
        $varr .= "- Une erreur interne est survenue, veuillez réessayez<br>";
        $valid = false;
        return;
    } elseif ($post == []) {
        $varr .= "- Une erreur interne est survenue, veuillez réessayez<br>";
        $valid = false;
        return;
    }
    if (empty($post['pseudo'])) {
        $varr .= error('Pseudo');
        $valid = false;
    }
    if (empty($post['email'])) {
        $varr .= error('Email');
        $valid = false;
    }
    if (empty($post['mdp'])) {
        $varr .= error('Mot de passe');
        $valid = false;
    }
    if (empty($post['cmdp'])) {
        $varr .= error('Confirmation du mot de passe');
        $valid = false;
    }
    if (empty($post['cguv'])) {
        $varr .= error('J\'accepte les CGUV');
        $valid = false;
    }
    if ($post['mdp'] != $post['cmdp']) {
        $varr .= "- Les champs Mot de passe et Confirmation du mot de passe ne sont pas identiques<br>";
        $valid = false;
    }
    if (strpos($post['mdp'], " ") || strpos($post['mdp'], "_") || strpos($post['mdp'], "-") || strpos($post['mdp'], "<") || strpos($post['mdp'], ">") || strpos($post['mdp'], "=")) {
        $varr .= "- Le mot de passe ne doit pas contenir d'espace, d'\"underscore\" (_), d'égale, de signes supérieur et inférieur (> et <) ou de tiret (-)<br>";
        $valid = false;
    }
    if (strpos($post['pseudo'], " ") || strpos($post['pseudo'], "_") || strpos($post['pseudo'], "-") || strpos($post['pseudo'], "<") || strpos($post['pseudo'], ">") || strpos($post['pseudo'], "=")) {
        $varr .= "- Le pseudo ne doit pas contenir d'espace, d'\"underscore\" (_), d'égale, de signes supérieur et inférieur (> et <) ou de tiret (-)<br>";
        $valid = false;
    }
    if (!filter_var($post['email'], FILTER_VALIDATE_EMAIL)) {
        $varr .= "- Votre email n'est pas valide ( format non autorisé )<br>";
        $valid = false;
    }
    if ($valid) {
        $rep = $bdd->query('SELECT * FROM `comptes` WHERE email="' . htmlspecialchars($post['email']) . '" OR pseudo="' . htmlspecialchars($post['pseudo']) . '"');
        $fetched = $rep->fetch();
        if ($fetched != false) {
            $varr .= "- Vous ne pouvez pas créer un compte ayant le meme pseudo ou la meme adresse mail d'un autre utilisateur !";
        } else {
            $req = $bdd->prepare('INSERT INTO comptes(email, pseudo, user_password) VALUES(?, ?, ?)');
            $req->execute([htmlspecialchars($post['email']), htmlspecialchars($post['pseudo']), password_hash(htmlspecialchars($post['mdp']), PASSWORD_DEFAULT, array('cost' => 15))]);
            header('Location: /../login.php');
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
