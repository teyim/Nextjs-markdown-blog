import Link from 'next/link'
import React, { useState } from 'react';
import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import { useRouter } from 'next/router';


const Navbar = ({ menuOpen, setMenuOpen }) => {
    const router = useRouter();
    const [showDropDown, setshowDropDown] = useState(false)
    const toggleDropDown = () => {
        setshowDropDown(!showDropDown)
    }

    const handleRoute = (topicName) => {
        toggleDropDown();
        router.push(`/topics/${topicName}`)
    }

    return (
    <nav className="flex justify-between align-middle text-lg ">
            <span className="font-Bai font-extrabold text-2xl"><Link href='/' passHref>Teyim A.</Link></span>
        {!menuOpen && (<>
            <ul className=" justify-evenly w-2/4 my-auto hidden md:flex" >
                    <li>
                        <span className=" hover:font-semibold hover:underline  text-xl font-medium text-gray-800"><Link href="/posts" >All posts</Link></span>
                    </li>
                    <li>
                        <button className="hover:font-semibold  text-xl font-medium text-gray-800 px-4 text-center inline-flex items-center " type="button" onClick={toggleDropDown} >Topics<svg className="w-4 h-4 ml-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg></button>
                        {showDropDown && (
                            <div className=" font-semibold text-gray-600 absolute bg-white  z-50 list-none divide-y divide-gray-100 rounded-md w-[200px]  shadow-xl my-4 animate-fade-in-down" >
                                <ul className="py-1" >
                                    <li>
                                        <span className=" text-lg hover:bg-gray-100  block px-6 py-2 cursor-pointer" onClick={() => handleRoute('react-js')}>React js </span>
                                    </li>
                                    <li>
                                        <span className=" text-lg hover:bg-gray-100  block px-6 py-2 cursor-pointer" onClick={() => handleRoute('react-native')}>React Native</span>
                                    </li>
                                    <li>
                                        <span className=" text-lg hover:bg-gray-100  block px-6 py-2 cursor-pointer" onClick={() => handleRoute('vanilla-js')}>Vanilla js</span>
                                    </li>
                                    <li>
                                        <span className=" text-lg hover:bg-gray-100 block px-6 py-2 cursor-pointer" onClick={() => handleRoute('next-js')}>Next js</span>
                                    </li>
                                    <li>
                                        <span className=" text-lg hover:bg-gray-100  block px-6 py-2 cursor-pointer" onClick={() => handleRoute('typescript')}>Typescript</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <span className=" hover:font-semibold hover:underline text-xl font-medium text-gray-800" ><Link href="/about" >About</Link></span>
                    </li>
            </ul>
            <div className="justify-evenly w-1/6 my-auto hidden md:flex">
                    <span className=" hover:font-semibold hover:underline text-xl font-medium text-gray-800"><a href='https://twitter.com/asofex'><AiOutlineTwitter className='w-7 h-7 my-auto mx-1' /></a></span>
                    <span className=" hover:font-semibold hover:underline text-xl font-medium text-gray-800"><a href='https://github.com/teyim/Nextjs-markdown-blog'><AiOutlineGithub className='w-7 h-7 my-auto mx-1' /></a></span>
            </div>
        </>)
        }
        <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
    </nav>

    )
};

const MobileMenu = ({ children }) => (
    <nav className=" text-center flex flex-col space-y-3 md:hidden ">
        {children}
    </nav>
);

const MenuAlt4Svg = ({ menuOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);



const Navigation = () => {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false);
    const [showDropDown, setshowDropDown] = useState(false)
    const toggleDropDown = () => {
        setshowDropDown(!showDropDown)
    }
    const handleRoute = (topicName) => {
        toggleDropDown();
        setMenuOpen(!menuOpen)
        router.push(`/topics/${topicName}`)
    }
    return (
        <div className='top-0 z-10 px-8 py-4 font-Bai w-full md:py-8 md:px-14  border-b border-gray-700'>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {menuOpen &&
                <MobileMenu>
                    <ul className='list-none '>
                        <li className='my-4'>
                            <span className=" hover:text-black hover:underline focus:underline text-xl font-bold text-gray-700" onClick={() => setMenuOpen(!menuOpen)}><Link href="/posts" >All posts</Link></span>
                        </li>
                        <li className='my-4'>
                            <button className="hover:font-semibold  text-xl font-medium text-gray-800 px-4 text-center inline-flex items-center " type="button" onClick={toggleDropDown} >Topics<svg className="w-4 h-4 ml-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg></button>
                            {showDropDown && (
                                <div className="font-semibold text-gray-600 z-50 list-none divide-y divide-gray-100 rounded-md w-full  my-4 animate-fade-in-down" >
                                    <ul className="py-1" >
                                        <li>
                                            <span className=" text-lg hover:bg-gray-100  block px-6 py-2 cursor-pointer" onClick={() => handleRoute('react-js')}>React js </span>
                                        </li>
                                        <li>
                                            <span className=" text-lg hover:bg-gray-100  block px-6 py-2 cursor-pointer" onClick={() => handleRoute('react-native')}>React Native</span>
                                        </li>
                                        <li>
                                            <span className=" text-lg hover:bg-gray-100  block px-6 py-2 cursor-pointer" onClick={() => handleRoute('vanilla-js')}>Vanilla js</span>
                                        </li>
                                        <li>
                                            <span className=" text-lg hover:bg-gray-100 block px-6 py-2 cursor-pointer" onClick={() => handleRoute('next-js')}>Next js</span>
                                        </li>
                                        <li>
                                            <span className=" text-lg hover:bg-gray-100  block px-6 py-2 cursor-pointer" onClick={() => handleRoute('typescript')}>Typescript</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className='my-4'>
                            <span className=" hover:text-black hover:underline focus:underline text-xl font-bold text-gray-700" onClick={() => setMenuOpen(!menuOpen)}><Link href="/about" >About</Link></span>
                        </li>
                    </ul>
                    <hr className='text-black border border-gray-800' />
                    <div className="flex justify-evenly w-1/4 md:w-1/6 my-auto  mx-auto">
                        <span className=" hover:font-semibold hover:underline text-xl font-medium text-gray-800"><a href='https://twitter.com/asofex'><AiOutlineTwitter className='w-7 h-7 my-auto mx-1' /></a></span>
                        <span className=" hover:font-semibold hover:underline text-xl font-medium text-gray-800"><a href='https://github.com/teyim/Nextjs-markdown-blog'><AiOutlineGithub className='w-7 h-7 my-auto mx-1' /></a></span>
                    </div>
                </MobileMenu>}
        </div>
    );
};
export default Navigation


