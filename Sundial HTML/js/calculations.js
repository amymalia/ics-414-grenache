var gnomonDeg = 0.0;
var hour = 0;
var minute = 0;
var day = 0;
var time = "";
var elevenOne = 0;
var tenTwo = 0;
var nineThree = 0;
var eightFour = 0;
var sevenFive = 0;
var minuteStr = "";
var AMPM = "";

function foo(){
};

function loc(longDeg, latDeg, month, day, year, dayLightSavings){
	
	setGnomon(Math.abs(latDeg));
	setDay(month, day);
	setTime(longDeg, dayLightSavings);
	setAngles(Math.abs(latDeg));

};

/**
 * Gets the time at noon.
 * 
 * @return - The time to put at the top of the drawing.
 */
function getNoon(){
	return time;
}


function setTime(longDeg, dayLightSavings){
	var offset = 9.87 * Math.sin(degreeToRad(2 * 360 * (getDay() - 81) / 365.0));
	offset -= 7.53 * Math.cos(degreeToRad(360 * (getDay() - 81) / 365.0));
	offset -= 1.5 * Math.sin(degreeToRad(360 * (getDay() - 81) / 365.0));

	minute = Math.floor((longDeg % 15) * 4 - offset);
	
	//Adjust for time zones to the east of 0 degrees longitude.
	if(longDeg < 0){
		minute = minute + 60;
	}
	
	if(minute < 10 && minute > -10){
		minuteStr = "0" + Math.abs(minute);
	}else{
		minuteStr = "" + Math.abs(minute);
	}
	
	//Adjusts for daylight savings time.
	if(dayLightSavings){
		if(longDeg % 15 < 8){
			hour = 1;
		}else{
			hour = 12;
		}
	}else{
		if(longDeg % 15 < 8){
			hour = 12;
		}else{
			hour = 11;
		}
	}
	
	time = hour + ":" + minuteStr;
	
	if(hour == 11){
		setAMPM("5:" + Math.abs(minute));
	}else if(hour == 12){
		setAMPM("6:" + Math.abs(minute));
	}else{
		setAMPM("7:" + Math.abs(minute));
	}
}

/**
 * Gets the AMPM time.
 * 
 * @return - The AMPM times.
 */
function getAMPM(){
	return AMPM;
}

/**
 * Sets the AMPM times.
 * 
 * @param AMPM - The time for AMPM
 */
function setAMPM(AM_PM){
	AMPM = AM_PM;
}

/**
 * Sets the angle of the lines.
 * 
 * @param latDeg - The degree the user entered for the latitude.
 */
function setAngles(latDeg){
	//Calculates the angle of the time lines.
	elevenOne	= radianToDeg(Math.atan(Math.tan(degreeToRad(15)) * Math.sin(degreeToRad(latDeg))));
	tenTwo 	= radianToDeg(Math.atan(Math.tan(degreeToRad(30)) * Math.sin(degreeToRad(latDeg))));
	nineThree 	= radianToDeg(Math.atan(Math.tan(degreeToRad(45)) * Math.sin(degreeToRad(latDeg))));
	eightFour 	= radianToDeg(Math.atan(Math.tan(degreeToRad(60)) * Math.sin(degreeToRad(latDeg))));
	sevenFive 	= radianToDeg(Math.atan(Math.tan(degreeToRad(75)) * Math.sin(degreeToRad(latDeg))));
}

/**
 * Gets the angle of the lines for seven and five.
 * 
 * @return - The angle the line is supposed to be for seven and four.
 */
function getSevenFive(){
	return sevenFive;
}

/**
 * Gets the angle of the lines for eight and four.
 * 
 * @return - The angle the line is supposed to be for eight and four.
 */
function getEightFour(){
	return eightFour;
}

/**
 * Gets the angle of the lines for ten and two.
 * 
 * @return - The angle the line is supposed to be for nine and three.
 */
function getTenTwo(){
	return tenTwo;
}

/**
 * Gets the angle of the lines for nine and three.
 * 
 * @return - The angle the line is supposed to be for nine and three.
 */
function getNineThree(){
	return nineThree;
}

/**
* Gets the angle of the lines for eleven and one.
* 
* @return - The angle the line is supposed to be for eleven and one.
*/
function getElevenOne(){
	return elevenOne;
}

/**
 * Gets the gnomon degree.
 * 
 * @return - The angle of the gnomon.
 */
function getGnomon(){
	return gnomonDeg;
}


/**
 * Sets the degree of the gnomon.
 * 
 * @param gnomon - The latitude the user entered.
 */
function setGnomon( gnomon){
	gnomonDeg = gnomon;
}


/**
 * Gives the day of the year calculated by setDay.
 * 
 * @return The day of the year.
 */
function getDay(){
	return day;
}

/**
 * Calculates the day of the year and sets it to a 1-365 scale.
 * 
 * @param month	- The month the user entered.
 * @param dayArg	- The day of the year the user entered.
 */
function setDay(month, dayArg){
	var numOfDays = dayArg;

	if(month > 1){
		numOfDays += 31;
	}
	if(month > 2){
		numOfDays += 28;
	}
	if(month > 3){
		numOfDays += 31;
	}
	if(month > 4){
		numOfDays += 30;
	}
	if(month > 5){
		numOfDays += 31;
	}
	if(month > 6){
		numOfDays += 30;
	}
	if(month > 7){
		numOfDays += 31;
	}
	if(month > 8){
		numOfDays += 31;
	}
	if(month > 9){
		numOfDays += 30;
	}
	if(month > 10){
		numOfDays += 31;
	}
	if(month > 11){
		numOfDays += 30;
	}
	day = numOfDays;
}

/**
 * Converts the radian value to degrees.
 * 
 * @param rad - The radian to turn into degrees.
 * 
 * @return The degree value of the radian.
 */
function radianToDeg(rad){
	return(rad * 180 / Math.PI);
}

/**
 * Converts the degree value to radians.
 * 
 * @param deg - The degree to turn into radians.
 * 
 * @return The radian value of the degree.
 */
function degreeToRad(deg){
		return(deg * Math.PI / 180);
}

/**
 * Checks to make sure the user entered a valid date.
 * 
 * @param 	month - the month of the year.
 * @param 	day   - the day of the year.
 * @param 	year  - the year.
 * 
 * @return 	true if the date is valid.
 * 			false if the date is invalid.
 */
function isValidDate(month, day, year){
	if(year < 1){
		return false;
	}
	//Checks to make sure the month is valid.
	if(month < 1 || month > 12){
		return false;
	}
			
	//Checks to make sure the day is valid.
	if(day < 1 || day > 31){
		return false;
	}
			
	//Checks the months with 30 days.
	if((month == 4 || month == 6 || month == 9 || month == 11) && day == 31){
		return false;
	}
			
	//Checks to see if February is a leap year and corrects it if the person entered a leap year day.
	if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) && month == 2 && day == 29){
		return true;
	}
			
	//Checks the month of February, makes false if day is over 28.
	if(month == 2 && day > 28){
		return false;
	}
			
	return true;
}

//Checks to make sure the value is a valid longitude and latitude.
function isValidLongLat(longDeg, latDeg)
{
	if(longDeg > 180 || longDeg < -180){
		return false;
	}
	
	if(latDeg > 90 || latDeg < -90){
		return false;
	}
	
	return true;
}