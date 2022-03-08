import React from 'react'
import PostContent from '../../components/posts/post-content'

function SinglePost() {
    return (
        <>
            <PostContent />
        </>
    )
}

export default SinglePost

export const getStaticProps = (context) => {
    console.log(context)
    return {
        props: {
            data: 'hello'
        }
    }
}
export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}