// Converts from degrees to radians.
function toRadians(degrees) {
	return degrees * Math.PI / 180;
};

function drawSundial(){
	var a=document.getElementById("myCanvas");
	var atx=a.getContext("2d");
	atx.clearRect(0, 0, a.width, a.height);

	atx.font="25px Arial";
	atx.fillText("Horizontal Sundial For " + gnomonDeg + " Degrees Latitude",10,50);
	atx.rect(10,80,700,320);
	atx.stroke();
	//creates 90 degree hour line
	atx.moveTo(360,380);
	atx.lineTo(360,130);
	atx.stroke();
	//creates 0 degree hour line
	atx.moveTo(110,380);
	atx.lineTo(610,380);
	atx.stroke();
	//creates hour lines on right side
	//5PM
	drawHourLinesRight(atx, sevenFive);
	//4PM
	drawHourLinesRight(atx, eightFour);
	//3PM
	drawHourLinesRight(atx, nineThree);
	//2PM
	drawHourLinesRight(atx, tenTwo);
	//1PM
	drawHourLinesRight(atx, elevenOne);
	
	//creates hour lines on left side
	//7PM
	drawHourLinesLeft(atx, sevenFive);
	//8PM
	drawHourLinesLeft(atx, eightFour);
	//9PM
	drawHourLinesLeft(atx, nineThree);
	//10PM
	drawHourLinesLeft(atx, tenTwo);
	//11PM
	drawHourLinesLeft(atx, elevenOne);
	
	//labels lines
	atx.font="16px Arial";
	atx.fillText(time + " PM",350,110);
	atx.fillText(AMPM + " AM",20,380);
	atx.fillText(AMPM + " PM",620,380);
}

function drawHourLinesRight(atx, angle){
	h = Math.round(250 * Math.tan(toRadians(angle)));
	slope = ((380) - (380 - h)) / (360 - 610);
	x2 = Math.round(((130 - 380 + (slope * 360)) / slope));
	if((angle == sevenFive) || (angle == eightFour)){
		if (x2 > 610)
		{
			atx.moveTo(360,380);
			atx.lineTo(610,380-h);
			atx.stroke();
		}
		else
		{
			atx.moveTo(360,380);
			atx.lineTo(x2,130);
			atx.stroke();
		}
	}
	else{
			atx.moveTo(360,380);
			atx.lineTo(x2,130);
			atx.stroke();
	}
}

function drawHourLinesLeft(atx, angle){
	h = Math.round(250 * Math.tan(toRadians(angle)));
	slope = ((380) - (380 - h)) / (360 - 110);
	x2 = Math.round(((130 - 380 + (slope * 360)) / slope));
	if((angle == sevenFive) || (angle == eightFour)){
		if (x2 < 110)
		{
			atx.moveTo(360,380);
			atx.lineTo(110,380-h);
			atx.stroke();
		}
		else
		{
			atx.moveTo(360,380);
			atx.lineTo(x2,110);
			atx.stroke();
		}
	}
	else{
			atx.moveTo(360,380);
			atx.lineTo(x2,110);
			atx.stroke();
	}
}


