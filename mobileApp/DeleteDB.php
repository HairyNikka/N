<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "androiddb";
$id1 = $_GET["user_id"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM usertb WHERE user_id='$id1'";

if ($conn->query($sql) === TRUE) {
  echo json_encode (array("Record updated successfully"));
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?>

