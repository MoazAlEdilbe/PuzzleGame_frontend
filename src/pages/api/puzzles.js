// src/pages/api/puzzles.js
import axios from 'axios';

export default async function handler(req, res) {
  const { data } = await axios.get('https://your-nestjs-backend-url/api/puzzles');
  res.status(200).json(data);
}
