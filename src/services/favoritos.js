import axios from 'axios'


async function getFavorites () {
    try{
        const response = await axios.get('http://localhost:8081/favoritos')
        return response.data    
    }catch(err){
        console.log(err)
    }
}

export  {
    getFavorites
}