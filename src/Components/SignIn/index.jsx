import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import SignInContainer from "./style"
import axios from 'axios';

export default function SignIn({ setInfo }) {

    const navigate = useNavigate();
    const [data, setData] = useState({ email: '', password: '' });
    const API = `https://mywallet20.herokuapp.com/`;

    function HandleSubmit(e) {

        e.preventDefault()

        axios.post(`${API}/sign-in`, data).then(res => {

            setInfo({ username: res.data.username, token: res.data.token });
            localStorage.setItem('log', res.data.token);
            localStorage.setItem('name', res.data.username);
            return navigate('/historic');

        }).catch(err => alert(err.response.data));
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