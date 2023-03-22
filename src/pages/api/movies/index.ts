import { NextApiResponse, NextApiRequest } from "next";
import serverAuth from "../../../../lib/serverAuth";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    await serverAuth(req);

    const movies = await prismadb.movie.findMany();
    
    res.status(200).json(movies);
  } catch (error) {
    
  }
}