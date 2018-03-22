import React from 'react'
import { MovieListItem } from './MovieListItem'

export const MovieList = (props) => {
    return props.movies.map((movie, i) => {        
            return <MovieListItem 
                key = {i}
                name={movie.name}
                image={movie.image}
                alt={movie.alt}
            />
        }
    )
}

