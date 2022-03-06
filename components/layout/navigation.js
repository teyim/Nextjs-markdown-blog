import Link from 'next/link'
import React, { useState } from 'react';

const Navbar = ({ menuOpen, setMenuOpen }) => (
    <nav className="flex justify-between align-middle text-lg ">
        <Link href='/' passHref><h2 className="font-Bai font-extrabold text-2xl">Teyim A.</h2></Link>
        {!menuOpen && (<>
            <ul className=" justify-evenly w-2/4 my-auto hidden md:flex" >
                <span className=" hover:font-semibold hover:underline  text-xl font-medium text-gray-800"><Link href="/" >All posts</Link></span>
                <span className=" hover:font-semibold hover:underline text-xl font-medium text-gray-800"><Link href="/" >Topics</Link></span>
                <span className=" hover:font-semibold hover:underline text-xl font-medium text-gray-800"><Link href="/" >About</Link></span>
            </ul>
            <div className="justify-evenly w-1/6 my-auto hidden md:flex">
                <span className=" hover:font-semibold hover:underline text-xl font-medium text-gray-800"><Link href="/" >Twitter</Link></span>
                <span className=" hover:font-semibold hover:underline text-xl font-medium text-gray-800"><Link href="/" >Github</Link></span>
            </div>
        </>)
        }
        <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
    </nav>

);

const MobileMenu = ({ children }) => (
    <nav className=" text-center flex flex-col space-y-3 md:hidden bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        {children}
    </nav>
);

const MenuAlt4Svg = ({ menuOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);



const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='top-0 z-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 px-8 py-4 font-Bai w-full md:py-8 md:px-14  '>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {menuOpen &&
                <MobileMenu>
                    <span className=" hover:text-black hover:underline focus:underline text-xl mt-4 font-bold text-gray-700"><Link href="/" >All posts</Link></span>
                    <span className=" hover:text-black hover:underline focus:underline text-xl font-bold text-gray-700"><Link href="/" >Topics</Link></span>
                    <span className=" hover:text-black hover:underline focus:underline text-xl font-bold text-gray-700"><Link href="/" >About</Link></span>
                    <hr className='text-black border border-gray-800' />
                    <div className="flex flex-col  w-1/6 my-auto  mx-auto">
                        <span className="  hover:text-black hover:underline focus:underline text-lg font-bold text-gray-700"><Link href="/" >Twitter</Link></span>
                        <span className="  hover:text-black hover:underline focus:underline text-lg font-bold text-gray-700"><Link href="/" >Github</Link></span>
                    </div>
                </MobileMenu>}
        </div>
    );
};
export default Navigation


