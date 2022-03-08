import PostList from "../../components/posts/post-list";
import { getAllPosts } from "../../helpers/posts-utils"

function AllPost({ posts }) {
    return (
        <>
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