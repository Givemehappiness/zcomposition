var d=Object.defineProperty,m=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var g=(e,o,n)=>o in e?d(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,l=(e,o)=>{for(var n in o||(o={}))b.call(o,n)&&g(e,n,o[n]);if(p)for(var n of p(o))$.call(o,n)&&g(e,n,o[n]);return e},u=(e,o)=>m(e,f(o));import{g as E,h as x}from"./app.95d478f2.js";import{m as h}from"./mitt.84b56003.js";import{l as y}from"./lodash.8aa0d30d.js";const a=E({});function r(){let e;a.config.globalProperties.$emitter||(a.config.globalProperties.$emitter=h()),e=a.config.globalProperties.$emitter;const o="padding:4px;border-radius:2x 0 0 2px;background:#00ADB5;color:#EEEEEE;",n="padding:4px;border-radius:0 2px 2px 0;background:#393E46;color:white;",t={instance:x(),uid(){return t.instance?t.instance.uid:void 0},componentName(){return t.instance?t.instance.proxy.$options.name:t.uid()}};return e.on("*",(c,s)=>{const i=e.all.get(c);r.$config.debug&&i&&i.length&&(console.log(s),console.log(`%c${t.componentName()||t.uid()}\u{1F4E5}: %c${String(c)}`,o,n))}),e.emit=new Proxy(e.emit,{apply(c,s,i){return r.$config.debug&&console.log(`%c${t.componentName()||t.uid()}\u{1F4E4}: %c${String(i[0])}`,o,n),c.apply(s,i)}}),e}r.$config={debug:!1};r.config=y.exports.once(e=>{r.$config=e,e&&e.debug&&console.warn("useEventBus: debug mode is open."),Object.defineProperties(r,{$config:u(l({},Object.getOwnPropertyDescriptors(r.config)),{writable:!1})})});export{r as u};
