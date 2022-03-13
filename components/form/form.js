import { useRef, useState } from "react";
import { ImSpinner2 } from 'react-icons/im';
import validator from 'validator'

function Form() {
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const firstNameRef = useRef()
    const emailRef = useRef()

    const isUserDataValid = (firstName, email) => {
        if (firstName === "" || email === "") {
            alert('Information invalid');
            return false
        }
        if (!validator.isEmail(email)) {
            alert('Invalid Email');
            return false
        }

        return true
    }

    const handleFormSubmit = async (event) => {

        event.preventDefault();
        setErrorMessage("")
        setSuccessMessage("")
        const userEmail = emailRef.current.value
        const userFirstName = firstNameRef.current.value
        if (isUserDataValid(userFirstName, userEmail)) {
            setLoading(true)
            fetch('/api/newsletter', {
                method: 'POST',
                body: JSON.stringify({ email: userEmail, firstName: userFirstName }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    setLoading(false)
                    try {
                        if (response.status === 201) {
                            setSuccessMessage('Subscription successful')
                        }
                        else {
                            response.json().then((data) => {
                                setErrorMessage(data.message)
                            })
                        }
                    } catch (error) {
                        console.log(error)
                    }


                })

        }


    }
    return (
        <form className="flex flex-col md:w-2/3 items-center w-4/5" onSubmit={handleFormSubmit}>
            <input placeholder="First Name" type='text' required className=" py-4 px-8 shadow-sm bg-gray-100 border rounded-xl my-2 text-gray-700 w-full" ref={firstNameRef} />
            <input placeholder="Email" type='email' required className=" py-4 px-8 shadow-sm bg-gray-100 border rounded-xl my-2 text-gray-700 w-full" ref={emailRef} />
            {successMessage && <h2 className="text-green-300">{successMessage}</h2>}
            {errorMessage && <h2 className="text-red-300">{errorMessage}</h2>}
            <button type="submit" className={`font-Bai my-3 border md:w-1/2 py-2 px-4 bg-white font-semibold rounded-xl text-lg text-black hover:ring-white-300 active:ring-white-300 focus:outline-none focus:ring focus:ring-white-300 flex justify-center`} disabled={loading ? true : false}>{loading ? <ImSpinner2 className="w-7 h-7 animate-spin text-black my-auto" /> : "Sign me up!!"}</button>
        </form>
    )
}

export default Form;
