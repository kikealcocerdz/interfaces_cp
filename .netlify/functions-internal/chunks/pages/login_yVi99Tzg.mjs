/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, j as renderSlot } from '../astro_F6RMZl-2.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getSession } from './__rOmbyXE8.mjs';
import { a as $$Layout } from './_modelo__ttLUJbf4.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$FormLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormLayout;
  const {
    title,
    form = {
      entries: [
        {
          name: "username",
          label: "Username",
          opts: {
            placeholder: "Username"
          }
        },
        {
          name: "password",
          label: "Password",
          opts: {
            type: "password",
            placeholder: "******************"
          }
        }
      ],
      button: false,
      submitText: "Sign In"
    },
    displayForm = true
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "landingHeader": false, "data-astro-cid-zdpvtjnw": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-row flex-wrap w-full bg-gradient-to-t from-grey to-white relative h-screen" data-astro-cid-zdpvtjnw><h1 class="h-10 flex-1" data-astro-cid-zdpvtjnw>${title}</h1><div class="flex-grow flex flex-col w-full relative place-items-center h-3/4" data-astro-cid-zdpvtjnw><div class="w-full max-w-xs" data-astro-cid-zdpvtjnw><form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" data-astro-cid-zdpvtjnw>${displayForm && form.entries.map((element) => renderTemplate`<div class="mb-4" data-astro-cid-zdpvtjnw><label class="block text-gray-700 text-sm font-bold mb-2"${addAttribute(element.name, "for")} data-astro-cid-zdpvtjnw>${element.label}</label><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"${addAttribute(element.name, "id")}${addAttribute(element.name, "name")}${spreadAttributes(element.opts)} data-astro-cid-zdpvtjnw></div>`)}${displayForm && form.button && renderTemplate`<div class="mb-6 flex items-center" data-astro-cid-zdpvtjnw><button data-astro-cid-zdpvtjnw>${form.submitText}</button></div>`}<div id="slotWrapper" data-astro-cid-zdpvtjnw>${renderSlot($$result2, $$slots["default"], renderTemplate`<div class="flex items-center justify-between gap-1" data-astro-cid-zdpvtjnw><button type="button" data-astro-cid-zdpvtjnw>
Sign In
</button><a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" data-astro-cid-zdpvtjnw>
Forgot Password?
</a></div>`)}</div></form></div></div></div>` })}`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/layouts/FormLayout.astro", void 0);

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  let session = await getSession(Astro2.request);
  console.log(session);
  return renderTemplate`${renderComponent($$result, "FormLayout", $$FormLayout, { "title": "Login", "form": {
    entries: [
      {
        name: "username",
        label: "Nombre de usuario:",
        opts: {
          type: "text",
          required: true,
          minlength: "8"
        }
      },
      {
        name: "password",
        label: "Contrase\xF1a:",
        opts: {
          type: "password",
          required: true,
          minlength: "8"
        }
      }
    ],
    submitText: "Login",
    button: false
  }, "displayForm": !session }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-between mb-4 gap-1"> <button onclick="(function(){ window.location.replace(&quot;/registrar&quot;)})();">Registrar</button> </div> <div class="flex items-center justify-between mb-4 gap-1"> <button onclick="(function(){ window.location.href = &quot;/&quot;})();">Volver</button> </div> <div class="flex items-center justify-between mb-6 gap-1"> <button id="login" type="button"${addAttribute(session ? "hidden" : "block", "class")}>Iniciar sesión</button> <button id="logout" type="button"${addAttribute(!session ? "hidden" : "block", "class")}>Desconectar</button> </div> ${!session && renderTemplate`<p id="result" class="text-error-red hidden">Había un problema</p>`}${session && renderTemplate`<p class="text-success-green">Iniciado sesión como ${session.user.name}</p>`}` })} `;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/login.astro", void 0);

const $$file = "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/login.astro";
const $$url = "/login";

const login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormLayout as $, login as l };
