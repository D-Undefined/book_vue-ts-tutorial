import{e,u as t,f as a,g as s,o as i,c as l,a as o,w as c,h as n,t as r,i as v,_ as u,p as f,j as d,F as m,r as k,k as p,l as h,m as g}from"./app.45d82a66.js";f("data-v-370f18c0");const y={key:0,class:"home-hero"},x={key:0,class:"figure"},_=["src","alt"],I={key:1,id:"main-title",class:"title"},T={key:2,class:"tagline"};d();var A=e({setup(e){const{site:f,frontmatter:d}=t(),m=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),k=a((()=>d.value.heroText||f.value.title)),p=a((()=>d.value.tagline||f.value.description));return(e,t)=>s(m)?(i(),l("header",y,[s(d).heroImage?(i(),l("figure",x,[o("img",{class:"image",src:s(c)(s(d).heroImage),alt:s(d).heroAlt},null,8,_)])):n("v-if",!0),s(k)?(i(),l("h1",I,r(s(k)),1)):n("v-if",!0),s(p)?(i(),l("p",T,r(s(p)),1)):n("v-if",!0),s(d).actionLink&&s(d).actionText?(i(),v(u,{key:3,item:{link:s(d).actionLink,text:s(d).actionText},class:"action"},null,8,["item"])):n("v-if",!0),s(d).altActionLink&&s(d).altActionText?(i(),v(u,{key:4,item:{link:s(d).altActionLink,text:s(d).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});A.__scopeId="data-v-370f18c0",f("data-v-e39c13e0");const L={key:0,class:"home-features"},$={class:"wrapper"},b={class:"container"},j={class:"features"},w={key:0,class:"title"},C={key:1,class:"details"};d();var F=e({setup(e){const{frontmatter:c}=t(),v=a((()=>c.value.features&&c.value.features.length>0)),u=a((()=>c.value.features?c.value.features:[]));return(e,t)=>s(v)?(i(),l("div",L,[o("div",$,[o("div",b,[o("div",j,[(i(!0),l(m,null,k(s(u),((e,t)=>(i(),l("section",{key:t,class:"feature"},[e.title?(i(),l("h2",w,r(e.title),1)):n("v-if",!0),e.details?(i(),l("p",C,r(e.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)}});F.__scopeId="data-v-e39c13e0",f("data-v-30918238");const q={key:0,class:"footer"},z={class:"container"},B={class:"text"};d();var D=e({setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),l("footer",q,[o("div",z,[o("p",B,r(s(a).footer),1)])])):n("v-if",!0)}});D.__scopeId="data-v-30918238",f("data-v-10122c92");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};d();var H=e({setup:e=>(e,t)=>{const a=p("Content");return i(),l("main",E,[h(A),g(e.$slots,"hero",{},void 0,!0),h(F),o("div",G,[h(a)]),g(e.$slots,"features",{},void 0,!0),h(D),g(e.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-10122c92";export{H as default};
