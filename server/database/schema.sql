
-- users table 
CREATE TABLE users(
  user_id serial primary key,
  email varchar(255) unique not null,
  password varchar(255) not null,
  role VARCHAR(255) NOT NULL
);



-- books table 
CREATE TABLE books (
    isbn SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    availability BOOLEAN DEFAULT TRUE,
    publisher VARCHAR(255),
    publication_date DATE,
    ratings INT CHECK (ratings >= 0 AND ratings <= 5),
    page_count INT,
    cover_image TEXT,
    borrowed_at DATE,
    borrowed_by VARCHAR(255)
    
);


-- user_ratings table
CREATE TABLE user_ratings (
  u_id INT REFERENCES users(user_id), 
  book_isbn INT REFERENCES books(isbn),
  ratings INT CHECK (ratings >= 0 AND ratings <= 5),
  PRIMARY KEY (u_id, book_isbn)
  );
