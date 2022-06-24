<?php 
    include_once "./Class/Connection/connection.php";

    $connection = new Connection();

    $query = "INSERT INTO Embarcaciones (id, name, country, continent, coordinates) VALUES (NULL, 'Barco1', 'España', 'Europa', '1,1')";
    
    print_r($connection->anyQueryID($query));
?>