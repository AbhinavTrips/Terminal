var captionLength = 0;
var c_type = '';

$(document).ready(function() {
	setInterval ('c_animate',700);
	captionEl = $('#caption');
	//the element with id = 'execute' calls typing() function
	$('#execute').click(function(){
	typingEffect();
	});
});

// function to render typing effect

function typingEffect() {
	c_type = $('input#command').val();
	type();
}

// type function

function type() {
    captionEl.html(c_type.substr(0, captionLength++));
    if(captionLength < c_type.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        c_type = '';
    }
}

// function for cursor animation. This should be called at fixed interval continuously as soon as the page loads. So we'll cal it from jquery's '.ready' function 
function c_animate() {
	$('#cursor').animate({
		opacity: 0
		}, 'fast','swing').animate({
		opacity: 1
		}, 'fast','swing');
}
