function submit(){
	
	var month = parseInt($("#month").val()),
		day = parseInt($("#day").val()),
		year = parseInt($("#year").val());
		
	alert(month +"/"+day+"/"+year);

	var lat = parseInt($('#latitude').val()),
		lon = parseInt($('#longitude').val());

	var daylightsavings = $('#daylightsavings').is(':checked');
	
	//alert(daylightsavings);
};

function check(){
	var errors = 0;
	var month = document.getElementById('month');
	var day = document.getElementById('day');
	var year = document.getElementById('year');

	if(month.value==month.defaultValue || day.value==day.defaultValue  || year.value==year.defaultValue)
	{
		alert("please provide a date");
		errors++;
		/*
		var errormsg = document.createElement('p');
		errormsg.id='error';
	
		$("#datediv")
		*/
	}
	else
	{
		var m = parseInt(month.value),
			d = parseInt(day.value),
			y = parseInt(year.value);
			
			
		if(valid(m) && valid(d) && valid(y))
		{
			//alert('valid numbers');
		}
		else
		{
			alert("please enter a valid date");
			errors++;
		}

		
		if( m < 0 || m > 12)
		{
			alert("please provide a valid month(1-12)");
			errors++;
		}
		else
		{
			//check if month has 31 days
			if( m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12 )
			{
				if( d < 0 || d > 31)
				{
					alert("please provide a valid day(1-31)");
					errors++;
				}
			}
			else
			{
				//check february
				if(m==2)
				{
					if(leapYear(y))
					{
						if( d < 0 || d > 29)
						{
							alert("please provide a valid day(1-29)");
							errors++;
						}
					}
					else
					{
						if( d < 0 || d > 28)
						{
							alert("please provide a valid day(1-28)");
							errors++;
						}
					}
				}//end february check
				//check the months that have 30 days
				else
				{
					if( d < 0 || d > 30)
					{
						alert("please provide a valid day(1-30)");
						errors++;
					}
				}
			}
			if( y < 1 || y > 3000)
			{
				alert("please provide a valid year(1-3000)");
				errors++;
			}
		}
	}
	if(errors == 0)
	{
		submit();
	}
}

function valid(value)
{
	return (typeof value == 'number' && isFinite(value));
}

function leapYear(year)
{
	return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}


function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}

function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
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