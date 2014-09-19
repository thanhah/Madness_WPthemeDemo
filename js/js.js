$(window).load(function(){
	checkbox();
	resize();
	$(window).resize(function(){
		resize();
	})
	$('#option').find('input').change(function(){
		checkbox();
	})
	$('.button a:first-child').find('p').hover(function(){
		var parent = $(this).parent().parent().parent();
		parent.find('.desc').removeClass('hidden');
		parent.find('.desc').toggleClass('fadeIn');
	},function(){
		var parent = $(this).parent().parent().parent();
		parent.find('.desc').toggleClass('fadeIn');
		parent.find('.desc').addClass('hidden');

	})
	$('#filter').click(function(){
		$('#option').toggleClass('collapse');
	})
	function checkbox(){
		$('#option').find('input').each(function(){
		var img = $(this).next('label').find('img');
		var src = img.attr('src');
		if($(this).is(':checked')){	
			var newSrc = src.replace('checkbox','checked');
			img.attr('src',newSrc);
		}else{
			var newSrc = src.replace('checked','checkbox');
			img.attr('src',newSrc);
		}
		})	
	}
	function resize(){
		if(document.body.clientWidth < 400){
			$('.product').css('height','+=30px');
		}else{
			$('.product').css('height','370px');
		}
		if(findBootstrapEnvironment() == 'xs'){
			$('#option').addClass('collapse');
			$('#filter').removeClass('hidden');
			$('.navbar-collapse li a').css('paddingLeft','30px');
			$('#option').css({height:'auto',overflow: 'auto'});
			$('#option li').addClass('col-xs-14');
			$('#option ul:last-child').removeClass('pull-right');
		}else{
			$('.navbar-collapse li a').css('paddingLeft','0px');
			$('#option li').removeClass('col-xs-14');
			$('#option ul:last-child').addClass('pull-right');
			$('#filter').addClass('hidden');
			$('#option').removeClass('collapse');
		}
	}
	function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env
        }
    };
}
})
