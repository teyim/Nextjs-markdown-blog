import PostCard from "./post-card"

function PostList({ posts, topic }) {
    return (

        <div className="w-full font-Rubik text-gray-800 ">

            <div className="max-w-screen-2xl flex flex-wrap  overflow-hidden  justify-evenly  p-8">
                <div className="w-full md:py-6 md:px-14">
                    <h1 className="font-Bai text-3xl font-bold text-center md:text-left my-2 md:my-0 md:text-2xl ">{topic ? topic : "All Posts"}</h1>
                </div>

                {posts.map(post => (
                    <PostCard key={post.slug} post={post} />
                ))}

            </div>
        </div>


    )
}

export default PostList