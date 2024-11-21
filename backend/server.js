const express = require('express');
const cors = require('cors'); // Adicione o CORS
const productRoutes = require('./routes/productRoutes');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors()); // Habilite o CORS para permitir requisições externas
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', productRoutes);

const db = require('./db');

const testConnection = async () => {
  try {
    const [results, fields] = await db.query('SELECT 1');
    console.log('Connected to MySQL');
  } catch (err) {
    console.error('MySQL connection error:', err);
  }
};

testConnection();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
