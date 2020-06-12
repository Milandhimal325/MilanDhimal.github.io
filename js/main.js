
  fetch("https://api.github.com/users/Milandhimal325")
  .then(response=>response.json())
  .then(function(data){
    console.log(data)
    document.getElementById('profileimage').src=data['avatar_url']
    document.getElementById('maincontainer').hidden = false
    document.getElementById('loading').hidden  = true
    document.getElementById('My Projects').textContent=data['public_repos']
    
  })
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/Milandhimal325/repos', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.id + '</td>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td>' + status.html_url + '</td>';
    statusHTML += '</tr>';
  });
  $('tbody').html(statusHTML);
}

// Send request
request.send();