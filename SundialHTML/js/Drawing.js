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
	drawGnomon(atx);
}

function drawHourLinesRight(atx, angle){
	//l is the length of the line
	var l = 250;
	//y is the distance from the origin point to where the
	//hour line will end
	var y = (Math.sin(toRadians(angle)))*l;
	//x is the distance from the origin point to where the
	//hour line will end
	var x = (Math.cos(toRadians(angle)))*l;
	//log the values just to know it worked
	console.log('angle: ' + angle);
	console.log('x: ' + x);
	console.log('y: ' + y);
	console.log();
	
	//draw
	atx.moveTo(360,380);
	atx.lineTo(360+x,380-y);
	atx.stroke();
}

function drawHourLinesLeft(atx, angle){
	//l is the length of the line
	var l = 250;
	//y is the distance from the origin point to where the
	//hour line will end
	var y = (Math.sin(toRadians(angle)))*l;
	//x is the distance from the origin point to where the
	//hour line will end
	var x = (Math.cos(toRadians(angle)))*l;
	//log the values just to know it worked
	console.log('angle: ' + angle);
	console.log('x: ' + x);
	console.log('y: ' + y);
	console.log();
	
	//draw
	atx.moveTo(360,380);
	atx.lineTo(360-x,380-y);
	atx.stroke();
}

function drawGnomon(atx){
	console.log('HEY THERE!');
		//creates the gnomen
		if (gnomonDeg == 90)
		{
			//makes a rectangle
			atx.moveTo(10, 500);
			atx.rect(10,500,380,60);
			atx.stroke();
		}
		else{
			//vertical line
			atx.moveTo(10,500);
			atx.lineTo(10,640);
			atx.stroke();
			
			//horizontal line
			var x = (140 * Math.tan(toRadians(gnomonDeg)));
			
			if(x > 346)
			{
				atx.moveTo(10,500);
				atx.lineTo(346 + 10, 500);
				atx.stroke();
			}
			else
			{
				atx.moveTo(10,500);
				atx.lineTo(x + 10, 500);
				atx.stroke();
			}
			
			//hypotenuse line
			var slope =  (640-500) / (10 - (x + 10));
			var y1 = (640 - (slope * (10 - (346 + 10))));
			if (x > 346)
			{
				atx.moveTo((346+10), y1);
				atx.lineTo(10, 640);
				atx.stroke();
			}
			else
			{
				atx.moveTo((x + 10), 500);
				atx.lineTo(10, 640);
				atx.stroke();
			}
		}

}
