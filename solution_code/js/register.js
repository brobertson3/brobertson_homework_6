$(document).ready(function () {
	/* TODO: 1. Check to make sure that no field is left blank. If blank, display
				empty field in a red border with text that says to enter in info
	         2. Make sure that both email fields match. If not, highlight both
	            email fields in red and show message that says they much match
	         3. If checked, then show the password */

	$('form').submit(validateForm);
	$('#show_password').change(togglePassword);

	function validateForm (event) {
		event.preventDefault();

		/* variables have to be updated locally in order to get the
		   new values stored in the field upon submit */
		var username = $("#username").val();
		var email_original = $('#email_address').val();
		var email_confirm = $('#email_confirm').val();
		var password = $('#password_orig').val();

		resetAllForms();

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

		/* Only show this prompt when both email fields are filled in */
		if (email_original != '' && email_confirm != '') {
			/* Now check to see if the email addresses match */
			confirmEmail(email_original, email_confirm);
		}
		
	}

	/* Resets the form back to normal before checking fields */
	function resetAllForms () {
		$('input#username, input#email_address, input#email_confirm, input#password_orig').removeClass('error');
		$('#error_username, #error_email, #error_email_confirm, #error_password').css("visibility", "hidden");
	}

	/* Switches the visibility of the password based on if the box is checked */
	function togglePassword () {
		// if checked then show the password (apparently .checked() doesn't work anymore?)
		if($(this).prop("checked")) {
			$('#password_orig').attr("type", "text");
		} else {
			$('#password_orig').attr("type", "password");
		}
	}

	/* Compare the two email fields to make sure that they match */
	function confirmEmail (original, confirm) {
		var emailConfirm = $('#email_confirm');
		var confirmPrompt = $('#confirm_prompt');
		/* If they don't match, then show a prompt alerting the user. This should
		   persist until the inputs match */
		   console.log(original + " <> " + confirm);

		/* If they don't match and the confirm_prompt isn't visible */
		if ((original != confirm) && (!confirmPrompt.length)) {
			emailConfirm.after('<p class="error_text" id ="confirm_prompt">Make sure email addresses match!!! Sorry, I didnt mean to yell.</p>');
			$('#confirm_prompt').css("visibility", "visible");
		} else if ((original == confirm)) {
			/* Now we can remove the prompt since they match */
			confirmPrompt.remove();
		}
	}
});