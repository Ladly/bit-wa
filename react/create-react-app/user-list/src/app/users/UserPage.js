import React from 'react';

import { Header } from './../partials/header'
import { UserList } from './UserList';
import { SearchInput } from './SearchInput'
import { userService } from './../../services/UserServices'

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      listView: this.getInitialView(),
      users: []
    }
  }

  changeView = () => {
    const currentView = this.state.listView ? false : true
    localStorage.setItem("listView", currentView)
    this.setState({ listView: currentView })
  }

  getInitialView = () => {
    return localStorage.getItem("listView") === "true"
  }

  fetchFunction = () => {  
    userService.fetchUsers()
        .then((listOfUsers) => {                
            this.setState({ users: listOfUsers });
        })        
  }

  componentDidMount() {  
    this.fetchFunction()    
 }   

  render() {    
    return (
      <div>
        <Header changeView={this.changeView} changeIcon={this.state.listView}  fetchUsers={this.fetchFunction}/>
        <SearchInput userSearch={this.state.users} />
        <UserList updateView={this.state.listView} users={this.state.users}/>
      </div>
    )
  }
}

export { UserPage };