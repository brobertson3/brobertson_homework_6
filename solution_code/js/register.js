$(document).ready(function () {
	/* TODO: 1. Check to make sure that no field is left blank. If blank, display
				empty field in a red border with text that says to enter in info
	         2. Make sure that both email fields match. If not, highlight both
	            email fields in red and show message that says they much match
	         3. If checked, then show the password */

	$('form').submit(validateForm);

	function validateForm(event) {
		event.preventDefault();

		var username = $("#username").val();
		var email_original = $('#email_address').val();
		var email_confirm = $('#email_confirm').val();
		var password = $('#password_orig').val();

		/* use all if statements so that we can check if all are non-empty and show
		   all error messages at the same time */
		if (username == '' ) {
			$('input#username').addClass('error');
			$('#error_username').css("visibility", "visible"); //.after("<span class='error_text'>No input left behind! Please enter in a username.</span>");
		} if (email_original == '') {
			$('input#email_address').addClass('error'); //.after("<span class='error_text'>No input left behind! Please enter in an email address.</span>");
			$('#error_email').css("visibility", "visible");
		} if (email_confirm == '') {
			$('input#email_confirm').addClass('error'); //.after("<span class='error_text'>No input left behind! Please enter in an email address.</span>");
			$('#error_email_confirm').css("visibility", "visible");
		} if (password == '') {
			$('input#password_orig').addClass('error'); //.after("<span class='error_text'>No input left behind! Please enter in a password.</span>");
			$('#error_password').css("visibility", "visible");
		} 
	}
});