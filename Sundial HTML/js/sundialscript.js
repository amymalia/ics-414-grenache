function submit(){
	var date = $("#date").val().split('/');
	var latitude = $("#latitude").val();
	var longitude = $("#longitude").val();
	var month = date[0],
		day = date[1],
		year = date[2];

	var daylightsavings = $('#daylightsavings').is(':checked');
	
	alert("daylight savings is " + daylightsavings);
};

function validate(){
	var errors = 0;
	var date = $("#date").val();
	var latitude = $("#latitude").val();
	var longitude = $("#longitude").val();
	var dateRegex = /[\d]{1,2}\/[\d]{1,2}\/[\d][\d][\d][\d]/;
	var latitudeRegex = /^[\-]?\d{1,2}\.(\d)+$/;
	var longitudeRegex = /^[\-]?\d{1,3}\.(\d)+$/;

	//check to make sure it isnt blank
	if(date == null || date == "")
	{
		alert("please provide a date");
	}
	else//not blank
	{
		//check if date input is valid using a regular expression
		if(!dateRegex.test(date))
		{
			alert("please provide a date in the form: MM/DD/YYYY");
		}
		else//not blank and valid
		{
			//check for valid date
			if(checkDate(date))
			{//valid date now check lat/lon
				//check latitude with regular expression
				if(latitudeRegex.test(latitude))
				{
					//valid latitude input
					//now check for valid value
					if(latitude < -90 || latitude > 90)
					{//invalid value
						alert("please enter a valid latitude value (from -90 to 90)");
					}
					else//valid date, valid latitude value
					{
						//check longitude with regular expression
						if(longitudeRegex.test(longitude))
						{
							//valid longitude input
							//now check for valid value
							if(longitude < -180 || longitude > 180)
							{//invalid value
								alert("please enter a valid longitude value (from -180 to 180)");
							}
							else//valid date, valid latitude, valid longitude
							{
								//all inputs appear to be valid so call submit function
								submit();
							}
						}
					}
					
				}
				else//invalid latitude
				{
					alert("invalid input for latitude");
				}
			}
		}
	}
}

function checkDate(date){
	//split on slash to validate month/day/year
	var splitDate = date.split('/');
	var month = splitDate[0];
	var day = splitDate[1];
	var year = splitDate[2];

	if(year < 1000 || year > 3000){
		alert("please provide a valid year [1000-3000]");
		return false;
	}
	//Checks to make sure the month is valid.
	if(month < 1 || month > 12){
		alert("please provide a valid month [1-12]");
		return false;
	}
			
	//Checks to make sure the day is valid.
	if(day < 1 || day > 31){
		alert("please provide a valid day of the month");
		return false;
	}
			
	//Checks the months with 30 days.
	if((month == 4 || month == 6 || month == 9 || month == 11) && day == 31){
		alert("month " + month + " only has 30 days");
		return false;
	}
			
	//Checks to see if February is a leap year and corrects it if the person entered a leap year day.
	if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) && month == 2 && day == 29){
		return true;
	}
			
	//Checks the month of February, makes false if day is over 28.
	if(month == 2 && day > 28){
		alert("February only has 28 days in the given year");
		return false;
	}
			
	return true;
}

function getLoc() {
	var geocoder = new google.maps.Geocoder();
	var address = document.getElementById("location").value;
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK)
		{
			$('#latitude').val(results[0].geometry.location.lat().toFixed(6));
			$('#longitude').val(results[0].geometry.location.lng().toFixed(6));
		}
		else
		{
			alert("Lat and long cannot be found.");
		}
	});
}