function getAPIdataJoke() {

	var url = "https://official-joke-api.appspot.com/jokes/random";	
	
	var request = url;

	// fetch details
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
	
	.then(function(response) {
		// render joke
		onAPISuccesJoke(response);	
	})
	
	// catch error
	// Hier vang je de fout op.
	// als de fout gevangen is, moet voert hij dit gaan uitvoeren.
	.catch(function (error) {
		onAPIError(error);
	});
}

function onAPISuccesJoke(response) {
	// console.log(response)
	
	var jokeSetup = response.setup;
	var jokePunchline = response.punchline;

	var jokeQ = document.getElementById('jokeQ');
	var jokeA = document.getElementById('jokeA');

	jokeQ.innerHTML = jokeSetup;
	jokeA.innerHTML = jokePunchline;
}




function onAPIError(error) {
	console.error('Request failed', error);
	
}





// init data stream
getAPIdataJoke();










