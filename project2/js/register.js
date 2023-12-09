$(document).ready(function () {
  $('#registerForm').submit(function (e) {
    e.preventDefault();

    // Gather form data
    var formData = {
      name: $('#name').val(),
      username: $('#username').val(),
      age: $('#age').val(),
      dob: $('#dob').val(),
      password: $('#password').val(),
      contact: $('#contact').val()
      // Add other form fields as needed
    };

    // Make an AJAX request to register.php
    $.ajax({
      type: 'POST',
      url: 'http://localhost/project1/php/register.php',
      data: formData,
      dataType: 'json', // Specify JSON dataType
      success: function (jsonResponse) {
        // Log the raw response
        console.log('Parsed JSON response:', jsonResponse);

        // Check if registration was successful
        if (jsonResponse.success) {
          // Display success message on the webpage
          console.log("Registration successful");
          $('#registerForm').html('<p>' + jsonResponse.message + '</p>');

          // Add a link/button to go to the home page
          $('#registerForm').append('<a href="index.html" class="btn btn-primary">Go to Home Page</a>');
        } else {
          // Display error message on the webpage
          $('#registerForm').html('<p>Error: ' + jsonResponse.message + '</p>');
        }
      },
      error: function (error) {
        // Handle AJAX errors
        console.error('Error:', error);
      }
    });
  });
});
