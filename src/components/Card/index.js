import './Card.css'

const Card = ({imagem, nomeJogo, precoJogo }) => {
    return(
        <div className='card-container'>
            <div className='image-container'>
                <img src={imagem} className='imagem-card' alt='foto do produto'></img>
            </div>
            <div className='descricao'>
                <h3>{nomeJogo}</h3>
                <p>{precoJogo}</p>
            </div>
        </div>
    )
}

export default Card