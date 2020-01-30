<?php
function copyright($class = "")
{
    if(empty($class)) {
        $insert = '';
    } elseif(!empty($class)) {
        $insert = ' class="'.$class.'"'."";
    }
    $copyrightt = '<span'.$insert.'>Copyright </span><i class="fas fa-copyright"></i><span'.$insert.'> ' . "Dev'&'Cie 2020";
    $copy = $copyrightt;
    return $copy;
}