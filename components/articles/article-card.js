import { AiOutlineLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import Image from "next/image";

function ArticleCard() {
    return (
        <>
            <div className="my-2 md:flex w-[600px] overflow-hidden border rounded-lg border-gray-500 py-6 px-6 hover:shadow-sm hover:bg-slate-200 hover:cursor-pointer hover:border-slate-600">
                <div className="w-7/12">
                    <h1 className="font-Bai text-2xl font-bold">How to get started with react</h1>
                    <h3 className="text-gray-600 my-2 text-lg">Next allows you to do server-side data-fetching, but what happens when that data needs to change on the client? This brief tutorial shows how to re-fetch the props without doing a full server reload.</h3>
                </div>
                <div className="w-5/12 h-full">
                    <Image src='/images/ReactJS.png' className="rounded-xl shadow-md" width="700px" height="400px" alt='post image' />
                    <div>
                        <h3 className="text-xl font-semibold text-center">3rd November 2021</h3>
                    </div>
                    <div className="flex justify-evenly font-medium my-4">
                        <h2 className="px-2 bg-red-200 rounded-lg">react</h2>
                        <h2>3 min read</h2>
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
        </>
    )
}

export default ArticleCard