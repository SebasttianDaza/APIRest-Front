<?php 

    require_once "./Class/Routes/Request.class.php";
    require_once "./Class/Connection/connection.php";
    require_once "./Class/Interface/interface.php";

    class Sales extends Connection implements RequestClass {
        private $saleID;
        private $embarcacionesID = "";
        private $quantity = "";

        public function getList($page =1) 
        {
            $_Request = new Request();
            $start = 0;
            $count = 100;

            if($page > 1) {
                $start = ($count * ($page - 1)) + 1;
                $count = $count * $page;
            }

            $query = "SELECT * FROM sale LIMIT $start, $count";
            $result = parent::getData($query);

            if($result) {
                $_Request->httpResponseCode(200);
                return $this->returnResponseJSON($result);
            }

            if(!$result) {
                $_Request->httpResponseCode(500);
                return $this->returnResponseJSON($_Request->error_500());
            }
        }

        public function getSale($id = 0)
        {
            $_Request = new Request();
            $query = "SELECT * FROM sale WHERE saleID = $id";
            $result = parent::getData($query);

            if($result) {
                $_Request->httpResponseCode(200);
                return $this->returnResponseJSON($result);
            }

            if(!$result) {
                $_Request->httpResponseCode(500);
                return $this->returnResponseJSON($_Request->error_500());
            }    
        }

        public function post($json) {
            $data = json_decode($json, true);
            $_Request = new Request();

            if(!isset($data["token"])) {
                return $_Request->returnResponseJSON($_Request->error_401());
            }

            if(isset($data["token"])) {
                $this->token = $data["token"];

                $dataToken = $this->searchToken();

                if($dataToken) {
                    if(!isset($data["embarcacionesID"])
                        ||!isset($data["quantity"])) {

                        $_Request->httpResponseCode(400);
                        return $_Request->returnResponseJSON($_Request->error_400());
                    } else {
                        $result = $this->insertSale($data);

                        if($result) {
                            $_Request->httpResponseCode(200);
                            return $_Request->returnResponseJSON($_Request->success_200(array("id" => $result)));
                        }

                        if(!$result) {
                            $_Request->httpResponseCode(500);
                            return $_Request->returnResponseJSON($_Request->error_500());
                        }
                    }
                }

                if(!$dataToken) {
                    $_Request->httpResponseCode(500);
                    return $this->returnResponseJSON($_Request->error_500());
                }
            }
        }

        public function insertSale($data) {
            $this->embarcacionesID = $data["embarcacionesID"];
            $this->quantity = $data["quantity"];

            $query = "INSERT INTO sale (embarcacionesID, quantity) VALUES ('$this->embarcacionesID', '$this->quantity')";
            
            $result = parent::anyQueryID($query);

            if($result) {
                return $result;
            }

            if(!$result) {
                return false;
            }
        }

        public function put($json) {
            $data = json_decode($json, true);
            $_Request = new Request();

            if(!isset($data["saleID"])) {
                $_Request->httpResponseCode(400);
                return $_Request->returnResponseJSON($_Request->error_401());
            }

            if(isset($data["saleID"])) {
                $this->saleID = $data["saleID"];

                if(isset($data["embarcacionesID"])) {
                    $this->embarcacionesID = $data["embarcacionesID"];
                }

                if(isset($data["quantity"])) $this->quantity = $data["quantity"];

                $result = $this->updateSale();

                if($result) {
                    $_Request->httpResponseCode(200);
                    return $_Request->returnResponseJSON($_Request->success_200(array("userID" => $this->saleID, "count" => $result)));
                }

                if(!$result) {
                    $_Request->httpResponseCode(500);
                    return $_Request->returnResponseJSON($_Request->error_500());
                }

            }
        }

        public function updateSale() {
            $query = "UPDATE sale SET ";

            if($this->embarcacionesID !== "") {
                $query .= "embarcacionesID = '$this->embarcacionesID', ";
            }

            if($this->quantity !== "") {
                $query .= "quantity = '$this->quantity', ";
            }

            if(strlen($query) > strlen("UPDATE Embarcaciones SET ")) {
                $query = substr($query, 0, strlen($query) - 2);
            }

            $query .= "WHERE saleID = $this->saleID";

            $result = parent::anyQuery($query);

            if($result >= 1) {
                return $result;
            }

            if($result < 1) {
                return false;
            }
        }

        public function delete($id) {
            $data = json_decode($id, true);
            $_Request = new Request();

            if(!isset($data["saleID"])) {
                $_Request->httpResponseCode(400);
                return $_Request->returnResponseJSON($_Request->error_401());
            }

            if(isset($data["saleID"])) {
                $this->saleID = $data["saleID"];

                $result = $this->deleteSale();

                if($result) {
                    $_Request->httpResponseCode(200);
                    return $_Request->returnResponseJSON($_Request->success_200(array("userID" => $this->saleID, "count" => $result)));
                }

                if(!$result) {
                    $_Request->httpResponseCode(500);
                    return $_Request->returnResponseJSON($_Request->error_500());
                }
            }
        }

        public function deleteSale() {
            $query = "DELETE FROM sale WHERE saleID = $this->saleID";

            $result = parent::anyQuery($query);

            if($result >= 1) {
                return $result;
            }

            if($result < 1) {
                return false;
            }
        }

        public function returnResponseJSON($response) {
            return json_encode($response);
        }

        private function searchToken() {
            $query = "SELECT userID, token, status FROM users_token WHERE token = '$this->token' AND status = 'active'";
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
            $query = "UPDATE users_token SET date = '$date' WHERE id = $tokenId";

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