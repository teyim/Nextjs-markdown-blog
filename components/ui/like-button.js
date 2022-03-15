
import { useState, useEffect } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'

function LikeButton({ postSlug }) {
    const [likes, setlikes] = useState(0)
    const [isLikeLimitReached, setIsLikeLimitReached] = useState(false)
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        try {
            fetch(`/api/posts/${postSlug}`).then((response) => response.json()).then(response => setlikes(response.likes)) 
        } catch (error) {
            console.log(error)
        }

    }, [])

    const handleLike = () => {
        fetch('/api/posts/like-post', {
            method: 'POST',
            body: JSON.stringify({ slug: postSlug }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.status === 201) {
                try {
                    setlikes(likes + 1)
                    setAnimating(true)
                    setIsLikeLimitReached(true)
                } catch (error) {
                    console.log(error)
                }
            }
        })

    }
    return (
        <div className='flex align-baseline mt-6 md:mt-0'>
            <button onClick={handleLike} disabled={isLikeLimitReached ? true : false}><AiOutlineLike className='w-8 h-8 mx-2 text-gray-700 hover:text-gray-900' /></button>
            <h2 className={`${animating && "animate-fade-in-down"} ${isLikeLimitReached && "text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600"} text-lg my-auto font-bold font-Bai text-center text-gray-500 `} onAnimationEnd={() => setAnimating(false)} >{likes}</h2>
        </div>
    )
}

export default LikeButton