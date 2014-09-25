$(document).ready(function(){
/* ========================================== */
// You may modify the messages that the user receives below

	var invalidEmailError	= "You have entered an invalid e-mail address.";
	var duplicateEmailError	= "E-mail address already subscribed.";
	var serverError			= "An error occurred. Please try again.";
	var successMessage		= "Thanks for signing up!";
	
// Done editing - no need to edit anything below this line unless you know what you're doing.
/* ========================================== */

	$(".userMessage").hide('fade');
	$(".ajaxLoadImg").hide('fade');
	
    $('form#notify').bind('submit', function(e){
		$(".userMessage").hide('fade');
		$(".ajaxLoadImg").show('fade');
		var email  = $('input#email').val();
		var name  = $('input#name').val();
        e.preventDefault();
		
		$.ajax({
			type: 'POST',
			url:"subscribe.php?email="+email+"&name="+name,
			data: '',
			success: function(submissionResult){
				$(".userMessage").fadeIn("slow");
				$(".userMessage").animate({opacity: 1.0}, 2000);
				$(".userMessage").fadeOut(600);
				
				if (submissionResult == 1) {
					$('#notify').trigger("reset");
					$(".userMessage").html("<div class='alert alert-success'>" + successMessage + "</div>");
				}
				if (submissionResult == 2) {
					$(".userMessage").html("<div class='alert alert-error'>" + invalidEmailError + "</div>");
				}
				if (submissionResult == 3) {
					$(".userMessage").html("<div class='alert alert-error'>" + duplicateEmailError + "</div>");
				}
				$(".ajaxLoadImg").hide('fade');
			},
			error: function(){
				$(".userMessage").html("<p class='error'>" + serverError + "</p>");
				$(".ajaxLoadImg").hide('fade');
			}		
		});
	});
			
});