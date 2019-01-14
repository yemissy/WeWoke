import axios from 'axios';


async function logIn(validations){
  const token = await axios.post('/member_token', {"auth": validations});
  console.log(token.data)
  return token.data
}


export {
  logIn
}
