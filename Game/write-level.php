<?php
$file = fopen("levels/level1.xml", 'w');

$stringData = $_GET['data'];

fwrite($file, $stringData);

fclose($file);
?>
