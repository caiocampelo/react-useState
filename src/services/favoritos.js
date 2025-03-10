import axios from 'axios'


async function getFavorites () {
    try{
        const response = await axios.get('http://localhost:8081/favoritos')
        return response.data    
    }catch(err){
        console.log(err)
    }
}

async function postFavorites(id) {
    try{
      await axios.post(`http://localhost:8081/favoritos/${id}`)  
    }
    catch(err){
        console.log(err)
    }
}

async function deleteFavorites(id) {
    try{
        await axios.delete(`http://localhost:8081/favoritos/${id}`)
    }catch(err) {
        console.log(err)
    }
}


export  {
    getFavorites,
    postFavorites,
    deleteFavorites
}