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
                    <h1>teste</h1>
                </div>

                <div className="options">
                    <div className="new-entry">
                        <div className="icon">
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </div>
                        <div className="text">
                            <h1>new entry</h1>
                        </div>
                    </div>
                    <div className="new-output">
                        <div className="icon">
                            <ion-icon name="remove-circle-outline"></ion-icon>
                        </div>
                        <div className="text">
                            <h1>new outlay</h1>
                        </div>
                    </div>
                </div>
            </div>

        </HistoricContainer>

    )
}