import Image from 'next/image'

function About() {
    return (
        <div className='w-full flex justify-center font-Bai'>
            <div className='md:w-2/3 px-12 py-6 text-xl'>
                <div className='md:w-1/3 mx-auto border-2 border-black rounded-2xl my-3'>
                    <Image src='/images/msg407149974-38451.jpg' width='400px' height='400px' layout='responsive' alt='profile image' className='rounded-xl' />
                </div>
                <h3>Hi there, my name is <span className='font-semibold text-gray-700'>Teyim Asobo</span>, and i am a frontend developer mostly passionate about react, next js and react native. loving the minimalistic ui ? yes, me too. i use tailwind css to do most of the css heavy lifting for me. </h3>
                <h1 className=' text-2xl font-semibold text-gray-700 my-2'>Hobbies ?</h1>
                <h3>Play videos games during my free time,watch movies too. Love listening to anything afrobeats from Oxlade to Fireboy , Locko , the list goes on....</h3>
                <h1 className=' text-2xl font-semibold text-gray-700 my-2'>Trying to connect ?</h1>
                <ul className='px-5  font-semibold text-gray-500 my-2'>
                    <li><a href='https://twitter.com/asofex'>Twitter</a></li>
                    <li><a href='https://github.com/teyim'>Github</a></li>
                    <li><a href='https://www.linkedin.com/in/teyimasobo/'>LinkedIn</a></li>
                </ul>
            </div>

        </div>
    )
}

export default About