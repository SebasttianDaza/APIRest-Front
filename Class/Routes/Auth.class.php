<?php

    include_once "./Class/Connection/connection.php";
    include_once "./Class/Routes/Request.class.php";

    class Auth extends Connection {

        public function login($json) {
            $_Request = new Request();
            $data = json_decode($json, true);

            if(!isset($data["username"]) || !isset($data["password"])) {
                return $_Request->error_400();
            } else {
                $username = $data["username"];
                $password = $data["password"];
                //Encrypt password
                $password = parent::encrypt($password);

                $data = $this->getDataUsers($username);
                
                if($data) {
                    $datauser = $data[0];
                    
                    if($password == parent::encrypt($datauser["password"])) {
                        if($datauser["status"] === "active") {
                            $token = $this->createToken($datauser["userID"]);
                            if($token) {
                                return $_Request->success_200(array(
                                    "id" => $datauser["userID"],
                                    "status" => $datauser["status"],
                                    "token" => $token
                                ));
                            } else {
                                return $_Request->error_500();
                            }                            
                        } else {
                            return $_Request->error_200("User is not active");
                        }
                    } else {
                        return $_Request->error_200("Password incorrect");
                    }
                } else  {
                    return $_Request->error_200("User not found");
                }
            }
        }

        //Get data users for authentication
        private function getDataUsers($username) {
            $query = "SELECT userID, password, status FROM users WHERE username = '$username'";
            $result = parent::getData($query);
            
            if(isset($result[0]["userID"])) {
                return $result;
            } else {
                return false;
            }
        }

        private function createToken($userID) {
            $val = true;
            $token = bin2hex(openssl_random_pseudo_bytes(16, $val));
            $date = date("Y-m-d H:i:s");
            $state = "active";
            $query = "INSERT INTO users_token (userID, token, status, date) VALUES ($userID, '$token', '$state', '$date')";
            $verificate = parent::anyQuery($query);

            if($verificate) {
                return $token;
            } else {
                return false;
            }
        }
    }

?>