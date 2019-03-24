function getAPIdataJoke() {

	var url = "https://official-joke-api.appspot.com/jokes/random";	
	
	var request = url;

	// get current city details
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
		onAPISuccesJoke(response);	
	})
	
	// catch error
	// Hier vang je de fout op.
	// als je de fout gevangen hebt moet je dit gaan uitvoeren.
	.catch(function (error) {
		onAPIError(error);
	});
}

function onAPISuccesJoke(response) {
	console.log(response)
	
	var jokeSetup = response.setup;
	var jokePunchline = response.punchline;

	var jokeQ = document.getElementById('jokeQ');
	var jokeA = document.getElementById('jokeA');

	jokeQ.innerHTML = jokeSetup;
	jokeA.innerHTML = jokePunchline;
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
getAPIdataJoke();










