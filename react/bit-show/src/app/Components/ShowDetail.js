import React, { Fragment } from 'react';

export const DisplayShow = (props) => {
    return (
        <Fragment>
            <h2>{props.show.name}</h2>
            <img src={props.show.image} alt={props.show.name} /> 
            <p>{props.show.summary}</p>
        </Fragment>    
    )   
}

// fix image