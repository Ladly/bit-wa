import  User  from "./entities/user.js"

const constants = {
    baseUrl: "https://api.github.com/search/users?q=girls"
}

// Exposed functions
const adaptData = (users) => {

    const userList = users.map((user) => {
        const { id, login, avatar_url } = user
        return new User(id, login, avatar_url)
    })

    return userList
}

export {
    constants,
    adaptData
}