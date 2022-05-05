import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SignUpContainer from "./style"

export default function SignUp() {

    const [data, setData] = useState({ email: '', password: '', error: undefined, tip: undefined })

    function HandleSubmit(e) {
        return alert("oi");
    }

    return (

        <SignUpContainer>
            <div className="items">
                <h1>MyWallet</h1>
                <form onSubmit={HandleSubmit}>
                    <input type='text' placeholder='name' required
                        onChange={e => setData({ ...data, email: e.target.value })} />
                    <input type='text' placeholder='email' required
                        onChange={e => setData({ ...data, email: e.target.value })} />
                    <input type='password' placeholder='password' required
                        onChange={e => setData({ ...data, password: e.target.value })} />
                    <input type='password' placeholder='confirm password' required
                        onChange={e => setData({ ...data, password: e.target.value })} />
                    <button type='submit'>Sign Up</button>
                    <Link to='/'>Already have an account ? Sign In !</Link>
                </form>
            </div>
        </SignUpContainer>
    )
}