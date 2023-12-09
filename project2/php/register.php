<?php
// Database connection parameters
$host = "localhost";
$username = "root";
$password = "";
$database = "project1";

// User input from AJAX request
$username = $_POST['username'] ?? '';
$name = $_POST['name'] ?? '';
$age = $_POST['age'] ?? '';
$dob = $_POST['dob'] ?? '';
$contact = $_POST['contact'] ?? '';
$password1 = $_POST['password'] ?? '';

// Validate input (add more validation as needed)

// Create a MySQL connection using MySQLi
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute a statement to insert user data
$stmt = $conn->prepare("INSERT INTO users (username, name, age, dob, address, contactDetails) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssisss", $username, $name, $age, $dob, $password1, $contact);

// Execute the statement and check for success
if ($stmt->execute()) {
    // Registration successful
    echo json_encode(array("success" => true, "message" => "Registration successful"));
} else {
    // Registration failed
    echo json_encode(array("success" => false, "message" => "Registration failed"));
}

// Close the connection
$stmt->close();
$conn->close();
?>
