!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1);(()=>{let e=document.getElementsByClassName("onoffswitch");if(e.length>0)for(let t of e)t.addEventListener("click",()=>{for(let e of document.getElementsByClassName("onoffswitch"))e.classList.contains("onoffswitch_checked")?e.classList.remove("onoffswitch_checked"):e.classList.add("onoffswitch_checked");let e=[];for(let t of document.getElementsByClassName("theme_color_project-default"))e.push(t);let t=[];for(let e of document.getElementsByClassName("theme_color_project-inverse"))t.push(e);for(let t of e)t.classList.remove("theme_color_project-default"),t.classList.add("theme_color_project-inverse");for(let e of t)e.classList.remove("theme_color_project-inverse"),e.classList.add("theme_color_project-default")},!1)})()},function(e,t){}]);
//# sourceMappingURL=script.js.map