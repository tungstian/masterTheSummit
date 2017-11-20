// CRAZY AMOUNT OF THANKS TO PETER CAMERON FOR HELPING ME WITH THIS:


	console.log(`Thanks, Peter!`)
	//set the variable for the name
	var personName;
	  
		//look for a click on the submit button
		$(".submit").on("click", function(e) {
		//stop it submitting the form
		e.preventDefault();
		//set the personName variable
		personName = $('.firstName').val();

		//change the text of the p tag 
		if($(".firstName").val()) {
		  $(".popup p").text(`Thanks, ${personName}! We'll be in touch soon.`);
			} else {
			  $(".popup p").text(`Try filling out the form 🐸`);
			}

		//fade the popup in
		$(".popup").fadeIn();
		//clear the inputs
		$("input").val("");
	});
	    
	//look for a click on the close button
	$(".close").on("click", function(e) {
		//stop the default behaviour
		e.preventDefault();
		//fade out the popup and then reset the p tag text to an empty string
		$(".popup").fadeOut("fast", function(){
			$(".popup p").text("");
		});
	});