import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

import EarningsContainer from "./style"

export default function Earnings() {

    const navigate = useNavigate();
    const [data, setData] = useState({ amount: '', description: '', type: 'deposit' })

    function HandleSubmit(e) {

        e.preventDefault()
        const header = { headers: { "Authorization": `Bearer ${localStorage.getItem('log')}` } }
        const url = 'http://localhost:5000/historic';
        axios.post(url, data, header).then(res => navigate('/historic')).catch(err => alert(err.response.data));
    }

    return (
        <EarningsContainer>
            <div className="title"> <h1>Add Earnings</h1></div>
            <form onSubmit={HandleSubmit}>
                <input type='text' placeholder='value' required
                    onChange={e => setData({ ...data, amount: e.target.value })} />
                <input type='text' placeholder='description' required
                    onChange={e => setData({ ...data, description: e.target.value })} />
                <button type='submit'>Save new gain</button>
            </form>
        </EarningsContainer>
    )
};