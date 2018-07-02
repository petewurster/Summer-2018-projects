
//loop in a "cross" centered on the target tile
function check(chkTile){
	var chkRow=Math.floor(chkTile/10);
	var chkCol=chkTile%10;
	//init accumulators
	var rowBlack=0; var rowWhite=0;
	var colBlack=0; var colWhite=0;
	var winRowBlack=0; var winRowWhite=0;
	var wincolBlack=0; var wincolWhite=0;
	for(x=0;x<8;x++){
		//test row
		var querryRow= chkRow+""+x;
		if(document.getElementById(querryRow).innerHTML==1){
			rowBlack=0;
			rowWhite+=1;
			winRowWhite+=1;
			//3 consecutive white in row = badTile
			if(rowWhite==3){return true};
		};
		if(document.getElementById(querryRow).innerHTML==2){
			rowWhite=0;
			rowBlack+=1;
			winRowBlack+=1;
			//3 consecutive black in row = badTile
			if(rowBlack==3){return true};
		};
		//reset accumulators on empty tiles in ROW
		if(document.getElementById(querryRow).innerHTML==0){
			rowBlack=0;rowWhite=0;
		}
		//test col
		var querryCol= x+""+chkCol;
		if(document.getElementById(querryCol).innerHTML==1){
			colBlack=0;
			colWhite+=1;
			wincolWhite+=1;
			//3 consecutive white in col = badTile
			if(colWhite==3){return true};
		};
		if(document.getElementById(querryCol).innerHTML==2){
			colWhite=0;
			colBlack+=1;
			wincolBlack+=1;
			//3 consecutive black in col = badTile
			if(colBlack==3){return true};
		};
		//reset accumulators on empty tiles in COL
		if(document.getElementById(querryCol).innerHTML==0){
			colBlack=0;colWhite=0;
		};
	};
	//test for win cond
	if(winRowWhite==4 && winRowBlack==4 && wincolWhite==4 && wincolBlack==4){return "ok"};
	//reload for illegal init tiles
	if(winRowWhite>4 || winRowBlack>4 || wincolWhite>4 || wincolBlack>4){return true};
};


//diagonal loop across table to verify win
function wintest(){
	var winq="";
	for(var x=0;x<88;x+=11){
		//submit coordinates for checking
		winq+=check(x);
		if(winq=="okokokokokokokok"){
			alert("Y O U   W I N  !!!");
			location.reload();
		};
	};
};


//defines color setting func
function colorset(color,tile){
	switch(color){
		case 3:
			tile.setAttribute("class","empty");
			break;
		case 0:
			tile.setAttribute("class","empty");
			break;
		case -1:
			tile.setAttribute("class","black");
			break;
		case 2:
		 	tile.setAttribute("class","black");
		 	break;
		case 1:
			tile.setAttribute("class","white");
			break;
		case 9:
			tile.classList.add("red");
			break;
	};
};


//define table builder
function tableBuild(){
	//build table by looping thru rows
	for (var row =0; row <8; row++){
		document.write("<tr>");
		//then loop thru columns
		for (var col =0;col <8; col++){
			//label & color tiles
			document.write("<td id='");
			var rowCol= row+""+col;
			document.write(rowCol);
			document.write("'>");
			//sets states for initial tiles (14% white, 14% black)
			var color= Math.round((Math.random()*7)+1);
			if(color>2){color=0};
			document.write(color);
			document.write("</td>");
			var square=document.getElementById(rowCol);
			colorset(color,square);
			if(color!=0){
				square.classList.add("orig");
			};

		};
		document.write("</tr>");
	};
	//reload if initial table has illegal moves
	//does NOT guarantee a win-able game was generated
	for(var row=0;row<8; row++){
		for (var col=0;col<8;col++){
			var rowCol= row+""+col;
			var square=document.getElementById(rowCol);
			//reload for bad start tiles
			if(check(square.id)==true){location.reload()};
		};
	};
};


//disable r-click menu
document.addEventListener("contextmenu",function(event){event.preventDefault()});


//flips tile when clicked
document.addEventListener("click",function(whatTile){
	var square= whatTile.target;
	var tileValue= Number(square.innerHTML);
	//handle good clicks
	if(tileValue===0||tileValue===1||tileValue===2){
		//ignore init tiles
		if(square.classList[1]!="orig"){
			//left mouse
			if (whatTile.which==1){
				colorset(tileValue+=1,square);
				if(tileValue==3){tileValue=0};
			};
			//right mouse
			if (whatTile.which==3){
				colorset(tileValue-=1,square);
				if(tileValue==-1){tileValue=2};
			};
			//set new tile
			square.innerHTML=tileValue;
			//check for bad tile & win condition
			var badTile=check(square.id);
			//paint badTile red
			if(badTile==true){colorset(9,square)};
		};
	};
	wintest();
});





//start the game
tableBuild();
