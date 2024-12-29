<?php
$servername = "localhost";
$username = "root";
$password = "password";
$dbName = 'extjs';
$connectedToDb = false;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbName);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . mysqli_connect_error());
}
$connectedToDb = true;
?>