import {
    User
} from './../entities/User'
import axios from 'axios';

class UserService {
    
    getUserData(data) {
        return data.map(user => {
            return new User(user.name, user.email, user.dob, user.picture)
        })
    }

    fetchUsers() {
    return axios.get('https://randomuser.me/api/?results=15')
        .then( response => {
            return response.data.results
        })
        .then( users => {
            return users.map(user => {
                return new User(user.name, user.email, user.dob, user.picture)
            })
        })
    }
}

export const userService = new UserService()