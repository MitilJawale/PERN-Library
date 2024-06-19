const request = require('supertest');
const express = require('express');
const { getAllBooks } = require('../src/controllers/librarian'); 
const { Book } = require('../models'); 

const app = express();

app.use(express.json());


app.get('/api/books', getAllBooks);

// base model
jest.mock('../models', () => ({
  Book: {
    findAll: jest.fn(),
  },
}));

describe('GET /api/books', () => {
  it('should return all books', async () => {
    const mockBooks = [
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
    ];

    Book.findAll.mockResolvedValue(mockBooks);

    const res = await request(app).get('/api/books');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.books).toEqual(mockBooks);
  });

  it('should handle errors', async () => {
    const errorMessage = 'Database error';

    Book.findAll.mockRejectedValue(new Error(errorMessage));

    const res = await request(app).get('/api/books');

    expect(res.status).toBe(500);
    expect(res.body.error).toBe(errorMessage);
  });
});
