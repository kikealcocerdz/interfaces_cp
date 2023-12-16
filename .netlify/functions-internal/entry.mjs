import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_VvGcRzpT.mjs';

const _page0  = () => import('./chunks/_.._hhe6fMwR.mjs');
const _page1  = () => import('./chunks/generic_U_xjVQrx.mjs');
const _page2  = () => import('./chunks/index_CaiRxkxn.mjs');
const _page3  = () => import('./chunks/registrar_O_EbAKr3.mjs');
const _page4  = () => import('./chunks/_modelo__A17D2zJG.mjs');
const _page5  = () => import('./chunks/compra_2HU8cTqv.mjs');
const _page6  = () => import('./chunks/_modelo__YWiKyBOn.mjs');
const _page7  = () => import('./chunks/login_z0cy2LbE.mjs');const pageMap = new Map([["node_modules/auth-astro/src/api/[...auth].ts", _page0],["node_modules/astro/dist/assets/endpoint/generic.js", _page1],["src/pages/index.astro", _page2],["src/pages/registrar.astro", _page3],["src/pages/product/[modelo].astro", _page4],["src/pages/compra.astro", _page5],["src/pages/marcas/[modelo].astro", _page6],["src/pages/login.astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
