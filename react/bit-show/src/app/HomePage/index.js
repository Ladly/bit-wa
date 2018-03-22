import React, { Component, Fragment } from 'react'

import "./style.css"
import { Header } from './../partials/Header'
import { Footer } from './../partials/Footer'
import { MovieList } from './../Components/MovieList.js'
import { fetchService } from './../../services/fetchService'
import { createMovieEntities } from './../../helpers/helpers'


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    fetchMovies = () => {
        fetchService.fetchMovies()
            .then(movies => createMovieEntities(movies)) 
            .then(strippedMovies => {
                console.log(strippedMovies)
                this.setState({
                    movies: strippedMovies
                })
            })           
    }

    componentDidMount() {
        this.fetchMovies()
    }

    render() {
        return (
        <Fragment>
            <Header /> 
            <div className="container stupid-div">
                <MovieList movies={this.state.movies}/>
            </div> 
            <Footer /> 
        </Fragment>
        )
    }
}

export { HomePage }