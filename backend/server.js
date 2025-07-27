const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydatabase"
});

// Test database connection
db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

// GET endpoint to fetch all dresses
app.get('/', (req, res) => {
  const sql = "SELECT * FROM Dresses";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(  "Database query error" );
    }
    return res.json(data);
  });
});

app.get('/singledress/:id', (req, res) => {
  const id= req.params.id;
  const sql = "SELECT * FROM Dresses WHERE DressID="+id;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(  "Database query error" );
    }
    return res.json(data[0]);
  });
});

// ✅ POST endpoint to add a new dress to the database
app.post('/add', (req, res) => {
    const { DressName, Gender, DressColor, Fabric, Size, Description, Price } = req.body;
  
    // Check if all required fields are provided
    if (!DressName || !Gender || !DressColor || !Fabric || !Size || !Description || !Price) {
      return res.status(400).json("All fields are required");
    }
  
    // SQL query to insert a new dress
    const sql = "INSERT INTO Dresses (DressName, Gender, DressColor, Fabric, Size, Description, Price) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [DressName, Gender, DressColor, Fabric, Size, Description, Price], (err, result) => {
      if (err) {
        return res.status(500).json("Database insertion error");
      }
  
      // Respond with success message
      return res.status(200).json("Dress added successfully!");
    });
  });
  
  
  // ✅ DELETE endpoint to remove a dress by DressID
app.delete('/deletedress/:DressID', (req, res) => {
    const DressID = req.params.DressID;
  
    const sql = "DELETE FROM Dresses WHERE DressID = ?";
    db.query(sql, [DressID], (err, result) => {
      if (err) {
        return res.status(500).json("There is an error deleting the record");
      }
  
      return res.status(200).json("Dress deleted successfully!");
    });
  });
  
  // ✅  Update A Dress By Dress
  app.put('/updatedress/:DressID', (req, res) => {
    const DressID = req.params.DressID;
    const { DressName, Gender, DressColor, Fabric, Size, Description, Price } = req.body;
  
    // Log to check if you're receiving the parameters correctly
    console.log(DressID, DressName, Gender, DressColor, Fabric, Size, Description, Price);
  
    // SQL query
    const sql =
      "UPDATE Dresses SET DressName = ?, Gender = ?, DressColor = ?, Fabric = ?, Size = ?, Description = ?, Price = ? WHERE DressID = ?";
    db.query(
      sql,
      [DressName, Gender, DressColor, Fabric, Size, Description, Price, DressID],
      (err, result) => {
        if (err) {
          console.error("Error during update:", err);
          return res.status(500).json("Database update error");
        }
  
        if (result.affectedRows === 0) {
          return res.status(404).json("Dress not found");
        }
  
        return res.status(200).json("Dress updated successfully!");
      }
    );
  });
  
  

// Server setup
app.listen(8080, () => {
  console.log("Server Is listening");
});
