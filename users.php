<?php 
    require_once "./Class/Routes/Request.class.php";
    require_once "./Class/Routes/Users.class.php";

    $_Request = new Request();
    $_Users = new Users();

    if($_SERVER["REQUEST_METHOD"] == "GET") {
         $_Request->httpResponseCode($_SERVER['REQUEST_METHOD']);

        if(isset($_GET["page"])) {

            header("Content-Type: application/json");
            $page = $_GET["page"];
            $result = $_Users->getList($page);
            $_Request->httpResponseCode(200);
            echo $result;

        } 
        
        if(isset($_GET["id"])) {

            header("Content-Type: application/json");
            $id = $_GET["id"];
            $result = $_Users->getUser($id);
            $_Request->httpResponseCode(200);
            echo $result;

        } 
        
        if (!isset($_GET["page"]) && !isset($_GET["id"])) {
            echo $_Request->returnResponseJSON($_Request->error_400());
        }

    } 
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
        header("Content-Type: application/json");
        $postBody = file_get_contents("php://input");
        $result = $_Users->post($postBody);
        $_Request->httpResponseCode(200);
        echo $result;

    } 
    
    if ($_SERVER["REQUEST_METHOD"] == "PUT") {

        header("Content-Type: application/json");
        $putBody = file_get_contents("php://input");
        $result = $_Users->put($putBody);
        $_Request->httpResponseCode(200);
        echo $result;
        
    } 
    
    if ($_SERVER["REQUEST_METHOD"] == "DELETE") {

        header("Content-Type: application/json");
        $deleteBody = file_get_contents("php://input");
        $result = $_Users->delete($deleteBody);
        $_Request->httpResponseCode(200);
        echo $result;

    } 
    
    if(!isset($_SERVER["REQUEST_METHOD"])) {

        header("Content-Type: application/json");
        $_Request->httpResponseCode(405);
        echo $_Request->returnResponseJSON($_Request->error_405());
    }
?>