/*
 * jquery.tabbie 1.0.0
 * http://foobar.me/
 *
 * Copyright (c) 2010 Joey Darko
 *
 * Date: 2010-12-3
 *
 */

(function($){ 
     $.fn.tabbie = function(customOptions) {
			var options = { event: 'mouseover' };
			$.extend(options, customOptions);
			function getRel(el){
				var rel = $(el).find('a').attr('rel');
				if(rel)
					return rel;
				else
					return false;
			}
		 	function setActive(el){
				$(el).addClass('active');
				if(getRel(el))
					$("#"+getRel(el)).show();
				else
					return false;
				$(el).siblings('li').each(function(){
					$(this).removeClass('active');
					$("#"+getRel(this)).hide();
				});
			}
			return this.each(function() {
				var self = this;
				$(self).find('a').live(options.event, function(event) {
					setActive($(this).parent());
				});
				$(this).find('li').each(function(){
					if($(this).hasClass('active'))
						$("#"+getRel(this)).show();
					else
						$("#"+getRel(this)).hide();
				});
            }); 
        }; 
})(jQuery);