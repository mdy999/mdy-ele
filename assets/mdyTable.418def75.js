import{d as f,e as _,x as y,c as x,h as t,O as h,r as d,o as C,n as a,t as i,g as n}from"./vendor.3dbabbbc.js";const v=a("\u7F16\u8F91"),D=a("\u5220\u9664"),k=a("\u786E\u8BA4"),z=a("\u53D6\u6D88"),R=f({setup(I){const m=[{prop:"date",label:"\u65E5\u671F",align:"center",icon:"box",slot:"date",editable:!0,justifyContent:"center"},{label:"\u59D3\u540D",prop:"name",align:"center",slot:"name"},{label:"\u5730\u5740",prop:"address",editable:!0,align:"center",slot:"address"},{label:"\u5E74",prop:"age",width:100,align:"center"},{label:"\u64CD\u4F5C",action:!0,width:200,align:"center"}],l=_(""),c=_([]),r=o=>{console.log(o),l.value="edit"},g=()=>{h.post("/api/list",{current:1,pageSize:10}).then(o=>c.value=o.data.data.rows).catch(o=>console.log(o))};return y(()=>{g()}),(o,u)=>{const p=d("el-tag"),s=d("el-button"),b=d("mdy-table",!0);return C(),x(b,{data:c.value,options:m,paginationAlign:"right",editRowIndex:l.value,"onUpdate:editRowIndex":u[0]||(u[0]=e=>l.value=e)},{date:t(({scope:e})=>[a(i(e.row.date),1)]),name:t(({scope:e})=>[n(p,{"disable-transitions":"",type:e.row.tag==="Home"?"":"success"},{default:t(()=>[a(i(e.row.name),1)]),_:2},1032,["type"])]),address:t(({scope:e})=>[n(p,{"disable-transitions":"",type:e.row.tag==="Home"?"":"success"},{default:t(()=>[a(i(e.row.address),1)]),_:2},1032,["type"])]),edit:t(({scope:e})=>[n(s,{size:"small",type:"success",onClick:w=>r(e)},{default:t(()=>[v]),_:2},1032,["onClick"]),n(s,{size:"small",type:"danger"},{default:t(()=>[D]),_:1})]),action:t(({scope:e})=>[n(s,{size:"small",type:"success",onClick:w=>r(e)},{default:t(()=>[k]),_:2},1032,["onClick"]),n(s,{size:"small",type:"danger"},{default:t(()=>[z]),_:1})]),_:1},8,["data","editRowIndex"])}}});export{R as default};
