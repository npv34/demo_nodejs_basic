$(document).ready(function() {
    $("#email").on("input", () => {
        const email = $("#email").val();
        console.log(email);
        const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
        console.log(isValidEmail)
        $("#email-error").text(isValidEmail ? "" : "Invalid email format");
    })
});