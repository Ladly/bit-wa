import React from 'react'

export class Header extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo left">React Users</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#!"><i className="material-icons">search</i></a></li>
            <li><a href="#!" onClick={this.props.changeView}><i className="material-icons">view_module</i></a></li>
            <li><a href="#!"><i className="material-icons">refresh</i></a></li>
          </ul>
        </div>
      </nav>        
    )
  }
}