<?php 
    require_once "./Class/Routes/Request.class.php";
    require_once "./Class/Connection/connection.php";
    require_once "./Class/Interface/interface.php";

    class Embarcaciones extends Connection implements ReturnJson {

        private $id;
        private $name = "";
        private $country = "";
        private $continent = "";
        private $coordinates = "";
        private $token = "";

        public function getListEmbarcaciones($page = 1) {
            
            $start = 0;
            $count = 100;

            if($page > 1) {
                $start = ($count * ($page - 1)) + 1;
                $count = $count * $page;
            }

            $query = "SELECT * FROM Embarcaciones LIMIT $start, $count";
            $result = parent::getData($query);

            return $this->returnResponseJSON($result);
        }

        public function getEmbarcacion($id) {
            $query = "SELECT * FROM Embarcaciones WHERE id = $id";
            $result = parent::getData($query);

            return $this->returnResponseJSON($result);
        }

        public function createEmbarcacion($json) {
            $data = json_decode($json, true);
            $_Request = new Request();

            if(!isset($data["token"])) {
                return $_Request->returnResponseJSON($_Request->error_401());
            }

            if(isset($data["token"])) {
                $this->token = $data["token"];
                $dataToken = $this->searchToken();
                $tokenId;

                if($dataToken) {
                    foreach($dataToken as $key => $value) {
                        $tokenId = $value["tokenID"];
                    }

                    $this->updateToken($tokenId);

                    if(!isset($data["name"])
                        ||!isset($data["country"])
                        || !isset($data["continent"])
                        || !isset($data["coordinates"])) {
                        $_Request->httpResponseCode(400);
                        return $this->returnResponseJSON($_Request->error_400());
                    } else{
                        
                        $result = $this->insertEmbarcacion($data);
        
                        if($result) {
                            $_Request->httpResponseCode(200);
                            return $this->returnResponseJSON($_Request->success_200(array("id" => $result)));
                        }
        
                        if(!$result) {
                            $_Request->httpResponseCode(500);
                            return $this->returnResponseJSON($_Request->error_500());
                        }
                    }

                }

                if(!$dataToken) {
                    return $_Request->returnResponseJSON($_Request->error_401("Unathorized, token not found or expired"));
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
                $_Request->httpResponseCode(400);
                return $this->returnResponseJSON($_Request->error_400());
            } 
            
            if(isset($data["id"]))  {
                $this->id = $data["id"];
                if(isset($data["name"])) $this->name = $data["name"];

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
                    $_Request->httpResponseCode(200);
                    return $this->returnResponseJSON($_Request->success_200(array("id" => $this->id, "count" => $result)));
                } 
                
                if(!$result) {
                    $_Request->httpResponseCode(500);
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

        public function deleteEmbarcacion($id) {
            $data = json_decode($id, true);
            $_Request = new Request();

            if(!isset($data["id"])) {
                $_Request->httpResponseCode(400);
                return $this->returnResponseJSON($_Request->error_400());
            }

            if(isset($data["id"])) {
                $this->id = $data["id"];

                $result = $this->delete();

                if($result) {
                    $_Request->httpResponseCode(200);
                    return $this->returnResponseJSON($_Request->success_200(array("id" => $this->id, "count" => $result)));
                } 
                
                if(!$result) {
                    $_Request->httpResponseCode(500);
                    return $this->returnResponseJSON($_Request->error_500());
                }
            }
        }

        private function delete() {
            $query = "DELETE FROM Embarcaciones WHERE id = $this->id";

            $response = parent::anyQuery($query);

            if($response >= 1) {
                return $response;
            }
            if($response < 1) {
                return false;
            }
        }

        public function returnResponseJSON($response) {
            return json_encode($response);
        }

        private function searchToken() {
            $query = "SELECT tokenID, userID, token, status FROM users_token WHERE token = '$this->token' AND status = 'active'";
            $response = parent::getData($query);

            if($response) {
                return $response;
            }

            if(!$response) {
                return false;
            }
        }

        private function updateToken($tokenId) {
            $date = date("Y-m-d H:i:s");
            $query = "UPDATE users_token SET date = '$date' WHERE tokenID = $tokenId";

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