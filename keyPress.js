
var arr = new Array(500);
arr[0] = 0;
var tailIndex = 1;
var currentPointer = tailIndex;
document.onkeydown = keyPressed;

function keyPressed(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
    	// up arrow
    	if(currentPointer > 1){
    	currentPointer--;
    	document.getElementById("user-caption").value = arr[currentPointer];
        }
        }
    
    else if (e.keyCode == '40') {
    	//down arrow
    	if(currentPointer<tailIndex-1){
    	currentPointer++;
    	document.getElementById("user-caption").value = arr[currentPointer];
    	
    	}
    }

    else if (e.keyCode == '13') {
    	// enter key
    	arr[tailIndex] = $('input#user-caption').val();
    	tailIndex++;
    	currentPointer = tailIndex;
    	arr[0]++;
    }
}

