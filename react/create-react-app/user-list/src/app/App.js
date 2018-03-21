import React from 'react';

import { Header } from './partials/header'
import { Footer } from './partials/footer'
import { UserList } from './users/UserList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {usersView: true}
  }

  changeView = () => {
    const currentView = this.state.usersView ? false : true
    this.setState({usersView: currentView})  
  }

  
  render(){    
    return (
        <div className="container">
              <Header changeView={this.changeView}/>
              <UserList updateView={this.state.usersView}/>
              <Footer />
        </div>
    )
  }
}

export { App };
