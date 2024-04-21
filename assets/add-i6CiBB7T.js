import{N as n}from"./Net-DAICIKmx.js";import{_ as c,c as p,y as a,o as V,v as e,a3 as _,z as i,ap as D,F as y,G as f,V as k}from"./index-0QX2Zep0.js";import{V as u}from"./VContainer-MOY_plwv.js";import{V as b}from"./VForm-Dj44bIQR.js";import{V as h,a as m}from"./VRow-Dp24Y551.js";import{V as s}from"./VTextField-CCNIjjcF.js";import{V as w}from"./VSelect-VRvWD029.js";import"./TokenModel-epR9isAp.js";import"./index-e2v-vZhp.js";import"./VList-CdQ9_MkS.js";import"./VDivider-o8NvbJw8.js";import"./VVirtualScroll-eSKLqA-C.js";import"./VSlideGroup-BqqHKxz6.js";const F={data(){return{formData:{name:"",team_id:null,key:"",base_url:"",model:"",detail:0},teamList:[]}},methods:{async fetchTeamList(){try{const l=await new n("/v1/user/team/list").PostFormData();l.code===0?this.teamList=l.data.map(t=>({id:t.team_info.id,title:t.team_info.name})):console.error("Failed to fetch team list:",l.echo)}catch(l){console.error("Failed to fetch team list:",l)}},async addInfo(){try{const l={name:this.formData.name,team_id:parseInt(this.formData.team_id),key:this.formData.key,base_url:this.formData.base_url,model:this.formData.model,detail:parseInt(this.formData.detail)},t=await new n("/v1/qwen/info/add").PostFormData(l);t.code===0?this.goBack():console.error("Failed to add qwen info:",t.echo)}catch(l){console.error("Failed to add qwen info:",l)}},goBack(){this.$router.push("/v1/key?tab=qwen")}},async mounted(){this.fetchTeamList()}};function x(l,t,C,v,o,d){return V(),p(u,null,{default:a(()=>[e(k,null,{default:a(()=>[e(_,null,{default:a(()=>[i("添加 qwen 信息")]),_:1}),e(D,null,{default:a(()=>[e(b,{onSubmit:y(d.addInfo,["prevent"])},{default:a(()=>[e(u,null,{default:a(()=>[e(h,null,{default:a(()=>[e(m,{cols:"12"},{default:a(()=>[e(s,{modelValue:o.formData.name,"onUpdate:modelValue":t[0]||(t[0]=r=>o.formData.name=r),label:"名称"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(w,{modelValue:o.formData.team_id,"onUpdate:modelValue":t[1]||(t[1]=r=>o.formData.team_id=r),items:o.teamList,label:"选项","item-text":"title","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(s,{modelValue:o.formData.key,"onUpdate:modelValue":t[2]||(t[2]=r=>o.formData.key=r),label:"Key"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(s,{modelValue:o.formData.rid,"onUpdate:modelValue":t[3]||(t[3]=r=>o.formData.rid=r),label:"rid"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(s,{modelValue:o.formData.model,"onUpdate:modelValue":t[4]||(t[4]=r=>o.formData.model=r),label:"Model"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,{type:"submit",color:"primary",block:"",class:"mt-4"},{default:a(()=>[i("添加")]),_:1}),e(f,{onClick:d.goBack,color:"grey",block:"",class:"mt-4"},{default:a(()=>[i("返回")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}const K=c(F,[["render",x]]);export{K as default};
