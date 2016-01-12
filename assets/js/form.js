$(document).ready(function () {
    'use strict';
    // Contact Form
    $('#submit').click(function (e) {
        
        //Stop form submission & check the validation
        e.preventDefault();
        
        $.post("assets/php/form.php", $("#quote-form").serialize(), function (result) {
 //Check the result set from contact.php file.
            if (result == 'sent') {
 //If the email is sent successfully, remove these areas
                $('#submit-area').remove();
                $('#quote-form').remove();
 //Display the success message
                $('#success').fadeIn(500);
            } else {
 //Display the error message
                $('#fail').fadeIn(500);
 // Enable the submit button again
                $('#submit').removeAttr('disabled').attr('value', 'Retry');
            }
        });
    });
});