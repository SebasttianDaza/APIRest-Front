<?php

    class Connection {

        private $host;
        private $user;
        private $password;
        private $database;
        private $connection;

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

        private function dataConnection() {
            //Get path parent directory
            $direction = dirname(__FILE__);
            $jsondata = file_get_contents($direction . "/" . "config.json");
            return json_decode($jsondata, true);
        }

        public function showError($e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

?>