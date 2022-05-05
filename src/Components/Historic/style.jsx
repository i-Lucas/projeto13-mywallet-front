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
            height: 80%;
            background-color: #FFFFFF;
            border-radius: 5px;

            display: flex;
            justify-content: center;
            align-items: center;
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