const request = require('supertest');
const { sequelize } = require('../models'); 
const app = require('../src/index'); 

const { Book } = require('../models'); 

describe('POST /api/dashboard', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); 
  });

  afterAll(async () => {
    await sequelize.close(); 
  });

  it('should add a new book', async () => {
    const newBook = {
      isbn: '1234567890', 
      title: 'Test Book',
      author: 'Test Author',
      description: 'Test description',
      category: 'Test category',
      publisher: 'Test publisher',
      publicationDate: '2023-01-01', 
      ratings: 4,
      pageCount: 300,
      coverImage: 'test.jpg',
    };

    const res = await request(app)
      .post('/api/dashboard')
      .send(newBook);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('Book has been added!');


    const addedBook = await Book.findOne({ where: { isbn: newBook.isbn } });
    expect(addedBook).toBeTruthy();
    expect(addedBook.title).toBe(newBook.title);
  });


});
