import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../../lib/prisma'
export default async function handler(req:NextApiRequest,res:NextApiResponse) {
  if(req.method !== 'POST') {
    return res.status(400).end();
  };

  try {
    const {email, name, password} = req.body;
    const existingUser = await prismadb.user.findUnique({
        where: {
            email
        },
    });
    if(existingUser) {
    return res.status(400).json({error:'email taken'});
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prismadb.user.create({
        data: {
            name,
            email,
            image: '',
            hashedPassword,
            emailVerified: new Date()
        }
    })
  } catch (error) {
    console.log(error)
    return res.status(400).end();
  }
}