import{N as n}from"./Net-DAICIKmx.js";import{_ as c,c as d,y as e,o as u,v as t,z as o,a3 as f,H as p,G as m,F as V}from"./index-0QX2Zep0.js";import{V as _}from"./VContainer-MOY_plwv.js";import{V as h}from"./VTextField-CCNIjjcF.js";import{V as x}from"./VForm-Dj44bIQR.js";import"./TokenModel-epR9isAp.js";import"./index-e2v-vZhp.js";const k={data(){return{name:""}},methods:{async submitTeamInfo(){const a=await new n("/v1/team/info/create").PostFormData(this.$data);a.code===0?(console.log("团队信息创建成功"),this.goBack()):console.error(a.echo)},goBack(){this.$router.push("/v1/team")}}},B={class:"d-flex flex-column"};function b(a,r,g,v,s,l){return u(),d(_,null,{default:e(()=>[t(f,null,{default:e(()=>[o("创建团队信息")]),_:1}),t(x,{onSubmit:V(l.submitTeamInfo,["prevent"])},{default:e(()=>[t(h,{modelValue:s.name,"onUpdate:modelValue":r[0]||(r[0]=i=>s.name=i),label:"团队名称"},null,8,["modelValue"]),p("div",B,[t(m,{size:"large",type:"submit",color:"primary",class:"mt-4"},{default:e(()=>[o("提交")]),_:1}),t(m,{size:"large",onClick:l.goBack,color:"primary",class:"mt-4"},{default:e(()=>[o("返回")]),_:1},8,["onClick"])])]),_:1},8,["onSubmit"])]),_:1})}const I=c(k,[["render",b]]);export{I as default};
