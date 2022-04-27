<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$requestMethod = $_SERVER["REQUEST_METHOD"];
if($requestMethod == "OPTIONS") {
    die();
}
include('../class/Rest.php');
$api = new Rest();
switch($requestMethod) {	
	case 'POST':
        $data = json_decode(file_get_contents('php://input'));
		$api->updateProducto($data);
		break;
	default:
	header("HTTP/1.0 405 Method Not Allowed");
	break;
}
?>