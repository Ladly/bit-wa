import { createStrangeEntity } from "./model.js"

const nodes = {
    holder: document.querySelector(".holder")
}

const getData = (arr) => {
    arr.forEach(element => {
        return createStrangeEntity(element);
    });
    return arr    
}

const displayData = (arr) => {
    arr.forEach(elem => {
        let cardDiv = document.createElement("div")
        let title = document.createElement("h2")
        let intro = document.createElement("p")

        title.textContent = elem.title
        intro.textContent = elem.intro
        cardDiv.appendChild(title)
        cardDiv.appendChild(intro)
        nodes.holder.appendChild(cardDiv)
    })
}

export { 
        getData,
        displayData 
        }  

