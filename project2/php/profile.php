<?php
// Database connection parameters
$host = "localhost";
$username = "root";
$password = "";
$database = "project1";

// Create a MySQL connection using MySQLi
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Start session
session_start();

// Assume you have the user's username stored in a session variable
// This could be set during the login process
$loggedInUsername = $_SESSION['username'] ?? '';

// Check if the session username is set
if (!$loggedInUsername) {
    die("No username found. Please log in again.");
}

// Query to retrieve user details based on the username
$sql = "SELECT * FROM users WHERE username = '$loggedInUsername'";
$result = $conn->query($sql);

// Check for SQL errors
if ($result === false) {
    die("Error executing query: " . $conn->error);
}

// Check if user details were found
if ($result->num_rows > 0) {
    $userDetails = $result->fetch_assoc();

    // Return user details as JSON
    echo json_encode(array("success" => true, "userDetails" => $userDetails));
} else {
    // Return an error message
    echo json_encode(array("success" => false, "message" => "User details not found"));
}

// Close the connection
$conn->close();


// ... (existing code)

header('Content-Type: application/json');
echo json_encode(array("success" => true, "userDetails" => $userDetails));


?>
