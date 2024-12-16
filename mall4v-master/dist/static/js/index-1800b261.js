import{a as U,b as $,c as O,G as z,H as F,d as A,e as R,f as P,w as T,A as K}from"./element-plus@2.3.6_vue@3.2.47-2ccbbec5.js";import{b as M,w as W}from"./@vue_runtime-dom@3.2.47-65c92196.js";import{h as i,a as j}from"./index-ac6793f4.js";import{D as G}from"./debounce-d39f6322.js";import{r as p,j as S,u as o,i as q}from"./@vue_reactivity@3.2.47-b35eb3c0.js";import{o as s,K as k,L as a,a as H,e as r,P as f,c as h,n as w,O as E,Y as L}from"./@vue_runtime-core@3.2.47-7772318f.js";import"./lodash-es@4.17.21-53d52778.js";import"./@vue-eb92069c.js";import"./@ctrl_tinycolor@3.6.1-93e5f6fc.js";import"./@vueuse_core@9.13.0_vue@3.2.47-f8689e2f.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c633672.js";import"./@vue_shared@3.2.47-804b7488.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-c959b2bd.js";import"./@sxzz_popperjs-es@2.11.7-eb0a044a.js";import"./dayjs@1.11.13-e8f4b8a8.js";import"./async-validator@4.2.5-940bb5fd.js";import"./memoize-one@6.0.0-43ba193c.js";import"./escape-html@1.0.3-d65727e0.js";import"./normalize-wheel-es@1.2.0-fb80f16a.js";import"./@floating-ui_dom@1.6.12-11ac7818.js";import"./@floating-ui_core@1.6.8-010b5758.js";import"./@floating-ui_utils@0.2.8-6db9c233.js";import"./lodash-unified@1.0.3_@types_lodash-es@4.17.12_lodash-es@4.17.21_lodash@4.17.21-d8bd5cdb.js";import"./vue@3.2.47-3eac09d8.js";import"./pinia@2.0.33_vue@3.2.47-da3f2561.js";import"./vue-demi@0.14.10_vue@3.2.47-71ba0ef2.js";import"./moment@2.29.4-4717c495.js";import"./vue-router@4.1.6_vue@3.2.47-3725844c.js";import"./vue-cookies@1.8.3-b35a0960.js";import"./axios@1.3.4-4a7005d9.js";import"./qs@6.11.1-8e85f023.js";import"./side-channel@1.0.6-025da103.js";import"./get-intrinsic@1.2.4-25c259ca.js";import"./es-errors@1.3.0-82fd953f.js";import"./has-symbols@1.0.3-8f82dcae.js";import"./has-proto@1.0.3-1353c55e.js";import"./function-bind@1.1.2-61637ca6.js";import"./hasown@2.0.2-42bc0a75.js";import"./call-bind@1.0.7-82cb89a2.js";import"./set-function-length@1.2.2-7418ecdf.js";import"./define-data-property@1.1.4-53ade537.js";import"./es-define-property@1.0.0-8178d4b8.js";import"./gopd@1.0.1-6433dd40.js";import"./has-property-descriptors@1.0.2-f195ed7c.js";import"./object-inspect@1.13.3-0d0634c3.js";import"./crypto-js@4.1.1-0f0eb29b.js";import"./lodash@4.17.21-08c1e7a6.js";import"./@smallwei_avue@3.5.6_element-plus@2.3.6_vue@3.2.47-c4df20a4.js";const Y={searchMenuSpan:6,columnBtn:!1,border:!0,index:!1,indexLabel:"序号",stripe:!0,menuAlign:"center",menuWidth:350,align:"center",refreshBtn:!0,searchSize:"mini",addBtn:!1,editBtn:!1,delBtn:!1,viewBtn:!1,props:{label:"label",value:"value"},column:[{label:"用户昵称",prop:"nickName",search:!0},{label:"用户头像",prop:"pic",type:"upload",imgWidth:150,listType:"picture-img",slot:!0},{label:"状态",prop:"status",search:!0,type:"select",slot:!0,dicData:[{label:"禁用",value:0},{label:"正常",value:1}]},{label:"注册时间",prop:"userRegtime",imgWidth:150}]},J=["src"],Q={key:1},X={class:"dialog-footer"},Z={__name:"add-or-update",emits:["refreshDataList"],setup(x,{expose:y,emit:V}){const u=p(!1),t=p({userId:0,nickName:"",pic:"",status:1}),m=S({total:0,currentPage:1,pageSize:10}),b={nickName:[{required:!0,message:"用户名不能为空",trigger:"blur"}]},g=p(null);y({init:d=>{t.value.userId=d||0,u.value=!0,w(()=>{var e;(e=g.value)==null||e.resetFields()}),t.value.userId&&i({url:i.adornUrl(`/admin/user/info/${t.value.userId}`),method:"get",params:i.adornParams()}).then(({data:e})=>{t.value=e})}});const I=G(()=>{var d;(d=g.value)==null||d.validate(e=>{e&&i({url:i.adornUrl("/admin/user"),method:t.value.userId?"put":"post",data:i.adornData({userId:t.value.userId||void 0,nickName:t.value.nickName,status:t.value.status})}).then(()=>{U({message:"操作成功",type:"success",duration:1500,onClose:()=>{u.value=!1,V("refreshDataList",m)}})})})});return(d,e)=>{const l=$,v=O,c=z,N=F,C=A,B=R,_=P;return s(),k(_,{modelValue:o(u),"onUpdate:modelValue":e[5]||(e[5]=n=>q(u)?u.value=n:null),title:o(t).userId?"修改":"新增","close-on-click-modal":!1},{footer:a(()=>[H("span",X,[r(B,{onClick:e[3]||(e[3]=n=>u.value=!1)},{default:a(()=>[f("取消")]),_:1}),r(B,{type:"primary",onClick:e[4]||(e[4]=n=>o(I)())},{default:a(()=>[f("确定")]),_:1})])]),default:a(()=>[r(C,{ref_key:"dataFormRef",ref:g,model:o(t),rules:b,"label-width":"80px",onKeyup:e[2]||(e[2]=M(n=>o(I)(),["enter"]))},{default:a(()=>[r(l,{label:"用户头像",prop:"pic"},{default:a(()=>[o(t).pic?(s(),h("img",{key:0,src:o(t).pic,class:"image",alt:""},null,8,J)):(s(),h("div",Q," 无 "))]),_:1}),r(l,{label:"用户昵称",prop:"nickName"},{default:a(()=>[r(v,{modelValue:o(t).nickName,"onUpdate:modelValue":e[0]||(e[0]=n=>o(t).nickName=n),disabled:!0,placeholder:"用户昵称"},null,8,["modelValue"])]),_:1}),r(l,{label:"状态",prop:"status"},{default:a(()=>[r(N,{modelValue:o(t).status,"onUpdate:modelValue":e[1]||(e[1]=n=>o(t).status=n)},{default:a(()=>[r(c,{label:0},{default:a(()=>[f(" 禁用 ")]),_:1}),r(c,{label:1},{default:a(()=>[f(" 正常 ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}},ee={class:"mod-user"},te={key:0,class:"avue-crud__img"},ae={key:1},Qe={__name:"index",setup(x){const y=p([]),V=p(!1),u=p([]),t=p(!1),m=S({total:0,currentPage:1,pageSize:10}),b=(e,l,v)=>{V.value=!0,i({url:i.adornUrl("/admin/user/page"),method:"get",params:i.adornParams(Object.assign({current:e==null?m.currentPage:e.currentPage,size:e==null?m.pageSize:e.pageSize},l))}).then(({data:c})=>{y.value=c.records,m.total=c.total,V.value=!1,v&&v()})},g=p(null),D=e=>{t.value=!0,w(()=>{var l;(l=g.value)==null||l.init(e)})},I=(e,l)=>{b(m,e,l)},d=e=>{u.value=e};return(e,l)=>{const v=L("Document"),c=T,N=K,C=R,B=L("avue-crud");return s(),h("div",ee,[r(B,{ref:"crudRef",page:o(m),data:o(y),option:o(Y),onSearchChange:I,onSelectionChange:d,onOnLoad:b},{pic:a(_=>[_.row.pic?(s(),h("span",te,[r(c,null,{default:a(()=>[r(v)]),_:1})])):(s(),h("span",ae,"-"))]),status:a(_=>[_.row.status===0?(s(),k(N,{key:0,type:"danger"},{default:a(()=>[f(" 禁用 ")]),_:1})):(s(),k(N,{key:1},{default:a(()=>[f(" 正常 ")]),_:1}))]),menu:a(_=>[o(j)("admin:user:update")?(s(),k(C,{key:0,type:"primary",icon:"el-icon-edit",onClick:W(n=>D(_.row.userId),["stop"])},{default:a(()=>[f(" 编辑 ")]),_:2},1032,["onClick"])):E("",!0)]),_:1},8,["page","data","option"]),o(t)?(s(),k(Z,{key:0,ref_key:"addOrUpdateRef",ref:g,onRefreshDataList:b},null,512)):E("",!0)])}}};export{Qe as default};
