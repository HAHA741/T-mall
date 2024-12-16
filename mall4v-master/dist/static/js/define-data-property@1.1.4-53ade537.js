import{r as g}from"./es-define-property@1.0.0-8178d4b8.js";import{s as f,t as b}from"./es-errors@1.3.0-82fd953f.js";import{g as p}from"./gopd@1.0.1-6433dd40.js";var s=g(),d=f,r=b,i=p,c=function(e,o,u){if(!e||typeof e!="object"&&typeof e!="function")throw new r("`obj` must be an object or a function`");if(typeof o!="string"&&typeof o!="symbol")throw new r("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new r("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new r("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new r("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new r("`loose`, if provided, must be a boolean");var t=arguments.length>3?arguments[3]:null,a=arguments.length>4?arguments[4]:null,l=arguments.length>5?arguments[5]:null,m=arguments.length>6?arguments[6]:!1,n=!!i&&i(e,o);if(s)s(e,o,{configurable:l===null&&n?n.configurable:!l,enumerable:t===null&&n?n.enumerable:!t,value:u,writable:a===null&&n?n.writable:!a});else if(m||!t&&!a&&!l)e[o]=u;else throw new d("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")};export{c as d};
