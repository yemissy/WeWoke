import axios from 'axios';

async function getMyPetitions(){
  console.log('I am trying to get your petitions');
  const result = await axios({
    url: '/petitions/mypetitions',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(result.data)
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

async function deletepetition(id){
  const deletedthis = await axios.delete('/petitions/id', id, {
    headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return deletedthis;
}
export {
  getMyPetitions,
  createPetitions,
  generalGet,
  deletepetition
}
