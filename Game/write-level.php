<?php
$file = fopen("levels/level1.xml", 'w');

$stringData = "<test>Hello</test>";

fwrite($file, $stringData);

fclose($file);
?>
