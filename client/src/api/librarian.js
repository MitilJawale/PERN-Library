import axios from 'axios';

axios.defaults.withCredentials = true;


export async function onAddBook(BookData) {
  
  return await axios.post(
    'http://localhost:8000/api/dashboard',
    BookData
  );
};


export async function getAllBooks() {
  return await axios.get(
    'http://localhost:8000/api/dashboard');
};



export async function editBook(UpdatedData) {

  return await axios.put(
    'http://localhost:8000/api/dashboard',
    UpdatedData);
};



export async function deleteBook(isbn) {

  return await axios.delete(
    `http://localhost:8000/api/dashboard/${isbn}`);
};



export async function returnBook(isbn) {


  return await axios.put(
    `http://localhost:8000/api/dashboard/${isbn}`);
};


