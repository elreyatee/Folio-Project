var $wrap = $('.wrap');

$('button').on('click', function(e) {
	event.preventDefault();
	console.log('clicked');
	$wrap.css({'-webkit-transform': 'rotateY(0.5turn)'});

});
