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
        let request = new XMLHttpRequest();
        request.open('GET', `${urls.search}${this.value}`);
        request.send();
        
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                let response = JSON.parse(request.responseText);
                ui.displaySearchResults(response)
                
            } else {
                
                throw new Error("Something went wrong")
            }
        };
        
    }
})

const initDisplayShows = () => {
    let request = new XMLHttpRequest();
    request.open('GET', urls.display50);
    request.send();
    
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            let response = JSON.parse(request.responseText);
            let movieList = getMovies(response)               
            ui.displayMovies(movieList)
        } else {
            
            throw new Error("Something went wrong")
        }
    };
    
    request.onerror = () => {
        
        throw new Error("Something went wrong")
    };      
}

const intShowDetail = () => {
    let requestShowDetails = new XMLHttpRequest();
    requestShowDetails.open('GET', urls.details + localStorage.showId);
    requestShowDetails.send();
    
    requestShowDetails.onload = () => {
        if (requestShowDetails.status >= 200 && requestShowDetails.status < 400) {
            let response = JSON.parse(requestShowDetails.responseText);
            ui.displayShowDetails(response)
        } else {
            
            throw new Error("Something went wrong")
        }
    };
    
    requestShowDetails.onerror = () => {
        
        throw new Error("Something went wrong")
    };
    
    let requestShowCasts = new XMLHttpRequest();
    requestShowCasts.open('GET', `${urls.details}${localStorage.showId}/cast`);
    requestShowCasts.send();
    
    requestShowCasts.onload = () => {
        if (requestShowCasts.status >= 200 && requestShowCasts.status < 400) {
            let response = JSON.parse(requestShowCasts.responseText);
            ui.displayShowCast(response)
        } else {
            
            throw new Error("Something went wrong")
        }
    };
    
    requestShowCasts.onerror = () => {            
        throw new Error("Something went wrong")
    };  
    
    let requestShowSeasons = new XMLHttpRequest();
    requestShowSeasons.open('GET', `${urls.details}${localStorage.showId}/seasons`);
    requestShowSeasons.send();
    
    requestShowSeasons.onload = () => {
        if (requestShowSeasons.status >= 200 && requestShowSeasons.status < 400) {
            let response = JSON.parse(requestShowSeasons.responseText);
            ui.displayShowSesons(response)
            
        } else {
            
            throw new Error("Something went wrong")
        }
    };
    
    requestShowSeasons.onerror = () => {
        
        throw new Error("Something went wrong")
    };      

    let requestShowAkA = new XMLHttpRequest();
    requestShowAkA.open('GET', `${urls.details}${localStorage.showId}/akas`);
    requestShowAkA.send();
    
    requestShowAkA.onload = () => {
        if (requestShowAkA.status >= 200 && requestShowAkA.status < 400) {
            let response = JSON.parse(requestShowAkA.responseText);
            // console.log(response);
            
        } else {
            
            throw new Error("Something went wrong")
        }
    };
    
    requestShowAkA.onerror = () => {
        
        throw new Error("Something went wrong")
    };         
}

export {
    initDisplayShows,
    intShowDetail
}