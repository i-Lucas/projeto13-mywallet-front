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

    .username-exit {

        width: 100%;
        height: 10%;

        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        padding-left: 6%;
        padding-right: 6%;

        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;

        .icon {
            
            cursor: pointer;
            ion-icon {

                font-size: 35px;
    
              }
        }
    }

    .records {

        width: 90%;
        height: 85%;
        background-color: #8C11BE;

        .screen { 

            width: 100%;
            height: 70%;

            display: flex;
            flex-direction: column;
            overflow-y: auto;

            background-color: #FFFFFF;

            .balance {

                width: 100%;
                min-height: 50px;

                display: flex;
                justfy-content: center;
                align-items: center;

                font-family: 'Raleway';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;

                .date {

                    width: 20%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    h1 {
                        color: #C6C6C6;
                    }
                }

                .desc {

                    width: 60%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow-x: scroll;

                    h1 {
                        color: #000000;
                    }
                }

                .value {

                    width: 20%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .red {color: #C70000;}
                    .green {color: #00C700;}
                }
            }
        }

        .total {

            width: 100%;
            height: 10%;

            display: flex;
            justify-content: flex-start;
            align-items: center;

            background-color: #FFFFFF;

            h1 {

                margin-left: 5%;
                font-family: 'Raleway';
                font-weight: 700;
                font-size: 17px;
                line-height: 20px;
                color: #000000;
            }

            h2 {

                margin-left: 60%;
                font-family: 'Raleway';
                font-weight: 400;
                font-size: 17px;
                line-height: 20px;
                color: #03AC00;
            }
        }

        .options {

            width: 100%;
            height: 20%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #8C11BE;

            .new-entry {
    
                width: 45%;
                height: 85%;
                background: #A328D6;
                border-radius: 5px;

                .icon {

                    width: 25%;
                    height: 50%;

                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: flex-end;
                    cursor: pointer;

                    ion-icon {

                        font-size: 35px;
                        color: #FFFFFF;

                      }
                }

                .text {

                    width: 100%;
                    height: 50%;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    h1 {
                        
                        font-family: 'Raleway';
                        font-weight: 700;
                        font-size: 17px;
                        line-height: 20px;
                        color: #FFFFFF;
                    }
                }


            }
    
            .new-output {
    
                width: 45%;
                height: 85%;
                background: #A328D6;
                border-radius: 5px;    

                .icon {

                    width: 25%;
                    height: 50%;

                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: flex-end;
                    cursor: pointer;

                    cursor: pointer;

                    ion-icon {

                        font-size: 35px;
                        color: #FFFFFF;
                        
                      }
                }

                .text {

                    width: 100%;
                    height: 50%;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    h1 {
                        
                        font-family: 'Raleway';
                        font-weight: 700;
                        font-size: 17px;
                        line-height: 20px;
                        color: #FFFFFF;
                    }
                }            

                
            }
        }
    }  
`


export default Container;