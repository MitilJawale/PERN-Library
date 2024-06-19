import axios from 'axios';

axios.defaults.withCredentials = true;



export async function issueBook(isbn,borrowed_by,borrowed_at) {

  return await axios.put(
    `http://localhost:8000/api/dashboard/issue/${isbn}`, { borrowed_by, borrowed_at });
};


export async function getAllAuthors() {
  return await axios.get(
    'http://localhost:8000/api/dashboard/authors');
};


export async function rateBook(user_id,isbn,ratings) {
  const response = await axios.post('http://localhost:8000/api/dashboard/rate', { user_id, isbn, ratings });
  return response.data;
  
};


export async function getUserId(userMail) {
  return await axios.get(
    `http://localhost:8000/api/dashboard/${userMail}`);
};



export async function getAllUserRatings(user_id) {
  return await axios.get(
    `http://localhost:8000/api/dashboard/rate/${user_id}`);
};

