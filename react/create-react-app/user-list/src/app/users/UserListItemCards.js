import React from 'react'
import PropTypes from 'prop-types';

import { getAdequateFormatDate } from './../../shared/utils'


export const UserItemItemCards = (props) => {
    return (
        // <li className="collection-item avatar">
        //     <img src={props.src} alt="avatar" className="circle" />                
        //     <span className="title">{`name: ${props.name}`}</span>                
        //     <p>{`email: ${props.email}`}<br />                
        //     {`date of birth ${getAdequateFormatDate(props.dob)}`}
        //     </p>
        // </li>

        <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <img src={props.src} alt="avatar" />
                        <span class="card-title">{`name: ${props.name}`}</span>
                    </div>
                    <div class="card-content">
                        <p>{`email: ${props.email}`}<br />                
                        {`date of birth ${getAdequateFormatDate(props.dob)}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

UserItem.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
  };