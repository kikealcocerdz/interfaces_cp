/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_81H4FYWo.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$FormLayout } from './login_Ic5GtgYF.mjs';
import validator from 'email-validator';
import fsp from 'node:fs/promises';
import fs from 'node:fs';
/* empty css                              */

const $$Astro = createAstro();
const $$Registrar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Registrar;
  let message = "";
  let success = false;
  let emailUsagePath = `${"/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/users/"}usedemails.json`;
  let emailUsage = JSON.parse(await fsp.readFile(emailUsagePath));
  if (Astro2.request.method === "POST") {
    try {
      success = false;
      const data = await Astro2.request.formData();
      const name = data.get("name").toString();
      const username = data.get("username").toString();
      const email = data.get("email").toString();
      const password = data.get("password").toString();
      const phone = data.get("phone").toString().replace(" ", "");
      const filePath = `${"/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/users/"}.${username}.json`;
      if (!name || !email || !password || !username) {
        message = "Falta campos requeridos";
      } else if (password.length < 8) {
        message = "La contrase\xF1a es demasiado corta";
      } else if (!validator.validate(email)) {
        message = "El correo electr\xF3nico es invalido";
      } else if (emailUsage.emails.includes(email)) {
        message = "El correo electr\xF3nico ya est\xE1 usado";
      } else if (username.length < 8) {
        message = "El nombre de usuario es demasiado corto";
      } else if (!/^[a-z0-9_]+$/.test(username)) {
        message = "El nombre de usuario solo puede tener caracteres alfanum\xE9ricos y guiones bajos";
      } else if (fs.existsSync(filePath)) {
        message = "Este nombre de usuario est\xE1 usado";
      } else if (!/^(\d\s*){9}$/.test(phone)) {
        message = "Tel\xE9fono invalido (necesita ser de Espa\xF1a)";
      } else {
        await fsp.writeFile(filePath, JSON.stringify({
          name,
          username,
          email,
          password,
          phone
        }));
        emailUsage.emails.push(email);
        await fsp.writeFile(emailUsagePath, JSON.stringify(emailUsage));
        return Astro2.redirect("/login");
        message = "\xC9xito";
        success = true;
      }
    } catch (error) {
      message = "Algo ha sido mal";
      if (error instanceof Error) {
        console.error(error.stack);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "FormLayout", $$FormLayout, { "title": "Registrar", "form": {
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
        name: "name",
        label: "Nombre:",
        opts: {
          type: "text",
          required: true
        }
      },
      {
        name: "email",
        label: "Correo electr\xF3nico:",
        opts: {
          type: "email",
          required: true
        }
      },
      {
        name: "phone",
        label: "Tel\xE9fono:",
        opts: {
          type: "text",
          required: true
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
    submitText: "Registrar",
    button: true
  }, "data-astro-cid-encmhu2m": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between mb-6 gap-1" data-astro-cid-encmhu2m><button onclick="(function(){ window.location.replace(&quot;/&quot;)})();" data-astro-cid-encmhu2m>Volver</button></div><em${addAttribute(success ? "text-success-green" : "text-error-red", "class")} data-astro-cid-encmhu2m>${message}</em>` })}`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/registrar.astro", void 0);

const $$file = "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/registrar.astro";
const $$url = "/registrar";

export { $$Registrar as default, $$file as file, $$url as url };
