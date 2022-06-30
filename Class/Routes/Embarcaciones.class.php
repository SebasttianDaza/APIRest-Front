<?php 
    require_once "./Class/Routes/Request.class.php";
    require_once "./Class/Connection/connection.php";

    class Embarcaciones extends Connection {

        private $id;
        private $name = "";
        private $country = "";
        private $continent = "";
        private $coordinates = "";

        public function getListEmbarcaciones($page = 1) {
            $start = 0;
            $count = 100;

            if($page > 1) {
                $start = ($count * ($page - 1)) + 1;
                $count = $count * $page;
            }

            $query = "SELECT * FROM Embarcaciones LIMIT $start, $count";
            $result = parent::getData($query);

            return json_encode($result);
        }

        public function getEmbarcacion($id) {
            $query = "SELECT * FROM Embarcaciones WHERE id = $id";
            $result = parent::getData($query);

            return json_encode($result);
        }

        public function createEmbarcacion($json) {
            $data = json_decode($json, true);
            $_Request = new Request();

            if(!isset($data["name"])
                ||!isset($data["country"])
                || !isset($data["continent"])
                || !isset($data["coordinates"])) {
                return json_encode($_Request->error_400());
            } else  {
                
                $result = $this->insertEmbarcacion($data);

                if($result) {
                    return json_encode($_Request->success_200(array("id" => $result)));
                } else {
                    return json_encode($_Request->error_500());
                }
            }
        }

        private function insertEmbarcacion($data) {
            $name = $data["name"];
            $country = $data["country"];
            $continent = $data["continent"];
            $coordinates = $data["coordinates"];

            $query = "INSERT INTO Embarcaciones (id, name, country, continent, coordinates) VALUES (NULL,'$name', '$country', '$continent', '$coordinates')";

            return parent::anyQueryID($query);
        }

        public function updateEmbarcacion($json) {
            $data = json_decode($json, true);
            $_Request = new Request();

            if(!isset($data["id"])) {
                return json_encode($_Request->error_400());
            } else  {
                $this->id = $data["id"];
                if(isset($data["name"])) { $this->name = $data["name"];}
                if(isset($data["country"])) { 
                    $this->country = $data["country"];
                }
                if(isset($data["continent"])) { 
                    $this->continent = $data["continent"];
                }
                if(isset($data["coordinates"])) { 
                    $this->coordinates = $data["coordinates"];
                }

                $result = $this->updateEmbarcacionData();

                if($result) {
                    return json_encode($_Request->success_200(array("id" => $this->id, "count" => $result)));
                } else {
                    http_response_code(500);
                    return json_encode($_Request->error_500());
                }
            }
        }

        private function updateEmbarcacionData() {
            //Si el valor es un string vacio, no se actualiza
            $query = "UPDATE Embarcaciones SET ";

            if($this->name != "") {
                $query .= "name = '$this->name', ";
            }
            if($this->country != "") {
                $query .= "country = '$this->country', ";
            }
            if($this->continent != "") {
                $query .= "continent = '$this->continent', ";
            }
            if($this->coordinates != "") {
                $query .= "coordinates = '$this->coordinates' ";
            }

            //Si solo es uno, quita la ultima coma
            if(strlen($query) > strlen("UPDATE Embarcaciones SET ")) {
                $query = substr($query, 0, strlen($query) - 2);
            }

            $query .= " WHERE id = $this->id";

            $response = parent::anyQuery($query);

            if($response >= 1) {
                return $response;
            }
            
            if($response < 1) {
                return false;
            }
        }
    }
?>