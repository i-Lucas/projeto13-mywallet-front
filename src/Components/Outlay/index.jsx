import { useState, useEffect } from 'react'

import OutlayContainer from "./style" 

export default function Outlay() {

    const [data, setData] = useState({ email: '', password: '', error: undefined, tip: undefined })

    function HandleSubmit(e) {

        return alert("oi");
    }

    return (

        <OutlayContainer>

            <div className="title">
                <h1>Add Expenses</h1>
            </div>

            <form onSubmit={HandleSubmit}>

                <input type='text' placeholder='value' required
                    onChange={e => setData({ ...data, email: e.target.value })} />

                <input type='text' placeholder='description' required
                    onChange={e => setData({ ...data, password: e.target.value })} />

                <button type='submit'>Save new expense</button>

            </form>

        </OutlayContainer>
    )
}