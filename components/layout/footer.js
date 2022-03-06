import Link from 'next/link'

function Footer() {
    return (
        <footer className=" flex flex-col items-center bg-black w-full space-x-2 py-10 md:px-12 px-4 mt-8 text-white font-Rubik bottom-0">
            <div className="md:flex w-full">
                <div className="md:w-1/5 text-center ">
                    <span className="font-Bai font-extrabold text-2xl"><Link href='/' >Teyim A.</Link></span>
                    <div className="flex align-baseline">
                        <h3 className="font-light text-xl mt-2 md:mt-5 text-gray-300 mx-auto ">Discover great articles on web dev.</h3>
                    </div>
                </div>
                <div className="md:w-1/2 py-2 flex flex-col items-center my-3 md:my-0">
                    <h2 className="font-medium text-xl text-gray-300 my-2">Stay up to date with our newsletter</h2>
                    <form className="flex flex-col md:w-2/3 items-center w-4/5">
                        <input placeholder="First Name" type='text' className=" py-4 px-8 shadow-sm bg-gray-100 border rounded-xl my-2 text-gray-700 w-full"></input>
                        <input placeholder="Email" type='email' className=" py-4 px-8 shadow-sm bg-gray-100 border rounded-xl my-2 text-gray-700 w-full"></input>
                        <button type="submit" className=" font-Bai my-3 border md:w-1/2 py-2 px-4 bg-white font-semibold rounded-xl text-lg text-black hover:ring-white-300 active:ring-white-300 focus:outline-none focus:ring focus:ring-white-300 ">Sign me up!!</button>
                    </form>
                </div>
                <div className="flex flex-col items-center md:items-end md:w-1/5 p-2  ">
                    <h2 className="font-medium text-xl text-gray-300 my-2">Links</h2>
                    <div className='flex justify-evenly w-full md:w-1/5 md:flex-col md:text-right'>
                        <span className="text-lg text-gray-500 hover:text-white"><Link href='/' >RSS</Link></span>
                        <span className="text-lg text-gray-500 hover:text-white"><Link href='/' >Github</Link></span>
                        <span className="text-lg text-gray-500 hover:text-white"><Link href='/' >twitter</Link></span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <h2 className="text-gray-500 text-base ">© 2022-Present Teyim Asobo. All Rights Reserved.</h2>
            </div>
        </footer>
    )
}

export default Footer