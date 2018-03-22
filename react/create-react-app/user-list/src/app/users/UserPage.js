import React, { Component } from 'react';

import { Header } from './../partials/header'
import { UserList } from './UserList';
import { SearchInput } from './SearchInput'
import { userService } from './../../services/UserServices'
import { Spinner } from './../partials/Spinner'

class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      listView: this.getInitialView(),
      users: [],
      loaded: true
    }
  }

  changeView = () => {
    const currentView = !this.state.listView
    localStorage.setItem("listView", currentView)
    this.setState({ listView: currentView })
  }

  getInitialView = () => {
    return localStorage.getItem("listView") === "true"
  }

  fetchUsers = () => {  
    this.setState({ loaded: false })
    userService.fetchUsers()
        .then((listOfUsers) => {                
            this.setState({ 
              users: listOfUsers,
              loaded: true
             });
        })        
  }

  componentDidMount() {  
    this.fetchUsers()    
 }   

 loading = () => {
   return (this.state.loaded) ? (<div> <SearchInput userSearch={this.state.users} /> 
    <UserList updateView={this.state.listView} users={this.state.users}/></div>) :
    <Spinner />
 }

  render() { 
    return (
      <div>
        <Header changeView={this.changeView} changeIcon={this.state.listView}  fetchUsers={this.fetchUsers}/>
        {this.loading()}
      </div>
    )
  }
}

export { UserPage };