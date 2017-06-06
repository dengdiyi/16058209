// JavaScript Document

//Nivo Slider
 $(window).load(function() {
        $('#slider').nivoSlider({
		effect: 'random',
		pauseTime: 4000
	});
});


//Tooltip	
$(window).load(function() {
	$("#social li a span").tipTip();
});


//Filter
$(document).ready(function() {
	$('ul#portNav a').click(function() {
		$(this).css('outline','none');
		$('ul#portNav .active').removeClass('active');
		$(this).parent().addClass('active');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'all') {
			$('ul#portList li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			
			$('ul#portList li').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		
		return false;
	});
});


//Portfolio Images Hover Fadeout
$(window).load(function() {
	$("#portList li img").hover(
		function() {
			$(this).stop().animate({"opacity": "0.5"}, 220);
			},
		function() {
			$(this).stop().animate({"opacity": "1"}, 220);
	});
});


//Pretty Photo
$(document).ready(function() {
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
		});
});
	