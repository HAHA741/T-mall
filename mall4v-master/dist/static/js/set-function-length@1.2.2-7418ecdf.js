import{g as u}from"./get-intrinsic@1.2.4-25c259ca.js";import{d as p}from"./define-data-property@1.1.4-53ade537.js";import{h as g}from"./has-property-descriptors@1.0.2-f195ed7c.js";import{g as m}from"./gopd@1.0.1-6433dd40.js";import{t as v}from"./es-errors@1.3.0-82fd953f.js";var h=u,a=p,l=g(),n=m,s=v,F=h("%Math.floor%"),L=function(t,r){if(typeof t!="function")throw new s("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||F(r)!==r)throw new s("`length` must be a positive 32-bit integer");var f=arguments.length>2&&!!arguments[2],o=!0,i=!0;if("length"in t&&n){var e=n(t,"length");e&&!e.configurable&&(o=!1),e&&!e.writable&&(i=!1)}return(o||i||!f)&&(l?a(t,"length",r,!0,!0):a(t,"length",r)),t};export{L as s};
