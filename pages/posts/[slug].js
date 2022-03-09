import React from 'react'
import PostContent from '../../components/posts/post-content'
import { getPostData, getPostsFiles } from '../../helpers/posts-utils'

function SinglePost({ data }) {
    return (
        <>
            <PostContent postData={data} />
        </>
    )
}

export default SinglePost

export const getStaticProps = (context) => {
    const { params } = context;
    const { slug } = params
    const postData = getPostData(slug);
    return {
        props: {
            data: postData
        },
        revalidate: 600,
    }
}
export const getStaticPaths = () => {
    const postsFileNames = getPostsFiles()
    const postsSlugs = postsFileNames.map((fileName) => fileName.replace(/\.md$/, ''))
    return {
        paths: postsSlugs.map((slug) => ({ params: { slug: slug } })),
        fallback: true
    }
}