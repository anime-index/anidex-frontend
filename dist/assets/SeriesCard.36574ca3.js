import{f as a}from"./functions.19d76a73.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as o,a as t,t as s,i as n,u as r,r as m,b as u,w as h}from"./index.b3203bc7.js";const b={class:"col"},y={class:"card mycard"},_={key:0,class:"position-absolute top-0 start-0 translate-middle badge rounded-circle bg-success mybadge"},v={class:"row"},f={class:"col myfixed"},$=["src"],x={class:"col mysmall"},N={class:"card-body mybody"},k=["href"],S=["title"],C={class:"card-text"},w={class:"card-text overfl"},p={class:"align-bottom genres-row"},B={key:0,class:"badge rounded-pill genre-badge"},D={key:1,class:"badge rounded-pill genre-badge"},L={key:2,class:"badge rounded-pill genre-badge"},A={props:{anime_id:Number,title:String,popularity:Number,score:Number,image_url:String,episodes:Number,type:String,synopsis:String,position:Number,order:Boolean,genres:Object},setup(e){return(c,l)=>(i(),o("div",b,[t("div",y,[e.order?(i(),o("span",_,"#"+s(e.position),1)):n("",!0),t("div",v,[t("div",f,[t("img",{src:e.image_url,onerror:"this.onerror=null; this.src='https:\\//i.ibb.co/cLyDyWD/anidex-logo.png'",class:"myimg"},null,8,$)]),t("div",x,[t("div",N,[t("a",{href:"https://myanimelist.net/anime/"+e.anime_id},[t("h5",{class:"card-title tit",title:e.title},s(e.title),9,S)],8,k),t("p",C,s(e.score.toPrecision(3))+" | "+s(r(a)(e.popularity))+" members | "+s(e.type)+" | "+s(e.episodes)+" episode"+s("s".repeat(e.episodes>1)),1),t("p",w,s(e.synopsis),1),t("div",p,[e.genres.length>=1?(i(),o("p",B,s(e.genres[0]),1)):n("",!0),e.genres.length>=2?(i(),o("p",D,s(e.genres[1]),1)):n("",!0),e.genres.length>=3?(i(),o("p",L,s(e.genres[2]),1)):n("",!0)])])])])])]))}};var X=d(A,[["__scopeId","data-v-0351add2"]]);const V={class:"col"},j={class:"card mycard"},I={key:0,class:"position-absolute top-0 start-0 translate-middle badge rounded-circle bg-success mybadge"},O={class:"row"},P={class:"col myfixed"},R=["src"],W={class:"col"},E={class:"card-body mybody"},q=["title"],z={class:"card-text"},F={class:"card-text overfl"},G={class:"align-bottom genres-row"},H={key:0,class:"badge rounded-pill genre-badge"},J={key:1,class:"badge rounded-pill genre-badge"},K={key:2,class:"badge rounded-pill genre-badge"},M={props:{series_id:Number,title:String,popularity:Number,score:Number,image_url:String,episodes:Number,seasons:Number,synopsis:String,position:Number,date:String,genres:Object,order:Boolean},setup(e){return(c,l)=>{const g=m("RouterLink");return i(),o("div",V,[t("div",j,[e.order?(i(),o("span",I,"#"+s(e.position),1)):n("",!0),t("div",O,[t("div",P,[t("img",{src:e.image_url,onerror:"this.onerror=null; this.src='https:\\//i.ibb.co/cLyDyWD/anidex-logo.png'",class:"myimg"},null,8,R)]),t("div",W,[t("div",E,[u(g,{to:"/series/"+e.series_id},{default:h(()=>[t("h5",{class:"card-title tit",title:e.title},s(e.title),9,q)]),_:1},8,["to"]),t("p",z,s(e.score.toPrecision(3))+" | "+s(r(a)(e.popularity))+" members | "+s(e.seasons)+" season"+s("s".repeat(e.seasons>1))+" | "+s(e.episodes)+" episode"+s("s".repeat(e.episodes>1))+" | "+s(e.date),1),t("p",F,s(e.synopsis),1),t("div",G,[e.genres.length>=1?(i(),o("p",H,s(e.genres[0]),1)):n("",!0),e.genres.length>=2?(i(),o("p",J,s(e.genres[1]),1)):n("",!0),e.genres.length>=3?(i(),o("p",K,s(e.genres[2]),1)):n("",!0)])])])])])])}}};var Y=d(M,[["__scopeId","data-v-0c8193f3"]]);export{X as A,Y as S};