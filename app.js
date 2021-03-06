var $button = $('button');
var $wrap = $('#wrap');
var index = 0;

var loadPortfolio = function() {
	$.getJSON('json/portfolio.json', function(data){
		console.log('success', data.length, index); 
		if(index > data.length-1) {
			index = 0;
		}
		$('#wrap').addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
		$('#wrap a:first-child').attr('href', data[index].link);
		$('.side-a').css({"background":"url('" + data[index].image + "')"});
	});
};

loadPortfolio(index);

$button.on('click', function(e){
	console.log(index);
	e.preventDefault();
    index+=1;
    loadPortfolio();
});

$('a[href*=#]').click(function(e){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    e.preventDefault();
});



