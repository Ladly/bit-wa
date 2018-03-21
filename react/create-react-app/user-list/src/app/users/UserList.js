import React from 'react'

import { UserListItem } from './UserListItem'
import { UserListItemCards } from './UserListItemCards'
import { semiHideEmail } from './../../shared/utils'

export const UserList = (props) => {
    
    const renderCardView = () => {
        return props.users.map((user, i) => 
        <UserListItemCards
        key={i}
        name={`${user.name.title} ${user.name.first} ${user.name.last}`}
        email={semiHideEmail(user.email)}
        dob={user.dob}
        src={user.picture.medium}
        gender={user.gender}
        />)
        
    }
    
    const renderListView = () => {      
        return props.users.map((user, i) => 
        <UserListItem
        gender={user.gender}
        key={i}
        name={`${user.name.title} ${user.name.first} ${user.name.last}`}
        email={semiHideEmail(user.email)}
        dob={user.dob}
        src={user.picture.medium}
        />)
    }
    
    const pickView = () => (props.updateView) ? renderListView() : renderCardView()
    
    return (
        <ul className="collection">
            { pickView() }
        </ul>
    )
}



