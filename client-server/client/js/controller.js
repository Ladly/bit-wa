import { getData, displayData } from "./view.js"

const init = () => {
    
    const request = new Promise((resolve, reject) => {
        const response = fetch('http://127.0.0.1:3000')
            resolve(response)
    })
    .then(response => {
        return response.json();
                             
    })
    .then(posts => {
        return getData(posts);
    })
    .then (result => {
        displayData(result);
        
    })
}

export { init }
