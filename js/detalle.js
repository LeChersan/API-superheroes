let params = new URLSearchParams(window.location.search)
let idHeroe = params.get("id")
console.log(idHeroe)

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
    settings.url = `https://rapidapi.p.rapidapi.com/?id=${idHeroe}`

    $.get(settings)
    .done(function(heroe){
        let imgHeroe= `<img src="${heroe.images.md}" alt="${heroe.name}" width="100%">`
        $("#contentImgHeroe").html(imgHeroe)
        
        let detalleHeroe = `<p class="lead">${heroe.biography.fullName}</p>
                            <h1 class="display-4 text-info">${heroe.name}</h1>
                            <p class="lead text-muted">${heroe.connections.groupAffiliation}</p>
                            <br>`
        let tablaHeroe = `<div class="row">
                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div class="list-group" id="list-tab" role="tablist">
                                    <a class="list-group-item list-group-item-action active" id="list-power-list" data-toggle="list" href="#list-power" role="tab" aria-controls="power">Power stats</a>
                                    <a class="list-group-item list-group-item-action" id="list-work-list" data-toggle="list" href="#list-work" role="tab" aria-controls="work">Work</a>
                                    <a class="list-group-item list-group-item-action" id="list-appearance-list" data-toggle="list" href="#list-appearance" role="tab" aria-controls="appearance">Appearance</a>
                                </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="list-power" role="tabpanel" aria-labelledby="list-power-list">
                                        <p class="lead"> Intelligence <span>: ${heroe.powerstats.intelligence} </span></p>
                                        <p class="lead"> Strength <span>: ${heroe.powerstats.strength} </span></p>
                                        <p class="lead"> Speed <span>: ${heroe.powerstats.speed} </span></p>
                                        <p class="lead"> Durability <span>: ${heroe.powerstats.durability} </span></p>
                                        <p class="lead"> Power <span>: ${heroe.powerstats.power} </span></p>
                                        <p class="lead"> Combat <span>: ${heroe.powerstats.combat} </span></p>
                                    </div>
                                    <div class="tab-pane fade" id="list-work" role="tabpanel" aria-labelledby="list-work-list">
                                        <p class="lead"> Occupation <span>: ${heroe.work.occupation}</span></p> 
                                        <p class="lead"> Base <span>: ${heroe. work.base}</span></p> 
                                    </div>
                                    <div class="tab-pane fade" id="list-appearance" role="tabpanel" aria-labelledby="list-appearance-list">
                                        <p class="lead"> Gender <span>: ${heroe.appearance.gender}</span></p>
                                        <p class="lead"> Race <span>: ${heroe.appearance.race}</span></p>
                                    </div>
                                </div>
                                </div>
                            </div>`
        $("#contentDetalleHeroe").append(detalleHeroe)
        $("#contentDetalleHeroe").append(tablaHeroe)

        




        // console.log(heroe);
        // console.log(heroe.name)
        // console.log(heroe.powerstats.power)
        // console.log(heroe.work.occupation)
        // console.log(`mi nombre es ${heroe.name}, y trabajo de ${heroe.work.occupation}`)
    })
    .fail(function(){
        console.log("error en el servidor, favor de intentar mas tarde")
    })
    .always(function(){
        console.log("finished")
    })







