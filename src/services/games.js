import axios from 'axios'


async function getGames () {
    try{
        const response = await axios.get('http://localhost:8081/games')
        return response.data    
    }catch(err){
        console.log(err)
    }
}

export  {
    getGames
}