import styled from 'styled-components';

const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8C11BE;

    @media (min-width: 768px) {
        width: 25%;
        margin: auto;
        border: 1px solid white;
        border-radius: 20px;
    }

    .items {

        width: 100%;
        height: 90%;
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
        h1 {

            font-family: 'Saira Stencil One';
            font-weight: 400;
            font-size: 32px;
            line-height: 50px;
            color: #FFFFFF;
            padding-top: 15%;
        }

        form {

            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            input {

                width: 85%;
                height: 10%;
                background: #FFFFFF;
                border-radius: 4px;
                margin-bottom: 2%;

                font-family: 'Raleway';                
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: 000000;
            }

            button {
                
                width: 85%;
                height: 10%;
                background: #A328D6;
                border-radius: 4px;
                border: none;
                cursor: pointer;

                font-family: 'Raleway';
                font-weight: 700;
                font-size: 20px;
                line-height: 23px;
                color: #FFFFFF;
            }

            a {

                font-family: 'Raleway';
                font-weight: 700;
                font-size: 15px;
                line-height: 18px;
                color: #FFFFFF;
                margin-top: 10%;
            }
        }
    }
`

export default Container;