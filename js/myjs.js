jQuery(document).ready(function($) {
	var maxHeight = -1;
	$('div.paquetesTitulo').each(function() {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});
	$('div.paquetesTitulo').height(maxHeight);
	$(window).on('resize', function(){
    	maxHeight = -1;
		$('div.paquetesTitulo').each(function() {
			if ($(this).height() > maxHeight) {
				maxHeight = $(this).height();
			}
		});
		$('div.paquetesTitulo').height(maxHeight);
	});	
});
