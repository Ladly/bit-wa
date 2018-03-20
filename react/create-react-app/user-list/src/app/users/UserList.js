import React from 'react'

import { UserListItem } from './UserListItem'
// import { UserListItemCards } from './UserListItemCards'
import { semiHideEmail } from './../../shared/utils'
import { userService } from './../../services/UserServices'

export class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            users: []
        }
    }

    componentDidMount() {
        userService.fetchUsers()
            .then((listOfUsers) => {
                this.setState({ users: listOfUsers });
            })
    }

    render() {
        return (
            <ul className="collection">
                {
                    this.state.users.map((user, i) => 
                    <UserListItem
                        key={i}
                        name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                        email={semiHideEmail(user.email)}
                        dob={user.dob}
                        src={user.picture.medium}
                    />)
                }
            </ul>
        )
    }
}


