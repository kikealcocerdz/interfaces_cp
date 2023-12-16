import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from '@astrojs/node';
import auth from "auth-astro";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), auth()],
  output: 'server',
  adapter: netlify()
});