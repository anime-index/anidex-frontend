import{S as i,G as l,R as n}from"./Result.f67ca8cd.js";import{S as c}from"./SearchFilter.2990339d.js";import{T as h}from"./TypeFilter.4ccc4664.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as _,b as r,a as s,F as f,p as u,g as m}from"./index.7e3c715a.js";import"./SeriesCard.c10c9fe5.js";import"./functions.19d76a73.js";const o=e=>(u("data-v-4d8426a0"),e=e(),m(),e),g=o(()=>s("h1",null,"Search Anime",-1)),y={class:"offcanvas offcanvas-start mycanva","data-bs-backdrop":"false","data-bs-scroll":"true",tabindex:"-1",id:"filters-canvas","aria-labelledby":"offcanvas-filters"},b=o(()=>s("div",{class:"offcanvas-header"},[s("h5",{class:"offcanvas-title",id:"offcanvas-filters"},"Search"),s("button",{type:"button",class:"btn-close text-reset shadow-none btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),v={class:"offcanvas-body"},S={class:"container"},T=o(()=>s("h5",{style:{"margin-top":"24px","margin-bottom":"18px"}},"Filters",-1)),k=o(()=>s("br",null,null,-1)),w={data(){return{title:"",genres:new Set,types:new Set}},methods:{select_page(e){let t=this.backendUrl+"anime/search?",a=[];this.title!==""&&a.push("title="+this.title),e!==0&&a.push("page="+e),this.genres.size>0&&a.push("genres="+Array.from(this.genres).join(",")),this.types.size>0&&a.push("types="+Array.from(this.types).join(",")),t+=a.join("&"),this.$refs.myresult.get_data(t)},_resultQuery(e){this.title=e,this.select_page(0)},genreToggle(e){this.genres.has(e)?this.genres.delete(e):this.genres.add(e),this.select_page(0)},typeToggle(e){this.types.has(e)?this.types.delete(e):this.types.add(e),this.select_page(0)}},mounted(){this.select_page(0)}},F=Object.assign(w,{setup(e){return(t,a)=>(p(),_(f,null,[g,r(i,{title:"Search","start-enabled":!0}),s("div",y,[b,s("div",v,[s("div",S,[r(c,{onQuerySearch:t._resultQuery},null,8,["onQuerySearch"]),T,r(h,{onType:t.typeToggle},null,8,["onType"]),k,r(l,{onGenre:t.genreToggle},null,8,["onGenre"])])])]),r(n,{ref:"myresult",type:"anime",onLastCallback:t.select_page,order:!1},null,8,["onLastCallback"])],64))}});var V=d(F,[["__scopeId","data-v-4d8426a0"]]);export{V as default};
