<?php

    class Connection {

        private $host;
        private $user;
        private $password;
        private $database;
        private $connection;

        // Function to get information and do the connection
        function __construct() {
            $listdate = $this->dataConnection();
            foreach ($listdate as $key => $value) {
                $this->$host = $value['host'];
                $this->$user = $value['user'];
                $this->$password = $value['password'];
                $this->$database = $value['database'];
            }

            try {
                $this->connection = new PDO("mysql:host=$this->host;
                    dbname=$this->database", $this->user, $this->password
                );
            } catch (PDOException $e) {
                $this->showError($e);
            }

        }

        //Function to get data about connection
        private function dataConnection() {
            $direction = dirname(__FILE__);
            $jsondata = file_get_contents($direction . "/" . "config.json");
            return json_decode($jsondata, true);
        }

        //Function to show error, if it's the case
        public function showError($e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

?>