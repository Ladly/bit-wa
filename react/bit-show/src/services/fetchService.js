import { MOVIES_URL } from './../helpers/constants'
import { SHOW_DETAILS } from './../helpers/constants'

class FetchService {

    fetchMovies() {
        return fetch(MOVIES_URL)
            .then(response => response.json())
            .then(sliceIt => sliceIt.slice(0, 50))            
    }

    fetchDetails(id) {
        return fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
    }
} 

const fetchService = new FetchService()

export { fetchService }