import React from 'react'
import PropTypes from 'prop-types';

import { getAdequateFormatDate } from './../../shared/utils'

const checkGender = (gender) => {
    return (gender === "female") ? "collection-item avatar #ffebee red lighten-5" : "collection-item avatar"
}

export const UserListItem = (props) => {
    return (
        <li className={checkGender(props.gender)}  >
            <img src={props.src} alt="avatar" className="circle" />                
            <span className="title">{`name: ${props.name}`}</span>                
            <p><i className="material-icons">email</i>{`email: ${props.email}`}</p>               
            <p><i className="material-icons">cake</i>{`date of birth ${getAdequateFormatDate(props.dob)}`}</p>
        </li>
    )
}

UserListItem.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
  };