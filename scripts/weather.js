
function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="3e55ddc5955b7f88c5f00cfff878c77c";
	var city = "houston,usa";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		// if niet ok dan is er iets mis gegaan.
		if(!response.ok) {
			// throw betekent gooien. Dit wordt naar catch gegooid.
			throw Error(response.statusText);
		}
		return response.json();
	})
	
	// render weather per day
	// Als er geen error is wordt dit gedaan en voert die de functie onAPISucces uit.
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error
	// Hier vang je de fout op.
	// als je de fout gevangen hebt moet je dit gaan uitvoeren.
	.catch(function (error) {
		onAPIError(error);
	});
}

// Als het wel goed is wordt deze uitgevoerd.
function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// get name of city
	var cityName = response.name;

	// render weather in DOM
	var weatherCity = document.getElementById('city');

	var weatherType = document.getElementById('weather');

	var weatherTemp = document.getElementById('temp');


	weatherCity.innerHTML = cityName;

	weatherType.innerHTML = type;

	weatherTemp.innerHTML = degC + "&#176;C";

}



function getAPIdataForecast() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="3e55ddc5955b7f88c5f00cfff878c77c";
	var city = "houston,usa";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		// if niet ok dan is er iets mis gegaan.
		if(!response.ok) {
			// throw betekent gooien. Dit wordt naar catch gegooid.
			throw Error(response.statusText);
		}
		return response.json();
	})
	
	// render weather per day
	// Als er geen error is wordt dit gedaan en voert die de functie onAPISucces uit.
	.then(function(response) {
		// render weatherCondition
		onAPISuccesForecast(response);	
	})
	
	// catch error
	// Hier vang je de fout op.
	// als je de fout gevangen hebt moet je dit gaan uitvoeren.
	.catch(function (error) {
		onAPIError(error);
	});
}

// Als het wel goed is wordt deze uitgevoerd.
function onAPISuccesForecast(response) {
	console.log(response)
	
	var type = response.weather[0].description;
	var icon = response.weather[0].icon;

	// var iconUrl = 'http://openweathermap.org/img/w/' + weatherList + '.png';
	// var weatherIcon = iconUrl;
	
	// var forecastIcon = document.getElementById('weatherIMG').setAttribute('src', weatherIcon);
	// weatherBox.innerHTML = forecastIcon;

	var weatherIcon = document.getElementById('weatherIMG');


	if (icon == '01d') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/01d.png';
	}
	else if (icon == '01n') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/01n.png';
	}

	else if (icon == '02d') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/02d.png';
	}
	else if (icon == '02n') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/02n.png';
	}

	else if (icon == '03d') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/03d.png';
	}
	else if (icon == '03n') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/03n.png';
	}

	else if (icon == '04d') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/04d.png';
	}
	else if (icon == '04n') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/04n.png';
	}

	else if (icon == '09d') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/09d.png';
	}
	else if (icon == '09n') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/09n.png';
	}

	else if (icon == '10d') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/10d.png';
	}
	else if (icon == '10n') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/10n.png';
	}

	else if (icon == '11d') {
		return weatherIcon.src = 'http:openweathermap.org/img/w/11d.png';
	}
	else if (icon == '11n') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/11n.png';
	}

	else if (icon == '13d') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/13d.png';
	}
	else if (icon == '13n') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/13n.png';
	}

	else if (icon == '50d') {
		return weatherIcon.src =  'http:openweathermap.org/img/w/50d.png';
	}
	else {
		return weatherIcon.src =  'http:openweathermap.org/img/w/50n.png';
	}

	

}



function onAPIError(error) {
	console.error('Request failed', error);
	var weatherCity = document.getElementById('city');
	// laat als een error er is maakt hij hem hidden.
	weatherCity.className = 'hidden'; 

	var weatherType = document.getElementById('weather');
	// laat als een error er is maakt hij hem hidden.
	weatherType.className = 'hidden';

	var weatherTemp = document.getElementById('temp');
	// laat als een error er is maakt hij hem hidden.
	weatherTemp.className = 'hidden';

	var weatherList = document.getElementById('icon');
	// laat als een error er is maakt hij hem hidden.
	weatherList.className = 'hidden';
}





// init data stream
getAPIdata();

getAPIdataForecast();





