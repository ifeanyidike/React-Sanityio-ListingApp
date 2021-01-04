import styled from 'styled-components'
import {deviceWidth, colors} from "./definition"

export const MovieListContainer = styled.div`        
    
    .mostpopular{        
        height: 60vh;               
        width: 100%;
        display:flex;        
        a{
            text-decoration: none;
        }
        .popular{
            background-size: cover; 
            display: flex; 
            flex-direction: column;
            justify-content: flex-end;
            .content{
                border-right: 2px solid ${props => props.theme.goldish};
                border-left: 2px solid ${props => props.theme.goldish};
                border-radius: 10px;                
                width: 80%;
                margin: 20px auto;
                padding: 8px 10px;
                background-color: ${colors.transparentWhite};
                color: ${props => props.theme.darkBlue};
                h2{
                    color: ${colors.darkBlue};
                    font-size: 1.2rem;
                }
                p{
                    color: ${colors.darkBlue};
                }
            }          
        }
        .popular:first-child{
            flex: 0.5;
            @media ${deviceWidth.tablet}{
                flex-grow: 1
            }       
        }
        .popular:nth-child(2), .popular:nth-child(3){
            flex: 0.25;    
            @media ${deviceWidth.tablet}{
                display:none
            }
        }
        
    }
    
    .moviespanel{
        margin: 50px 80px;
        @media ${deviceWidth.tablet}{
            margin: 50px 10px;
        }
        .top{            
            display: flex;
            justify-content: space-between;
            padding: 5px;            
            .MuiSvgIcon-root{
                cursor:pointer;
                &:hover{
                    color: ${props => props.theme.darkred}
                }
            }
        }
        .movieslist{         
            margin-top: 20px;                   
            display: grid;
            place-items: center;
            grid-template-columns: repeat(5, 1fr);
            @media ${deviceWidth.laptop}{
                grid-template-columns: repeat(4, 1fr);
            }
            @media ${deviceWidth.tablet}{
                grid-template-columns: repeat(3, 1fr);
            }
            @media ${deviceWidth.tablet_md}{
                grid-template-columns: repeat(2, 1fr);
            }
            @media ${deviceWidth.mobile_lg}{
                grid-template-columns: repeat(1, 1fr);
            }
            grid-gap: 30px;
            .movie{
                width: 200px;  
                cursor: pointer;          
            }
        }   
    }    
`

export const MovieContainer = styled.div`
    margin-top: 20px;
    display: grid; 
    place-items: center;
    
    a{
        text-decoration:none
    }
    .topcontent{
        display:flex;        
        @media ${deviceWidth.tablet}{
            flex-direction: column;
            align-items: center;
        }
        margin: 50px auto;   
        ${'' /* z-index: -1; */}
        .movie{                                                
            img{                
                height: 400px;                                  
            }                        
            margin-right: 40px;      
            @media ${deviceWidth.tablet}{                    
                    margin: 0 auto;
                    margin-bottom: 20px;                    
            }                  
        }
        .description{
            ${'' /* z-index: 0; */}
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 600px;
            padding: 0 20px;
            .title{                          
                text-align: center;                                
                width: fit-content;
                margin: 0 auto;
                position: relative;
                color: ${props =>props.theme.bodyText};
               
            }                                  
            .title::before, .title::after{
                content: '';       
                position: absolute;         
                border-bottom: 2px solid ${props => props.theme.goldish};
                width: 100px;                                
                top: 50%;        
                @media ${deviceWidth.mobile_sm}{
                  display:none;
                }         
            }           
            .title::before{
                left: -110px
            }
            .title::after{
                margin-left: 10px;
            }
            .icon{
                display: flex;                
                width: 40%;
                align-items: center;
                justify-content: space-between;
                margin-top: 15px;
                span.icon__span{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .MuiSvgIcon-root{
                        color: ${props => props.theme.darkred};
                    }
                    div span{
                        color: ${props => props.theme.lightred}
                    }
                }
            }
        }
    }
    
    .castandcrew{        
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        width: 70%;        
        justify-content: space-around;        
        
        @media ${deviceWidth.tablet_md}{
            grid-template-columns: 1fr;
            grid-gap: 50px
        }
        
        .cast, .crew{
            h3{                
                text-align: center;
                margin-bottom: 10px;
                color: ${props => props.theme.bodyText};
            }
            .charactercontainer{
                
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); 
                margin-bottom: 5px;
                display:flex;
                align-items: center;
                img{
                    width: 50px;
                }
                div{
                    color: ${props => props.theme.bodyText};
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;
                    small{
                        display:flex;
                        align-items: center;
                        font-size: 0.7rem;
                        font-weight: 300;
                        div{
                            margin-left: 0;
                            width: 5px;
                            height: 5px;
                            background-color: ${props => props.theme.darkred};
                            border-radius: 100%;
                        }
                    }
                }
            }
        }
    }
`