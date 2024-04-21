import{N as n}from"./Net-DAICIKmx.js";import{T as p}from"./topheader-CjZ8VAqt.js";import{_,c as h,y as e,V,o as T,v as t,z as o,ai as y,G as i,a3 as C,aj as c,a2 as m}from"./index-0QX2Zep0.js";import{b as L,c as k,V as v,a as d}from"./VDivider-o8NvbJw8.js";import{V as x}from"./VVirtualScroll-eSKLqA-C.js";import"./TokenModel-epR9isAp.js";import"./gobotq-3Wa2au3z.js";import"./index-e2v-vZhp.js";const w={components:{top_header:p},data(){return{teamList:[]}},methods:{async fetchTeamList(){const a=await new n("/v1/user/team/list").PostFormData();a.code===0?this.teamList=a.data:console.error(a.echo)},async addTeam(){this.$router.push("/v1/team/team/create")},async deleteTeam(a){const s=await new n("/v1/user/team/delete").PostFormData(a);s.code===0?this.fetchTeamList():console.error(s.echo)},async editTeam(a){this.$router.push({path:"/v1/team/team/edit",query:a})}},mounted(){this.fetchTeamList()}};function g(a,s,D,I,u,l){return T(),h(V,{class:"mx-auto"},{default:e(()=>[t(C,null,{default:e(()=>[o(" 团队成员列表 "),t(y),t(i,{color:"primary",onClick:l.addTeam},{default:e(()=>[o(" 新增团队成员 ")]),_:1},8,["onClick"])]),_:1}),t(L),t(x,{items:u.teamList,"item-height":"48"},{default:e(({item:r})=>[t(k,null,{prepend:e(()=>[t(c,{class:"bg-primary"},{default:e(()=>[o("mdi-group")]),_:1})]),append:e(()=>[t(i,{class:"ma-2",icon:"",color:"primary",onClick:f=>l.editTeam(r)},{default:e(()=>[t(c,null,{default:e(()=>[o("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),t(i,{class:"ma-2",icon:"",color:"error",onClick:f=>l.deleteTeam(r)},{default:e(()=>[t(c,null,{default:e(()=>[o("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),default:e(()=>[t(v,null,{default:e(()=>[o("团队名称："+m(r.team_info.name),1)]),_:2},1024),t(d,null,{default:e(()=>[o("团队权限："+m(r.role),1)]),_:2},1024),t(d,null,{default:e(()=>[o("团队备注："+m(r.team_info.content),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["items"])]),_:1})}const q=_(w,[["render",g]]);export{q as default};
