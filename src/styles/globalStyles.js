import {createGlobalStyle} from "styled-components"
import { deviceWidth } from "./definition"


export const GlobalStyle = createGlobalStyle`
    html{
        overflow-x: hidden;
    }
    body{
        background-color: ${props => props.theme.lighter};        
        overflow-x: hidden;   
        min-height: 100vh;     
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
    #root{        
        display: grid;
        flex-direction: column;   
    }    
    h1,h2,h3, label{
        font-family: 'Aclonica', sans-serif;        
    }
    h1, h2, h3, p, span:not(.MuiIconButton-label), 
    div:not(.PrivateRadioButtonIcon-root-8), div:not(.tryingthis){
        color: ${props => props.theme.bodyText}
    }
    
    p, span, div, input{
        font-family: 'Jost', sans-serif;       
    }
    
    .paginate button{
        color: ${props => props.theme.bodyText}
    }
    
    .header{
        z-index: 5;    
        background-color: ${props => props.theme.midDarkBlue};                
        display: flex;
        align-items: center;   
        padding: 0 20px;        
        height: 50px;
        justify-content: space-between;
        position: fixed;
        top: 0;
        width: 100%;
        @media ${deviceWidth.laptop_lg}{
            width: 97%;            
        }               
        
        @media ${deviceWidth.tablet}{
            width: 100%;
            justify-content: space-around;
        }
        a{
            text-decoration: none;
        }
        label{
            cursor: pointer;
            color: ${props => props.theme.goldish};
            font-size: 1.5rem;
        }        
        .hamburger{
            cursor: pointer;   
            color: ${props => props.theme.white};
            @media ${deviceWidth.desktop}{
                display: none;
            }
            @media ${deviceWidth.tablet}{
                display: block;                
            }
        }  
                 
    }
    
    .mobileHeader{
        z-index: 5;        
        background-color: ${props => props.theme.darkBlue};                    
        color: ${props => props.theme.white};
        display: grid;
        place-items: center;        
        
        width: 100%;      
        @media ${deviceWidth.tablet}{
            width: 100%;                   
        }                         
        
        height: calc(100% - 50px);                
        transition: all 0.5s ease-in-out; 
        position: fixed;        
        right: 0;
        top: 50px;
        .menuitems{
            ${'' /* z-index: 5; */}
            display: flex;
            box-shadow: 0 0 5px ${props => props.theme.lightshadowtheme}; 
            
            flex-direction: column;
            align-items: center;
            justify-content: space-around;                        
            height: 60%;            
            width: 40%;
            a{
                display: flex;
                flex-direction: column;
                align-items:center;
                cursor: pointer;
                color: ${props => props.theme.white};
                text-decoration: none;
                
                &:hover{
                    border-bottom: 2px solid ${props => props.theme.goldish};
                    .MuiSvgIcon-root{
                        color: ${props => props.theme.lightred}
                    }
                }
            }
        }
    }
    
    footer{                
        min-height: 30px;        
        margin-top: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;        
        font-size: 0.875rem;        
        background-color: ${props => props.theme.midDarkBlue};      
        color: ${props => props.theme.white};        
    }
    
`