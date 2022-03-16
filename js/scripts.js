/* Business Logic */
function validate() {
	var age = document.getElementsByClassName("age-select");
	var movie = document.getElementsByClassName("movies_content");
	var tickets = document.getElementById("numb");
	var time = document.getElementById("time-select");

	if (age.value == "" || movie.value == "" || tickets.value == "" || time.value == "") {
		alert("Please fill in all fields");
		return false;
	}else {
		document.location.href="checkout.html"
	}
}

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
