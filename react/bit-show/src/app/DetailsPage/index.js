import React, { Component, Fragment } from 'react'

import './style.css'
import { Header } from './../partials/Header'
import { Footer } from './../partials/Footer'
import { DisplayShow } from './../Components/ShowDetail'
import { fetchService } from './../../services/fetchService'
import { createShowDetails } from './../../helpers/helpers'

class ShowDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDetails: {} 
        }
    }

    fetchDetails = () => {
        fetchService.fetchDetails(5)
            .then(show => createShowDetails(show))        
            .then(result => {
                this.setState({
                    showDetails: result
                })
            })           
    }

    componentDidMount() {
        this.fetchDetails()
    }

    render() {
        return (
            <Fragment>
            <Header /> 
            <div className="container stupid-div">
                <DisplayShow show={this.state.showDetails}/>
            </div> 
            <Footer /> 
        </Fragment>
        )
    }

}

export { ShowDetails }


