import{g as o}from"./@ctrl_tinycolor@3.6.1-93e5f6fc.js";var s=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function f(t,e){return!!(t===e||s(t)&&s(e))}function i(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!f(t[r],e[r]))return!1;return!0}function m(t,e){e===void 0&&(e=i);var r=null;function u(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(r&&r.lastThis===this&&e(n,r.lastArgs))return r.lastResult;var l=t.apply(this,n);return r={lastResult:l,lastArgs:n,lastThis:this},l}return u.clear=function(){r=null},u}const c=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),h=o(c);export{m,h as r};
