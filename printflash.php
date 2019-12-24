<?php
function printflash() {
if(isset($_SESSION["flash"])) {
    //if($_SESSION["flashon"] !== "non" || !isset($sessionn["flashon"])) {
$f=$_SESSION["flash"];
if(isset($f["success"])) {
    echo('<div class="my-notify-success">'.$f["success"].'<span id="chsuccess" class="fa fa-times ch chsuccess"></span></div>');
    unset($_SESSION["flash"]["success"]);
}
if(isset($f["warning"])) {
    echo('<div class="my-notify-warning">'.$f["warning"].'<span id="chwarning" class="fa fa-times ch chwarning"></span></div>');
    unset($_SESSION["flash"]["warning"]);
}
if(isset($f["error"])) {
    echo('<div class="my-notify-error">'.$f["error"].'<span id="cherror" class="fa fa-times ch cherror"></span></div>');
    unset($_SESSION["flash"]["error"]);
}
if(isset($f["info"])) {
    echo('<div class="my-notify-info">'.$f["info"].'<span id="chinfo" class="fa fa-times ch chinfo"></span></div>');
    unset($_SESSION["flash"]["info"]);
}
}
}