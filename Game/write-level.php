
<?php

//****************************************************************************
//This file is subject to the terms and conditions defined in license.txt.
//****************************************************************************

$file = fopen("levels/level1.xml", 'w');

$stringData = $_GET['data'];

fwrite($file, $stringData);

fclose($file);
?>
