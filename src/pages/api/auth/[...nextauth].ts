import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from '../../../../lib/prisma'

import bcrypt from 'bcrypt';
export default NextAuth({
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text'
                },
                password: {
                    label: 'Password',
                    type: 'text'
                },
            },
            async authorize(credentials) {
                console.log(credentials,'credentials')
               if(!credentials?.email || !credentials?.password) {
                    throw new Error('email and password required');
               }
               const user = await prismadb.user.findUnique({
                where: {
                    email: credentials?.email
                },
               })
               if(!user || !user.hashedPassword) {
                throw new Error('email doesnot exist');
               }
               const isCorrectPassword = await bcrypt.compare(
                credentials.password, user.hashedPassword
               );
               if(!isCorrectPassword) {
                throw new Error('incorrect password');
               }
               return user;
            }
        })
    ],
    pages: {
        signIn: '/auth',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET
});