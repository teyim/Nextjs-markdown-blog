import PostList from "../../components/posts/post-list";
import { getAllPosts } from "../../helpers/posts-utils"
import { NextSeo } from 'next-seo';

function AllPost({ posts }) {
    return (
        <>
            <NextSeo
                title="All post"
                description="A list of all blog post"
            />
            <PostList posts={posts} />
        </>
    )
}

export const getStaticProps = () => {
    const data = getAllPosts();
    return {
        props: {
            posts: data
        }
    }
}

export default AllPost