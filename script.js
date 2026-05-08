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

        // ---------------------------
        // REQUIRED FIELD VALIDATION
        // ---------------------------
        if (!name || !email || !phone || !password) {
            messageBox.html('<div id="error">All fields are required</div>');
            return;
        }

        // ---------------------------
        // NAME VALIDATION
        // ---------------------------
        if (name.length < 3) {
            messageBox.html('<div id="error">Name must be at least 3 characters</div>');
            return;
        }

        if (!/^[A-Za-z ]+$/.test(name)) {
            messageBox.html('<div id="error">Name should contain only letters</div>');
            return;
        }

        // ---------------------------
        // EMAIL VALIDATION
        // ---------------------------
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            messageBox.html('<div id="error">Invalid email format</div>');
            return;
        }

        // ---------------------------
        // PHONE VALIDATION
        // ---------------------------
        if (!/^[0-9]{10}$/.test(phone)) {
            messageBox.html('<div id="error">Phone must be exactly 10 digits</div>');
            return;
        }

        // ---------------------------
        // PASSWORD VALIDATION
        // ---------------------------
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordPattern.test(password)) {
            messageBox.html('<div id="error">Password must have uppercase, lowercase, number (min 6 chars)</div>');
            return;
        }

        // ---------------------------
        // SUCCESS
        // ---------------------------
        messageBox.html('<div id="success">Form submitted successfully!</div>');

        // clear form after success
        $("#myForm")[0].reset();
    });

});