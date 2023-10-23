import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';




const prisma = new PrismaClient();


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
  name:'Credentials',
  credentials: {
    email: {lable: 'Email', type: 'email', placeholder: 'Email' },
    password: {label: 'Password', type: 'password', placeholder: 'Password' },
  },
  async authorize(credentials,req) {
  if (!credentials?.email || !credentials.password) return null;
  
  const user = await prisma.user.findUnique({ where: {email: credentials.email},
  });
  if (!user) return null;
  const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);
  return passwordsMatch ? user : null;
  
  },
      }),
      GithubProvider({
        clientId: process.env.github_client_id!,
        clientSecret: process.env.github_client_secret!
      })
    ],
    session: {
  strategy:'jwt'
    }
  };