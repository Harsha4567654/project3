$(document).ready(function () {
  // Make an AJAX request to profile.php
  $.ajax({
      type: 'GET',
      url: 'http://localhost/project1/php/profile.php',
      success: function (response) {
          // Handle the response from the server
          console.log(response);

          // Parse the JSON response
          var jsonResponse = JSON.parse(response);

          // Check if the request was successful
          if (jsonResponse.success) {
              // Display user details on the webpage
              displayUserDetails(jsonResponse.userDetails);
          } else {
              // Display error message on the webpage
              console.error('Error:', jsonResponse.message);
          }
      },
      error: function (error) {
          // Handle AJAX errors
          console.error('Error:', error);
      }
  });
});

function displayUserDetails(userDetails) {
  // Assuming you have an element with the id "profileDetails"
  var profileDetailsElement = $('#profileDetails');

  // Build HTML to display user details
  var userDetailsHTML = `
      <p>Username: ${userDetails.username}</p>
      <p>Name: ${userDetails.name}</p>
      <p>Age: ${userDetails.age}</p>
      <p>Date of Birth: ${userDetails.dob}</p>
      <p>Contact: ${userDetails.contact}</p>
  `;

  // Append the HTML to the profileDetails element
  profileDetailsElement.html(userDetailsHTML);
}
