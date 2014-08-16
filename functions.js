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
// making the commands clickable    
    $('#cq').click(function(e){
      		cmd = $('input#cq').val();
      		document.getElementById('user-caption').value = $('input#cq').val();
      		
      		exec1(cmd);
    });
    
    $('#rb').click(function(e){
      		cmd = $('input#rb').val();
      		document.getElementById('user-caption').value = $('input#rb').val();
      		
      		exec1(cmd);
    });

    $('#ma').click(function(e){
      		cmd = $('input#ma').val();
      		document.getElementById('user-caption').value = $('input#ma').val();
      		
      		exec1(cmd);
    });

    $('#da').click(function(e){
      		cmd = $('input#da').val();
      		document.getElementById('user-caption').value = $('input#da').val();
      		
      		exec1(cmd);
    });

    $('#hp').click(function(e){
      		cmd = $('input#hp').val();
      		document.getElementById('user-caption').value = $('input#hp').val();
      		
      		exec1(cmd);
    });

    $('#pr').click(function(e){
      		cmd = $('input#pr').val();
      		document.getElementById('user-caption').value = $('input#pr').val();
      		
      		exec1(cmd);
    });

    $('#fp').click(function(e){
      		cmd = $('input#fp').val();
      		document.getElementById('user-caption').value = $('input#fp').val();
      		
      		exec1(cmd);
    });
    
    $('#abhi').click(function(e){
      		cmd = $('input#abhi').val();
      		document.getElementById('user-caption').value = $('input#abhi').val();
      		
      		exec1(cmd);
    });

    $('#on').click(function(e){
      		cmd = $('input#on').val();
      		document.getElementById('user-caption').value = $('input#on').val();
      		
      		exec1(cmd);
    });

    $('#cdot').click(function(e){
      		cmd = $('input#cdot').val();
      		document.getElementById('user-user-caption').value = $('input#cdot').val();
      		
      		exec1(cmd);
    });


// Clickable command end
    

});



function testTypingEffect() {
//	caption = $('input#user-caption').val();
    caption =  document.getElementById('about').innerHTML;
    type1();
}

function type1() {
  $("input").off("click");
  $("input").on("click");
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type1()', 10);
    } else {
        captionEl.html(caption.substr(0, captionLength)+'<br><span id = "pd">'+pwd+'</span>');
        captionLength = 0;
        caption = '';;
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
            cleanEl.html('clr<br><span id = "pd">'+pwd+'</span>');
            var cmdarr = cmd.split(" ");
			commandEl.html($('input#user-caption').val()+'<br>');

        	//	alert(cmdarr[0]);
        			if(pwd == 'abhinav@DAIICT/projects:~ '){
     			        switch(cmdarr[0]){
		        			case 'online':
								commandEl.html($('input#user-caption').val()+'<br>');
		        			    caption =  document.getElementById('online').innerHTML;
		        				type1();
	        				break;

		        			case 'cd':
		        			if(cmdarr[1] == '..'){
			        			pwd = 'abhinav@DAIICT:~ ';
								commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
								captionEl.html('');
		        				}else{
								commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
		        			  	captionEl.html('<b><span id="err">Error 0: Command Not Found</b><span><br>Try using < cd .. > or < readforblind >'+'<br><span id = "pd">'+pwd+'</span>');
		        				}
		        				break;
		        			case 'abhinav':
								commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
		        			    caption =  document.getElementById('about').innerHTML;
		  						type1();
		        				break;
        					case 'collegequery':
							    caption =  document.getElementById('collegequery').innerHTML;
							    type1();
        					break;
        					case 'makodas':
							    caption =  document.getElementById('makodas').innerHTML;
							    type1();
        					break;
        					case 'dastreet':
							    caption =  document.getElementById('dastreet').innerHTML;
							    type1();
        					break;
        					case 'readforblind':
							    caption =  document.getElementById('reader').innerHTML;
							    type1();
        					break;
        					case 'heartattackpredictor':
							    caption =  document.getElementById('heart').innerHTML;
							    type1();
        					break;
        					case 'framepics':
							    caption =  document.getElementById('framepics').innerHTML;
							    type1();
        					break;
        					case 'pronounce':
							    caption =  document.getElementById('pronounce').innerHTML;
							    type1();
        					break;
	        				default :
		        			  	captionEl.html('<b><span id="err">Error 1: Command Not Found</b><span><br>Please enter a valid command from those listed in the command list.<br> Try using < cd projects > or < readforblind >'+'<br><span id = "pd">'+pwd+'</span>');
		        			}
        			}else{
	   			        switch(cmdarr[0]){
		        			case 'cd':
								commandEl.html($('input#user-caption').val()+'<br>');
		        				exec2(cmdarr);
		        				break;
		        			case 'online':
								commandEl.html($('input#user-caption').val()+'<br>');
		        			    caption =  document.getElementById('online').innerHTML;
		        				type1();
		        				break;
		        			case 'abhinav':
		        			//	if(pwd == 'abhinav@DAIICT/projects:~ '){
							//	commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
		        			//  	captionEl.html('<b><span id="err">Error 2: Command Not Found</b><span><br>Please enter a valid command from those listed in the command list.<br> Try using < cd .. > to go one level up and then use < abhinav > '+'<br><span id = "pd">'+pwd+'</span>');
		        			//	}else{
								commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
		        			    caption =  document.getElementById('about').innerHTML;
		  						type1();
		  					//	}
		        				break;
		        			default :
								commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
								if(cmdarr[0] == '' && cmdarr[1] == null){
		        			  	captionEl.html('<b><span id="err">Error 3.1: Please enter some command</b><span><br> Try using < cd projects > or < cd projects/readforblind >'+'<br><span id = "pd">'+pwd+'</span>');
								}else{
		        			  	captionEl.html('<b><span id="err">Error 3.2: Command Not Found</b><span><br>Please enter a valid command from those listed in the command list.<br> Try using < cd projects > or < cd projects/readforblind >'+'<br><span id = "pd">'+pwd+'</span>');
								}//type1();
		        		}
	        	}
     //       commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
          	 $('#user-caption').val('')
      //        testTypingEffect();
}


//function to execute commands : exec takes care of first command
function exec2(cmdarr){
					if(cmdarr[1] == null || cmdarr[1] == ''){
					alert('null');
						commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
        			  	captionEl.html('<b><span id="err">Error 4: Command Not Found</b><span><br>Please enter a valid directory/command after < cd ><br>Try using < cd projects > '+'<br><span id = "pd">'+pwd+'</span>');
					}else{
						switch(cmdarr[1]){
							case '..':
								if(pwd == 'abhinav@DAIICT/projects:~ '){
								pwd = 'abhinav@DAIICT/';
								commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
								captionEl.html('');					
								}else if(pwd == 'abhinav@DAIICT:~ '){
								commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');					
		        			  	captionEl.html('<b><span id="err">Error 5: Cannot go back from root</b><br>You are already at root, so you cannot go one level up.<br> Try using < cd projects >'+'<br><span id = "pd">'+pwd+'</span>');
								}
							break;
							case 'projects':
								pwd = 'abhinav@DAIICT/projects:~ ';
								commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
								captionEl.html('');					
							break;
        					case 'projects/collegequery':
								pwd = 'abhinav@DAIICT/projects:~ ';
								commandEl.html($('input#user-caption').val()+'<br>');
							    caption =  document.getElementById('collegequery').innerHTML;
							    type1();
        					break;
        					case 'projects/makodas':
								pwd = 'abhinav@DAIICT/projects:~ ';
								commandEl.html($('input#user-caption').val()+'<br>');
							    caption =  document.getElementById('makodas').innerHTML;
							    type1();
        					break;
        					case 'projects/dastreet':
								pwd = 'abhinav@DAIICT/projects:~ ';
								commandEl.html($('input#user-caption').val()+'<br>');
							    caption =  document.getElementById('dastreet').innerHTML;
							    type1();
        					break;
        					case 'projects/readforblind':
								pwd = 'abhinav@DAIICT/projects:~ ';
								commandEl.html($('input#user-caption').val()+'<br>');
							    caption =  document.getElementById('reader').innerHTML;
							    type1();
        					break;
        					case 'projects/heartattackpredictor':
								pwd = 'abhinav@DAIICT/projects:~ ';
								commandEl.html($('input#user-caption').val()+'<br>');
							    caption =  document.getElementById('heart').innerHTML;
							    type1();
        					break;
        					case 'projects/framepics':
								pwd = 'abhinav@DAIICT/projects:~ ';
								commandEl.html($('input#user-caption').val()+'<br>');
							    caption =  document.getElementById('framepics').innerHTML;
							    type1();
        					break;
        					case 'projects/pronounce':
								pwd = 'abhinav@DAIICT/projects:~ ';
								commandEl.html($('input#user-caption').val()+'<br>');
							    caption =  document.getElementById('pronounce').innerHTML;
							    type1();
        					break;
	        				default :
						commandEl.html($('input#user-caption').val()+'<br><span id = "pd">'+pwd+'</span>');
        			  	captionEl.html('<b><span id="err">Error 6: Command Not Found</b><span><br>Please enter a valid directory/command after < cd ><br>Try using < cd projects > '+'<br><span id = "pd">'+pwd+'</span>');
						}
					}
}
