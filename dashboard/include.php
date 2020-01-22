<?php
require_once("../tools/FlashMessages.php");
if(!isset($_SESSION)) {
    session_start();
}
function flashvar()
{
    $msg = new \Tools\FlashMessages();
    return $msg;
}
function sidebar()
{
    include("./sidebar.inc.php");
};
function topbar()
{
    include("./topbar.inc.php");
};
function footer()
{
    include("./footer.inc.php");
};
function importh(string $title = "ERR45689427857-NO-PAGE")
{
    include_once("./import-head.inc.php");
    $page_dashboard = "Dev'&'Cie";
    if($title != "ERR45689427857-NO-PAGE" || $title == "" || $title == " ")  {
        echo("<title>".$title." - ".$page_dashboard."</title>");
    };
};