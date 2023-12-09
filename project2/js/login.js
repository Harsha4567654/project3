$(document).ready(function () {
  $('#loginForm').submit(function (e) {
    e.preventDefault();

    // Gather form data
    var formData = {
      username: $('#loginUsername').val(),
      password: $('#loginPassword').val()
    };

    // Make an AJAX request to login.php
    $.ajax({
      type: 'POST',
      url: 'http://localhost/project1/php/login.php',
      data: formData,
      dataType: 'json', // Specify JSON dataType
      success: function (jsonResponse) {
        // Log the raw response
        console.log('Parsed JSON response:', jsonResponse);

        // Check if login was successful
        if (jsonResponse.success) {
          // Display success message on the webpage
          console.log("Login successful");

          // Render buttons for redirecting
          $('#loginForm').html('<button id="goHome" class="btn btn-primary">Go to Home Page</button>' +
                              '<button id="viewProfile" class="btn btn-success">View Profile</button>');

          // Handle button click events
          $('#goHome').click(function() {
            window.location.href = 'http://localhost/project1/index.html';
          });

          $('#viewProfile').click(function() {
            window.location.href = 'http://localhost/project1/profile.html';
          });
        } else {
          // Display error message on the webpage
          $('#loginForm').html('<p>Error: ' + jsonResponse.message + '</p>');
        }
      },
      error: function (error) {
        // Handle AJAX errors
        console.error('Error:', error);
      }
    });
  });
});
