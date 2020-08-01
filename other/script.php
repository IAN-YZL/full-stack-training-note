<?php 

$travel = array("abc", "bcd", 'cde');

function getStop($trip) {
    $tripTime = count($trip);
    echo $tripTime <= 2 ? array(
        1 => 'Direct', 
        2 => '1 stop',
        )[count($trip)] : $tripTime - 1 . ' stops';
}

getStop($travel);

?>