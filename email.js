function sendmail(para) {
    
    var details = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_7um429c', 'template_twww6zg', details) 
        .then(function (res) {
            console.log("sucess");
        })
}
