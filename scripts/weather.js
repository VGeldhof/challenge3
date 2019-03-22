
function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="3e55ddc5955b7f88c5f00cfff878c77c";
	var city = "koudekerk%20aan%20den%20rijn,nl";

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
}


function weatherIcon() {
	var bodyIcon = document.getElementById('icon');

	if (response.weather[0].description = "clear sky" && hour < 12) {
		bodyIcon.style.backgroundImage = 'http://openweathermap.org/img/w/01d.png';
	}
	else {
		bodyIcon.style.backgroundImage = 'http://openweathermap.org/img/w/10d.png';
	}


}

// init data stream
getAPIdata();










