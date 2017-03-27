// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete To-do
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Enter new todo in input box
$("input[type='text']").keypress(function(event) {
	// if Enter key is pressed
	if (event.which === 13) {
		// grabbing new todo from input
		var todoText = $(this).val();
		// clearing input field
		$(this).val("");

		// create a new li and add to ul
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i> </span>" + todoText + "</li>");
	}
});

// Toggle input box
$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});