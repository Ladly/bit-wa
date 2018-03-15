// rethink logic

export class Communications {
    constructor() {

    }
    fetchData(url) {
        let response = fetch(url)
        .then(res => {
            return res.json()
        })
        return response
    }
}


// function will suffice for now
const getData = url => {
     let response = fetch(url)
    .then(res => {
        return res.json()
    })
    return response
}

export { getData }