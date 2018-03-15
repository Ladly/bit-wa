import * as ui from "./view.js" 
import  { nodes }  from "./constants.js"
import  { urls }  from "./constants.js"
import  { getMovies }  from "./model.js"
import { getData } from "./entities/communications.js"
import { errorHandler } from "./helpers.js"

const goTo = (url) => {
    window.location.assign(url)
}    

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("card-title")){
        const anchor = e.target
        let showId = anchor.parentElement.getAttribute("data-image-id")            
        localStorage.setItem("showId", showId)
        anchor.addEventListener("click", (goTo(urls.showDetailsPage))())           // this function gives me error. investigate or ask
    }
})

nodes.searchInput.addEventListener("keydown", function() {
    if(nodes.searchInput.value.length >= 3) {

        getData(`${urls.search}/${this.value}`)
        .then(searchResults => {
            ui.displaySearchResults(searchResults)
        })
        .catch(error => {
            throw new Error("Server failed to response")
        })
    }
})

const initDisplayShows = () => {
    
    getData(urls.display50)    
    .then(movieList => {
        ui.displayMovies(movieList)
    })
    .catch(error => {
        throw new Error("Server failed to response")
    })
}

const intShowDetail = () => {

    getData(`${urls.details}${localStorage.showId}`)    
    .then(showDetails => {
        ui.displayShowDetails(showDetails) 
    })
    .catch(error => {
        throw new Error("Server failed to response")
    })

    getData(`${urls.details}${localStorage.showId}/cast`)    
    .then(showCast => {
        ui.displayShowCast(showCast)
    })
    .catch(error => {
        throw new Error("Server failed to response")
    })

    getData(`${urls.details}${localStorage.showId}/seasons`)
    .then(seasons => {
        ui.displayShowSeasons(seasons)
    })
    .catch(error => {
        throw new Error("Server failed to response")
    })

    getData(`${urls.details}${localStorage.showId}/akas`)
    .catch(error => {
        throw new Error("Server failed to response")
    })    
}

export {
    initDisplayShows,
    intShowDetail
}
