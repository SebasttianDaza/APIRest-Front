<?php 

    class Request {
        private $response = [
            "status" => "ok",
            "result" => array()
        ];

        public function error_405() {
            $this->response["status"] = "error";
            $this->response["result"] = array(
                "code" => "405",
                "message" => "Method not allowed"
            );
            return $this->response;
        }

        public function error_200($string = "Data incorrect") {
            $this->response["status"] = "error";
            $this->response["result"] = array(
                "code" => "200",
                "message" => $string
            );
            return $this->response;
        }

        public function error_400() {
            $this->response["status"] = "error";
            $this->response["result"] = array(
                "code" => "400",
                "message" => "Bad request"
            );
            return $this->response;
        }

        public function error_404() {
            $this->response["status"] = "error";
            $this->response["result"] = array(
                "code" => "404",
                "message" => "Not found"
            );
            return $this->response;
        }
    }

?>