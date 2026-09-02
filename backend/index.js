const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

const app = express();
const port = process.env.PORT || 5000;

if (!process.env.MONGO_URI) {
  console.error('❌ ERROR: MONGO_URI not found!');
  process.exit(1);
}

app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'auth-token']
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'iNotebook Backend Running!' });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

connectToMongo();

if (require.main === module) {
  app.listen(port, () => {
    console.log(`✅ Backend listening on port ${port}`);
  });
}

module.exports = app;