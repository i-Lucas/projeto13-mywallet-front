import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SignInContainer from "./style"

export default function SignIn() {

    const [data, setData] = useState({ email: '', password: '', error: undefined, tip: undefined })

    function HandleSubmit(e) {
        return alert("oi");
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

                    <Link to='/singup'>Don't have an account? Sign-Up !</Link>
        
                </form>
            </div>
        </SignInContainer>
    )
}