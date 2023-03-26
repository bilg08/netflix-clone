import { NextApiResponse, NextApiRequest } from "next";
import serverAuth from "../../../../lib/serverAuth";
import prismadb from '../../../../lib/prisma';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }
    try {
        await serverAuth(req);
        const {movieId} = req.query;

        if(typeof movieId !== 'string') {
            throw new Error('Invalid Id');
        }
        if(!movieId) {
            throw new Error('Invalid Id');
        }
        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            },
        });
        if(!movie) {
            throw new Error('Invalid Id');
        }
        res.status(200).json(movie);
    } catch (error) {
        
    }
}