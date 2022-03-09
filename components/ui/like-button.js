
import { useState } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
function LikeButton() {
    const [likes, setlikes] = useState(0)
    const [animating, setAnimating] = useState(false)
    const handleButtonEffect = () => {
        setlikes(likes + 1);
        setAnimating(true);
    }
    return (
        <div className='flex align-baseline mt-6 md:mt-0'>
            <button><AiOutlineLike className='w-8 h-8 mx-2 text-gray-700 hover:text-gray-900' onClick={handleButtonEffect} /></button>
            <h2 className={`${animating && "animate-fade-in-down"} text-lg my-auto font-bold font-Bai text-center text-gray-500 `} onAnimationEnd={() => setAnimating(false)} >{likes}</h2>
        </div>
    )
}

export default LikeButton