const Header = () => {
    return (
        <h1>Logo</h1>
    )
}

const Main = (props) => {
    const { posts } = props
    return (
        <PostList posts={posts} />
    )
}
const App = (props) => {
    const { posts } = props

    return (
        <div>
            <Header />
            <Main posts={posts} />
        </div>
    )

}

const PostList = (props) => { 
    const { posts } = props   
    return posts.map(post => {
        return <PostItem title={post.title} body={post.body} key={post.id}/>        
    })   
}

const PostItem = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

ReactDOM.render(<App posts={posts} />, document.querySelector(".root"))