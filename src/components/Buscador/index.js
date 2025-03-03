import './Buscador.css'

const Buscador = ({jogoDigitado}) => {
    return(
        <div className='buscador-container'>
            <h2>Search for games</h2>
            <input className='input-games' onChange={evento => jogoDigitado(evento.target.value)}></input>
        </div>
    )
}

export default Buscador