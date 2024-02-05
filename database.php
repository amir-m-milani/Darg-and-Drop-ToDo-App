<?php
$postdata = json_decode(file_get_contents("php://input"), true);
// echo $postdata['Today'][0];
var_dump($postdata['Today'][0]);
