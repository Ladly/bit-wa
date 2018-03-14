import * as ui from "./view.js" 
import  { nodes }  from "./constants.js"
import  { urls }  from "./constants.js"
import  { getMovies }  from "./model.js"

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

        const request = new Promise((resolve, reject) => {
            const response = fetch(`${urls.search}${this.value}`)
            resolve(response)
        })
        .then(response => {
            console.log(response);
            
            return res.json()
        })
        .then(searchResults => {
            ui.displaySearchResults(searchResults)
        })
        .catch(error => {
            throw new Error("Sever failed to response")
        })
    }
})

const initDisplayShows = () => {
    
    const request = new Promise((resolve, reject) => {
        const response = fetch(urls.display50)
        resolve(response)
    })
    .then(response => {
        return response.json()
    })
    .then(movieList => {
        ui.displayMovies(movieList)
    })
    .catch(error => {
        throw new Error("Server failed to response")
    })
}

const intShowDetail = () => {

    const requestShowDetails = new Promise((resolve, reject) => {
        const response = fetch(urls.details + localStorage.showId)
            resolve(response)
    })
    .then(response => {
        return response.json()
    })
    .then(showDetails => {
        ui.displayShowDetails(showDetails) 
    })
    .catch(error => {
        throw new Error("Server failed to response")
    })

    const requestShowCasts = new Promise((resolve, reject) => {
        const response = fetch(`${urls.details}${localStorage.showId}/cast`)
            resolve(response)
    })
    .then(response => {
        return response.json()
    })
    .then(showCast => {
        ui.displayShowCast(showCast)
    })
    .catch(error => {
        throw new Error("Server failed to response")
    })

    const requestShowSeasons = new Promise((resolve, reject) => {
        const response = fetch(`${urls.details}${localStorage.showId}/seasons`)
            resolve(response)
    })
    .then(response => {
        return response.json()
    })
    .then(seasons => {
        ui.displayShowSeasons(seasons)
    })
    .catch(error => {
        throw new Error("Server failed to response")
    })

    const requestShowAkA = new Promise((resolve, reject) => {
        const response = fetch(`${urls.details}${localStorage.showId}/akas`)
            resolve(response)
    })
    .then(response => {
        return response.json()

        // not finished
    })
    .catch(error => {
        throw new Error("Server failed to response")
    })    
}

export {
    initDisplayShows,
    intShowDetail
}
