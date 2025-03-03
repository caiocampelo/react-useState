import './BannerCentral.css'
import banner from '../../images/bf.jpg'
import styled from 'styled-components'

const BannerCentral = () => {

    const ContainerBanner = styled.div`

        @media screen and (min-width: 1200px){
            background-image: url(${banner});
            height: 60vh;
            max-width: 1200px;
            background-size: cover;
            background-position: center top;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            overflow: hidden; 
            z-index: 2;
           
        }

        @media screen and (max-width: 1199px) {
            background-image: url(${banner});
            height: 60vh;
            width: 95%;
            background-size: cover;
            background-position: center top;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            overflow: hidden;  
        }
        
        
    `
    return(
       <ContainerBanner>
            <h1 className='titulo-banner'>Let's Play</h1>
       </ContainerBanner>
    )
}


export default BannerCentral