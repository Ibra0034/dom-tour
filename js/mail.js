//* <script src="https://smtpjs.com/v3/smtp.js"></script>
//* <input type="button" value="Send Email" onclick="sendEmail()">
//* <script> *//

function sendEmail() {
    Email.send({
        isSecureContext: "<your generated text>",
        To: 'recipient@example.com',
        From: "sender@example.com",
        Subject: "Test Email",
        Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert("mail sent successfully")
    );
}

console.log();

//* </script>


