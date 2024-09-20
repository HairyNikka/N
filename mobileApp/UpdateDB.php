<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "androiddb";
$user_id = $_GET["user_id"];
$user_name = $_GET["user_name"];
$pass_word = $_GET["pass_word"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE usertb SET user_name='$user_name', passwd='$pass_word' WHERE user_id='$user_id'";

if ($conn->query($sql) === TRUE) {
  echo json_encode(array("Record updated successfully"));
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?>