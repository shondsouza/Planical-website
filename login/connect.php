<?php

$host="localhost";
$user="root";
$pass="";
$db="auth";

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Failed to connect to DB: " . $conn->connect_error);
}
?>
