const l=(e,n)=>{const o=n||1e3;let t;return function(){const s=arguments;t&&clearTimeout(t);const c=!t;t=setTimeout(()=>{t=null},o),c&&e.apply(this,s)}};export{l as D};
