import React from 'react'
import PropTypes from 'prop-types';

import { getAdequateFormatDate } from './../../shared/utils'


export const UserListItem = (props) => {
    return (
        <li className="collection-item avatar">
            <img src={props.src} alt="avatar" className="circle" />                
            <span className="title">{`name: ${props.name}`}</span>                
            <p>{`email: ${props.email}`}<br />                
            {`date of birth ${getAdequateFormatDate(props.dob)}`}
            </p>
        </li>
    )
}

UserListItem.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
  };