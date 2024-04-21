import{N as n}from"./Net-DAICIKmx.js";import{_ as c,c as p,y as a,o as V,v as e,a3 as w,z as m,ap as h,F as y,G as f,V as D}from"./index-0QX2Zep0.js";import{V as u}from"./VContainer-MOY_plwv.js";import{V as _}from"./VForm-Dj44bIQR.js";import{V as q,a as s}from"./VRow-Dp24Y551.js";import{V as i}from"./VTextField-CCNIjjcF.js";import{V as k}from"./VSelect-VRvWD029.js";import"./TokenModel-epR9isAp.js";import"./index-e2v-vZhp.js";import"./VList-CdQ9_MkS.js";import"./VDivider-o8NvbJw8.js";import"./VVirtualScroll-eSKLqA-C.js";import"./VSlideGroup-BqqHKxz6.js";const F={data(){return{formData:{},teamList:[],qwenId:null}},methods:{async fetchTeamList(){try{const o=await new n("/v1/user/team/list").PostFormData();o.code===0?this.teamList=o.data.map(t=>({id:t.team_info.id,title:t.team_info.name})):console.error("Failed to fetch team list:",o.echo)}catch(o){console.error("Failed to fetch team list:",o)}},async fetchInfo(){try{const o=await new n("/v1/qwen/info/get").PostFormData({id:this.qwenId});o.code===0?this.formData=o.data:console.error("Failed to fetch qwen info:",o.echo)}catch(o){console.error("Failed to fetch qwen info:",o)}},async updateInfo(){try{const o=this.formData,t=await new n("/v1/qwen/info/update").PostFormData(o);t.code===0?this.goBack():console.error("Failed to update qwen info:",t.echo)}catch(o){console.error("Failed to update qwen info:",o)}},goBack(){this.$router.push("/v1/key?tab=qwen")}},mounted(){this.fetchTeamList(),this.qwenId=parseInt(this.$route.query.id),isNaN(this.qwenId)?console.error("Invalid qwen ID:",this.$route.query.id):this.fetchInfo()}};function b(o,t,I,v,l,d){return V(),p(u,null,{default:a(()=>[e(D,null,{default:a(()=>[e(w,null,{default:a(()=>[m("更新 qwen 信息")]),_:1}),e(h,null,{default:a(()=>[e(_,{onSubmit:y(d.updateInfo,["prevent"])},{default:a(()=>[e(u,null,{default:a(()=>[e(q,null,{default:a(()=>[e(s,{cols:"12"},{default:a(()=>[e(i,{modelValue:l.formData.name,"onUpdate:modelValue":t[0]||(t[0]=r=>l.formData.name=r),label:"名称"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:a(()=>[e(k,{modelValue:l.formData.team_id,"onUpdate:modelValue":t[1]||(t[1]=r=>l.formData.team_id=r),items:l.teamList,label:"选项","item-text":"title","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(s,{cols:"12"},{default:a(()=>[e(i,{modelValue:l.formData.key,"onUpdate:modelValue":t[2]||(t[2]=r=>l.formData.key=r),label:"Key"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:a(()=>[e(i,{modelValue:l.formData.rid,"onUpdate:modelValue":t[3]||(t[3]=r=>l.formData.rid=r),label:"rid"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:a(()=>[e(i,{modelValue:l.formData.model,"onUpdate:modelValue":t[4]||(t[4]=r=>l.formData.model=r),label:"Model"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,{type:"submit",color:"primary",block:"",class:"mt-4"},{default:a(()=>[m("更新")]),_:1}),e(f,{onClick:d.goBack,color:"grey",block:"",class:"mt-4"},{default:a(()=>[m("返回")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}const K=c(F,[["render",b]]);export{K as default};
