<?php

    require_once "./Class/Interface/interface.php";
    class Connection implements IConnection {

        private $host;
        private $user;
        private $password;
        private $database;
        private $connection;

        // Function to get information and do the connection
        function __construct() {
            $listdate = $this->dataConnection();

            foreach ($listdate as $key => $value) {
                $this->host = $value['host'];
                $this->user = $value['user'];
                $this->password = $value['password'];
                $this->database = $value['database'];
            }

            try {
                $this->connection = new PDO('mysql:host='.$this->host.';dbname='.$this->database, $this->user, $this->password);
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

        //Change data to UTF-8
        private function changeUTF8($array) {
            array_walk_recursive($array, function(&$item, $key) {
                if(!mb_detect_encoding($item, 'utf-8', true)) {
                    $item = utf8_encode($item);
                }
            });
            return $array;
        }

        //Function to get data from database
        public function getData($query) {
            $result = $this->connection->query($query);
            $result = $result->fetchAll(PDO::FETCH_ASSOC);
            $result = $this->changeUTF8($result);
            return $result;
            $this->connection = null;
        }

        //Function to insert, update or delete data in database
        public function anyQuery($sqlstr) {
            $query = $this->connection->query($sqlstr);
            
            //Devuelve el número de filas afectadas
            $result = $query->rowCount();
            return $result;
            $this->connection = null;
        }

        //Function to insert
        public function anyQueryID($sqlstr) {
            $query = $this->connection->query($sqlstr);
            if($query->rowCount() > 0) {
                return $this->connection->lastInsertId();
            } else {
                return 0;
            }
            $this->connection = null;
        }

        protected function encrypt($string) {
            return md5($string);
        }

    }

?>