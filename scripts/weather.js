
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



	var weatherList = response.list;
	var weatherBox = document.getElementById('icon');
	
	for(var i=0; i<weatherList.length; i++){
		
		var dateTime = new Date(weatherList[i].dt_txt);
		var iconUrl = 'http://openweathermap.org/img/w/' + weatherList[i].weather[0].icon + '.png';

		forecastMessage += '<img src="' + iconUrl + '">';

		weatherBox.innerHTML = forecastMessage;

	}
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
	
	var weatherList = response.weather.weather.icon;
	var weatherBox = document.getElementById('icon');
	
	for(var i=0; i<weatherList.length; i++){
		
		var dateTime = new Date(weatherList[i].dt_txt);
		var iconUrl = 'http://openweathermap.org/img/w/' + weatherList[i].weather[0].icon + '.png';

		forecastMessage += '<img src="' + iconUrl + '">';

		weatherBox.innerHTML = forecastMessage;

	}
}



function getAPIdataZomato() {

	var url = "https://developers.zomato.com/api/v2.1/cities";
	var apiKey ="79c55a16192a56bb6f9e4dec7af22bc5";
	var city = "Houston";

	// construct request
	var request = url + "?" + "q=" + city;
	var myHeaders = new Headers();

	myHeaders.append('user-key', '79c55a16192a56bb6f9e4dec7af22bc5');	
	

	// get current city details
	fetch(request, {
		method:'GET', 
		headers: {
			'user-key': '79c55a16192a56bb6f9e4dec7af22bc5'
		}
	
	})
	
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
		onAPISuccesZomato(response);	
	})
	
	// catch error
	// Hier vang je de fout op.
	// als je de fout gevangen hebt moet je dit gaan uitvoeren.
	.catch(function (error) {
		onAPIError(error);
	});
}

function onAPISuccesZomato(response) {

	var type = response.location_suggestions[0].name;

	var foodType = document.getElementById('cityName');
	
	foodType.innerHTML = type;

}




function getAPIdataZomatoCollections() {

	var url = "https://developers.zomato.com/api/v2.1/collections";
	var apiKey ="79c55a16192a56bb6f9e4dec7af22bc5";
	var city = "277";

	// construct request
	var request = url + "?city_id=" + city;

	var myHeaders = new Headers();

	myHeaders.append('user-key', '79c55a16192a56bb6f9e4dec7af22bc5');	
	

	// get current city details
	fetch(request, {
		method:'GET', 
		headers: {
			'user-key': '79c55a16192a56bb6f9e4dec7af22bc5'
		}
	})
	
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
		onAPISuccesZomatoCollections(response);	
	})
	
	// catch error
	// Hier vang je de fout op.
	// als je de fout gevangen hebt moet je dit gaan uitvoeren.
	.catch(function (error) {
		onAPIError(error);
	});
}

function onAPISuccesZomatoCollections(response) {
	console.log(response)

	var restaurant = response.collections[0].collection.title;

	var collectionTitle = document.getElementById('collectionTitle');

	collectionTitle.innerHTML = restaurant;

	var restaurantDescription = response.collections[0].collection.description;

	var collectionDescription = document.getElementById('collectionDescription');

	collectionDescription.innerHTML = restaurantDescription;



	// var restaurantURL = response.collections[0].collection.url;
	// var collectionURL = document.getElementById('collectionIMG').setAttribute('src', response.collections[0].collection.image_url);


}




function getAPIdataZomatoTop() {

	var url = "https://developers.zomato.com/api/v2.1/";
	var apiKey ="79c55a16192a56bb6f9e4dec7af22bc5";
	var city = "277";
	var collectionID = "1";
	var entityType = "city";
	var sort = "rating"

	// construct request
	var request = url + "search?entity_id=" + city + "&entity_type=" + entityType + "&collection_id=" + collectionID + "&sort=" + sort;

	var myHeaders = new Headers();

	myHeaders.append('user-key', '79c55a16192a56bb6f9e4dec7af22bc5');	
	

	// get current city details
	fetch(request, {
		method:'GET', 
		headers: {
			'user-key': '79c55a16192a56bb6f9e4dec7af22bc5'
		}
	})
	
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
		onAPISuccesZomatoTop(response);	
	})
	
	// catch error
	// Hier vang je de fout op.
	// als je de fout gevangen hebt moet je dit gaan uitvoeren.
	.catch(function (error) {
		onAPIError(error);
	});
}

function onAPISuccesZomatoTop(response) {
	console.log(response)

	var dataName = response.restaurants[0].restaurant.name;
	var dataCuisine = response.restaurants[0].restaurant.cuisines;
	var dataAddress = response.restaurants[0].restaurant.location.address;
	var dataRating = response.restaurants[0].restaurant.user_rating.aggregate_rating;

	var restaurantName = document.getElementById('dataName');
	var restaurantCuisine = document.getElementById('dataCuisine');
	var restaurantAddress = document.getElementById('dataAddress');
	var restaurantRating = document.getElementById('dataRating');

	restaurantName.innerHTML = dataName;
	restaurantCuisine.innerHTML = dataCuisine;
	restaurantAddress.innerHTML = dataAddress;
	restaurantRating.innerHTML = dataRating + "/5";




	var dataNameTwo = response.restaurants[1].restaurant.name;
	var dataCuisineTwo = response.restaurants[1].restaurant.cuisines;
	var dataAddressTwo = response.restaurants[1].restaurant.location.address;
	var dataRatingTwo = response.restaurants[1].restaurant.user_rating.aggregate_rating;

	var restaurantNameTwo = document.getElementById('dataNameTwo');
	var restaurantCuisineTwo = document.getElementById('dataCuisineTwo');
	var restaurantAddressTwo = document.getElementById('dataAddressTwo');
	var restaurantRatingTwo = document.getElementById('dataRatingTwo');

	restaurantNameTwo.innerHTML = dataNameTwo;
	restaurantCuisineTwo.innerHTML = dataCuisineTwo;
	restaurantAddressTwo.innerHTML = dataAddressTwo;
	restaurantRatingTwo.innerHTML = dataRatingTwo + "/5";





	var dataNameThree = response.restaurants[2].restaurant.name;
	var dataCuisineThree = response.restaurants[2].restaurant.cuisines;
	var dataAddressThree = response.restaurants[2].restaurant.location.address;
	var dataRatingThree = response.restaurants[2].restaurant.user_rating.aggregate_rating;

	var restaurantNameThree = document.getElementById('dataNameThree');
	var restaurantCuisineThree = document.getElementById('dataCuisineThree');
	var restaurantAddressThree = document.getElementById('dataAddressThree');
	var restaurantRatingThree = document.getElementById('dataRatingThree');

	restaurantNameThree.innerHTML = dataNameThree;
	restaurantCuisineThree.innerHTML = dataCuisineThree;
	restaurantAddressThree.innerHTML = dataAddressThree;
	restaurantRatingThree.innerHTML = dataRatingThree + "/5";

}








// function getAPIdataJOD() {

// 	var url = "https://api.jokes.one";	
	
// 	var request = url + '/jod';

// 	// get current city details
// 	fetch(request, {
// 		method:'GET', 
// 		headers: {
// 			'X-JokesOne-Api-Secret': 'api_key'
// 		}
// 	})
	
// 	// parse to JSON format
// 	.then(function(response) {
// 		// if niet ok dan is er iets mis gegaan.
// 		if(!response.ok) {
// 			// throw betekent gooien. Dit wordt naar catch gegooid.
// 			throw Error(response.statusText);
// 		}
// 		return response.json();
// 	})
	
// 	// render weather per day
// 	// Als er geen error is wordt dit gedaan en voert die de functie onAPISucces uit.
// 	.then(function(response) {
// 		// render weatherCondition
// 		onAPISuccesJOD(response);	
// 	})
	
// 	// catch error
// 	// Hier vang je de fout op.
// 	// als je de fout gevangen hebt moet je dit gaan uitvoeren.
// 	.catch(function (error) {
// 		onAPIError(error);
// 	});
// }

// function onAPISuccesJOD(response) {
// 	console.log(response)
// 	var joke = response.contents.jokes[0].NewJoke.joke;

// 	var contentJoke = document.getElementById('JOD');

// 	contentJoke.innerHTML = joke;

// }











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

getAPIdataZomato();

getAPIdataZomatoCollections();

getAPIdataZomatoTop();

// getAPIdataJOD();










