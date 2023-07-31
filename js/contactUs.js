function sendEmail(){
    Email.send({
    SecureToken : "4a2de217-ba43-45a4-9153-462ea73ccd67",
    To : 'ahmad7508650@gmail.com,mudassirtahir14@gmail.com',
    From : "admad7508650@gmail.com",
    Subject : "Portfolio Contact US",
    Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Subject: " + document.getElementById("subject").value + "<br> Message: " + document.getElementById("message").value
}).then(
message => alert("Email Send")
);
}


