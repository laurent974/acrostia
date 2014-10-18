$(document).ready(function() {
	 /* ========================================================== */
	 /* = carousel initialisation                                = */
	 /* ========================================================== */
	$("#carousel").owlCarousel({
		singleItem: true,
		autoPlay: true,
		stopOnHover : true,
		navigation : true, // Show next and prev buttons
		navigationText : false,
		slideSpeed : 300,
		paginationSpeed : 400
	});
});