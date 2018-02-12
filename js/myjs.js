(function($) {

    $.fn.setMaxHeight = function() {
    	var maxh=-1;
        this.each( function() {
        	if($(this).height()>maxh){
        		maxh=$(this).height();
        	}
        });
        $(this).height(maxh);
    };

}(jQuery));

jQuery(document).ready(function($) {
	$('.title.fixh').setMaxHeight();
	$('.subtitle').setMaxHeight();
	$(window).on('resize', function(){
    	$('.title.fixh').setMaxHeight();
		$('.subtitle').setMaxHeight();
	});	
});

