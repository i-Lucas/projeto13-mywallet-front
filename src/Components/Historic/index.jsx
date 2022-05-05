import HistoricContainer from "./style"

export default function Historic() {

    return (

        <HistoricContainer>

            <div className="username-exit">
                <h1>Hi Lucas</h1>
                <div className="icon"><ion-icon name="log-out-outline"></ion-icon></div>
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
                        <div className="icon">
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </div>
                        <div className="text">
                            <h1>add earnings</h1>
                        </div>
                    </div>
                    <div className="new-output">
                        <div className="icon">
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
}