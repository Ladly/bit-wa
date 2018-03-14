const Post = require ("./post")

const loremIpsum = require("lorem-ipsum")

const getTitle = () => loremIpsum({
    count: 3,
    units: "words"
})


const getIntro = () => loremIpsum({
    count: 2,
    units: "sentences"
})

const getFakeData = (count) => {
    const title = getTitle;
    const intro = getIntro
    const posts = []
    for(var i = 0; i < count; i++) {
        const post = new Post (i, getTitle(), getIntro())        
        posts.push(post)
    }
    return posts
}

const result = JSON.stringify(getFakeData(5))


module.exports = { result }