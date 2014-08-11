<!DOCTYPE html>
<html>
<?php
$about = file_get_contents('about.txt');
?>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Abhinav Tripathi</title>
    <meta name="description" content="how to create a Typing Effect, an Eraser Effect and a Blinking Cursor using jQuery demo" />
    <style>
        body
        {
            padding: 1%;
            color: #ccc;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 1em;
        }

        a
        {
            color: #0CC5DA;
            text-decoration: none;
        }

        a:hover
        {
            color: #DCE808;
            text-decoration: underline;
        }

        .console
        {
            font-family: "Lucida Sans Typewriter", "Lucida Console", Monaco, "Bitstream Vera Sans Mono", monospace;
        }

        input[type=button]
        {
            cursor: pointer;
        }
        
        input[type=text]
        {
            color :white;
            background-color:black;
            outline:black;
            border:0;
        }
        
input:focus{
    outline: 0;
}

*:focus {
    outline: 0;
}
#out1{	
	display: none;
}

    .auto-style1 {
		color: #0000FF;
	}

    </style>
    <script type="text/javascript" src="jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="functions.js"></script>
    <script type="text/javascript">
// function to put input always in focus    
	function formfocus() {
		document.getElementById('user-caption').focus();
	}
	window.onload = formfocus;
	
//function to execute commend on pressing enter
</script>
</head>

<body style="min-width:600px">
<div style="float:left; width:55%;min-height:550px;min-width:600px;border-style:solid;background-color: #481036; border-radius:30px; border-width:40px; border-color:black;margin:1%;">
  <div style="background-color: #481036;margin: 1%"><p>
    <span id="out1"><?php echo $about?></span>
    </p>
    <p class="console">
        <span>abhinav@DAIICT:~ </span><span id="clean"></span><span id="command"></span><span id="caption"></span><span><input type="text" id="user-caption" style="background-color:#481036"/></span>
    </p>
  </div>
</div>

<div style="float:left; width:30%;min-height:630px;min-width:200px;background-color : black;margin-left:5%;margin:1%; border-radius:10px;">
	<p>Please type in the following commands into the terminal</p>
	<ol>
		<li>For brief intro about me, type:<ul>
			<li><span class="auto-style1"><em>abhinav</em></span> </li>
		</ul>
		</li>
		<li>To know about my projects, type :<ul class="auto-style1">
			<li><em>cd projects/collegequery</em></li>
			<li><em>cd projects/makodas</em></li>
			<li><em>cd projects/readforblind</em></li>
			<li><em>cd projects/dastreet</em></li>
			<li><em>cd projects/framepics</em></li>
			<li><em>cd projects/heart</em></li>
			<li><em>cd projects/pronounce</em></li>
		</ul>
		</li>
		<li>To find me online, type :<ul>
			<li class="auto-style1"><em>github</em></li>
			<li class="auto-style1"><em>blogger</em></li>
		</ul>
		</li>
	</ol>
</div>
</body>
</html>