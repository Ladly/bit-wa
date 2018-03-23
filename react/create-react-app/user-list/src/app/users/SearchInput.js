import React, { Component } from 'react'

class SearchInput extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        
        this.state = {
            value: ""
        }
    }

    handleChange = (e) => {
        const users = this.props.userSearch 
        const currentState = e.target.value             
        this.setState(() => {
            return {
                ...this.state,
                value: currentState
            }        
        })

        const filteredUsers = users.filter(({name}) => {
            name=name.first                        
            return name.includes(this.state.value)
        })
        
        console.log(filteredUsers);
         
               
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state) {
            // this.handleChange()
        }
    }

    render = () => {
        return( 
        <nav>
            <div className="nav-wrapper">
            <form>
                <div className="input-field">
                <input id="search" type="search" value={this.state.value} onChange={this.handleChange}/>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
                </div>
            </form>
            </div>
        </nav>
        )
    }
}

export { SearchInput }