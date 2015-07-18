<!DOCTYPE html>
<html>
<?php
$about = file_get_contents('about.txt');
$collegequery = file_get_contents('collegequery.txt');
$dastreet = file_get_contents('dastreet.txt');
$framepics = file_get_contents('framepics.txt');
$makodas = file_get_contents('makodas.txt');
$heart = file_get_contents('heartattackpredictor.txt');
$reader = file_get_contents('readforblind.txt');
$online = file_get_contents('online.txt');
$pronounce = file_get_contents('pronounce.txt');
$qcards = file_get_contents('qcards.txt');
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
#about, #collegequery, #dastreet, #heart, #makodas, #online, #pronounce, #reader, #framepics, #qcards{	
	display: none;
}

#pd{
	color : lime;
}
#inp{
	color: blue;
}

#err{
	color : red;
}


    .auto-style2 {
		color: #0CC5DA;
	}
	.auto-style4 {
		color: #FFFFFF;
	}
	.auto-style5 {
		color: #FF0000;
	}
	.auto-style6 {
		color: #00FF00;
	}
	.auto-style7 {
		font-size: small;
	}

    .auto-style9 {
	font-size: 13px;
}

    </style>
    <script type="text/javascript" src="jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="functions.js"></script>
    <script type="text/javascript" src="keyPress.js"></script>
    <script type="text/javascript">
// function to put input always in focus    
	function formfocus() {
		document.getElementById('user-caption').focus();
	}
	window.onload = formfocus;
	
//function to execute command on pressing enter
</script>

</head>

<body style="min-width:600px">
<div style="float:left; width:55%;min-height:550px;min-width:600px;border-style:solid;background-color: #481036; border-radius:30px; border-width:40px; border-color:black;margin:1%;">
  <div style="background-color: #481036;margin: 1%"><p>
    <span id="about"><?php echo $about?></span>
    <span id="collegequery"><?php echo $collegequery ?></span>
    <span id="makodas"><?php echo $makodas?></span>
    <span id="dastreet"><?php echo $dastreet?></span>
    <span id="reader"><?php echo $reader?></span>
    <span id="framepics"><?php echo $framepics?></span>
    <span id="heart"><?php echo $heart?></span>
    <span id="pronounce"><?php echo $pronounce?></span>
    <span id="online"><?php echo $online?></span>
    <span id="qcards"><?php echo $qcards?></span>
    </p>
    <p class="console">
        <span id="pd">abhinav@DAIICT:~ </span><span id="clean"></span><span id="command"></span><span id="caption"></span><span id="inp"><input type="text" id="user-caption" style="background-color:#481036; color:#bbb;font-size:16px; width: 300px"/></span>
    </p>
  </div>
</div>

<div style="float:left; width:30%;min-height:604px;min-width:200px;background-color : black;margin-left:5%;margin:1%; border-radius:30px;padding:1%">
	<p><span class="auto-style6">Please type in the following commands into the terminal</span></p>
	<ol>
		<li><span class="auto-style6">For brief intro about me, type:</span><ul>
			<li><strong><input type="text" id="abhi" name="country" value="abhinav " readonly style="width: 246px"> </strong></li>
		</ul>
		</li>
		<li><span class="auto-style6">To know about my projects, type :</span><ul class="auto-style2">
			<li><strong><input type="text" id="cq" name="country" value="cd projects/collegequery " readonly style="width: 200px"> </strong></li>
			<li><strong><input type="text" id="ma" name="country" value="cd projects/makodas" readonly style="width: 200px"> </strong></li>
			<li><strong><input type="text" id="rb" name="country" value="cd projects/readforblind" readonly style="width: 200px"> </strong></li>
			<li><strong><input type="text" id="da" name="country" value="cd projects/dastreet" readonly style="width: 200px"> </strong></li>
			<li><strong><input type="text" id="fp" name="country" value="cd projects/framepics" readonly style="width: 200px"> </strong></li>
			<li><strong><input type="text" id="hp" name="country" value="cd projects/heartattackpredictor" readonly style="width: 200px"> </strong></li>
			<li><strong><input type="text" id="pr" name="country" value="cd projects/pronounce" readonly style="width: 200px"> </strong></li>
			<li><strong><input type="text" id="qc" name="country" value="cd projects/qcards" readonly style="width: 200px"> </strong></li>
		</ul>
		</li>
		<li><span class="auto-style6">To find me online, type :</span><ul>
			<li><strong><input type="text" id="on" name="country" value="online" readonly style="width: 246px"> </strong></li>
		</ul>
		</li>
		<li class="auto-style4"><span class="auto-style6">To go back to root 
		from </span><a class="auto-style6" href="mailto:abhinav@DAIICT:~">
		<span class="auto-style7">abhinav@DAIICT/projects :~</span></a><span class="auto-style6">
		</span>
		<ul>
			<li><strong><input type="text" id="cdot" name="country" value="cd .." readonly style="width: 246px"> </strong></li>
		</ul>
		</li>
	</ol>
	<p><span class="auto-style5"><span class="auto-style9">*Please note that the commands listed under 
	point number 2 will work when you are at root i.e. </span> </span>
	<a class="auto-style5" href="mailto:abhinavtripathi01@gmail.com :~">abhinav@DAIICT:~</a></p>
	<p><span class="auto-style5"><span class="auto-style9">You can alternatively type  cd projects  to 
	reach projects directory and then type project name in the next step when 
	the prompt displays </span></span>
	<a class="auto-style5" href="mailto:abhinavtripathi01@gmail.com :~">
	abhinav@DAIICT/projects :~</a></p>
	<p><span class="auto-style6">I am still improving this site so please feel 
	free to drop me any suggestion at</span>
	<a href="mailto:abhinavtripathi01@gmail.com?subject=Hi! I have a suggestion for abhinavtripathi.website">
	abhinavtripathi01@gmail.com</a></p>
	<p><span class="auto-style6">You can</span>
	<a href="https://github.com/AbhinavDAIICT/Terminal">fork this website 
	project on github</a> .</p>
</div>
</body>
</html>