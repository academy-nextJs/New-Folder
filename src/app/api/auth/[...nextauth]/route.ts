/* eslint-disable @typescript-eslint/no-explicit-any */

import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { JWT } from 'next-auth/jwt';

async function fetchBackendToken(githubToken: string): Promise<string | null> {
    try {
        const res = await fetch('https://delta-project.liara.run/api/auth/github-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${githubToken}`,
            },
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Login failed');

        return data.accessToken;
    } catch (error) {
        console.error('Error fetching backend token:', error);
        return null;
    }
}

async function fetchBackendTokenGoogle(googleToken: string): Promise<string | null> {
    try {
        const res = await fetch('https://delta-project.liara.run/api/auth/google-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${googleToken}`,
            },
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Login failed');

        return data.accessToken;
    } catch (error) {
        console.error('Error fetching backend token:', error);
        return null;
    }
}


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const res = await axios.post("https://delta-project.liara.run/api/auth/login", {
                        email: credentials?.email,
                        password: credentials?.password,
                    });

                    const user = res.data;

                    if (user?.accessToken) {
                        return {
                            id: "1",
                            email: credentials?.email,
                            accessToken: user.accessToken,
                            refreshToken: user.refreshToken,
                        };
                    }
                    return null;
                } catch (error) {
                    console.error("Login failed:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
            async jwt({ token, account, user }: { token: JWT, account: any, user: any }) {
                if (account?.provider === 'github') {
                    const githubAccessToken = account.access_token;
                    const backendToken = await fetchBackendToken(githubAccessToken);

                    if (backendToken) {
                        token.accessToken = backendToken;
                    }
                }

                if (account?.provider === "google") {
                    const googleAccessToken = account.access_token;
                    const backendToken = await fetchBackendTokenGoogle(googleAccessToken);

                    if (backendToken) {
                        token.accessToken = backendToken;
                    }
                }

                if (user?.accessToken) {
                    token.accessToken = user.accessToken;
                    token.refreshToken = user.refreshToken;
                }

                return token;
            },
            async session({ session, token }: any) {
                session.accessToken = token.accessToken;
                session.refreshToken = token.refreshToken;
                return session;
            },

    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
