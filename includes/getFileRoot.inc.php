<?php

$scriptName = filter_input(INPUT_SERVER, 'SCRIPT_FILENAME');
$pageName = substr($scriptName, strripos($scriptName, "/")+1);
if($pageName === 'index.php'){
    $rootPage = '/';
    $otherPage = './pages/';
}
else{
    $rootPage = '../';
    $otherPage = './';
}
