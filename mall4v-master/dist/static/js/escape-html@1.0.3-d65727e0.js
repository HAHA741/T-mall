import{a as m}from"./@ctrl_tinycolor@3.6.1-93e5f6fc.js";/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var o=/["'&<>]/,i=l;function l(n){var e=""+n,c=o.exec(e);if(!c)return e;var t,s="",a=0,r=0;for(a=c.index;a<e.length;a++){switch(e.charCodeAt(a)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}r!==a&&(s+=e.substring(r,a)),r=a+1,s+=t}return r!==a?s+e.substring(r,a):s}const u=m(i);export{i as a,u as e};
