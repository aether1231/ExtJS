<?php
// $servername = "sql206.infinityfree.com";
// $username = "if0_38000344";
// $password = "zGICYFFUrNLA8Mg";
// $dbName = 'if0_38000344_extjs';
$connectedToDb = false;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbName);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . mysqli_connect_error());
}
$connectedToDb = true;
?>