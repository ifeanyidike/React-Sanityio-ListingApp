import styled from "styled-components"
import {deviceWidth, colors} from "./definition"
import {MovieContainer} from "./MovieStyles"

export const PersonsListContainer = styled.div`
    margin: 50px 80px;
        @media ${deviceWidth.tablet}{
            margin: 50px 10px;
        }
        a{
            text-decoration: none;
        }
        
        .top{            
            
            display: flex;
            justify-content: flex-end;
            padding: 5px;            
            .MuiSvgIcon-root{
                cursor:pointer;
                &:hover{
                    color: ${colors.darkred}
                }
            }
        }
        .personslist{         
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
            .person{
                width: 200px;     
                position: relative;                                                               
                img{
                    width: 100%;                    
                }        
                .content{
                    position: absolute;
                    bottom: 0;
                    left: 8px;
                    border-right: 2px solid ${colors.goldish};
                    border-left: 2px solid ${colors.goldish};
                    border-radius: 10px;                
                    width: 80%;
                    margin: 20px auto;
                    padding: 8px 10px;
                    background-color: ${colors.transparentWhite};
                    color: ${colors.darkBlue};
                    h2{
                        font-size: 1.2rem;
                    }
                } 
            }
        }   
`

export const PersonContainer = styled(MovieContainer)`   
  
    height: 100vh;
    display: grid;
    place-items: center;
    @media ${deviceWidth.tablet_md}{
          height: auto;
    }
    
    .title::before, .title::after{
        @media ${deviceWidth.mobile_lg}{
            display:none;
        }
    }
    
  .personpanel{      
      display: flex;
      align-items: center;
      justify-content: space-around;                     
      
      width: 50%;
      padding: 0 100px;      
      box-shadow: 0px 2px 5px 1px rgba(50, 50, 50, 0.75);
      @media ${deviceWidth.tablet}{
          display: grid;
          place-items: center;
          padding-bottom: 40px;
      }
  }    
    .topcontent{       
        margin-left: 0; 
        display:flex;               
        flex-direction: column;
        align-items: center; 
        
        .person{         
                                               
            img{                                               
                max-width: 200px;
                @media ${deviceWidth.mobile_md}{
                  max-width: 150px
                  
                } 
                @media ${deviceWidth.mobile_xs}{
                  max-width: 70px
                }                
            }                        
            
            @media ${deviceWidth.tablet}{                    
                    margin: 0 auto;
                    margin-bottom: 20px;                    
            }                  
        }
        .description{
            margin-bottom: 10px;
        }        
    }
    .featuredmovies{
        .membersince{
            display: flex;
            flex-direction: column;            
            align-items: center;
            margin-bottom: 30px;
            .MuiSvgIcon-root{
                color: ${colors.darkred}
            }
        }
        
        h3{
            margin-bottom: 5px;
            color: ${colors.darkred}
        }
        a{
            text-decoration: none;
        }
        .featuredimage{  
            box-shadow: 0 0 5px ${props => props.theme.lightshadowtheme};                       
            cursor: pointer;
            height: 50px;            
            display:flex;
            align-items: center;
            width: 100%;
            margin-bottom: 5px;
            img{
                height: 50px;
                width: 50px;
            }
            p{
                margin-left: 5px;
            }
        }
    }
`