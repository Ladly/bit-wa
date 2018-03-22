import React from 'react'

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">BitShow</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" />
            <div className="dropdown">
              <ul>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    )
}