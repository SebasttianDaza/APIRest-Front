<?php 
    require_once "./Class/Routes/Request.class.php";
    require_once "./Class/Routes/Embarcaciones.class.php";

    $_Request = new Request();
    $_Embarcaciones = new Embarcaciones();

    if($_SERVER["REQUEST_METHOD"] == "GET") {

        if(isset($_GET["page"])) {

            header("Content-Type: application/json");
            $page = $_GET["page"];
            $result = $_Embarcaciones->getListEmbarcaciones($page);
            echo $result;
            http_response_code(200);

        } else if(isset($_GET["id"])) {

            header("Content-Type: application/json");
            $id = $_GET["id"];
            $result = $_Embarcaciones->getEmbarcacion($id);
            echo $result;
            http_response_code(200);

        } else {
            echo json_encode($_Request->error_400());
        }

    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
        header("Content-Type: application/json");
        $postBody = file_get_contents("php://input");
        $result = $_Embarcaciones->createEmbarcacion($postBody);
        echo $result;
        http_response_code(200);

    } else if ($_SERVER["REQUEST_METHOD"] == "PUT") {

        header("Content-Type: application/json");
        $putBody = file_get_contents("php://input");
        $result = $_Embarcaciones->updateEmbarcacion($putBody);
        echo $result;
        http_response_code(200);
        
    } else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {

        header("Content-Type: application/json");
        $deleteBody = file_get_contents("php://input");
        $result = $_Embarcaciones->deleteEmbarcacion($deleteBody);
        echo $result;
        http_response_code(200);

    } else {

        header("Content-Type: application/json");
        echo json_encode($_Request->error_405());
    }
?>