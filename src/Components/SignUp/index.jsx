import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SignUpContainer from "./style"
import axios from 'axios';

export default function SignUp() {

    const navigate = useNavigate();
    const [data, setData] = useState({ username: '', email: '', password: '', repeat_password: '' });
    const API = `https://mywallet20.herokuapp.com/`;

    function HandleSubmit(e) {

        e.preventDefault()
        axios.post(`${API}/sign-up`, data).then(res => navigate('/')).catch(err => alert(err.response.data));
    }

    return (

        <SignUpContainer>
            <div className="items">
                <h1>MyWallet</h1>
                <form onSubmit={HandleSubmit}>
                    <input type='text' placeholder='name' required
                        onChange={e => setData({ ...data, username: e.target.value })} />
                    <input type='text' placeholder='email' required
                        onChange={e => setData({ ...data, email: e.target.value })} />
                    <input type='password' placeholder='password' required
                        onChange={e => setData({ ...data, password: e.target.value })} />
                    <input type='password' placeholder='confirm password' required
                        onChange={e => setData({ ...data, repeat_password: e.target.value })} />
                    <button type='submit'>Sign Up</button>
                    <Link to='/'>Already have an account ? Sign In !</Link>
                </form>
            </div>
        </SignUpContainer>
    )
};