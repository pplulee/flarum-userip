(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o),t.d(o,{extend:()=>O});const e=flarum.core.compat["forum/app"];var r=t.n(e);const n=flarum.core.compat["common/extend"],c=flarum.core.compat["forum/components/CommentPost"];var i=t.n(c);function s(t,o){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},s(t,o)}function u(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,s(t,o)}const a=flarum.core.compat["common/Model"];var p=t.n(a),f=function(t){function o(){for(var o,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(o=t.call.apply(t,[this].concat(r))||this).countryCode=p().attribute("countryCode"),o.region=p().attribute("region"),o.isp=p().attribute("isp"),o}return u(o,t),o}(p()),l=function(){function t(){}var o=t.prototype;return o.getData=function(t){return this.region=t.region(),this.code=t.countryCode(),this.isp=t.isp(),this},o.process=function(t){return[this.region,this.code,this.isp].reduce((function(o,e,r){var n=o.count;return null!=e&&""!==e||(++n,e=t),o.elements[r]=e,o.count=n,o}),{count:0,elements:[]})},t}();const d=flarum.core.compat["common/Component"];var y=function(t){function o(){return t.apply(this,arguments)||this}return u(o,t),o.prototype.view=function(t){var o=this.attrs,e=o.code,r=o.region,n=o.isp;return m("div",{className:"userIp-container"},m("div",{className:"ip-locate",id:"info"},r+", "+e+" | "+n))},o}(t.n(d)());const v=flarum.core.compat["common/extenders"];var b=t.n(v);const g=flarum.core.compat["common/models/Post"];var h=t.n(g);const O=[new(b().Model)(h()).hasOne("userip_info").attribute("userIpInfo")];r().initializers.add("gbcl/userip",(function(){var t=r().translator.trans("gbcl-userip.forum.unknownNotice");r().store.models.userip_info=f,(0,n.extend)(i().prototype,"footerItems",(function(o){var e=this.attrs.post.userIpInfo();if(e){var r=(new l).getData(e).process(t),n=r.elements,c=n[0],i=n[1],s=n[2];r.count<2&&o.add("userIp",m(y,{region:c,code:i,isp:s}))}}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map