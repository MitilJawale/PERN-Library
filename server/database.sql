-- users table 
CREATE TABLE Users(
  user_id serial primary key,
  email varchar(255) unique not null,
  password varchar(255) not null
);



-- books table 
CREATE TABLE books (
    ISBN SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Author VARCHAR(255) NOT NULL,
    Description TEXT,
    Category VARCHAR(100),
    Availability BOOLEAN DEFAULT TRUE,
    Publisher VARCHAR(255),
    Publication_date DATE,
    Ratings INT CHECK (Ratings >= 1 AND Ratings <= 5),
    Page_count INT,
    Cover_image TEXT,
    borrowed_at DATE,
    borrowed_by VARCHAR(255)
    


-- edit Users table
ALTER TABLE Users
ADD role VARCHAR(255) NOT NULL;



-- user ratings table
CREATE TABLE user_ratings (
  u_id INT REFERENCES Users(user_id), 
  book_isbn INT REFERENCES books(ISBN),
  ratings INT CHECK (ratings >= 1 AND ratings <= 5),
  PRIMARY KEY (u_id, book_isbn)
  );
