<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
	<style type="text/css">
		table{
			border: 1px solid black;
		}
		td{
			padding:10px 18px;
			border: 1px solid black;
			background-color:#aaaaaa;
			color:#aaaaaa;
		}
		.white {
			padding:10px 18px;
			border: 1px solid black;
			background-color:#ffffff;
			color:#ffffff;
		}
		.black {
			padding:10px 18px;
			border: 1px solid black;
			background-color:#000000;
			color:#000000;

		}



	</style>



</head>
<body>
<table>
	<tr>
		<td id="11"></td><td id="12"></td><td id="13"></td><td id="14"></td><td id="15"></td><td id="16"></td><td id="17"></td><td id="18"></td>
	</tr>
	<tr>
		<td id="21"></td><td id="22"></td><td id="23"></td><td id="24"></td><td id="25"></td><td id="26"></td><td id="27"></td><td id="28"></td>
	</tr>
	<tr>
		<td id="31"></td><td id="32"></td><td id="33"></td><td id="34"></td><td id="35"></td><td id="36"></td><td id="37"></td><td id="38"></td>
	</tr>	
	<tr>
		<td id="41"></td><td id="42"></td><td id="43"></td><td id="44"></td><td id="45"></td><td id="46"></td><td id="47"></td><td id="48"></td>
	</tr>
	<tr>
		<td id="51"></td><td id="52"></td><td id="53"></td><td id="54"></td><td id="55"></td><td id="56"></td><td id="57"></td><td id="58"></td>
	</tr>
	<tr>
		<td id="61"></td><td id="62"></td><td id="63"></td><td id="64"></td><td id="65"></td><td id="66"></td><td id="67"></td><td id="68"></td>
	</tr>
	<tr>
		<td id="71"></td><td id="72"></td><td id="73"></td><td id="74"></td><td id="75"></td><td id="76"></td><td id="77"></td><td id="78"></td>
	</tr>
	<tr>
		<td id="81"></td><td id="82"></td><td id="83"></td><td id="84"></td><td id="85"></td><td id="86"></td><td id="87"></td><td id="88"></td>
	</tr>
</table>

<script type="text/javascript">







	document.addEventListener("click",function(whatTile){
		var square= whatTile.target;
		var value= Number(square.innerHTML);
		console.log(value);
		switch(value+=1){
			//square.innerHTML=value;
			case 1:
				square.setAttribute("class","white");
				break;
			case 2:
				square.setAttribute("class","black");
				break;
			case 3:
				value=0;
				square.setAttribute("class","empty");
				break;
		};
		square.innerHTML=value;

		
	});

	






























</script>


</body>
</html>