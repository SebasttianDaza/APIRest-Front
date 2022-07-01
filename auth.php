<?php 
    include_once "./Class/Routes/Request.class.php";
    include_once "./Class/Routes/Auth.class.php";

    error_reporting(E_ERROR);

    $_Request = new Request();
    $_Auth = new Auth();

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        //Get body of the POST
        $postBody = file_get_contents("php://input");
        $datos = $_Auth->login($postBody);
        
        if($datos["result"]["code"]) {
            $response_code = $datos["result"]["code"];
            http_response_code($response_code);
        } else  {
            http_response_code(200);
        }

        header("Content-Type: application/json");
        
        echo $_Request->returnResponseJSON($datos);
    } else {

        header("Content-Type: application/json");
        echo $_Request->returnResponseJSON($_Request->error_405());
    }
?>