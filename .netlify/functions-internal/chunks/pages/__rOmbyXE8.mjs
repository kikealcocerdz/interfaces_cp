import 'path';
import { Auth } from '@auth/core';
import { splitCookiesString, parseString } from 'set-cookie-parser';
import { serialize } from 'cookie';
import Credentials from '@auth/core/providers/credentials';
import fsp from 'node:fs/promises';

const defineConfig = (config) => {
  config.prefix ??= "/api/auth";
  return config;
};

const userDirPath = "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/users/";
const authConfig = defineConfig({
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
                    userString = await fsp.readFile(`${userDirPath}.${credentials.username}.json`);
                } catch (e) {
                    throw new Error("User Not Found");
                }
                const user = JSON.parse(userString);

                return user.password === credentials.password ? user : null; // Return user object if passwords match
            },
        })
    ],
});

const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
const getSetCookieCallback = (cook) => {
  if (!cook)
    return;
  const splitCookie = splitCookiesString(cook);
  for (const cookName of [
    "__Secure-authjs.session-token",
    "authjs.session-token",
    "authjs.pkce.code_verifier",
    "__Secure-authjs.pkce.code_verifier"
  ]) {
    const temp = splitCookie.find((e) => e.startsWith(`${cookName}=`));
    if (temp) {
      return parseString(temp);
    }
  }
  return parseString(splitCookie?.[0] ?? "");
};
function AstroAuthHandler(prefix, options = authConfig) {
  return async ({ request }) => {
    const url = new URL(request.url);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/"))
      return;
    const res = await Auth(request, options);
    if (["callback", "signin", "signout"].includes(action)) {
      const parsedCookie = getSetCookieCallback(res.clone().headers.get("Set-Cookie"));
      if (parsedCookie) {
        res.headers.set(
          "Set-Cookie",
          serialize(parsedCookie.name, parsedCookie.value, parsedCookie)
        );
      }
    }
    return res;
  };
}
function AstroAuth(options = authConfig) {
  const { AUTH_SECRET, AUTH_TRUST_HOST, VERCEL, NODE_ENV } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { AUTH_SECRET: "6a29d1ad58fe00b0ca390eb0b671a5e5d224f5f5d16fcea5e4e03916c54134ad", AUTH_TRUST_HOST: "true", _: process.env._, NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV });
  options.secret ??= AUTH_SECRET;
  options.trustHost ??= !!(AUTH_TRUST_HOST ?? VERCEL ?? NODE_ENV !== "production");
  const { prefix = "/api/auth", ...authOptions } = options;
  const handler = AstroAuthHandler(prefix, authOptions);
  return {
    async GET(event) {
      return await handler(event);
    },
    async POST(event) {
      return await handler(event);
    }
  };
}
async function getSession(req, options = authConfig) {
  options.secret ??= "6a29d1ad58fe00b0ca390eb0b671a5e5d224f5f5d16fcea5e4e03916c54134ad";
  options.trustHost ??= true;
  const url = new URL(`${options.prefix}/session`, req.url);
  const response = await Auth(new Request(url, { headers: req.headers }), options);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}

const { GET, POST } = AstroAuth();

const ____auth_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

export { ____auth_ as _, getSession as g };
