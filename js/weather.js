var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=-102.291&lat=21.8818",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "9b292b9dc3msh7277f104a66f775p112f7cjsn7546d61d53a7"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});