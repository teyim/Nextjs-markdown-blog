import { AiOutlineLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import Image from "next/image";
import Link from 'next/link'

function PostCard({ post }) {
    const { title, image, excerpt, date, slug, readTime, topic } = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <>
            <Link href={linkPath} passHref>
                <div className="my-2 md:flex  w-[600px] overflow-hidden border rounded-lg border-gray-500 py-6 px-6 hover:shadow-sm hover:bg-slate-200 hover:cursor-pointer hover:border-slate-600">
                    <div className="md:w-7/12 text-center md:text-left">
                        <h1 className="font-Bai text-2xl font-bold">{title}</h1>
                        <h3 className="text-gray-600 my-2 text-lg">{excerpt}</h3>
                    </div>
                    <div className="md:w-5/12 h-full">
                        <Image src={imagePath} className="rounded-xl shadow-md" width="700px" height="400px" alt='post image' />
                        <div>
                            <h3 className="text-xl font-semibold text-center">{formattedDate}</h3>
                        </div>
                        <div className="flex justify-evenly font-medium my-4">
                            <h2 className="px-2 bg-red-200 rounded-lg">{topic}</h2>
                            <h2>{readTime} read</h2>
                        </div>

                        <div className="flex justify-evenly">
                            <div className="flex  px-2">
                                <AiOutlineLike className='w-5 h-5 mr-1 text-gray-700' />
                                <h5>11 likes</h5>
                            </div>
                            <div className="flex ">
                                <GoComment className='w-5 h-5 mr-1 text-gray-700' />
                                <h5>11 comments</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default PostCard