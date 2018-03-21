import React from 'react'
import PropTypes from 'prop-types';

import { getAdequateFormatDate } from './../../shared/utils'

const checkGender = (gender) => {
    return (gender === "female") ? "card #ffebee red lighten-5" : "card"
} 

export const UserListItemCards = (props) => {
    
    return (

        <div className="col s3">
            <div className={checkGender(props.gender)}>
                <div className="card-image">
                    <img src={props.src} alt="avatar" />
                    <span className="card-title">{`name: ${props.name}`}</span>
                </div>
                <div className="card-content">
                    <p>{`email: ${props.email}`}<br />                
                    {`date of birth ${getAdequateFormatDate(props.dob)}`}
                    </p>
                </div>
            </div>
        </div>
    )
}

UserListItemCards.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
  };