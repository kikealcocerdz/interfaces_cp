import { defineConfig } from 'auth-astro'
import Credentials from "@auth/core/providers/credentials";
import fs from 'node:fs/promises';

const userDirPath = import.meta.env.USER_DATA;
export default defineConfig({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                let userString;
                try {
                    userString = await fs.readFile(`${userDirPath}.${credentials.username}.json`)
                } catch (e) {
                    throw new Error("User Not Found");
                }
                const user = JSON.parse(userString);

                return user.password === credentials.password ? user : null; // Return user object if passwords match
            },
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            // Persist user info in session
            session.user.name = token.name;
            session.user.username = token.username;
            session.user.email = token.email;
            session.user.phone = token.phone;

            return session;
        },
        async jwt({ token, user, account, profile }) {
            // Persist user info in JWT excluding password
            if (user) {
                token.name = user.name;
                token.username = user.username;
                token.email = user.email;
                token.phone = user.phone;
            }
            return token
        }
    }
});