import { useEffect, useState } from 'react';
import BannerCentral from '../components/BannerCentral';
import Buscador from '../components/Buscador';
import ListaJogos from '../components/ListaJogos';
import { getGames } from '../services/games';

function Home() {

  const [gamesFiltrados, setGamesFiltrados] = useState([])

  const [games, setGames] = useState([])

  const fetchData = async () => {
    const loadedGames = await getGames()
    setGames(loadedGames)
  }

  useEffect(() => {
    fetchData()
  }, [])




  const filtraJogos = (pesquisa) => {
    const transformtext = pesquisa.toLowerCase()
    setGamesFiltrados([...games.filter(jogo => jogo.nome.toLowerCase().includes(transformtext) && transformtext.length > 0)])
  }

  return (
    <div className="App">
      <BannerCentral />
      <Buscador jogoDigitado={pesquisa => filtraJogos(pesquisa)} />
      <ListaJogos games={gamesFiltrados} />
    </div>
  );
}

export default Home;
