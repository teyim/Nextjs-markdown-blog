import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowDown } from 'react-icons/ai'
import ArticleList from "../components/articles/article-list";


export default function Home() {
  return (
    <>
      <header className="w-full md:py-8 md:px-14 font-Rubik text-gray-800 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 ">

        <div className="h-auto my-8 rounded-2xl shadow-lg py-8 px-12 bg-black text-center ">
          <h1 className="text-white font-Bai font-semibold text-6xl">Learn web development with well explained articles.</h1>
          <h1 className=" font-light text-2xl mt-5 text-gray-300 leading-relaxed align-baseline"><span className="mt-8">Curious<Image src='/images/emojis/face_with_monocle.svg' alt='thinking emoji' width={40} height={40} layout='intrinsic' className='p-0' /></span>? I have a currated list of web development articles on popular technlogies like React and Next js <Image src='/images/emojis/rocket.svg' alt='thinking emoji' width={40} height={40} layout='intrinsic' className='p-0' />.not yet there? basic articles on html, css and js tricks are also available <Image src='/images/emojis/man_technologyst.svg' alt='thinking emoji' width={40} height={40} layout='intrinsic' className='p-0' />. </h1>
          <AiOutlineArrowDown className="w-12 mt-4 h-16 rounded-3xl p-2 text-white mx-auto my-auto border border-white" />
        </div>
      </header>

      <div className="w-full font-Rubik text-gray-800 ">

        <div className="max-w-screen-2xl flex flex-wrap  overflow-hidden  justify-evenly  p-8">
          <div className="w-full md:py-6 md:px-14">
            <h1 className="font-Bai text-2xl font-bold ">Popular Articles</h1>
          </div>
          <ArticleList></ArticleList>
        </div>
      </div>


    </>
  )
}
