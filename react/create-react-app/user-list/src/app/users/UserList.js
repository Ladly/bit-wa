import React from 'react'

import { UserListItem } from './UserListItem'
import { UserListItemCards } from './UserListItemCards'
import { semiHideEmail } from './../../shared/utils'
import { userService } from './../../services/UserServices'

export class UserList extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        
        this.state = { 
            users: [],
            usersView: this.props.updateView
        }
    }

    componentDidMount() {
        userService.fetchUsers()
            .then((listOfUsers) => {                
                this.setState({ users: listOfUsers });
            })
    }

    renderCardView = () => {
        return this.state.users.map((user, i) => 
                    <UserListItemCards
                        key={i}
                        name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                        email={semiHideEmail(user.email)}
                        dob={user.dob}
                        src={user.picture.medium}
                        gender={user.gender}
                    />)
    }

    renderListView = () => {
        return this.state.users.map((user, i) => 
            <UserListItem
                gender={user.gender}
                key={i}
                name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                email={semiHideEmail(user.email)}
                dob={user.dob}
                src={user.picture.medium}
            />)
    }

    pickView = () => this.state.usersView ? this.renderListView() : this.renderCardView()
    
    render() {
        return (
            <ul className="collection">
                { this.pickView() }
            </ul>
        )
    }
}


