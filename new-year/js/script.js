// Query Parameters
var queryParams = {};
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	queryParams[key] = decodeURI(value);
});

// UserName
var name = 'Guest';
if(queryParams.hasOwnProperty('name')){
	name = queryParams.name.substring(0,1).toUpperCase() + queryParams.name.substring(1);
	$('li:first').text('Hey '+name+'!');
	$('[name=name]').val(name);
}else{
	$('li:first').text('Hi Friend!');
}
localStorage.setItem('UserName',name);

// footerName
var footerName =  'Rajasekar D';
if(queryParams.hasOwnProperty('from')){
	footerName = queryParams.from.substring(0,1).toUpperCase() + queryParams.from.substring(1);
	$('footer span').text(footerName);
}else{
	$('footer span').text(footerName);
}

//Initialize Fireworks
$('.fireworks').fireworks();

//Initialize Text Animation
$('.tlt').textillate();
$('footer span').textillate();

// Audio Player
var $audio = $('#audio')[0];
$audio.addEventListener('play',function(){
	$('.fa-volume-off').removeClass('fa-volume-off').addClass('fa-volume-up');
});
$audio.addEventListener('pause',function(){
	$('.fa-volume-up').removeClass('fa-volume-up').addClass('fa-volume-off');
});
$('header button').eq(0).click(function(){
	if($(this).children().hasClass('fa-volume-up')){
		$audio.pause();
	}else{
		$audio.play();
	}
});
if ($audio.duration > 0 && !$audio.paused) {
	$('.fa-volume-off').removeClass('fa-volume-off').addClass('fa-volume-up');
}

// Share Logic
var currentURL = window.location.origin + window.location.pathname;
$('form').submit(function(e){
	var shareURL = currentURL+'?'+$(this).serialize();
	$('#shareURL').text(shareURL);
	$('.social-icons li').each(function(){
		$(this).children().attr('href',$(this).children().data('href').replace('{{URL}}',encodeURIComponent(shareURL)));
	});
	$('#shareInputModal').modal('hide');
	$('#shareLinkModal').modal('show');
	e.preventDefault();
});

//Copy Share Link
var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e) {
	e.clearSelection();
	alert('Link copied to clipboard!');
});
