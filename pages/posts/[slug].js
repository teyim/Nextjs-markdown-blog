
import PostContent from '../../components/posts/post-content'
import { getPostData, getPostsFiles } from '../../helpers/posts-utils'
import { NextSeo } from 'next-seo';

function SinglePost({ data }) {
    return (
        <>
            <NextSeo
                title={data.title}
                description={data.excerpt}
            />
            <PostContent postData={data} />
        </>
    )
}



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
        paths: postsSlugs.map((slug) => ({ params: { slug } })),
        fallback: false
    }
}

export default SinglePost