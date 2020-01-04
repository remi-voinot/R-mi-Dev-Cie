<?php
if (!$_SESSION) {
    session_status();
}
require_once('./tools/FlashMessages.php');

function printhost()
{
    $hostname = $_SERVER['HTTP_HOST'];
    return $hostname;
}

function flashvar()
{
    $msg = new \Tools\FlashMessages();
    return $msg;
}

function bdd()
{
    $host = "localhost";
    $dbname = "devncie";
    $user = "root";
    $password = ""; // Sur Wamp, il n'y a pas de mot de passe.
    $sql = 'mysql:host=' . $host . '; dbname=' . $dbname;
    $bdd = new PDO($sql, $user, $password);
    return $bdd;
}

function footer()
{
    include("./footer.inc.php");
};

function hheader()
{
    include("./header.inc.php");
}

function headimport($title)
{
    include("./import-head.php");
    echo ("<title>" . $title . "</title>");
}
