import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  const pickView = () => {
    
    return (props.changeIcon === false) ? 
    <i className="material-icons">view_module</i>
     : <i className="material-icons">view_list</i>
  }
  
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo left">React Users</a>
        <ul className="right hide-on-med-and-down">
          <li><Link to={'/about'}>About</Link></li>
          <li><a href="#!" onClick={props.changeView}>{pickView()}</a></li>
          <li><a href="#!" onClick={props.fetchUsers}><i className="material-icons">refresh</i></a></li>
        </ul>
      </div>
    </nav>        
  )
}