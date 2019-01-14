import axios from 'axios';

async function getArticles(){
  const articles = await axios('/articles')
  return articles.data
}
async function getFreshArticles(){
  const getFreshArticles = await('/new')
}
export{
  getArticles,
  getFreshArticles
}
