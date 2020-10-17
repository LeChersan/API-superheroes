const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidapi.p.rapidapi.com/?hero=spiderman",
    "method": "GET",
    "dataType": "JSON",
	"headers": {
		"x-rapidapi-host": "superhero-search.p.rapidapi.com",
		"x-rapidapi-key": "ea87489f06msh70793185516e01dp1b9184jsn9855950a0bfe"
	}
}

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// })

$.get(settings)
.done(function(response){
    console.log(response);
    console.log(response.name)
    console.log(response.powerstats.power)
    console.log(response.work.occupation)
    console.log(`mi nombre es ${response.name}, y trabajo de ${response.work.occupation}`)
})
.fail(function(){
    console.log("error en el servidor")
})
.always(function(){
    console.log("finished")
})

