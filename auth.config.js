import { defineConfig } from 'auth-astro'
import Credentials from "@auth/core/providers/credentials";
import fs from 'node:fs/promises';

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
                    userString = await fs.readFile(`${import.meta.env.USER_DATA}.${credentials.username}.json`)
                } catch {
                    return null;
                }
                const user = JSON.parse(userString);

                return (user.password === credentials.password) * user; // Return user object if passwords match
            }
        })
    ]
})