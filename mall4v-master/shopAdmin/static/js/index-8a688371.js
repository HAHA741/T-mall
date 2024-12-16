import{a as V,c as z,B as A,D as M,e as U,C as R,f as j,g as F,A as J}from"./element-plus@2.3.6_vue@3.2.47-2ccbbec5.js";import{v as W,w as O}from"./@vue_runtime-dom@3.2.47-65c92196.js";import{_ as D,h as c,a as C}from"./index-ac6793f4.js";import{D as K}from"./debounce-d39f6322.js";import{r as _,u as s,i as Y,j as q}from"./@vue_reactivity@3.2.47-b35eb3c0.js";import{o as d,K as g,L as r,a as G,e as i,P,c as S,F as L,W as E,M as H,O as I,Y as Q,n as X}from"./@vue_runtime-core@3.2.47-7772318f.js";import{O as Z}from"./@vue_shared@3.2.47-804b7488.js";import"./lodash-es@4.17.21-53d52778.js";import"./@vue-eb92069c.js";import"./@ctrl_tinycolor@3.6.1-93e5f6fc.js";import"./@vueuse_core@9.13.0_vue@3.2.47-f8689e2f.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c633672.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-c959b2bd.js";import"./@sxzz_popperjs-es@2.11.7-eb0a044a.js";import"./dayjs@1.11.13-e8f4b8a8.js";import"./async-validator@4.2.5-940bb5fd.js";import"./memoize-one@6.0.0-43ba193c.js";import"./escape-html@1.0.3-d65727e0.js";import"./normalize-wheel-es@1.2.0-fb80f16a.js";import"./@floating-ui_dom@1.6.12-11ac7818.js";import"./@floating-ui_core@1.6.8-010b5758.js";import"./@floating-ui_utils@0.2.8-6db9c233.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.12_lodash-es@4.17.21_lodash@4.17.21-d8bd5cdb.js";import"./vue@3.2.47-3eac09d8.js";import"./pinia@2.0.33_vue@3.2.47-da3f2561.js";import"./vue-demi@0.14.10_vue@3.2.47-71ba0ef2.js";import"./moment@2.29.4-4717c495.js";import"./vue-router@4.1.6_vue@3.2.47-3725844c.js";import"./vue-cookies@1.8.3-b35a0960.js";import"./axios@1.3.4-4a7005d9.js";import"./qs@6.11.1-8e85f023.js";import"./side-channel@1.0.6-025da103.js";import"./get-intrinsic@1.2.4-25c259ca.js";import"./es-errors@1.3.0-82fd953f.js";import"./has-symbols@1.0.3-8f82dcae.js";import"./has-proto@1.0.3-1353c55e.js";import"./function-bind@1.1.2-61637ca6.js";import"./hasown@2.0.2-42bc0a75.js";import"./call-bind@1.0.7-82cb89a2.js";import"./set-function-length@1.2.2-7418ecdf.js";import"./define-data-property@1.1.4-53ade537.js";import"./es-define-property@1.0.0-8178d4b8.js";import"./gopd@1.0.1-6433dd40.js";import"./has-property-descriptors@1.0.2-f195ed7c.js";import"./object-inspect@1.13.3-0d0634c3.js";import"./crypto-js@4.1.1-0f0eb29b.js";import"./lodash@4.17.21-08c1e7a6.js";import"./@smallwei_avue@3.5.6_element-plus@2.3.6_vue@3.2.47-c4df20a4.js";const ee={class:"dialog-footer"},oe={__name:"add-or-update",emits:["refreshDataList"],setup($,{expose:N,emit:b}){const m=_(!1),e=_([{propId:0,propName:"",prodPropValues:[{valueId:0}]}]),f={total:0,currentPage:1,pageSize:10};N({init:o=>{o?e.value=[JSON.parse(JSON.stringify(o))]:e.value=[{propId:0,propName:"",prodPropValues:[{valueId:0}]}],m.value=!0}});const k=K(()=>{if(e.value[0].prodPropValues){const o=[];for(const a in e.value[0].prodPropValues)e.value[0].prodPropValues.hasOwnProperty(a)&&e.value[0].prodPropValues[a].propValue&&o.push(e.value[0].prodPropValues[a]);e.value[0].prodPropValues=o}if(!e.value[0].propName.trim()){e.value[0].propName="",V.error("属性名不能为空");return}if(e.value[0].prodPropValues.length<1){e.value[0].prodPropValues=[{valueId:0}],V.error("规格项不能为空");return}if(e.value[0].propName.length>10){V.error("属性名称长度不能大于10");return}if(e.value[0].prodPropValues.find(o=>!o.propValue.trim())){V.error("属性值不能为空");return}if(e.value[0].prodPropValues.find(o=>o.propValue.length>20)){V.error("属性值长度不能大于20");return}c({url:c.adornUrl("/prod/spec"),method:e.value[0].propId?"put":"post",data:c.adornData({propId:e.value[0].propId||void 0,propName:e.value[0].propName,prodPropValues:e.value[0].prodPropValues})}).then(()=>{V({message:"操作成功",type:"success",duration:1500,onClose:()=>{m.value=!1,b("refreshDataList",f)}})})}),w=()=>{if(e.value[0].prodPropValues.length!==1)for(let o=0;o<e.value[0].prodPropValues.length;o++)e.value[0].prodPropValues[o].propValue||e.value[0].prodPropValues.splice(o,1)},x=()=>{const o=e.value[0].prodPropValues;o[o.length-1].propValue&&o.push({})};return(o,a)=>{const t=z,l=A,u=M,n=U,B=R,v=j;return d(),g(v,{modelValue:s(m),"onUpdate:modelValue":a[3]||(a[3]=p=>Y(m)?m.value=p:null),title:s(e)[0].propId?"修改":"新增","close-on-click-modal":!1},{footer:r(()=>[G("div",ee,[i(n,{onClick:a[1]||(a[1]=p=>m.value=!1)},{default:r(()=>[P(" 取消 ")]),_:1}),i(n,{type:"primary",onClick:a[2]||(a[2]=p=>s(k)())},{default:r(()=>[P(" 确定 ")]),_:1})])]),default:r(()=>[i(B,{data:s(e),border:"",style:{width:"100%"}},{default:r(()=>[i(l,{prop:"propName","header-align":"center",align:"center",label:"属性名称"},{default:r(p=>[i(t,{modelValue:p.row.propName,"onUpdate:modelValue":h=>p.row.propName=h,placeholder:"请输入内容",maxlength:"10","show-word-limit":"",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(l,{prop:"prodPropValues","header-align":"center",align:"center",label:"属性值"},{default:r(p=>[(d(!0),S(L,null,E(p.row.prodPropValues,h=>(d(),g(u,{key:h.valueId,span:12},{default:r(()=>[i(t,{modelValue:h.propValue,"onUpdate:modelValue":T=>h.propValue=T,placeholder:"请输入内容",class:"prop-value-input",maxlength:"20","show-word-limit":"",clearable:"",onClear:w},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128)),i(u,{span:4},{default:r(()=>[H(i(n,{type:"primary",class:"add-input",icon:"el-icon-circle-plus",onClick:a[0]||(a[0]=h=>x())},null,512),[[W,p.row.prodPropValues[p.row.prodPropValues.length-1].propValue]])]),_:2},1024)]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue","title"])}}},te=D(oe,[["__scopeId","data-v-1637e695"]]),re={searchMenuSpan:6,columnBtn:!1,border:!0,index:!0,indexLabel:"序号",stripe:!0,menuAlign:"center",menuWidth:350,align:"center",refreshBtn:!0,searchSize:"mini",addBtn:!1,editBtn:!1,viewBtn:!1,delBtn:!1,props:{label:"label",value:"value"},column:[{label:"属性名称",prop:"propName",search:!0},{label:"属性值",prop:"prodPropValues",slot:!0}]};const ae={class:"mod-prod"},le={__name:"index",setup($){const N=_({delBtn:C("prod:prod:delete")}),b=_([]),m=_(!1),e=_([]),f=q({total:0,currentPage:1,pageSize:10}),y=(t,l,u)=>{m.value=!0,c({url:c.adornUrl("/prod/spec/page"),method:"get",params:c.adornParams(Object.assign({current:t==null?f.currentPage:t.currentPage,size:t==null?f.pageSize:t.pageSize},l))}).then(({data:n})=>{b.value=n.records,f.total=n.total,m.value=!1,u&&u()})},k=_(!1),w=_(null),x=t=>{k.value=!0,X(()=>{var l;(l=w.value)==null||l.init(t)})},o=t=>{var u;const l=t?[t]:(u=e.value)==null?void 0:u.map(n=>n.propId);F.confirm(`确定进行[${t?"删除":"批量删除"}]操作?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{c({url:c.adornUrl(`/prod/spec/${l}`),method:"delete",data:c.adornData(l,!1)}).then(()=>{V({message:"操作成功",type:"success",duration:1500,onClose:()=>{y(f)}})})}).catch(()=>{})},a=(t,l)=>{y(f,t,l)};return(t,l)=>{const u=J,n=U,B=Q("avue-crud");return d(),S("div",ae,[i(B,{ref:"crudRef",page:s(f),data:s(b),option:s(re),permission:s(N),onSearchChange:a,onOnLoad:y},{prodPropValues:r(v=>[(d(!0),S(L,null,E(v.row.prodPropValues,p=>(d(),g(u,{key:p.valueId},{default:r(()=>[P(Z(p.propValue),1)]),_:2},1024))),128))]),"menu-left":r(()=>[s(C)("shop:pickAddr:save")?(d(),g(n,{key:0,type:"primary",icon:"el-icon-plus",onClick:l[0]||(l[0]=O(v=>x(),["stop"]))},{default:r(()=>[P(" 新增 ")]),_:1})):I("",!0)]),menu:r(v=>[s(C)("prod:spec:update")?(d(),g(n,{key:0,type:"primary",icon:"el-icon-edit",onClick:O(p=>x(v.row),["stop"])},{default:r(()=>[P(" 编辑 ")]),_:2},1032,["onClick"])):I("",!0),s(C)("prod:spec:delete")?(d(),g(n,{key:1,type:"danger",icon:"el-icon-delete",onClick:O(p=>o(v.row.propId),["stop"])},{default:r(()=>[P(" 删除 ")]),_:2},1032,["onClick"])):I("",!0)]),_:1},8,["page","data","option","permission"]),s(k)?(d(),g(te,{key:0,ref_key:"addOrUpdateRef",ref:w,onRefreshDataList:y},null,512)):I("",!0)])}}},eo=D(le,[["__scopeId","data-v-77f86502"]]);export{eo as default};
