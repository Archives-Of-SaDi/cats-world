import { cats } from '../../../database/cats';

export default function handler(req, res) {
  const { id } = req.query;
  const cat = cats.find(cat => cat.id === parseInt(id));
  res.status(200).json(cat);
}
