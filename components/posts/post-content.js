import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
function PostContent() {
    return (
        <div className="w-full px-12 py-4 font-Bai ">
            <div className='flex my-4'>
                <BsArrowLeft className='w-5 h-5 mx-2 my-auto' />
                <span className="hover:font-semibold"><Link href='/' >Back to Posts</Link></span>
            </div>
            <div className='w-3/5 my-6 mx-auto text-center text-gray-800 font-Rubik  '>
                <Image src="/images/posts/mastering-javascript.jpg" width='800px' height='400px' alt='post image' className='rounded-2xl border-2 shadow-md' />
                <h1 className='text-4xl font-semibold my-3 font-Bai'>Getting Started with NextJS</h1>
                <h2 className='text-xl font-medium font-Bai'>3rd December 2021 - 3 min read</h2>
                <h3 className='text-lg px-2 py-1 border bg-slate-100 border-slate-300  inline-block my-4 rounded-lg '><Link href='/'>Vanilla js</Link></h3>
                <hr />
                <article className='my-6 font-normal text-lg'>

                </article>
            </div>
        </div >
    )
}

export default PostContent