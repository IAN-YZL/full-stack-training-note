const jwt = require('jsonwebtoken');

const secret = 'long secret';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNTk5OTg4NDg4LCJleHAiOjE1OTk5OTIwODh9.7x_DA4A8K6nnVJQs5VIKl6_4Ifgj2bMA-Odgnz5Bxgs';
try {
  const decoded = jwt.verify(token, secret);

  console.log(decoded);
} catch (e) {
  console.log(e);
}
