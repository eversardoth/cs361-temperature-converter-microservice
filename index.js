const express = require('express');
const cors = require('cors');

const app = express();
const port = 5004;

app.use(cors());

app.get('/temperature-conversion', (req, res) => {
  const amount = req.query.amount;

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ error: 'Invalid temperature. Make sure you are sending a number.' });
  }

  const celsius = parseFloat(amount);
  const fahrenheit = (celsius * 9/5) + 32;

  res.json({ temperature: fahrenheit });
});

app.listen(port, () => {
  console.log(`Temperature conversion microservice is running on port ${port}`);
});