<?php
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
bdd();
