import axios from 'axios';


async function newMember(data){
  const newUser = await axios.post('/members', {member: data})
  return newUser.data;
}

async function getMember(){
  const members = await axios.get('/members');
  return members.data;
}

export {
  newMember,
  getMember
}
