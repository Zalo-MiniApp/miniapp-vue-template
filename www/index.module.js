import{a as e,d as t,o as s,r,c as a,b as n,e as o,w as l,f as i,g as p,h as c,v as d,F as u,i as m,j as g,k as f,t as h,l as y,m as v,n as z,p as b}from"./vendor.module.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w="EA4GFxkw-rG_f1Kylht-K3gX53gzeuSzNBjj9ztOm1ircrmWu_B1Dc2nKrYnhEXsER5ZHzdEzrrVq7r8YQJCP0ZxLrp_iSqrDznI3D2g-pmAw6iPqx3y3Jps43szZgW1RyipDe_AtXXwjpLnezQQ7LpD3NdOcE9KMjjuNeZ6ttCDcp5MYSVVEMR6HHRlYyCu9-z7NFgrm6i4uovFmfN1T1w99n_xxfq83ves1jxdsJCxk3udskMM2Ywu9o_PphypNe0W0xVlbZzgkou7Yj396tY8Up6cb-GW9OmFEh0itbsxe_fG",E="https://miniappstore.api.zalo.me";let j;const x=async e=>{try{const t=await(await(async(e,t,s)=>{const r=new Headers;for(r.set("Content-Type","application/json");!j;)await new Promise((e=>setTimeout(e,500)));r.set("Authorization",`Bearer ${j}`);const a=new URL(`${E}/${t}`);"GET"===e&&(a.search=new URLSearchParams(s).toString());const n={method:e,headers:r};return"GET"!==e&&(n.body=JSON.stringify(s)),fetch(a.toString(),n)})("GET","mini-store/search-app",{keyword:e})).json();if(t.err)throw t.msg;return t.data.appsInfo}catch(t){console.log("Error fetching apps by keyword. Details: ",t)}};var k=t({setup:t=>(s((()=>{new Promise((t=>{e.login({success:()=>{e.getAccessToken({success:e=>{"DEFAULT ACCESS TOKEN"===e&&w&&(e=w),t(e)},fail:e=>{console.error(e)}})},fail:e=>{console.error(e)}})})).then((e=>j=e))})),(e,t)=>{const s=r("router-view");return n(),a(s)})});const L={class:"m-4 mb-0"},N={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"},A={class:"m-4"},S=["src","alt"],T={class:"flex"},O=["src","alt"],U=p("br",null,null,-1),D=y("View more >");var _=t({setup(e){const t=o(JSON.parse('[\n  {"coverUrl":"https://logo-mapps.zdn.vn/e7237454d011394f6000.jpg","lastUpdated":1629340494347,"entrypoint":"https://zalo.me/app/link/zapps/3425757619895831860/","appId":"3425757619895831860","name":"Friend Discovery","description":"Friend Discovery app","avatar":"https://logo-mapps.zdn.vn/9a8727fb83be6ae033af.jpg","category":"SOCIAL","status":"ENABLE"},\n  {"coverUrl":"https://logo-mapps.zdn.vn/ec9d7dead9af30f169be.jpg","lastUpdated":1629340496612,"entrypoint":"https://zalo.me/app/link/zapps/2434723753542399319/","appId":"2434723753542399319","name":"Lịch Việt","description":"Bộ lịch âm cho người dùng ","avatar":"https://logo.zp.zdn.vn/app/93452d701135f86ba124_2_1.jpg","category":"OTHERS","status":"ENABLE"},\n  {"coverUrl":"https://logo-mapps.zdn.vn/062c805b241ecd40940f.jpg","lastUpdated":1629972028487,"entrypoint":"https://zalo.me/app/link/zapps/220259427665569271/","appId":"220259427665569271","name":"My OA","description":"Manage OA","avatar":"https://logo-mapps.zdn.vn/856f0719a35c4a02134d.jpg","category":"OTHERS","status":"ENABLE"}\n]')),s=o("");return l((()=>{x(s.value).then((e=>{e&&e.length&&(t.value=e)}))})),(e,a)=>{const o=r("router-link");return n(),i(u,null,[p("div",L,[c(p("input",{class:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),placeholder:"Tìm kiếm"},null,512),[[d,s.value]])]),p("div",N,[(n(!0),i(u,null,m(t.value,(e=>(n(),i("div",null,[p("div",A,[p("img",{class:"w-full rounded-lg my-2",src:e.coverUrl,alt:e.description},null,8,S),p("div",T,[p("img",{class:"w-12 h-12 rounded-lg mr-2",src:e.avatar,alt:e.name},null,8,O),p("div",null,[p("b",null,h(e.name),1),U,p("small",null,h(e.description),1)])])])])))),256))]),g(o,{class:"mx-4 text-bold text-blue-500 float-right",to:"/list"},{default:f((()=>[D])),_:1})],64)}}}),C=t({setup:e=>(e,t)=>(n(),a(_))});const F={},M={class:"p-2"};F.render=function(e,t){return n(),i("div",M,"This is the product listing page")};const R=[{path:"/",component:C},{path:"/list",component:F}],B=v({history:z(),routes:R});b(k).use(B).mount("#app");