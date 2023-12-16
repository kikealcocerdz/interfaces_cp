/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderSlot, i as renderComponent } from '../astro_F6RMZl-2.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { a as $$Layout } from './_modelo__ttLUJbf4.mjs';
/* empty css                          */

const $$Astro$6 = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Section;
  const { color, title, subtitle, id } = Astro2.props;
  const textColor = `text-${color}`;
  return renderTemplate`${maybeRenderHead()}<section class="landing-section bg-black h-screen w-screen text-center overflow-hidden relative"${addAttribute(color, "data-header-color")}${addAttribute(id, "id")}> <div class="z-30 relative h-full flex flex-col"> <header> <h2${addAttribute(`${textColor} pt-20 text-[40px] font-bold`, "class")}> ${title} </h2> <p${addAttribute(`${textColor} text-sm`, "class")}> ${subtitle} </p> </header> </div> <div class="absolute top-0 bottom-0 h-full w-full z-10"> ${renderSlot($$result, $$slots["background"])} </div> </section>`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/Section.astro", void 0);

const $$Astro$5 = createAstro();
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeroSection;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "San Andreas Motorsports", "color": "white" }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<video class="object-center object-cover h-full w-full" autoplay muted loop src="/video.webm"></video>`, "footer": ($$result2) => renderTemplate`<div> <a class="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors" href="#concesionarios">
Prueba de conducción</a> </div>` })}`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/HeroSection.astro", void 0);

const $$Astro$4 = createAstro();
const $$Descripcion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Descripcion;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "\xBFQuienes somos?", "subtitle": "Nos dedicamos  a la venta de los automoviles mas cotizados del mercado, al igual que ofrecer una prueba de conducci\xF3n a potenciales clientes para que sientan la experiencia de conducir el coche de sus sue\xF1os. ", "color": "black", "id": "model-y" }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<img alt="Model Y" class="h-full w-full object-cover object-center bg-image" src="model-y.avif" id="bg-image-modely">`, "footer": ($$result2) => renderTemplate`<div class="gap-x-6 flex mx-auto font-gabarito"> <a class="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500" href="#">
Explorar inventario</a> <a class="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black" href="#">
Pedido personalizado</a> </div>` })}`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/Descripcion.astro", void 0);

const $$Astro$3 = createAstro();
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Carousel;
  return renderTemplate`${maybeRenderHead()}<div class="swiper" id="swiper-Carousel" data-astro-cid-wfe7xcno> <div class="swiper-wrapper" data-astro-cid-wfe7xcno> <div class="swiper-slide" data-astro-cid-wfe7xcno><img alt="tesla model-s" src="/model-s.webp" data-astro-cid-wfe7xcno></div> <div class="swiper-slide" data-astro-cid-wfe7xcno><img alt="mclaren 720s" src="/mclaren-blanco.jpg" data-astro-cid-wfe7xcno></div> <div class="swiper-slide" data-astro-cid-wfe7xcno><img alt="chevrolet camaro" src="/chevrolet-camaro.jpg" data-astro-cid-wfe7xcno></div> <div class="swiper-slide" data-astro-cid-wfe7xcno><img alt="Lamborghini Huracan" src="/lamborghini-huracan.jpg" data-astro-cid-wfe7xcno></div> </div> <div class="swiper-button-next" data-astro-cid-wfe7xcno></div> <div class="swiper-button-prev" data-astro-cid-wfe7xcno></div> <div class="swiper-pagination" data-astro-cid-wfe7xcno></div> </div> `;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/Carousel.astro", void 0);

const $$Astro$2 = createAstro();
const $$BrandSlider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BrandSlider;
  const { imageCar, brand } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="swiper" id="swiper-BrandSlider" data-astro-cid-xcxc6nqx> <div class="swiper-wrapper" data-astro-cid-xcxc6nqx> <div class="swiper-slide" data-astro-cid-xcxc6nqx><img${addAttribute(`${brand} 0`, "alt")}${addAttribute(`${imageCar[0]}`, "src")} data-astro-cid-xcxc6nqx></div> <div class="swiper-slide" data-astro-cid-xcxc6nqx><img${addAttribute(`${brand} 1`, "alt")}${addAttribute(`${imageCar[1]}`, "src")} data-astro-cid-xcxc6nqx></div> <div class="swiper-slide" data-astro-cid-xcxc6nqx><img${addAttribute(`${brand} 2`, "alt")}${addAttribute(`${imageCar[2]}`, "src")} data-astro-cid-xcxc6nqx></div> <div class="swiper-slide" data-astro-cid-xcxc6nqx><img${addAttribute(`${brand} 2`, "alt")}${addAttribute(`${imageCar[3]}`, "src")} data-astro-cid-xcxc6nqx></div> <div class="swiper-slide" data-astro-cid-xcxc6nqx><img${addAttribute(`${brand} 2`, "alt")}${addAttribute(`${imageCar[4]}`, "src")} data-astro-cid-xcxc6nqx></div> </div> </div> `;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/BrandSlider.astro", void 0);

const $$Astro$1 = createAstro();
const $$BrandCollection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BrandCollection;
  return renderTemplate`${maybeRenderHead()}<div class="grid h-full grid-cols-2 py-4"> ${renderComponent($$result, "BrandSlider", $$BrandSlider, { "imageCar": ["/tesla-logo.png", "/tesla-slider-1.jpeg", "/tesla-slider-2.jpeg", "/tesla-slider-3.jpeg", "/tesla-slider-4.jpeg"], "brand": "Tesla" })} ${renderComponent($$result, "BrandSlider", $$BrandSlider, { "imageCar": ["/huracan-logo.png", "/huracan-slider-1.jpeg", "/huracan-slider-2.jpeg", "/huracan-slider-3.jpeg", "/huracan-slider-4.jpeg"], "brand": "huracan" })} ${renderComponent($$result, "BrandSlider", $$BrandSlider, { "imageCar": ["/mclaren-logo.png", "/mclaren-slider-1.jpeg", "/mclaren-slider-2.jpeg", "/mclaren-slider-3.jpeg", "/mclaren-slider-4.jpeg"], "brand": "mclaren" })} ${renderComponent($$result, "BrandSlider", $$BrandSlider, { "imageCar": ["/camaro-logo.png", "/camaro-slider-1.jpeg", "/camaro-slider-2.jpeg", "/camaro-slider-3.jpeg ", "/camaro-slider-4.jpeg"], "brand": "camaro" })} </div> <footer class="mb-13 py-5 text-white bg-black font-bold"> <ul class="flex flex-row items-center justify-evenly"> <li><a href="#">Privacidad y legal</a></li> <li><a href="#">Contacto</a></li> <li><a href="#">Nuestros concesionarios</a></li> </ul> </footer>`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/components/BrandCollection.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "San Andreas Motorsports", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth" data-astro-cid-j7pv25f6><div class="snap-center" data-astro-cid-j7pv25f6>${renderComponent($$result2, "HeroSection", $$HeroSection, { "data-astro-cid-j7pv25f6": true })}</div><div class="snap-center" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Descripcion", $$Descripcion, { "data-astro-cid-j7pv25f6": true })}</div><div class="snap-center" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Carousel", $$Carousel, { "data-astro-cid-j7pv25f6": true })}</div><div class="snap-end" data-astro-cid-j7pv25f6>${renderComponent($$result2, "BrandCollection", $$BrandCollection, { "data-astro-cid-j7pv25f6": true })}</div></main>` })}`;
}, "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/index.astro", void 0);

const $$file = "/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
