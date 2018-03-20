import React from 'react'

export const PostList = (props) => { 
    const { posts } = props   
    return posts.map(post => {
        return <PostItem title={post.title} body={post.body} key={post.id}/>        
    })   
}