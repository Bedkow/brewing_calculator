(()=>{var t={980:(t,e,r)=>{(t.exports=r(645)(!1)).push([t.id,"*{box-sizing:border-box;margin:0;padding:0}body{background-color:#e2e1de;color:#2f2d2d}.secondary-text{color:#cabfbf}nav{background-color:#772133;padding:15px 60px}nav ul{list-style-type:none;display:flex;justify-content:space-between}nav li{background-color:#e2e1de;width:32%;border-radius:10%}nav .nav-link{display:block;text-decoration:none;color:#2f2d2d;margin-left:auto;margin-right:auto;width:auto;text-align:center;font-size:1.6rem}.into-container,.calcs-windows{border:solid 2px #772133;margin:20px auto;width:70%;padding:15px}.into-container h1{text-align:center;padding-bottom:15px}.link,.grid-item{border:solid 2px #772133;width:19%}.calcs-container{display:flex;margin:0 auto;justify-content:space-between;padding:30px 160px}.calc-button{border:solid 2px #301c1c;border-radius:7%;width:18%;padding:5px;text-align:center;background-color:#301c1c}.blog-title{padding:10px;margin:50px auto;font-size:4rem;border:#772133 solid;width:40%;text-align:center}.grid-container{display:grid;width:80%;margin:auto;grid-template-columns:repeat(5, 1fr);grid-template-rows:1fr 1fr;column-gap:10px;row-gap:10px}.grid-item{border:solid 2px #772133;width:100%;border-radius:10%}.calc-window{margin-left:auto;margin-right:auto;width:fit-content;box-sizing:border-box;display:block;border-radius:20px;padding:10px;width:80%;height:400px;font-size:1.25rem}",""])},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r,n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(r=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),a=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},507:(t,e,r)=>{var n=r(980);"string"==typeof n&&(n=[[t.id,n,""]]);r(723)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(t.exports=n.locals)},723:(t,e,r)=>{var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),d=null,l=0,u=[],f=r(947);function p(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(y(n.parts[a],e))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(y(n.parts[a],e));i[n.id]={id:n.id,refs:1,parts:s}}}}function h(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function b(t,e){var r=c(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),u.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,r);r.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=r.nc;n&&(t.attrs.nonce=n)}return g(e,t.attrs),b(t,e),e}function g(t,e){Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])}))}function y(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;r=d||(d=m(e)),n=U.bind(null,r,a,!1),o=U.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),b(t,e),e}(e),n=L.bind(null,r,e),o=function(){v(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(e),n=j.bind(null,r),o=function(){v(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=h(t,e);return p(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,n.push(s)}for(t&&p(h(t,e),e),o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var x,w=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function U(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function j(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function L(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=f(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},947:t=>{t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";r(507),document.querySelector(".calc").addEventListener("click",(function(){var t=Number(document.querySelector(".desired-alcohol").value),e=17*Number(document.querySelector(".volume").value)*t,r="You need to add ".concat(e," grams of sugar. This amount of sugar will add ").concat(Math.trunc(.6*e)," ml to the total volume.");document.querySelector(".sugar-to-add").textContent=r}))})()})();