function main() {
	$(".skillset").hide();
  $(".skillset").fadeIn(2500);
  $(".projects").hide();
  $(".projects-button").on('click', function() {
    $(".projects").toggle();
    $(this).toggleClass('active');
  });
}

$(document).ready(main);