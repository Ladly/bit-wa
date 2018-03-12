import * as ui from "./view.js"
import * as data from "./model.js"

const init = () => {
    const { baseUrl } = data.constants
    fetchUsers(baseUrl)
}

const fetchUsers = (url) => {
    $.get(url)
        .done(onSuccessHandler)
        .fail(onErrorHandler)
}

// Our handlers for shows
const onSuccessHandler = (response) => {
    const adaptedUsers = data.adaptData(response.items)
    ui.displayUsers(adaptedUsers)
}

const onErrorHandler = (error) => {
    ui.displayError(error)
}



export {
    init
}
