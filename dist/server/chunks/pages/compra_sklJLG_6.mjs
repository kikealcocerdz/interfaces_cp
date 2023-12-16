/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent } from '../astro_81H4FYWo.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$LandingHeader, a as $$Layout } from './_modelo__BnLh-nrA.mjs';
/* empty css                           */

const $$Astro$5 = createAstro();
const $$NavigateCompra = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NavigateCompra;
  const { step } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <nav class="h-full flex flex-row w-full mt-10 py-8"> <div${addAttribute(`flex flex-col items-center justify-evenly w-1/3 mt-5 px-10`, "class")}><a href="#section-lugar"${addAttribute(`border-2 border-black rounded-full w-16 h-16  ${step === 1 ? "bg-black" : "bg-white"}`, "class")}></a>Lugar</div> <div${addAttribute(`flex flex-col items-center justify-evenly w-1/3 mt-5 px-10`, "class")}><a href="#section-datos"${addAttribute(`border-2 border-black rounded-full w-16 h-16  ${step === 12 ? "bg-black" : "bg-white"}`, "class")}></a>Datos</div> <div${addAttribute(`flex flex-col items-center justify-evenly w-1/3 mt-5 px-10`, "class")}><a href="#section-confirmar"${addAttribute(`border-2 border-black rounded-full w-16 h-16  ${step === 123 ? "bg-black" : "bg-white"}`, "class")}></a>Confirmación</div> </nav> </div>`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/NavigateCompra.astro", void 0);

const $$Astro$4 = createAstro();
const $$Calendar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Calendar;
  return renderTemplate`${maybeRenderHead()}<div class="calendar-container" data-astro-cid-eq4smzqd> <input type="text" id="selected-date" readonly data-astro-cid-eq4smzqd> <div class="calendar" data-astro-cid-eq4smzqd> <div class="month" data-astro-cid-eq4smzqd> <span class="prev" data-astro-cid-eq4smzqd>&#9665;</span> <span class="current-month" data-astro-cid-eq4smzqd>Enero 2023</span> <span class="next" data-astro-cid-eq4smzqd>&#9655;</span> </div> <div class="weekdays" data-astro-cid-eq4smzqd> <span data-astro-cid-eq4smzqd>L</span> <span data-astro-cid-eq4smzqd>M</span> <span data-astro-cid-eq4smzqd>X</span> <span data-astro-cid-eq4smzqd>J</span> <span data-astro-cid-eq4smzqd>V</span> <span data-astro-cid-eq4smzqd>S</span> <span data-astro-cid-eq4smzqd>D</span> </div> <div class="days" data-astro-cid-eq4smzqd></div> </div> </div> `;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/Calendar.astro", void 0);

const $$Astro$3 = createAstro();
const $$LugarSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LugarSection;
  let country = "Espa\xF1a";
  return renderTemplate`${maybeRenderHead()}<section id="section-lugar" data-astro-cid-4gpcsbfn> <div class="w-screen h-screen bg-white flex flex-col font-gabarito" data-astro-cid-4gpcsbfn> ${renderComponent($$result, "NavigateCompra", $$NavigateCompra, { "step": 1, "data-astro-cid-4gpcsbfn": true })} <div class="flex w-full flex-row justify-start ml-80 mt-24" data-astro-cid-4gpcsbfn> <div class="" data-astro-cid-4gpcsbfn> <button id="dropdown-pais" class="bg-gray-300 w-36 text-2xl text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" data-astro-cid-4gpcsbfn> <span class="mr-1" data-astro-cid-4gpcsbfn>${country}</span> <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-astro-cid-4gpcsbfn><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" data-astro-cid-4gpcsbfn></path> </svg> </button> <ul id="dropdown-menu-pais" class="dropdown-menu absolute hidden text-gray-700 pt-1" data-astro-cid-4gpcsbfn> <li data-astro-cid-4gpcsbfn><button class="bg-gray-200 hover:bg-gray-400 text-2xl text-gray-700  w-36 font-semibold py-2 px-4 rounded inline-flex items-center" id="country1" data-astro-cid-4gpcsbfn>España</button></li> <li data-astro-cid-4gpcsbfn><button class="bg-gray-200 hover:bg-gray-400 text-2xl text-gray-700  w-36 font-semibold py-2 px-4 rounded inline-flex items-center" id="country2" data-astro-cid-4gpcsbfn>EE.UU</button></li> <li data-astro-cid-4gpcsbfn><button class="bg-gray-200 hover:bg-gray-400 text-2xl text-gray-700  w-36 font-semibold py-2 px-4 rounded inline-flex items-center" id="country3" data-astro-cid-4gpcsbfn>Alemania</button></li> </ul> </div> <div class="ml-10" data-astro-cid-4gpcsbfn> <button id="dropdown-hora" class="bg-gray-300 w-36 text-2xl text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" data-astro-cid-4gpcsbfn> <span class="mr-1" data-astro-cid-4gpcsbfn>Hora</span> <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-astro-cid-4gpcsbfn><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" data-astro-cid-4gpcsbfn></path> </svg> </button> <ul id="dropdown-menu-hora" class="dropdown-menu absolute hidden text-gray-700 pt-1" data-astro-cid-4gpcsbfn> <li data-astro-cid-4gpcsbfn><a class="bg-gray-200 hover:bg-gray-400 text-2xl text-gray-700  w-36 font-semibold py-2 px-4 rounded inline-flex items-center" href="#" data-astro-cid-4gpcsbfn>16:00</a></li> <li data-astro-cid-4gpcsbfn><a class="bg-gray-200 hover:bg-gray-400 text-2xl text-gray-700  w-36 font-semibold py-2 px-4 rounded inline-flex items-center" href="#" data-astro-cid-4gpcsbfn>17:00</a></li> <li data-astro-cid-4gpcsbfn><a class="bg-gray-200 hover:bg-gray-400 text-2xl text-gray-700  w-36 font-semibold py-2 px-4 rounded inline-flex items-center" href="#" data-astro-cid-4gpcsbfn>18:00</a></li> <li data-astro-cid-4gpcsbfn><a class="bg-gray-200 hover:bg-gray-400 text-2xl text-gray-700  w-36 font-semibold py-2 px-4 rounded inline-flex items-center" href="#" data-astro-cid-4gpcsbfn>19:00</a></li> </ul> </div> <div class="ml-10" data-astro-cid-4gpcsbfn> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.9315057446458!2d-3.967526892206348!3d39.865596421769084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a090cdd52e087%3A0x4fc8aa2ef30036da!2sC.%20R%C3%ADo%20Valdelospozos%2C%204%2C%2045007%20Toledo!5e0!3m2!1ses!2ses!4v1702572516410!5m2!1ses!2ses" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-4gpcsbfn>
          </iframe> </div> <div class="ml-10" data-astro-cid-4gpcsbfn> <ul id="dropdown-menu-dia" class="absolute text-gray-700 pt-1" data-astro-cid-4gpcsbfn> ${renderComponent($$result, "Calendar", $$Calendar, { "data-astro-cid-4gpcsbfn": true })} </ul> </div> </div> </div> </section> `;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/LugarSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$DatosSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DatosSection;
  return renderTemplate`${maybeRenderHead()}<section id="section-datos"> <div class="w-screen h-screen bg-white flex flex-col"> ${renderComponent($$result, "NavigateCompra", $$NavigateCompra, { "step": 12 })} <div class="w-full flex flex-row h-full items-center justify-center"> <div class="flex flex-row w-1/2 h-4/6 justify-start"></div> </div> </div> </section>`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/DatosSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$ConfirmSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ConfirmSection;
  return renderTemplate`${maybeRenderHead()}<section id="section-confirmar"> <div class="w-screen h-screen bg-white flex flex-col"> ${renderComponent($$result, "NavigateCompra", $$NavigateCompra, { "step": 123 })} <div class="w-full flex flex-row h-full items-center justify-center"> <div class="flex flex-row w-1/2 h-4/6 justify-start"></div> </div> </div> </section>`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/ConfirmSection.astro", void 0);

const $$Astro = createAstro();
const $$Compra = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Compra;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "San Andreas Motorsports", "data-astro-cid-3gdpod4o": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="snap-x snap-mandatory relative w-full h-screen overflow-x-auto overflow-y-hidden scroll-smooth flex" data-astro-cid-3gdpod4o>${renderComponent($$result2, "LandingHeader", $$LandingHeader, { "data-astro-cid-3gdpod4o": true })}<div class="snap-start flex-shrink-0 w-screen h-screen" data-astro-cid-3gdpod4o>${renderComponent($$result2, "LugarSection", $$LugarSection, { "data-astro-cid-3gdpod4o": true })}</div><div class="snap-start flex-shrink-0 w-screen h-screen" data-astro-cid-3gdpod4o>${renderComponent($$result2, "DatosSection", $$DatosSection, { "data-astro-cid-3gdpod4o": true })}</div><div class="snap-start flex-shrink-0 w-screen h-screen" data-astro-cid-3gdpod4o>${renderComponent($$result2, "ConfirmSection", $$ConfirmSection, { "data-astro-cid-3gdpod4o": true })}</div></main>` })}`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/compra.astro", void 0);

const $$file = "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/compra.astro";
const $$url = "/compra";

export { $$Compra as default, $$file as file, $$url as url };
