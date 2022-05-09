import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

import HistoricContainer from "./style";

export default function Historic({ username, token }) {

    const navigate = useNavigate();
    const [historic, setHistoric] = useState([]);

    useEffect(() => {

        const header = { headers: { "Authorization": `Bearer ${token ? token : localStorage.getItem('log')}` } }
        const url = 'http://localhost:5000/historic';

        axios.get(url, header).then(res => res.data.map(item => setHistoric(historic => [...historic, item]))).catch(err => alert(err.response.data));

    }, [token])

    function logout() {

        localStorage.removeItem('log');
        localStorage.removeItem('name');
        return navigate('/');
    };

    function RenderHistoric({ date, desc, amount, type }) {

        return (
            <div className="balance">
                <div className="date"><h1>{date}</h1></div>
                <div className="desc"><h1>{desc}</h1></div>
                <div className="value"><h1 className={type === "deposit" ? "green" : "red"}>{amount}</h1></div>

            </div>
        )
    }

    return (
        <HistoricContainer>
            <div className="username-exit">
                <h1>Hi {username ? username : localStorage.getItem('name')}</h1>
                <div className="icon" onClick={() => logout()}><ion-icon name="log-out-outline"></ion-icon></div>
            </div>
            {console.log(historic)}

            <div className="records">
                <div className="screen">

                    {historic.map((item, i) => <RenderHistoric key={i} date={item.time} desc={item.description} amount={item.amount} type={item.type} />)}

                </div>

                <div className="total">
                    <h1>balance</h1>
                    <h2>1000</h2>
                </div>

                <div className="options">
                    <div className="new-entry">
                        <div className="icon" onClick={() => navigate('/earnings')}>
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </div>
                        <div className="text">
                            <h1>add earnings</h1>
                        </div>
                    </div>
                    <div className="new-output">
                        <div className="icon" onClick={() => navigate('/outlay')}>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                        </div>
                        <div className="text">
                            <h1>new outlays</h1>
                        </div>
                    </div>
                </div>
            </div>
        </HistoricContainer>
    )
};