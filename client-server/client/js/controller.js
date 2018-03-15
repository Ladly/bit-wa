import { getData, displayData } from "./view.js"
import { urls } from "./constants.js"
import { get } from "./entities/comms.js"

const init = () => {

    get.fetchData(urls.getMyServerData)
    .then(posts => {
        return getData(posts);
    })
    .then (result => {
        displayData(result);
        
    })
}

export { init }
