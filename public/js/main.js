// Update password length label
$("#passwordLength").on("input", function () {
    var passwordLength = $(this).val();
    $("#passwordLengthText").text(passwordLength);
  });

  $('#copyButton').on('click', function () {
    const passwordField = document.getElementById('password');

    // Select the password text
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the password text
    passwordField.blur();

    // Optionally, provide feedback to the user that the password has been copied
    
    $("#copyButton").text("Copied!");
});

           

