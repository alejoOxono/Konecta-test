<?php
$requestMethod = $_SERVER["REQUEST_METHOD"];
include('../class/Rest.php');
$api = new Rest();
switch($requestMethod) {
	case 'GET':
		$konectaId = '';	
		if($_GET['producto_id']) {
			$konectaId = $_GET['producto_id'];
		}
		$api->deletekonectaloyee($konectaId);
		break;
	default:
	header("HTTP/1.0 405 Method Not Allowed");
	break;
}
?>