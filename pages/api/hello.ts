import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  requestor?: boolean;
  url?: string;
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { requestor } = req.body;
    if (requestor) {
      res.status(200).json({ url: 'https://requestor-url.com' });
    } else {
      res.status(400).json({ error: 'Invalid request' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}