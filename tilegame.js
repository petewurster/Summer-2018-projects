//build table by looping thru rows
for (var row =0; row <8; row++){
	document.write("<tr>");
	//then loop thru columns
	for (var col =0;col <8; col++){
		//label & color tiles
		document.write("<td id='");
		var rowcol= row+""+col;
		document.write(rowcol);
		document.write("'>");
		//sets states for initial tiles (12% white, 12% black)
		var color= Math.round((Math.random()*8)+1);
		if(color>2){color=0};
		document.write(color);
		document.write("</td>");
		var square=document.getElementById(rowcol);
		colorset(color,square);
	};
	document.write("</tr>");
};


//illegal move & win condition detection
function check(chkTile){
	var chkRow=Math.floor(chkTile/10);
	var chkCol=chkTile%10;
	//row Blk & row Wht
	var rb=0; var rw=0;
	//col Blk & col Wht
	var cb=0; var cw=0;
	//win condition test vars
	var winrb=0; var winrw=0;
	var wincb=0; var wincw=0;
	for(x=0;x<8;x++){
		//test rows //qr=question row item
		var qr= chkRow+""+x;
		if(document.getElementById(qr).innerHTML==1){
			rb=0;
			rw+=1;
			if(rw==3){return true};
			winrw+=1;
			if(winrw==5){return true};
		};
		if(document.getElementById(qr).innerHTML==2){
			rw=0;
			rb+=1;
			if(rb==3){return true};
			winrb+=1;
			if(winrb==5){return true};
		};
		if(document.getElementById(qr).innerHTML==0){
			rb=0;rw=0;
		}
		//test cols //qc=question col item
		var qc= x+""+chkCol;
		if(document.getElementById(qc).innerHTML==1){
			cb=0;
			cw+=1;
			if(cw==3){return true};
			wincw+=1;
			if(wincw==5){return true};
		};
		if(document.getElementById(qc).innerHTML==2){
			cw=0;
			cb+=1;
			if(cb==3){return true};
			wincb+=1;
			if(wincb==5){return true};
		};
		if(document.getElementById(qc).innerHTML==0){
			cb=0;cw=0;
		};
	};
	//test for win cond
	if(winrw==4 && winrb==4 && wincw==4 && wincb==4){
		alert("You win!");
	};
};


//defines color setting func
function colorset(color,tile){
	console.log(tile);
	switch(color){
		case 3:
			tile.setAttribute("class","empty");
			break;
		case -1:
			tile.setAttribute("class","black");
			break;
		case 0:
			tile.setAttribute("class","empty");
			break;
		case 1:
			tile.setAttribute("class","white");
			break;
		case 2:
		 	tile.setAttribute("class","black");
		 	break;
		case 9:
			tile.setAttribute("class","red");
			break;
	};
};


//disable r-click menu
document.addEventListener("contextmenu",function(event){
	event.preventDefault()
});


//flips tile when clicked
document.addEventListener("click",function(whatTile){
	var square= whatTile.target;
	var value= Number(square.innerHTML);
	//reset bad tiles
	if(value===9){
		colorset(0,square);
		square.innerHTML=0
	};
	//handle good tiles
	if(value===0||value===1||value===2){
		//left mouse
		if (whatTile.which==1){
			colorset(value+=1,square);
			if(value==3){value=0};
		};
		//right mouse
		if (whatTile.which==3){
			colorset(value-=1,square);
			if(value==-1){value=2};
		};
		//set new tile
		square.innerHTML=value;
		//check for bad tile & win condition
		var badTile=check(square.id);
		if(badTile==true){
			square.innerHTML=9;
			colorset(9,square)};
	};
});