const settings = {
	"async": true,
	"crossDomain": true,
	"url": "",
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

// for (let index = 20; index < 31; index++){
//     console.log(index)
// }

// for( let index2 = 5; index2 < 10 ; index2++ ){
//     console.log(index2)
// }
// for( let index3 = 1; index3 < 7; index3++){    
// }

const getHeroes = () =>{

    let nombreHeroes = ["spiderman", "hulk", "superman", "wonderwoman", "thor", "blackpanther"]
    settings.url = `https://rapidapi.p.rapidapi.com/?hero=${nombreHeroes[index]}`

    $.get(settings)
    .done(function(heroe){
        console.log(heroe);
        console.log(heroe.name)
        console.log(heroe.powerstats.power)
        console.log(heroe.work.occupation)
        console.log(`mi nombre es ${heroe.name}, y trabajo de ${heroe.work.occupation}`)
    })
    .fail(function(){
        console.log("error en el servidor, favor de intentar mas tarde")
    })
    .always(function(){
        console.log("finished")
    })
}

let index = 0

let cicloApi = setInterval(function(){ 

    
    getHeroes()
    index++


    if (index >= 6){
        myStopFunction()
    }

}, 1700);

const myStopFunction = () => {

    clearInterval(cicloApi);

}






