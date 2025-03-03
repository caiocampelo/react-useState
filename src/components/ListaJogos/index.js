import Card from '../Card'
import './ListaJogos.css'

const ListaJogos = ({games}) => {
    return (
        <div className='jogos-container'>
           {games.length>=1 && games.map(game => <Card imagem={game.imagem} nomeJogo={game.nome} precoJogo={game.preco}/>)}
        </div>
    )
}

export default ListaJogos