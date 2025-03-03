import { useState } from 'react';
import Buscador from '../components/Buscador';
import ListaJogos from '../components/ListaJogos';
import { jogos } from '../jogos'

function Favoritos() {

 const [gamesFiltrados, setGamesFiltrados] = useState([])

 const filtraJogos = (pesquisa) => {
    const transformtext = pesquisa.toLowerCase()
    setGamesFiltrados([...jogos.filter(jogo => jogo.nome.toLowerCase().includes(transformtext) && transformtext.length>0)])
   }

  return (
    <div className="App">
      <Buscador jogoDigitado={pesquisa => filtraJogos(pesquisa)}/>
      <ListaJogos games={gamesFiltrados}/>      
    </div>
  );
}

export default Favoritos;
