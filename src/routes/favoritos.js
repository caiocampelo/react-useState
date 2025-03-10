import { useEffect, useState } from 'react';
import { getFavorites } from '../services/favoritos';
import styled from 'styled-components';
import Card from '../components/Card'


const FavoritesContainer = styled.div`
    height: 60vh;
    max-width: 1200px;
    background-color: rgb(241, 240, 240);   
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

const TituloFavoritos = styled.h1`
    font-size: 50px;
    letter-spacing: -2px;
    margin-top: 30px;
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 20px;
`




function Favoritos() {

  const [favorites, setFavorites] = useState([]) // todos os jogos que vem da API

  const fecthData = async () => {
    const favoritesAPI = await getFavorites()
    setFavorites(favoritesAPI)
  }

  useEffect( () => {
    fecthData()
  }, [])

  

  return (
    <div className="App">
        <TituloFavoritos>Seus jogos favoritos</TituloFavoritos>
        <FavoritesContainer>
        {favorites.map(game => <Card imagem={game.imagem} nomeJogo={game.nome} precoJogo={game.preco}/>)}
      </FavoritesContainer>
    </div>
  );
}

export default Favoritos;
