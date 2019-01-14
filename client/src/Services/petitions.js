import axios from 'axios';

async function getPetitions(){
  const result = await axios.get({
    endpoint:'/petitions/mine',
    headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return result.data;
}

async function generalGet(){
  const petitions = await axios.get('/petitions');
  return petitions.data
}

async function createPetitions(data){
  const newPetition = await axios.post('/petitions', data, {
    headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return newPetition.data
}

export {
  getPetitions,
  createPetitions,
  generalGet
}
