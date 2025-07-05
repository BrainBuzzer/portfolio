import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Redirect to the XML version
  res.redirect(301, '/api/rss.xml');
} 