import PostCard from "./post-card"

function PostList({ posts, heading }) {

    const displayedPost = (posts.length > 0 ? (
        posts.map(post => (
            <PostCard key={post.slug} post={post} />
        ))
    ) : <h1 className="font-Rubik text-lg text-gray-700 text-center md:text-left my-2 md:my-0 md:text-xl ">Nothing available :)</h1>)
    return (

        <div className="w-full font-Rubik text-gray-800 ">

            <div className="max-w-screen-2xl flex flex-wrap overflow-hidden justify-evenly px-2 py-4">
                <div className="w-full md:py-6 md:px-14 ">
                    <h1 className="font-Bai text-2xl font-bold text-center md:text-left my-2 md:my-0 md:text-3xl ">{heading ? heading : "All Posts"}</h1>
                </div>
                {displayedPost}
            </div>
        </div>


    )
}

export default PostList