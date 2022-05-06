import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SignInContainer from "./style"

export default function SignIn() {

    const navigate = useNavigate();
    const [data, setData] = useState({ email: '', password: '' })

    // const pass = /^[a-zA-Z]{6}$/
    // const email = /^[a-zA-Z]{6}$/

    function HandleSubmit(e) {

        e.preventDefault()
        // const validatePass = pass.test(data.password); 
        // const validateEmail = email.test(data.email);
        // return validatePass ? validateEmail ? navigate('/historic') : alert('invalid email') : alert('invalid password');
        navigate('/historic');
    }

    return (

        <SignInContainer>
            <div className="items">
                <h1>MyWallet</h1>
                <form onSubmit={HandleSubmit}>
                    <input type='text' placeholder='email' required
                        onChange={e => setData({ ...data, email: e.target.value })} />
                    <input type='password' placeholder='password' required
                        onChange={e => setData({ ...data, password: e.target.value })} />
                    <button type='submit'>Sign In</button>
                    <Link to='/signup'>Don't have an account? Sign-Up !</Link>
                </form>
            </div>
        </SignInContainer>
    )
}