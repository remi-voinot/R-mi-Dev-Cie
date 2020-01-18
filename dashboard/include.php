<?php
function sidebar()
{
    include("./sidebar.inc.php");
};
function importh(string $title = "ERR45689427857-NO-PAGE")
{
    include_once("./import-head.php");
    $page_dashboard = "Dev'&'Cie";
    if($title != "ERR45689427857-NO-PAGE") {
        echo("<title>".$title." - ".$page_dashboard."</title>");
    };
};