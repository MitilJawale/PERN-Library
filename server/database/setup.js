const fs = require('fs'); // file system module to read files
const path = require('path');
const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'pern_library',
//   password: '1234',
//   port: 5432,
// });

// async function executeSqlFile(filePath) {
//   const sql = fs.readFileSync(filePath, 'utf8');
//   try {
//     await pool.query(sql);
//     console.log(`Executed ${path.basename(filePath)}`);
//   } catch (err) {
//     console.error(`Error executing ${path.basename(filePath)}:`, err);
//   }
// }

// async function setupDatabase() {
//   try {
//     // Execute schema definition
//     await executeSqlFile(path.join(__dirname, '', 'schema.sql'));

//     // Execute data population script
//     await executeSqlFile(path.join(__dirname, '', 'data.sql'));

//     console.log('Database setup completed.');
//   } catch (err) {
//     console.error('Error setting up database:', err);
//   } finally {
//     await pool.end();
//   }
// }

// setupDatabase();
