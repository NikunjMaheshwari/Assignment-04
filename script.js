$(document).ready(function () {

    // Toggle password show/hide
    $("#togglePassword").click(function () {
        let passwordField = $("#password");
        let type = passwordField.attr("type");

        if (type === "password") {
            passwordField.attr("type", "text");
            $(this).text("Hide");
        } else {
            passwordField.attr("type", "password");
            $(this).text("Show");
        }
    });

    // Form validation
    $("#myForm").submit(function (e) {
        e.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let password = $("#password").val().trim();

        let messageBox = $("#message");
        messageBox.html("");

        // Validation
        if (name === "" || email === "" || phone === "" || password === "") {
            messageBox.html('<div id="error">All fields are required</div>');
            return;
        }

        // Email validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            messageBox.html('<div id="error">Invalid email format</div>');
            return;
        }

        // Phone validation
        if (!/^[0-9]{10}$/.test(phone)) {
            messageBox.html('<div id="error">Phone must be 10 digits</div>');
            return;
        }

        // Strong password
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!password.match(passwordPattern)) {
            messageBox.html('<div id="error">Password must contain uppercase, lowercase, number (min 6 chars)</div>');
            return;
        }

        // Success
        messageBox.html('<div id="success">Form submitted successfully!</div>');
    });

});