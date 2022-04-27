<?php
class Rest{
    private $host  = '127.0.0.1';
    private $user  = 'konecta';
    private $password   = "123pass456";
    private $database  = "formkonecta";      
    private $konectaTable = 'productos';	
	private $dbConnect = false;
    public function __construct(){
        if(!$this->dbConnect){ 
            $conn = new mysqli($this->host, $this->user, $this->password, $this->database);
            if($conn->connect_error){
                die("Error failed to connect to MySQL: " . $conn->connect_error);
            }else{
                $this->dbConnect = $conn;
            }
        }
    }


    // private function getData($sqlQuery) {
	// 	$result = mysqli_query($this->dbConnect, $sqlQuery);
	// 	if(!$result){
	// 		die('Error in query: '. mysqli_error());
	// 	}
	// 	$data= array();
	// 	while ($row = mysqli_fetch_array($result, MYSQL_ASSOC)) {
	// 		$data[]=$row;            
	// 	}
	// 	return $data;
	// }


	// private function getNumRows($sqlQuery) {
	// 	$result = mysqli_query($this->dbConnect, $sqlQuery);
	// 	if(!$result){
	// 		die('Error in query: '. mysqli_error());
	// 	}
	// 	$numRows = mysqli_num_rows($result);
	// 	return $numRows;
	// }
    

    function insertProduct($konectaData){ 		
	    $konectaName=$konectaData->producto_name;
	    $konectaReferencia=$konectaData->producto_referencia;
	    $konectaPeso=$konectaData->producto_peso;
	    $konectaCategoria=$konectaData->producto_categoria;		
	    $konectaStock=$konectaData->producto_stock;

	    $konectaQuery="
    		INSERT INTO ".$this->konectaTable." 
		    SET producto_name='".$konectaName."', producto_referencia='".$konectaReferencia."', producto_peso='".$konectaPeso."', producto_categoria='".$konectaCategoria."', producto_stock='".$konectaStock."', fecha=curdate()";

	    if( mysqli_query($this->dbConnect, $konectaQuery)) {
    		$messgae = "Producto creado satisfatoriamente";
		    $status = 1;			
    	} else {
		    $messgae = "Creación de producto fallida";
		    $status = 0;			
	    }
	    $konectaResponse = array(
    		'status' => $status,
		    'status_messreferencia' => $messgae
	    );
	    header('Content-Type: application/json');
	    echo json_encode($konectaResponse);
    }

    

    public function getProducto($konectaId) {		
    	$sqlQuery = '';
    	if($konectaId) {
		    $sqlQuery = "WHERE producto_id = '".$konectaId."'";
	    }	
	    $konectaQuery = "
    		SELECT * 
		    FROM ".$this->konectaTable." $sqlQuery
		    ORDER BY producto_id DESC";	
        $resultData = mysqli_query($this->dbConnect, $konectaQuery);
	    $konectaData = array();
	    while( $konectaRecord = mysqli_fetch_assoc($resultData) ) {
    		$konectaData[] = $konectaRecord;
    	}
    	header('Content-Type: application/json');
    	echo json_encode($konectaData);	
    }


    function updateProducto($konectaData){ 		
    	if($konectaData->producto_id) {
		    $konectaName=$konectaData->producto_name;
	        $konectaReferencia=$konectaData->producto_referencia;
	        $konectaPeso=$konectaData->producto_peso;
	        $konectaCategoria=$konectaData->producto_categoria;		
	        $konectaStock=$konectaData->producto_stock;
		    $konectaQuery="
    			UPDATE ".$this->konectaTable." 
			    SET producto_name='".$konectaName."', producto_referencia='".$konectaReferencia."', producto_peso='".$konectaPeso."', producto_categoria='".$konectaCategoria."', producto_stock='".$konectaStock."'
			    WHERE producto_id = '".$konectaData->producto_id."'";
			    echo $konectaQuery;
		    if( mysqli_query($this->dbConnect, $konectaQuery)) {
    			$messgae = "product updated successfully.";
			    $status = 1;			
		    } else {
    			$messgae = "product update failed.";
			    $status = 0;			
		    }
	    } else {
    		$messgae = "Invalid request.";
		    $status = 0;
	    }
	    $konectaResponse = array(
    		'status' => $status,
		    'status_message' => $messgae
	    );
	    header('Content-Type: application/json');
	    echo json_encode($konectaResponse);
    }


    public function deletekonectaloyee($konectaId) {		
	    if($konectaId) {			
		    $konectaQuery = "
			    DELETE FROM ".$this->konectaTable." 
    			WHERE producto_id = '".$konectaId."'";	
	    	if( mysqli_query($this->dbConnect, $konectaQuery)) {
		    	$messgae = "product delete Successfully.";
			    $status = 1;			
		    } else {
    			$messgae = "product delete failed.";
			    $status = 0;			
		    }		
	    } else {
		    $messgae = "Invalid request.";
		    $status = 0;
	    }
	    $konectaResponse = array(
    		'status' => $status,
		    'status_message' => $messgae
	    );
	    header('Content-Type: application/json');
	    echo json_encode($konectaResponse);	
    }
}
?>