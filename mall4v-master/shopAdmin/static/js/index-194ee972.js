import{h as i}from"./index-ac6793f4.js";import{r as s,j as c,u as a}from"./@vue_reactivity@3.2.47-b35eb3c0.js";import{f as u,c as d,e as f,Y as h,o as g}from"./@vue_runtime-core@3.2.47-7772318f.js";import"./@vue_runtime-dom@3.2.47-65c92196.js";import"./@vue_shared@3.2.47-804b7488.js";import"./element-plus@2.3.6_vue@3.2.47-2ccbbec5.js";import"./lodash-es@4.17.21-53d52778.js";import"./@vue-eb92069c.js";import"./@ctrl_tinycolor@3.6.1-93e5f6fc.js";import"./@vueuse_core@9.13.0_vue@3.2.47-f8689e2f.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c633672.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-c959b2bd.js";import"./@sxzz_popperjs-es@2.11.7-eb0a044a.js";import"./dayjs@1.11.13-e8f4b8a8.js";import"./async-validator@4.2.5-940bb5fd.js";import"./memoize-one@6.0.0-43ba193c.js";import"./escape-html@1.0.3-d65727e0.js";import"./normalize-wheel-es@1.2.0-fb80f16a.js";import"./@floating-ui_dom@1.6.12-11ac7818.js";import"./@floating-ui_core@1.6.8-010b5758.js";import"./@floating-ui_utils@0.2.8-6db9c233.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.12_lodash-es@4.17.21_lodash@4.17.21-d8bd5cdb.js";import"./vue@3.2.47-3eac09d8.js";import"./pinia@2.0.33_vue@3.2.47-da3f2561.js";import"./vue-demi@0.14.10_vue@3.2.47-71ba0ef2.js";import"./moment@2.29.4-4717c495.js";import"./vue-router@4.1.6_vue@3.2.47-3725844c.js";import"./vue-cookies@1.8.3-b35a0960.js";import"./axios@1.3.4-4a7005d9.js";import"./qs@6.11.1-8e85f023.js";import"./side-channel@1.0.6-025da103.js";import"./get-intrinsic@1.2.4-25c259ca.js";import"./es-errors@1.3.0-82fd953f.js";import"./has-symbols@1.0.3-8f82dcae.js";import"./has-proto@1.0.3-1353c55e.js";import"./function-bind@1.1.2-61637ca6.js";import"./hasown@2.0.2-42bc0a75.js";import"./call-bind@1.0.7-82cb89a2.js";import"./set-function-length@1.2.2-7418ecdf.js";import"./define-data-property@1.1.4-53ade537.js";import"./es-define-property@1.0.0-8178d4b8.js";import"./gopd@1.0.1-6433dd40.js";import"./has-property-descriptors@1.0.2-f195ed7c.js";import"./object-inspect@1.13.3-0d0634c3.js";import"./crypto-js@4.1.1-0f0eb29b.js";import"./lodash@4.17.21-08c1e7a6.js";import"./@smallwei_avue@3.5.6_element-plus@2.3.6_vue@3.2.47-c4df20a4.js";const b={searchMenuSpan:6,columnBtn:!1,border:!0,menu:!1,selection:!0,index:!1,indexLabel:"序号",stripe:!0,menuAlign:"center",menuWidth:350,align:"center",refreshBtn:!0,searchSize:"mini",addBtn:!1,editBtn:!1,delBtn:!1,viewBtn:!1,props:{label:"label",value:"value"},column:[{label:"用户名",prop:"username",search:!0},{label:"用户操作",prop:"operation",search:!0},{label:"请求方法",prop:"method"},{label:"请求参数",prop:"params"},{label:"执行时长(毫秒)",prop:"time"},{label:"IP地址",prop:"ip"},{label:"创建时间",prop:"createDate"}]},_={class:"mod-log"},dt={__name:"index",setup(v){const m=s([]),e=c({total:0,currentPage:1,pageSize:10});u(()=>{p()});const p=(t,r,o)=>{i({url:i.adornUrl("/sys/log/page"),method:"get",params:i.adornParams(Object.assign({current:t==null?e.currentPage:t.currentPage,size:t==null?e.pageSize:t.pageSize},r))}).then(({data:n})=>{m.value=n.records,e.total=n.total,o&&o()})},l=(t,r)=>{p(e,t,r)};return(t,r)=>{const o=h("avue-crud");return g(),d("div",_,[f(o,{ref:"crudRef",page:a(e),data:a(m),option:a(b),onSearchChange:l,onOnLoad:p},null,8,["page","data","option"])])}}};export{dt as default};
