var captionLength = 0;
var caption = '';
var out ='';
var fileContents = '';
var pwd = 'abhinav@DAIICT:~ ';
var cmd = '';

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    cleanEl = $('#clean');
    commandEl = $('#command');
 
    $('#test-typing').click(function(){
        testTypingEffect();
    });
    
    $('#user-caption').keypress(function(e){
      if(e.keyCode==13){
      		cmd = $('input#user-caption').val();
      		exec1(cmd);
      }
    });

});


function testTypingEffect() {
//	caption = $('input#user-caption').val();
    caption =  document.getElementById('out1').innerHTML;
    type1();
}

function type1() {
  
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type1()', 20);
    } else {
        captionEl.html(caption.substr(0, captionLength)+'<br>'+pwd);
        captionLength = 0;
        caption = '';
    }
}


function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

//function to execute commands : exec takes care of first command
function exec1(cmd){
            cleanEl.html('clr<br>'+pwd);
            var cmdarr = cmd.split(" ");
        		alert(cmdarr[0]);
        		switch(cmdarr[0]){
        			case 'cd':
        				exec2(cmdarr);
        				break;
        			case 'abhinav':
        			    caption =  document.getElementById('out1').innerHTML;
  						type1();
        				break;
        			default :
        			  	commandEl.html('<b>Error: Command Not Found</b><br>Please enter a valid command from those listed in the command list.<br> Try using < cd projects >');
						//type1();
        		}
     //       commandEl.html($('input#user-caption').val()+'<br>'+pwd);
          	 $('#user-caption').val('')
      //        testTypingEffect();
}


//function to execute commands : exec takes care of first command
function exec2(cmd){
        		alert(cmd);
        		alert(pwd);
        		switch(cmd[1]){
        			case 'projects':
        				alert('case(project)');
        				pwd = 'abhinav@DAIICT/projects:~ ';
						captionEl.html($('input#user-caption').val()+'<br>'+pwd);
        			    caption =  '';
        				break;
        			case '..':
   			        	alert('case(..)');
        				if(pwd == 'abhinav@DAIICT/projects:~ '){
						pwd = 'abhinav@DAIICT:~ '        				
						captionEl.html($('input#user-caption').val()+'<br>'+pwd);
        				}else{
        			  	commandEl.html('<b>Error: Cannot go back from root</b><br>You are already at root, so you cannot go one level up.<br> Try using < cd projects >');
        				}
        				break;
        			default :
        			  	commandEl.html('<b>Error: Command Not Found</b><br>Please enter a valid command from those listed in the command list.<br> Try using < cd projects >');
						//type1();
        		}
     //       commandEl.html($('input#user-caption').val()+'<br>'+pwd);
          	 $('#user-caption').val('')
      //        testTypingEffect();
}
