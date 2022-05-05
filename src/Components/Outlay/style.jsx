import styled from 'styled-components';

const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #8C11BE;

    @media (min-width: 768px) {
        width: 25%;
        margin: auto;
        border: 1px solid white;
        border-radius: 20px;
    }

    .title {

        width: 100%;
        height: 10%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10%;
        margin-top: 5%;

        h1 {

            font-family: 'Raleway';
            font-weight: 700;
            font-size: 26px;
            line-height: 31px;
            color: #FFFFFF;
        }
    }


    form {

        width: 100%;
        height: 80%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        input {

            width: 90%;
            height: 10%;

            background: #FFFFFF;
            border-radius: 5px;
            margin-top: 5%;
        }

        button {

            width: 90%;
            height: 10%;
            background: #A328D6;
            border-radius: 5px;
            border: none;
            margin-top: 5%;

            font-family: 'Raleway';
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            cursor: pointer;
        }

    }

`;


export default Container;