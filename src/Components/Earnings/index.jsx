import { useState, useEffect } from 'react'

import EarningsContainer from "./style" 

export default function Earnings() {

    const [data, setData] = useState({ email: '', password: '', error: undefined, tip: undefined })

    function HandleSubmit(e) {

        return alert("oi");
    }

    return (

        <EarningsContainer>

            <div className="title">
                <h1>Add Earnings</h1>
            </div>

            <form onSubmit={HandleSubmit}>

                <input type='text' placeholder='value' required
                    onChange={e => setData({ ...data, email: e.target.value })} />

                <input type='text' placeholder='description' required
                    onChange={e => setData({ ...data, password: e.target.value })} />

                <button type='submit'>Save new gain</button>

            </form>

        </EarningsContainer>
    )
}