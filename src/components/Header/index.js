import './Header.css'
import menuicon from '../../images/burger-bar.png'
import closeicon from '../../images/close.png'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const animacaoMenu = keyframes`
    from {
        width: 0vw;
    }

    to{
        width: 50vw;
    }
`

const animacaoFechar = keyframes`
    from {
        width: 50vw;
    }

    to{
        width: 0vw;
    }
`


 
const HeaderContainer = styled.div`
   

    @media screen and (min-width: 1200px) {
        height: 15vh;
        max-width: 1200px;
        background-color: rgb(241, 240, 240);
        display: flex;
        justify-content: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0 auto;

    }

    @media screen and (max-width: 1199px) {
        height: 15vh;
        max-width: 95%;
        background-color: rgb(241, 240, 240);
        display: flex;
        justify-content: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0 auto;
        overflow: hidden;
    }    

    ul {
        display: flex;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: -1px;
    }

    @media screen and (max-width: 800px) {
        .caixa-interna {
            display: block;/* ${props => props.verificarMenu === false ? "none" : "block" } */ 
            height: 85vh;
            width: ${props => props.verificarMenu === false ? "0vw" : "50vw" };
            z-index: 10;
            position: absolute;
            top: 15vh;
            right: 0;
            overflow: hidden;  
            animation: ${props => props.verificarMenu === false ? animacaoFechar : animacaoMenu } linear 0.6s;   

        }

        .inside-container li {
            background-color:  hsla(216, 8.20%, 12.00%, 0.98);
            color: white;
        }

     
    
        ul {

            height: 100%;
            width: 100%;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            justify-content: center;   
            background-color: hsla(216, 8.20%, 12.00%, 0.98);                
        }

        button{
            display: none;
        }
    }

`

const MenuHamburguer = styled.div`
    height: ${props => props.selectMenu === true? '30px' : '40px'};
    width: ${props => props.selectMenu === true? '30px' : '40px'};
    display: none;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        height: ${props => props.selectMenu === true? '30px' : '40px'};
        width: ${props => props.selectMenu === true? '30px' : '40px'};
        display: block;
    }    
`



const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    
    const showMenu = () => {
        setToggleMenu(!toggleMenu)
        console.log(toggleMenu)
    }

    const menuitems = ['Categorias', 'Favoritos', 'Contact']
    return (
        <HeaderContainer verificarMenu={toggleMenu}>
            <div className='inside-container'>
                <Link to={'/'}><h2 className='logo'>Galaxy Games®</h2></Link>                
                <div className='caixa-interna'>
                    <ul>
                        {menuitems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <button className='enterprise-button'>Enterprise →</button>  
                </div>
                <MenuHamburguer selectMenu={toggleMenu} onClick={showMenu}>
                    <img src={toggleMenu === false ? menuicon : closeicon} alt='menu' className='hamburguer-icon'></img>
                </MenuHamburguer>
               
            </div>
        </HeaderContainer>
    )   
}


export default Header