/* Business Logic */


/* UI Logic */
$(document).ready(function(){
	$("form.customer-details").submit(function (event) {
		event.preventDefault();
	})
	$(".movies .movies_content").hide();
	$(".age-select").click(function() {
		var age_group = $(this).attr("data-radio");
		$(".movies .movies_content").hide();
		$("." + age_group).show();
	});
});
