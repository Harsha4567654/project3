<?php
// Database connection parameters
$host = "localhost";
$username = "root";
$password = "";
$database = "project1";

// User input from AJAX request
$loginUsername = $_POST['username'];
$loginPassword = $_POST['password'];

// Validate input (add more validation as needed)

// Create a MySQL connection using MySQLi
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute a statement to check user credentials
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND address = ?");
$stmt->bind_param("ss", $loginUsername, $loginPassword);
$stmt->execute();
$result = $stmt->get_result();

// Initialize response array
$response = [];

if ($result->num_rows > 0) {


    // Store the username in the session
    $_SESSION['username'] = $loginUsername;
    
    // Login successful
    $response['success'] = true;
    $response['message'] = "Login successful";
    // Add logic to set session or redirect to profile page
} else {
    // Login failed
    $response['success'] = false;
    $response['message'] = "Login failed. Invalid username or password.";
}

// Close the connection
$stmt->close();
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
