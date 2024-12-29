<?php
session_start();
if (empty($_SESSION['count'])) {
    $_SESSION['count'] = 1;
} else {
    $_SESSION['count']++;
}

$app = new App;

class App {
    public $out = array('status' => true, 'error' => '', 'data' => [], 'html' => '', 'session' => '');
    private $dbName = NULL;
    private $conn = NULL;
    private $queryParams;

    function __construct () {
        require_once('connect.php');
        $this->dbName = $dbName;
        $this->out['SID'] = session_id();
        if ($connectedToDb) {
            $this->conn = $conn;

            // create $queryData associative Array
            $queryArray = explode('&', $_SERVER['QUERY_STRING']);
            $queryData = array();
            for ($i = 0; $i < count($queryArray); $i++) {
                $queryPair = explode('=', $queryArray[$i]);
                $queryData[$queryPair[0]] = $queryPair[1];
            }
            $this->queryParams = $queryData;
        } else {
            $this->out['status'] = false;
            $this->out['error'] = 'Error connecting to database';
        }

        $this->doProcess();
    }

    function __destruct () {
        mysqli_close($this->conn);
    }

    private function doProcess () {
        $_SESSION['opID'] = $this->queryParams['op'];
        switch ($this->queryParams['op']) {
            case '1':
                $this->getData();
                break;
        }
        echo json_encode($this->out['data']);
    }

    private function getData() {
        $sql = "SELECT * FROM extjs.extjsinactiondata";
        $result = mysqli_query($this->conn, $sql);
        $noOfRows = mysqli_num_rows($result);
        if ($result) {
            for ($i = 0; $i < $noOfRows; $i++) {
                $dbRow = mysqli_fetch_row($result);
                $this->out['data'][$i] = $dbRow;
            }
        }
    }
}
?>