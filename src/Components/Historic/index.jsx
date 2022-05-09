import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

import HistoricContainer from "./style";

export default function Historic({ username, token }) {

    const navigate = useNavigate();
    const [historic, setHistoric] = useState([]);
    const [userCache, setCache] = useState(0);
    const API = `https://mywallet20.herokuapp.com/`;

    useEffect(() => {

        const header = { headers: { "Authorization": `Bearer ${token ? token : localStorage.getItem('log')}` } }
        axios.get(`${API}/historic`, header).then(res => {
            res.data.map(item => setHistoric(historic => [...historic, item]))
            axios.get(`${API}/cache`, header).then(res => { setCache(res.data); });
        }).catch(err => alert(err.response.data));

    }, [token])

    function logout() {

        localStorage.removeItem('log');
        localStorage.removeItem('name');
        return navigate('/');
    };

    const BuildHistoric = () => {
        return historic.map((elem, idx) =>
            <RenderHistoric key={idx} id={elem._id} date={elem.time} desc={elem.description} amount={elem.amount} type={elem.type} />)
    };

    function DeleteHistoric(id) {

        const res = window.confirm('Do you really want to delete this record?');
        if (res) {
            const header = { headers: { "Authorization": `Bearer ${token ? token : localStorage.getItem('log')}` } }
            axios.delete(`${API}/delete?id=${id}`, header).then(() => window.location.reload()).catch(err => alert(err.response.data));
        }
    }

    function EditHistoric(id) {

        const res = prompt('Enter the new description');
        if (res) {
            axios.put(`${API}/edit?id=${id}`, { description: res }).then(() => window.location.reload()).catch(err => alert(err.response.data));
        }
    }

    function RenderHistoric({ date, desc, amount, type, id }) {

        return (
            <div className="balance">
                <div className="date"><h1>{date}</h1></div>
                <div className="desc" onClick={() => EditHistoric(id)}><h1>{desc}</h1></div>
                <div className="value"><h1 className={type === "deposit" ? "green" : "red"}>{amount}</h1></div>
                <div className="delte" onClick={() => DeleteHistoric(id)} ><ion-icon name="close-outline"></ion-icon></div>
            </div>
        )
    }

    return (
        <HistoricContainer>
            <div className="username-exit">
                <h1>Hi {username ? username : localStorage.getItem('name')}</h1>
                <div className="icon" onClick={() => logout()}><ion-icon name="log-out-outline"></ion-icon></div>
            </div>

            <div className="records">
                <div className="screen">
                    {BuildHistoric()}
                </div>

                <div className="total">
                    <h1>balance</h1>
                    <h2 className={userCache >= 0 ? "green" : "red"}>{userCache}</h2>
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