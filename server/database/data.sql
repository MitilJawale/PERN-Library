INSERT INTO Users(email, password, role) VALUES('librarian@gmail.com', '$2y$10$Ao11n5CwypSVLy51s4TAI.GYafgWLTaUVeGQ0SLkHmL9.9J6V1V0u', 'librarian');
INSERT INTO Users(email, password, role) VALUES('mitil@gmail.com', '$2y$10$VofeZJ7u38/ZY9gIfF/.SuD/79/q3Y41NQzuMLl4C7jxUIDAEUl.u', 'student');
INSERT INTO Users(email, password, role) VALUES('dave@gmail.com', '$2y$10$uAECHwTdWuCptsLIpbR0WOT1EBcESDojmi5VeLD.G4UMPtAb5PBh.', 'student');


INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) VALUES 
( '1742', 
  'Steve Jobs The Man Who Thought Different', 
  'Karen Blumenthal', 
  'A riveting biography of the groundbreaking innovator who was a giant in the worlds of computing, music, filmmaking, design, smart phones, and more. A finalist for the YALSA Excellence in Nonfiction Award!', 
  'biography', 
  true, 
  'Perfection Learning Corporation', 
  '2012-02-04T05:00:00.000Z', 
  '0', 
  '313', 
  'https://m.media-amazon.com/images/I/41Aefol682L._SY445_SX342_.jpg',
   null, 
   null);


INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) VALUES
( '9431', 
  'Dracula', 
  'Bram Stoker', 
  'An epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist and opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian nobleman, Count Dracula. Harker escapes the castle after discovering that Dracula is a vampire, and the Count moves to England and plagues the seaside town of Whitby.', 
  'horror',
  true,
  'Archibald Constable and Company.', 
  '1897-05-26T05:00:00.000Z', 
  '0', 
  '473', 
  'https://m.media-amazon.com/images/I/41-gWiZ5CUL._SY445_SX342_.jpg', 
  null, 
  null);

INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) 
VALUES('9780',
 'Harry Potter and the Sorcerers Stone',
  'J. K. Rowling',
   'The first novel in the Harry Potter series and Rowlings debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.', 
   'fiction',
    true,
     'Bloomsbury',
      '1997-06-26T04:00:00.000Z',
       '0',
        '223',
         'https://m.media-amazon.com/images/I/51dOacmuzvL._SY445_SX342_.jpg',
          null,
           null);

INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) 
VALUES('1292',
 'Atomic Habits',
  'James Clear',
   'Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones.',
    'motivational',
     true, 
     'Penguin Random House', 
     '2018-10-16T04:00:00.000Z',
      '0', 
      '323',
       'https://m.media-amazon.com/images/I/41C-012Es8L._SY445_SX342_.jpg',
        null, 
        null);

INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) 
VALUES('9999',
 'The Twilight Saga, Book 1',
  'Stephenie Meyer',
   'Forks High School had a frightening total of only three hundred and fifty-seven - now fifty-eight - students; there were more than seven hundred people in my junior class alone back home. All of the kids here had grown up together-their grandparents had been toddlers together. I would be the new girl from the big city, a curiosity, a freak.',
    'romance', 
    true,
     'Megan Tingley Books',
      '2006-12-28T05:00:00.000Z',
       '0',
        '293', 
        'https://m.media-amazon.com/images/I/615ZIxEDozL._SY522_.jpg',
         null,
          null);



INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) VALUES 
( '8232', 
  'The Shining', 
  'Stephen King', 
  'Jack Torrances new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he will have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote.', 
  'thriller', 
  true, 
  'Doubleday', 
  '1997-01-28T05:00:00.000Z', 
  '0', 
  '985', 
  'https://m.media-amazon.com/images/I/815Uhzxve5L._SL1500_.jpg', 
  null, 
  null);



INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) VALUES 
( '7412', 
  'Enzo Ferrari: The Man and the Machine', 
  'Brock Yates', 
  'Brock Yates`s definitive biography penetrated Ferrari`s elaborately constructed veneer and uncovered the truth behind Ferrari`s bizarre relationships, his work with Mussolini`s fascists, and his fanatical obsession with speed.', 
  'biography', 
  true, 
  'Super Learning Corporation', 
  '2019-06-14T04:00:00.000Z', 
  '0', 
  '382', 
  'https://m.media-amazon.com/images/I/81yGmYs7N-L._SY522_.jpg', 
  null, 
  null);



INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) VALUES 
( '1847', 
  'The Lord Of The Rings: One Volume', 
  'J.J.R. Tolkien', 
  'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.', 
  'fiction', 
  true, 
  'Kindle', 
  '2012-04-25T04:00:00.000Z', 
  '0', 
  '543', 
  'https://m.media-amazon.com/images/I/81XH+m22mjL._SY522_.jpg', 
  null, 
  null);



INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) VALUES 
( '5555', 
  'The Stalker', 
  'Sarah Alderson', 
  'Newly-weds Liam and Laura are spending their honeymoon in paradise: just the two of them on a remote island off the coast of Scotland. But they soon discover that all is not as it seems, and the island has a tragic past. And they cant shake the feeling of being watched.', 
  'thriller', 
  true, 
  'Avon Books UK', 
  '2002-09-16T04:00:00.000Z', 
  '0', 
  '435', 
  'https://m.media-amazon.com/images/I/41b0vWzzwXS._SY445_SX342_.jpg', 
  null, 
  null);



INSERT INTO Books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image, borrowed_at, borrowed_by) VALUES 
( '9456', 
  'Evermore', 
  'Alyson Noel', 
  'After a horrible accident claims the lives of her family, sixteen-year-old Ever Bloom can see peoples auras, hear their thoughts, and know someones entire life story by touching them. Going out of her way to avoid human contact to suppress her abilities, she has been branded a freak at her new high school—but everything changes when she meets Damen Auguste.', 
  'fiction', 
  true, 
  'St. Martin`s Publishing Group', 
  '2015-09-25T04:00:00.000Z', 
  '0', 
  '43', 
  'https://m.media-amazon.com/images/I/713XdtGW7aL._SY522_.jpg', 
  null, 
  null);

