class Movie {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}

const createMovie = ({id, name, image}) => {
    
    return new Movie (id, name, image)
}

const getMovies = arr => {
    let firstFifty = arr.slice(0, 49)
    let movieList  = firstFifty.map(element => {
        
        return createMovie(element)        
    });

    return movieList
}

export {
    getMovies, 
}
