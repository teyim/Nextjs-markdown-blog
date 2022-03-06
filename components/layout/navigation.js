import Link from 'next/link'

function Navigation() {
    return (
        <nav className="flex justify-between align-middle text-lg w-full md:py-8 md:px-14 top-0 z-10  bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 ">
            <Link href='/' passHref><h2 className="font-Bai font-extrabold text-2xl">Teyim A.</h2></Link>
            <ul className="flex justify-evenly w-2/4 my-auto " >
                <Link href="/" passHref><span className=" hover:font-semibold hover:underline cursor-pointer">All post</span></Link>
                <Link href='/' passHref><span className=" hover:font-semibold hover:underline cursor-pointer">Topics</span></Link>
                <Link href='/' passHref><span className=" hover:font-semibold hover:underline cursor-pointer">About</span></Link>
            </ul>
            <div className="flex justify-evenly w-1/6 my-auto">
                <h1>twitter</h1>
                <h1>github</h1>
            </div>
        </nav>
    )
}

export default Navigation;