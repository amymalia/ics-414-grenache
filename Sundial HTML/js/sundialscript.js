function submit(){





};


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