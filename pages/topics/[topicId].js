import { useRouter } from "next/router";
import PostList from "../../components/posts/post-list"
import { getPostByTopic } from "../../helpers/posts-utils";
import { NextSeo } from 'next-seo';

function Topics({ data }) {
    const router = useRouter();
    const { topicId } = router.query;
    return (
        <div className='my-4 '>
            <NextSeo
                title="Topics"
                description="Topics related to programming blog posts"
            />
            <PostList posts={data} heading={topicId} />
        </div>
    )
}

export const getStaticProps = (context) => {
    const { params } = context;
    const { topicId } = params
    const posts = getPostByTopic(topicId)
    return {
        props: {
            data: posts
        },
    }
}
export const getStaticPaths = () => {
    const topics = ['react-js', 'css', 'next-js', 'typescript', 'vanilla-js', 'react-native']
    return {
        paths: topics.map((topic) => ({ params: { topicId: topic } })),
        fallback: false
    }
}

export default Topics