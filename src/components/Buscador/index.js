import './Buscador.css'

const Buscador = ({jogoDigitado, titulo}) => {
    return(
        <div className='buscador-container'>
            <h2>{titulo}</h2>
            <input className='input-games' onChange={evento => jogoDigitado(evento.target.value)}></input>
        </div>
    )
}

export default Buscador