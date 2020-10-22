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

let elementsRender = {
    cardSmall: (dataHeroe) => {
        console.log(`renderCardSmall ${dataHeroe.name}`)

        let card = `<div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <img src="${dataHeroe.images.md}" alt="${dataHeroe.name}" width="80%" class="imgCircle">
                        <h2>${dataHeroe.name}</h2>
                        <p>${dataHeroe.connections.groupAffiliation}</p>
                        <button type="button" class="btn btn-secondary">Secondary</button>
                        <br>
                        <br>
                    </div>`
    
        $("#contentCards").append(card)

    },
    cardLargeImgLeft: (dataHeroe) => {
        console.log(`renderCardLargeImgLeft ${dataHeroe.name}`)

    },
    cardLargeImgRight: (dataHeroe) => {
        console.log(`renderCardLargeImgRight ${dataHeroe.name}`)

    }
}

const getHeroes = (numeroHeroe) =>{

    let nombreHeroes = ["spiderman", "hulk", "superman", "wonderwoman", "thor", "blackpanther"]
    settings.url = `https://rapidapi.p.rapidapi.com/?hero=${nombreHeroes[index]}`

    $.get(settings)
    .done(function(heroe){
        // console.log(heroe);
        // console.log(heroe.name)
        // console.log(heroe.powerstats.power)
        // console.log(heroe.work.occupation)
        // console.log(`mi nombre es ${heroe.name}, y trabajo de ${heroe.work.occupation}`)
        // console.log(`${heroe.name} en la posicion: ${numeroHeroe}`)

        if (numeroHeroe == 0 || numeroHeroe == 1 || numeroHeroe == 2 ){
            elementsRender.cardSmall(heroe)
        } 

        if (numeroHeroe == 3 || numeroHeroe == 5){
            elementsRender.cardLargeImgLeft(heroe)
        }

        if (numeroHeroe == 4){
            elementsRender.cardLargeImgRight(heroe)
        }
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
    
    getHeroes(index)
    index++

    if (index >= 6){
        myStopFunction()
    }

}, 1550);

const myStopFunction = () => {

    clearInterval(cicloApi);

}






