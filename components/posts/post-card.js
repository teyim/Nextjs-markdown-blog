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

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <>
            <Link href={linkPath} >
                <a>
                    <div className="my-2 md:flex w-11/12 md:w-[600px] overflow-hidden border rounded-lg border-gray-500 py-6 px-6 hover:shadow-sm hover:bg-slate-200 hover:cursor-pointer hover:border-slate-600 mx-auto">
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
                            <h3 className='text-base px-2  border bg-slate-100 border-slate-300 inline rounded-lg '>{topic}</h3>
                            <h2 className='text-lg'>{readTime} read</h2>
                        </div>
                    </div>
                </div>
                </a>
            </Link>
        </>
    )
}

export default PostCard