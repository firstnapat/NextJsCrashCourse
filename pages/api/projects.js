import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 12;
    // Create a MySQL connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'mysql1234',
      database: 'tangtoh_thesis_schema'
    });

    // Execute the SQL query to fetch all data from the "tangtoh_thesis_students" table
    const [rows] = await connection.execute(`SELECT * FROM tangtoh_thesis_students LIMIT ${limit}`);

    // Close the MySQL connection
    await connection.end();

    // Send the fetched data as the API response
    const projectsJson = { "projects": [rows] };
    
    res.status(200).json(projectsJson);
    // console.log(projects);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}