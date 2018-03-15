class Comms {
    constructor() {

    }

    fetchData(url) {
        return fetch(url)
        .then(response => {
            return response.json()
        })
    }
}

export const get = new Comms()