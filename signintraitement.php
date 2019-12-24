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
        echo ("Les champs Mot de passe et Confirmation du mot de passe ne sont pas identiques<br>");
        $valid = false;
    }
    if (strpos($post['mdp'], " ") || strpos($post['mdp'], "_") || strpos($post['mdp'], "-") || strpos($post['mdp'], "<") || strpos($post['mdp'], ">") || strpos($post['mdp'], "=")) {
        echo ("Le mot de passe ne doit pas contenir d'espace, d'\"underscore\" (_), d'égale, de signes supérieur et inférieur (> et <) ou de tiret (-)<br>");
        $valid = false;
    }
    if (strpos($post['pseudo'], " ") || strpos($post['pseudo'], "_") || strpos($post['pseudo'], "-") || strpos($post['pseudo'], "<") || strpos($post['pseudo'], ">") || strpos($post['pseudo'], "=")) {
        echo ("Le pseudo ne doit pas contenir d'espace, d'\"underscore\" (_), d'égale, de signes supérieur et inférieur (> et <) ou de tiret (-)<br>");
        $valid = false;
    }
    if (!filter_var($post['email'], FILTER_VALIDATE_EMAIL)) {
        echo ("Votre email n'est pas valide ( format non autorisé )<br>");
        $valid = false;
    }
    if ($valid) {
        $rep = $bdd->query('SELECT * FROM `comptes` WHERE email="' . htmlspecialchars($post['email']) . '" OR pseudo="' . htmlspecialchars($post['pseudo']) . '"');
        $fetched = $rep->fetch();
        if ($fetched != false) {
            echo ("Vous ne pouvez pas créer un compte ayant le meme pseudo ou la meme adresse mail d'un autre utilisateur !");
            return false;
        } else {
            $req = $bdd->prepare('INSERT INTO comptes(email, pseudo, user_password) VALUES(?, ?, ?)');
            $req->execute([htmlspecialchars($post['email']), htmlspecialchars($post['pseudo']), password_hash(htmlspecialchars($post['mdp']), PASSWORD_DEFAULT, array('cost' => 15))]);
            $_SESSION["flash"]["success"] = "Vous avez créer votre compte, connecter vous avec les meme identifiants !";
            header('Location: /../login.php');
            return true;
        }
    } else {
        return false;
    }
}
