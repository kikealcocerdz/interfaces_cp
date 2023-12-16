import '@astrojs/internal-helpers/path';
import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_81H4FYWo.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message) {
  return log(opts, "info", label, message);
}
function warn(opts, label, message) {
  return log(opts, "warn", label, message);
}
function error(opts, label, message) {
  return log(opts, "error", label, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message) {
    info(this.options, label, message);
  }
  warn(label, message) {
    warn(this.options, label, message);
  }
  error(label, message) {
    error(this.options, label, message);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/api/auth/[...auth]","pattern":"^\\/api\\/auth(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...auth","dynamic":true,"spread":true}]],"params":["...auth"],"component":"node_modules/auth-astro/src/api/[...auth].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.By67nKK-.js"}],"styles":[{"type":"external","src":"/_astro/compra.487sUItS.css"},{"type":"external","src":"/_astro/pagination.mnVxPep1.css"},{"type":"inline","content":".dropdown-content[data-astro-cid-qccbmzfi]{display:none;position:absolute;flex-direction:row;top:100%;justify-content:space-evenly;background-color:#fff;min-width:100%;box-shadow:0 8px 16px #0003;z-index:1;left:0;transition:all .5s ease}.dropdown-content[data-astro-cid-qccbmzfi] a[data-astro-cid-qccbmzfi]:hover{background-color:#ddd}.dropdown[data-astro-cid-qccbmzfi]:hover .dropdown-content[data-astro-cid-qccbmzfi]{display:flex;transition:all .5s ease}.dropdown[data-astro-cid-qccbmzfi]{transition:all .5s ease}\n@import\"https://fonts.googleapis.com/css2?family=Gabarito&display=swap\";.swiper[data-astro-cid-wfe7xcno]{width:100%;height:100vh}.swiper-slide[data-astro-cid-wfe7xcno]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center}.swiper-slide[data-astro-cid-wfe7xcno] img[data-astro-cid-wfe7xcno]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.swiper[data-astro-cid-wfe7xcno]{margin-left:auto;margin-right:auto}.swiper[data-astro-cid-xcxc6nqx]{margin:90px auto 10px;width:50%;height:35vh}.swiper-slide[data-astro-cid-xcxc6nqx]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center}.swiper-slide[data-astro-cid-xcxc6nqx] img[data-astro-cid-xcxc6nqx]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.swiper[data-astro-cid-xcxc6nqx]{margin-left:auto;margin-right:auto}[data-astro-cid-j7pv25f6]{font-family:Gabarito,sans-serif}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/compra.487sUItS.css"},{"type":"inline","content":"h1[data-astro-cid-zdpvtjnw]{font-size:60px}button[data-astro-cid-zdpvtjnw]{flex:1 1 0%;border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-top:.5rem;padding-bottom:.5rem;font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}button[data-astro-cid-zdpvtjnw]:hover{--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}#slotWrapper[data-astro-cid-zdpvtjnw] button{flex:1 1 0%;border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-top:.5rem;padding-bottom:.5rem;font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}#slotWrapper[data-astro-cid-zdpvtjnw] button:hover{--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}\n.dropdown-content[data-astro-cid-qccbmzfi]{display:none;position:absolute;flex-direction:row;top:100%;justify-content:space-evenly;background-color:#fff;min-width:100%;box-shadow:0 8px 16px #0003;z-index:1;left:0;transition:all .5s ease}.dropdown-content[data-astro-cid-qccbmzfi] a[data-astro-cid-qccbmzfi]:hover{background-color:#ddd}.dropdown[data-astro-cid-qccbmzfi]:hover .dropdown-content[data-astro-cid-qccbmzfi]{display:flex;transition:all .5s ease}.dropdown[data-astro-cid-qccbmzfi]{transition:all .5s ease}\n@import\"https://fonts.googleapis.com/css2?family=Gabarito&display=swap\";[data-astro-cid-encmhu2m]{font-family:Gabarito,sans-serif}\n"}],"routeData":{"route":"/registrar","type":"page","pattern":"^\\/registrar\\/?$","segments":[[{"content":"registrar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/registrar.astro","pathname":"/registrar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.selectedColor={color:\"blanco\",rueda:1};window.changeColor=function(o,e){window.selectedColor.color=o,console.log(window.selectedColor.color);const n=document.getElementById(\"image-color\"),c=document.getElementById(\"image-ruedas\");c.src=`/${e}_${window.selectedColor.color}_1.png`,n.src=`/${e}_${window.selectedColor.color}_1.png`};window.changeRueda=function(o,e){console.log(o);const n=document.getElementById(\"image-ruedas\"),c=document.getElementById(\"image-color\");c.src=`/${e}_${window.selectedColor.color}_${o}.png`,n.src=`/${e}_${window.selectedColor.color}_${o}.png`};window.changeInterior=function(o,e){const n=document.getElementById(\"image-interior\");n.src=`/${e}_interior_${o}.png`};\n"}],"styles":[{"type":"external","src":"/_astro/compra.487sUItS.css"},{"type":"inline","content":".dropdown-content[data-astro-cid-qccbmzfi]{display:none;position:absolute;flex-direction:row;top:100%;justify-content:space-evenly;background-color:#fff;min-width:100%;box-shadow:0 8px 16px #0003;z-index:1;left:0;transition:all .5s ease}.dropdown-content[data-astro-cid-qccbmzfi] a[data-astro-cid-qccbmzfi]:hover{background-color:#ddd}.dropdown[data-astro-cid-qccbmzfi]:hover .dropdown-content[data-astro-cid-qccbmzfi]{display:flex;transition:all .5s ease}.dropdown[data-astro-cid-qccbmzfi]{transition:all .5s ease}\n"},{"type":"external","src":"/_astro/_modelo_.8xldQSos.css"}],"routeData":{"route":"/product/[modelo]","type":"page","pattern":"^\\/product\\/([^/]+?)\\/?$","segments":[[{"content":"product","dynamic":false,"spread":false}],[{"content":"modelo","dynamic":true,"spread":false}]],"params":["modelo"],"component":"src/pages/product/[modelo].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.getElementById(\"dropdown-pais\").addEventListener(\"click\",function(){document.getElementById(\"dropdown-menu-pais\").classList.toggle(\"hidden\")});document.getElementById(\"dropdown-hora\").addEventListener(\"click\",function(){document.getElementById(\"dropdown-menu-hora\").classList.toggle(\"hidden\")});document.addEventListener(\"DOMContentLoaded\",function(){const a=new Date;let t=a;function i(e,o){const y=new Date(o,e,1),p=new Date(o,e+1,0),r=document.querySelector(\".days\");r.innerHTML=\"\";for(let n=0;n<y.getDay();n++){const c=document.createElement(\"span\");c.classList.add(\"empty\"),r.appendChild(c)}for(let n=1;n<=p.getDate();n++){const c=document.createElement(\"span\");c.textContent=n,c.addEventListener(\"click\",()=>s(new Date(o,e,n))),r.appendChild(c)}}function d(){const e=document.querySelector(\".current-month\");e.textContent=u(t.getMonth())+\" \"+t.getFullYear()}function l(e){t.setMonth(t.getMonth()+e),i(t.getMonth(),t.getFullYear()),d()}document.querySelector(\".prev\").addEventListener(\"click\",()=>l(-1)),document.querySelector(\".next\").addEventListener(\"click\",()=>l(1));function u(e){return[\"Enero\",\"Febrero\",\"Marzo\",\"Abril\",\"Mayo\",\"Junio\",\"Julio\",\"Agosto\",\"Septiembre\",\"Octubre\",\"Noviembre\",\"Diciembre\"][e]}function s(e){t=e,d(),document.getElementById(\"selected-date\").value=m(t)}function m(e){const o={weekday:\"long\",year:\"numeric\",month:\"long\",day:\"numeric\"};return e.toLocaleDateString(\"es-ES\",o)}function g(){d(),i(a.getMonth(),a.getFullYear())}g()});\n"}],"styles":[{"type":"external","src":"/_astro/compra.487sUItS.css"},{"type":"inline","content":".dropdown-content[data-astro-cid-qccbmzfi]{display:none;position:absolute;flex-direction:row;top:100%;justify-content:space-evenly;background-color:#fff;min-width:100%;box-shadow:0 8px 16px #0003;z-index:1;left:0;transition:all .5s ease}.dropdown-content[data-astro-cid-qccbmzfi] a[data-astro-cid-qccbmzfi]:hover{background-color:#ddd}.dropdown[data-astro-cid-qccbmzfi]:hover .dropdown-content[data-astro-cid-qccbmzfi]{display:flex;transition:all .5s ease}.dropdown[data-astro-cid-qccbmzfi]{transition:all .5s ease}\n@import\"https://fonts.googleapis.com/css2?family=Gabarito&display=swap\";.calendar-container[data-astro-cid-eq4smzqd]{text-align:center}.calendar[data-astro-cid-eq4smzqd]{border:1px solid #ccc;border-radius:5px;overflow:hidden;width:400px;height:300px}.month[data-astro-cid-eq4smzqd]{background-color:#ddd;display:flex;justify-content:space-between;padding:12px}.month[data-astro-cid-eq4smzqd] span[data-astro-cid-eq4smzqd]{cursor:pointer}.weekdays[data-astro-cid-eq4smzqd]{display:grid;grid-template-columns:repeat(7,1fr);background-color:#f0f0f0;font-weight:700}.days[data-astro-cid-eq4smzqd]{display:grid;grid-template-columns:repeat(7,1fr);gap:10px}.days[data-astro-cid-eq4smzqd] span[data-astro-cid-eq4smzqd]{display:flex;align-items:center;justify-content:center;height:40px;border-radius:5px;cursor:pointer}.days[data-astro-cid-eq4smzqd] span[data-astro-cid-eq4smzqd]:hover{background-color:#000}#selected-date[data-astro-cid-eq4smzqd]{margin-top:10px;padding:5px;width:350px;font-size:18px}.calendar-container[data-astro-cid-4gpcsbfn]{text-align:center}.calendar[data-astro-cid-4gpcsbfn]{border:1px solid #ccc;border-radius:5px;overflow:hidden;width:220px;margin-top:10px}.month[data-astro-cid-4gpcsbfn]{background-color:#ddd;display:flex;justify-content:space-between;padding:8px}.month[data-astro-cid-4gpcsbfn] span[data-astro-cid-4gpcsbfn]{cursor:pointer}.weekdays[data-astro-cid-4gpcsbfn]{display:grid;grid-template-columns:repeat(7,1fr);background-color:#f0f0f0;font-weight:700}.days[data-astro-cid-4gpcsbfn]{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.days[data-astro-cid-4gpcsbfn] span[data-astro-cid-4gpcsbfn]{display:flex;align-items:center;justify-content:center;height:30px;border-radius:5px;cursor:pointer}.days[data-astro-cid-4gpcsbfn] span[data-astro-cid-4gpcsbfn]:hover{background-color:#000}#selected-date[data-astro-cid-4gpcsbfn]{margin-top:10px;padding:5px;width:350px;font-size:50px}[data-astro-cid-3gdpod4o]{font-family:Gabarito,sans-serif}\n"}],"routeData":{"route":"/compra","type":"page","pattern":"^\\/compra\\/?$","segments":[[{"content":"compra","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/compra.astro","pathname":"/compra","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.uGgV88pB.js"}],"styles":[{"type":"external","src":"/_astro/pagination.mnVxPep1.css"},{"type":"external","src":"/_astro/compra.487sUItS.css"},{"type":"inline","content":".dropdown-content[data-astro-cid-qccbmzfi]{display:none;position:absolute;flex-direction:row;top:100%;justify-content:space-evenly;background-color:#fff;min-width:100%;box-shadow:0 8px 16px #0003;z-index:1;left:0;transition:all .5s ease}.dropdown-content[data-astro-cid-qccbmzfi] a[data-astro-cid-qccbmzfi]:hover{background-color:#ddd}.dropdown[data-astro-cid-qccbmzfi]:hover .dropdown-content[data-astro-cid-qccbmzfi]{display:flex;transition:all .5s ease}.dropdown[data-astro-cid-qccbmzfi]{transition:all .5s ease}\n@import\"https://fonts.googleapis.com/css2?family=Gabarito:wght@700&display=swap\";.swiper[data-astro-cid-xkdknrbe]{width:60%;height:65vh;margin-top:50px}.swiper-slide[data-astro-cid-xkdknrbe]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center}.swiper-slide[data-astro-cid-xkdknrbe] img[data-astro-cid-xkdknrbe]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.swiper[data-astro-cid-xkdknrbe]{margin-left:auto;margin-right:auto}\n"}],"routeData":{"route":"/marcas/[modelo]","type":"page","pattern":"^\\/marcas\\/([^/]+?)\\/?$","segments":[[{"content":"marcas","dynamic":false,"spread":false}],[{"content":"modelo","dynamic":true,"spread":false}]],"params":["modelo"],"component":"src/pages/marcas/[modelo].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"async function h(e,n,t){const{callbackUrl:r=window.location.href,redirect:c=!0}=n??{},{prefix:s=\"/api/auth\",...i}=n??{},o=e===\"credentials\",u=o||e===\"email\",d=`${`${s}/${o?\"callback\":\"signin\"}/${e}`}?${new URLSearchParams(t)}`,w=await fetch(`${s}/csrf`),{csrfToken:f}=await w.json(),l=await fetch(d,{method:\"post\",headers:{\"Content-Type\":\"application/x-www-form-urlencoded\",\"X-Auth-Return-Redirect\":\"1\"},body:new URLSearchParams({...i,csrfToken:f,callbackUrl:r})}),a=await l.clone().json(),m=new URL(a.url).searchParams.get(\"error\");if(c||!u||!m){window.location.href=a.url??r,a.url.includes(\"#\")&&window.location.reload();return}return l}async function p(e){const{callbackUrl:n=window.location.href,prefix:t=\"/api/auth\"}=e??{},r=await fetch(`${t}/csrf`),{csrfToken:c}=await r.json(),o=(await(await fetch(`${t}/signout`,{method:\"post\",headers:{\"Content-Type\":\"application/x-www-form-urlencoded\",\"X-Auth-Return-Redirect\":\"1\"},body:new URLSearchParams({csrfToken:c,callbackUrl:n})})).json()).url??n;window.location.href=o,o.includes(\"#\")&&window.location.reload()}console.log(\"Hello!\");document.querySelector(\"#login\").onclick=()=>h(\"credentials\",{username:document.querySelector(\"form\").elements.username.value,password:document.querySelector(\"form\").elements.password.value,redirect:!1}).then(()=>{document.querySelector(\"#result\").style.display=\"block\"});document.querySelector(\"#logout\").onclick=()=>p();\n"}],"styles":[{"type":"external","src":"/_astro/compra.487sUItS.css"},{"type":"inline","content":"h1[data-astro-cid-zdpvtjnw]{font-size:60px}button[data-astro-cid-zdpvtjnw]{flex:1 1 0%;border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-top:.5rem;padding-bottom:.5rem;font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}button[data-astro-cid-zdpvtjnw]:hover{--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}#slotWrapper[data-astro-cid-zdpvtjnw] button{flex:1 1 0%;border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-top:.5rem;padding-bottom:.5rem;font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}#slotWrapper[data-astro-cid-zdpvtjnw] button:hover{--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}\n.dropdown-content[data-astro-cid-qccbmzfi]{display:none;position:absolute;flex-direction:row;top:100%;justify-content:space-evenly;background-color:#fff;min-width:100%;box-shadow:0 8px 16px #0003;z-index:1;left:0;transition:all .5s ease}.dropdown-content[data-astro-cid-qccbmzfi] a[data-astro-cid-qccbmzfi]:hover{background-color:#ddd}.dropdown[data-astro-cid-qccbmzfi]:hover .dropdown-content[data-astro-cid-qccbmzfi]{display:flex;transition:all .5s ease}.dropdown[data-astro-cid-qccbmzfi]{transition:all .5s ease}\n"}],"routeData":{"route":"/login","type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/registrar.astro",{"propagation":"none","containsHead":true}],["/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/compra.astro",{"propagation":"none","containsHead":true}],["/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/src/pages/product/[modelo].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/compra.astro":"chunks/pages/compra_sklJLG_6.mjs","/src/pages/index.astro":"chunks/pages/index_RY-CypmF.mjs","/node_modules/astro/dist/assets/endpoint/node.js":"chunks/pages/node_jSLXggV5.mjs","/src/pages/registrar.astro":"chunks/pages/registrar_t2yyvxsP.mjs","\u0000@astrojs-manifest":"manifest_AhMJxB_E.mjs","/home/kikealcocerdz/Documents/year-3/INTERFACES/interfaces_cp/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/auth-astro/src/api/[...auth]@_@ts":"chunks/_.._hhe6fMwR.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"chunks/node_LbuKB_9G.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_wWOB-_o4.mjs","\u0000@astro-page:src/pages/registrar@_@astro":"chunks/registrar_BF8aBTre.mjs","\u0000@astro-page:src/pages/product/[modelo]@_@astro":"chunks/_modelo__JfcnS_hL.mjs","\u0000@astro-page:src/pages/compra@_@astro":"chunks/compra_7BfY53Jc.mjs","\u0000@astro-page:src/pages/marcas/[modelo]@_@astro":"chunks/_modelo__rEJZZVHf.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login_BWMEJYyd.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.uGgV88pB.js","/astro/hoisted.js?q=3":"_astro/hoisted.AMLQ-Syb.js","/astro/hoisted.js?q=2":"_astro/hoisted.By67nKK-.js","/astro/hoisted.js?q=4":"_astro/hoisted._30BwF2u.js","/astro/hoisted.js?q=1":"_astro/hoisted.LGPt6sZa.js","@astrojs/react/client.js":"_astro/client.gSoe9Upx.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_modelo_.8xldQSos.css","/_astro/compra.487sUItS.css","/530937-tesla-model-s-2016.webp","/Camaro_009.jpg","/McLaren-720S-azul.jpg","/Mclaren 720s.jpg","/Tesla Model-S-3-798x460.jpg","/a18dde2f-665e-46f0-8c80-efc73fc745f9.jpg","/accessories.avif","/accessories.webp","/aleron_Alto.jpg","/aleron_bajo.jpg","/aleron_medio.jpg","/camaro-logo.png","/camaro-rojo.png","/camaro-slider-1.jpeg","/camaro-slider-1.webp","/camaro-slider-2.jpeg","/camaro-slider-2.jpg","/camaro-slider-3.jpeg","/camaro-slider-3.jpg","/camaro-slider-4.jpeg","/camaro-slider-4.webp","/camaro_azul_1.png","/camaro_blanco_1.png","/camaro_interior_blanco.png","/camaro_interior_negro.png","/camaro_negro_1.png","/camaro_rojo_1.png","/chevrolet-camaro.jpg","/colores.png","/eeuu.svg","/email.svg","/facebook.svg","/favicon.svg","/flecha_desplegable.png","/huracan-logo.png","/huracan-negro.png","/huracan-slider-1.jpeg","/huracan-slider-2.jpeg","/huracan-slider-3.jpeg","/huracan-slider-4.jpeg","/huracan_amarillo_1-removebg-preview.png","/huracan_amarillo_1.png","/huracan_amarillo_2.png","/huracan_azul_1.png","/huracan_azul_2.png","/huracan_blanco_1.png","/huracan_blanco_2.png","/huracan_interior_blanco.jpeg","/huracan_interior_blanco.jpg","/huracan_interior_blanco.png","/huracan_interior_negro.jpeg","/huracan_interior_negro.jpg","/huracan_interior_negro.png","/huracan_negro_1.png","/huracan_negro_2.png","/huracan_rojo_1.png","/huracan_rojo_2.png","/instagram.svg","/lamborghini-huracan.jpg","/logo.png","/mapa_toledo.png","/mclaren-blanco.jpg","/mclaren-logo.png","/mclaren-slider-1.jpeg","/mclaren-slider-1.webp","/mclaren-slider-2.jpeg","/mclaren-slider-2.jpg","/mclaren-slider-3.jpeg","/mclaren-slider-3.jpg","/mclaren-slider-4.jpeg","/mclaren-slider-4.jpg","/mclaren_azul_1.png","/mclaren_azul_2.png","/mclaren_blanco.png","/mclaren_blanco_1.png","/mclaren_blanco_2.png","/mclaren_interior_blanco.png","/mclaren_interior_negro.png","/mclaren_negro_1.png","/mclaren_negro_2.png","/mclaren_rojo_1.png","/mclaren_rojo_2.png","/model-3.avif","/model-3.webp","/model-s.avif","/model-s.webp","/model-x.avif","/model-x.webp","/model-y.avif","/model-y.webp","/powerwall.avif","/powerwall.webp","/spain.svg","/tesla-azul-1.png","/tesla-llantas-1.avif","/tesla-llantas-2.avif","/tesla-logo.png","/tesla-s-white.jpeg","/tesla-slider-1.jpeg","/tesla-slider-2.jpeg","/tesla-slider-3.jpeg","/tesla-slider-4.jpeg","/tesla_azul_1.png","/tesla_azul_2.png","/tesla_blanco_1.png","/tesla_blanco_2.png","/tesla_interior_blanco.png","/tesla_interior_negro.png","/tesla_negro_1.png","/tesla_negro_2.png","/tesla_rojo_1.png","/tesla_rojo_2.png","/video.webm","/world.svg","/_astro/client.gSoe9Upx.js","/_astro/hoisted.By67nKK-.js","/_astro/hoisted.uGgV88pB.js","/_astro/pagination.DtNbBNDh.js","/_astro/pagination.mnVxPep1.css"]});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
