<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "androiddb";
$user_id = $_POST['user_id'];
$user_name = $_POST['user_name'];
$pass_word = $_POST['password'];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usertb (id, user_id, user_name, passwd)
VALUES (null,$user_id ,'$user_name','$pass_word')";

if ($conn->query($sql) === TRUE) {
  echo json_encode(array("New record created successfully"));
} else {
  echo json_encode(array("Error: " . $sql . "<br>" . $conn->error));
}

$conn->close();

?>
