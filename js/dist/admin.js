(()=>{var e={819:e=>{"use strict";var t=/(?:https?:)?\/\/(?:(?:[\w-]+\.)+[\w/#@~.-]*)(?:\?(?:[\w&=.!,;$#%-]+)?)?/gi;e.exports=function(e){return(e||"").replace(t,(function(e){return'<a href="'+e+'">'+e+"</a>"}))}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const e=flarum.core.compat["admin/app"];var t=r.n(e);function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}const i=flarum.core.compat["admin/components/ExtensionPage"];var a=r.n(i);const s=flarum.core.compat["common/utils/extractText"];var c=r.n(s),p=r(819),u=r.n(p),l=function(e){var r,n;function i(){return e.apply(this,arguments)||this}n=e,(r=i).prototype=Object.create(n.prototype),r.prototype.constructor=r,o(r,n);var a=i.prototype;return a.oninit=function(t){e.prototype.oninit.call(this,t)},a.content=function(e){var r=this.setting("gbcl-userip.service")(),n=[];return m("div",{className:"container"},m("div",{className:"geopage"},m("div",{className:"Form-group"},this.buildSettingComponent({type:"select",setting:"gbcl-userip.service",label:t().translator.trans("gbcl-userip.admin.service.label"),options:t().data["gbcl-userip.services"].map((function(e){var r=e.name;return n[r]=t().translator.trans("gbcl-userip.admin.service."+r+".label"),n})),required:!0,help:r&&m.trust(u()(c()(t().translator.trans("gbcl-userip.admin.service."+r+".description"))))})),this.submitButton()))},i}(a());t().initializers.add("gbcl/userip",(function(){t().extensionData.for("gbcl-userip").registerPage(l).registerPermission({icon:"fas fa-map-marked-alt",label:t().translator.trans("gbcl-userip.admin.permissions.view_ip_info_label"),permission:"discussion.viewIpInfo",tagScoped:!0,allowGuest:!0},"view")}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map