import React from 'react'
import { Link } from 'react-router-dom'

export const MovieListItem = (props) => {
    console.log(props.id)
    return (
        <div> 
            <Link to={`showdetails/${props.id}`}>    
            {/* <a href=>  */}
            <img src={props.image} alt={props.name}/>
            <h3>{props.name}</h3>
            {/* </a> */}
            </Link>
        </div>  
    )
}  