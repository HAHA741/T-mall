import{g as f}from"./get-intrinsic@1.2.4-25c259ca.js";import{f as g}from"./function-bind@1.1.2-61637ca6.js";import{s as B}from"./set-function-length@1.2.2-7418ecdf.js";import{t as $}from"./es-errors@1.3.0-82fd953f.js";import{r as h}from"./es-define-property@1.0.0-8178d4b8.js";var s={exports:{}};(function(e){var r=g,t=f,n=B,y=$,a=t("%Function.prototype.apply%"),i=t("%Function.prototype.call%"),p=t("%Reflect.apply%",!0)||r.call(i,a),o=h(),d=t("%Math.max%");e.exports=function(l){if(typeof l!="function")throw new y("a function is required");var x=p(r,i,arguments);return n(x,1+d(0,l.length-(arguments.length-1)),!0)};var c=function(){return p(r,a,arguments)};o?o(e.exports,"apply",{value:c}):e.exports.apply=c})(s);var I=s.exports,u=f,v=I,E=v(u("String.prototype.indexOf")),O=function(r,t){var n=u(r,!!t);return typeof n=="function"&&E(r,".prototype.")>-1?v(n):n};export{O as c};
