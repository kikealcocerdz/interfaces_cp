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
});