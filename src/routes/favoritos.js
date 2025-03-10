import { useEffect, useState } from 'react';
import Buscador from '../components/Buscador';
import ListaJogos from '../components/ListaJogos';
import { getFavorites } from '../services/favoritos';

function Favoritos() {

  const [favorites, setFavorites] = useState([]) // todos os jogos que vem da API
  const [gamesFiltrados, setGamesFiltrados] = useState([]) // jogos filtrados com base na pesquisa do usuario

  const fecthData = async () => {
    const favoritesAPI = await getFavorites()
    setFavorites(favoritesAPI)
  }

  useEffect( () => {
    fecthData()
  }, [])

  const filtraJogos = (pesquisa) => {
    const transformtext = pesquisa.toLowerCase()
    setGamesFiltrados([...favorites.filter(jogo => jogo.nome.toLowerCase().includes(transformtext) && transformtext.length > 0)])
  }

  return (
    <div className="App">
      <Buscador titulo={'Seus Jogos Favoritos'} jogoDigitado={pesquisa => filtraJogos(pesquisa)} />
      <ListaJogos games={gamesFiltrados} />
    </div>
  );
}

export default Favoritos;
