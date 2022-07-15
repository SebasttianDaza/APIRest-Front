<?php 
    require_once "./Class/Routes/Request.class.php";
    require_once "./Class/Routes/Embarcaciones.class.php";

    $_Request = new Request();
    $_Embarcaciones = new Embarcaciones();

    $_Request->httpResponseHeader($_SERVER['REQUEST_METHOD']);

    if($_SERVER["REQUEST_METHOD"] == "GET") {
        
        if(isset($_GET["page"])) {
            
            $page = $_GET["page"];
            $result = $_Embarcaciones->getListEmbarcaciones($page);
            
            $_Request->httpResponseCode(200);
            
            echo $result;

        } else if(isset($_GET["id"])) {

            $id = $_GET["id"];
            $result = $_Embarcaciones->getEmbarcacion($id);

            $_Request->httpResponseCode(200);
            
            echo $result;

        } else {
            echo $_Request->returnResponseJSON($_Request->error_400());
        }
        

    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
        $postBody = file_get_contents("php://input");
        $result = $_Embarcaciones->createEmbarcacion($postBody);

        $_Request->httpResponseCode(200);

        echo $result;

    } else if ($_SERVER["REQUEST_METHOD"] == "PUT") {

        $putBody = file_get_contents("php://input");
        $result = $_Embarcaciones->updateEmbarcacion($putBody);

        $_Request->httpResponseCode(200);

        echo $result;
        
    } else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {

        $deleteBody = file_get_contents("php://input");
        $result = $_Embarcaciones->deleteEmbarcacion($deleteBody);

        $_Request->httpResponseCode(200);

        echo $result;

    } else {

        $_Request->httpResponseCode(405);
        echo $_Request->returnResponseJSON($_Request->error_405());
    }
?>