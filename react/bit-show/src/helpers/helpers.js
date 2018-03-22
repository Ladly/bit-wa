import { Movie } from './../entities/Movie'
import { ShowDetails } from './../entities/ShowDetails'

export const createMovieEntities = (arr) => {
    return arr.map(elem => {
            return new Movie(elem.id, elem.name, elem.image.medium)
    })
}

export const createShowDetails = (obj) => {
    return new ShowDetails(obj.name, obj.image, obj.summary)
} 