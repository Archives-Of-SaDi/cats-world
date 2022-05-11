import { cats } from '../../../database/cats';

export default function handler(req, res) {
  res.status(200).json(cats);
}
