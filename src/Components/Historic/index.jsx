import { useNavigate } from 'react-router-dom'

import HistoricContainer from "./style"

export default function Historic() {

    const navigate = useNavigate();

    return (
        <HistoricContainer>
            <div className="username-exit">
                <h1>Hi Lucas</h1>
                <div className="icon" onClick={() => navigate('/')}><ion-icon name="log-out-outline"></ion-icon></div>
            </div>

            <div className="records">
                <div className="screen">

                    <div className="balance">
                        <div className="date"><h1>10/02</h1></div>
                        <div className="desc"><h1>Churrasco de Domingo</h1></div>
                        <div className="value"><h1> 50,00</h1></div>
                    </div>

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