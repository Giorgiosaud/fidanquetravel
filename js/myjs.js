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

    $('input.date-depart').dateRangePicker({
        separator : ' al ',
        format: 'dddd DD MMM [del] YYYY',
        getValue: function()
        {
            if ($('input.date-depart').val() && $('input.date-return').val() )
                return $('input.date-depart').val() + ' a ' + $('input.date-return').val();
            else
                return '';
        },
        setValue: function(s,s1,s2)
        {
            $('input.date-depart').val(s1);
            $('input.date-return').val(s2);
        }
    });
    $('input.date-return').dateRangePicker({
        separator : ' al ',
        format: 'dddd DD MMM [del] YYYY',
        getValue: function()
        {
            if ($('input.date-depart').val() && $('input.date-return').val() )
                return $('input.date-depart').val() + ' a ' + $('input.date-return').val();
            else
                return '';
        },
        setValue: function(s,s1,s2)
        {
            $('input.date-depart').val(s1);
            $('input.date-return').val(s2);
        }
    });
});

