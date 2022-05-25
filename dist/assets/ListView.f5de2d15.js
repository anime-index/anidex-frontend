import{o as l,c as n,a as t,t as o,F as c,d as u,k,f as h,p as m,g as b,l as f,v as $,m as I,q as R,i as A,b as r,h as S,e as g}from"./index.7e3c715a.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{S as w}from"./SearchFilter.2990339d.js";const D=["title","data-img"],C={scope:"row"},E={methods:{getColumnData(e){switch(e){case"Title":return this.title;case"Score":return this.score;case"Type":return this.type;default:return this.title}}},mounted(){Array.from(document.querySelectorAll('[data-bs-toggle="popover"]')).forEach(e=>new k.exports.Popover(e,{html:!0,content:function(){return'<div class="media"><img class="img-fluid" src="'+this.getAttribute("data-img")+'"></div>'}}))}},N=Object.assign(E,{props:{position:Number,columns:Array,title:String,imageurl:String,score:Number,type:String},setup(e){return(a,i)=>(l(),n("tr",{class:"list-row","data-bs-container":"body","data-bs-trigger":"hover","data-bs-toggle":"popover","data-bs-placement":"left",title:e.title,"data-img":e.imageurl},[t("th",C,o(e.position),1),(l(!0),n(c,null,u(e.columns,s=>(l(),n("td",{key:e.columns.indexOf(s)},o(a.getColumnData(s)),1))),128))],8,D))}});var V=d(N,[["__scopeId","data-v-c784e2d0"]]);const M=e=>(m("data-v-9ee4a5ec"),e=e(),b(),e),O={class:"table-responsive"},j={class:"table align-middle"},B={class:"table list-head"},F=M(()=>t("th",{scope:"col"},"#",-1)),P={class:"list-body"},U={props:{columns:Array,items:Array},setup(e){return(a,i)=>(l(),n("div",O,[t("table",j,[t("thead",B,[t("tr",null,[F,(l(!0),n(c,null,u(e.columns,s=>(l(),n("th",{key:e.columns.indexOf(s),scope:"col"},o(s),1))),128))])]),t("tbody",P,[(l(!0),n(c,null,u(e.items,s=>(l(),h(V,{key:s.id,position:e.items.indexOf(s)+1,columns:e.columns,title:s.title,imageurl:s.main_pic,score:s.score,type:s.type},null,8,["position","columns","title","imageurl","score","type"]))),128))])])]))}};var Y=d(U,[["__scopeId","data-v-9ee4a5ec"]]);const x=e=>(m("data-v-601d5296"),e=e(),b(),e),q=["id","aria-labelledby"],G={class:"modal-dialog"},Q={class:"modal-content"},W={class:"modal-header"},K=["id"],z=x(()=>t("button",{type:"button",class:"btn-close btn-close-white shadow-none","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),H={class:"modal-body"},J={class:"input-group allign-middle"},X=["aria-label","placeholder"],Z={key:0,class:"input-error"},ee={class:"modal-footer"},te=x(()=>t("button",{type:"button",class:"btn btn-transparent shadow-none","data-bs-dismiss":"modal",id:"dismiss"},"Cancel",-1)),ae={data(){return{newName:"",inputError:!1}},methods:{createList(){this.newName===""?this.inputError=!0:this.$emit("renameAction",this.newName)}}},se=Object.assign(ae,{props:{title:String,placeholder:String,modalId:String},setup(e){return(a,i)=>(l(),n("div",{class:"modal fade",id:e.modalId,tabindex:"-1","aria-labelledby":e.modalId+"Label","aria-hidden":"true"},[t("div",G,[t("div",Q,[t("div",W,[t("h5",{class:"modal-title",id:e.modalId+"Label"},o(e.title),9,K),z]),t("div",H,[t("div",J,[f(t("input",{"onUpdate:modelValue":i[0]||(i[0]=s=>I(newName)?newName.value=s:null),type:"text",class:"form-control text-box shadow-none","aria-label":e.modalId+"Input","aria-describedby":"rename-modal",onInput:i[1]||(i[1]=s=>a.inputError=!1),onKeyup:i[2]||(i[2]=R((...s)=>a.createList&&a.createList(...s),["enter"])),placeholder:e.placeholder},null,40,X),[[$,a.newName]])]),a.inputError?(l(),n("p",Z,"You have to write a name for your list!")):A("",!0)]),t("div",ee,[te,t("button",{type:"button",class:"btn btn-primary shadow-none",onClick:i[3]||(i[3]=(...s)=>a.createList&&a.createList(...s))},"Create")])])])],8,q))}});var ie=d(se,[["__scopeId","data-v-601d5296"]]);const le=["for"],ne=["min","max","step","id","disabled"],oe={props:{rangeId:String,labelText:String,minValue:Number,maxValue:Number,rangeStep:Number,inputDisabled:{type:Boolean,default:!1}},setup(e){return(a,i)=>(l(),n("div",null,[t("label",{for:e.rangeId,class:"form-label"},o(e.labelText),9,le),t("input",{type:"range",class:"form-range",min:e.minValue,max:e.maxValue,step:e.rangeStep,id:e.rangeId,disabled:e.inputDisabled},null,8,ne)]))}};var v=d(oe,[["__scopeId","data-v-fee171c8"]]);const de=e=>(m("data-v-bde180c4"),e=e(),b(),e),re=["for"],ce=["aria-label","disabled"],ue=de(()=>t("option",{selected:""},"-",-1)),me=["value","disabled"],be={props:{selectId:String,labelText:String,selections:Array,inputDisabled:{type:Boolean,default:!1}},setup(e){return(a,i)=>(l(),n("div",null,[t("label",{for:e.selectId,class:"form-label"},o(e.labelText),9,re),t("select",{class:"form-select","aria-label":e.selectId,disabled:e.inputDisabled},[ue,(l(!0),n(c,null,u(e.selections,s=>(l(),n("option",{key:e.selections.indexOf(s),value:s,disabled:e.inputDisabled},o(s),9,me))),128))],8,ce)]))}};var p=d(be,[["__scopeId","data-v-bde180c4"]]);const _e=["for"],he=["id"],ye=["name","id","disabled"],ge=["for"],ve={props:{flexRadioId:String,flexRadioLabelText:String,selections:Array,inputDisabled:{type:Boolean,default:!1}},setup(e){return(a,i)=>(l(),n("div",null,[t("label",{class:"form-check-label",for:e.flexRadioId},o(e.flexRadioLabelText),9,_e),t("div",{id:e.flexRadioId},[(l(!0),n(c,null,u(e.selections,s=>(l(),n("div",{key:e.selections.indexOf(s),class:"form-check"},[t("input",{class:"form-check-input shadow-none",type:"radio",name:e.flexRadioId,id:s.selectionId,disabled:e.inputDisabled},null,8,ye),t("label",{class:"form-check-label",for:e.selections.selectionId},o(s.selectionLabel),9,ge)]))),128))],8,he)]))}};var pe=d(ve,[["__scopeId","data-v-0adf9040"]]);const fe=e=>(m("data-v-043a15ed"),e=e(),b(),e),$e={class:"list-row"},Ie={scope:"row"},Se=fe(()=>t("i",{class:"bi bi-x-circle",style:{}},null,-1)),xe=[Se],Te={methods:{getColumnData(e){switch(e){case"Title":return this.title;case"Score":return this.score;case"Type":return this.type;default:return this.title}}}},Le=Object.assign(Te,{props:{position:Number,columns:Array,title:String,imageurl:String,score:Number,type:String},setup(e){return(a,i)=>(l(),n("tr",$e,[t("th",Ie,o(e.position),1),(l(!0),n(c,null,u(e.columns,s=>(l(),n("td",{key:e.columns.indexOf(s)},o(a.getColumnData(s)),1))),128)),t("td",null,[t("button",{class:"btn btn-transparent shadow-none",onClick:i[0]||(i[0]=s=>a.$emit("removeEntry",this.position))},xe)])]))}});var ke=d(Le,[["__scopeId","data-v-043a15ed"]]);const T=e=>(m("data-v-1b2df4ab"),e=e(),b(),e),Re={class:"table-responsive"},Ae={class:"table align-middle"},we={class:"table list-head"},De=T(()=>t("th",{scope:"col"},"#",-1)),Ce=T(()=>t("th",null,[t("i",{class:"bi bi-trash"})],-1)),Ee={class:"list-body"},Ne={methods:{emitRemoveEntry(e){this.$emit("removeEntry",e)}}},Ve=Object.assign(Ne,{props:{columns:Array,items:Array},setup(e){return(a,i)=>(l(),n("div",Re,[t("table",Ae,[t("thead",we,[t("tr",null,[De,(l(!0),n(c,null,u(e.columns,s=>(l(),n("th",{key:e.columns.indexOf(s),scope:"col"},o(s),1))),128)),Ce])]),t("tbody",Ee,[(l(!0),n(c,null,u(e.items,s=>(l(),h(ke,{key:s.id,position:e.items.indexOf(s)+1,columns:e.columns,title:s.title,imageurl:s.main_pic,score:s.score,type:s.type,onRemoveEntry:a.emitRemoveEntry},null,8,["position","columns","title","imageurl","score","type","onRemoveEntry"]))),128))])])]))}});var Me=d(Ve,[["__scopeId","data-v-1b2df4ab"]]);const L=e=>(m("data-v-54dffde8"),e=e(),b(),e),Oe={class:"col"},je={class:"card mycard"},Be={class:"row"},Fe={class:"col myfixed"},Pe=["src"],Ue={class:"col mysmall"},Ye={class:"card-body mybody"},qe=["title"],Ge={class:"card-text"},Qe=L(()=>t("i",{class:"bi bi-box-arrow-right",id:"anime-add"},null,-1)),We=L(()=>t("label",{for:"anime-add",style:{"margin-left":"4px"}},"Add",-1)),Ke=[Qe,We],ze={props:{anime_id:Number,title:String,score:Number,image_url:String,type:String},setup(e){return(a,i)=>(l(),n("div",Oe,[t("div",je,[t("div",Be,[t("div",Fe,[t("img",{src:e.image_url,onerror:"this.onerror=null; this.src='/src/assets/anidex_logo.png'",class:"myimg"},null,8,Pe)]),t("div",Ue,[t("div",Ye,[t("h5",{class:"card-title tit",title:e.title},o(e.title),9,qe),t("p",Ge,o(e.score.toPrecision(3))+" | "+o(e.type),1),t("button",{type:"button",class:"btn add-btn shadow-none",onClick:i[0]||(i[0]=s=>a.$emit("addEntry",e.title,0,e.image_url,e.type))},Ke)])])])])]))}};var He=d(ze,[["__scopeId","data-v-54dffde8"]]);const Je=["id","aria-labelledby"],Xe={class:"modal-dialog modal-dialog-centered"},Ze={class:"modal-content"},et={class:"modal-header"},tt=["id"],at=["data-bs-target"],st={class:"modal-body"},it={class:"modal-footer"},lt=["data-bs-target"],nt={props:{modalId:String,modalLabel:String,prevModalId:String,warningText:String,confirmationText:String},setup(e){return(a,i)=>(l(),n("div",{class:"modal fade",id:e.modalId,"aria-hidden":"true","aria-labelledby":e.modalLabel,tabindex:"-1"},[t("div",Xe,[t("div",Ze,[t("div",et,[t("h5",{class:"modal-title",id:e.modalLabel},o(e.warningText),9,tt),t("button",{type:"button",class:"btn-close","data-bs-target":"#"+e.prevModalId,"data-bs-toggle":"modal","aria-label":"Close"},null,8,at)]),t("div",st,o(e.confirmationText),1),t("div",it,[t("button",{class:"btn btn-primary","data-bs-target":"#"+e.prevModalId,"data-bs-toggle":"modal"},"No",8,lt),t("button",{class:"btn btn-transparent",onClick:i[0]||(i[0]=s=>a.$emit("confirmed")),"data-bs-dismiss":"modal"},"Yes")])])])],8,Je))}};var ot=d(nt,[["__scopeId","data-v-955fd9c6"]]);const _=e=>(m("data-v-06b8cbd4"),e=e(),b(),e),dt={class:"modal fade",id:"editMode",tabindex:"-1","aria-labelledby":"editListLabel","aria-hidden":"true"},rt={class:"modal-dialog modal-fullscreen"},ct={class:"modal-content"},ut={class:"modal-header"},mt={class:"modal-title",id:"editListLabel"},bt={class:"modal-body"},_t={class:"container"},ht={class:"input-group mb-3"},yt={class:"row",style:{"margin-top":"32px"}},gt={class:"col-3",style:{"margin-right":"32px"}},vt=_(()=>t("h5",null,"Filters",-1)),pt={class:"col anime-search",style:{"margin-right":"32px"}},ft=_(()=>t("h5",null,"Anime Search",-1)),$t={class:"input-group mb-3"},It={class:"col list-table"},St=_(()=>t("h5",null,"Your List",-1)),xt={class:"modal-footer"},Tt=_(()=>t("button",{type:"button",class:"btn btn-danger","data-bs-target":"#confirmationModal","data-bs-toggle":"modal"},[t("i",{class:"bi bi-trash"}),S(" Delete")],-1)),Lt=_(()=>t("i",{class:"bi bi-save"},null,-1)),kt=S(" Save"),Rt=[Lt,kt],At={data(){return{yearRangeData:{rangeId:"yearRange",labelText:"Year",minValue:1960,maxValue:2021,rangeStep:1},genreSelectData:{selectId:"genreSelect",labelText:"Genres",selections:["Action","Comedy","Drama"]},studioSelectData:{selectId:"studioSelect",labelText:"Studios",selections:["Ghibli","Ufotable","MAPPA"]},scoreRangeData:{rangeId:"scoreRange",labelText:"Score",minValue:0,maxValue:10,rangeStep:.5},statusRadioData:{flexRadioId:"statusRadio",flexRadioLabelText:"Status",selections:[{selectionId:"airing",selectionLabel:"Airing"},{selectionId:"finished",selectionLabel:"Finished"}]},animeTableColumns:["Title","Score","Type"],myjson:[]}},methods:{emitAddEntry(e,a,i,s){this.$emit("addEntry",e,a,i,s)},emitRemoveEntry(e){this.$emit("removeEntry",e)},mySearch(e){let a=this.backendUrl+"anime/search";e&&(a+="?title="+e),g.get(a).then(i=>this.myjson=i.data.lst)}},mounted(){g.get(this.backendUrl+"top/anime").then(e=>this.myjson=e.data.lst)}},wt=Object.assign(At,{props:{listName:String,listNameStatic:String,listItems:Array},setup(e){return(a,i)=>(l(),n("div",null,[t("div",dt,[t("div",rt,[t("div",ct,[t("div",ut,[t("h5",mt,o("Edit "+e.listNameStatic),1),t("button",{type:"button",class:"btn-close btn-close-white shadow-none",onClick:i[0]||(i[0]=s=>a.$emit("cancelEdit",e.listName,e.listItems)),"data-bs-dismiss":"modal","aria-label":"Close"})]),t("div",bt,[t("div",_t,[t("div",ht,[f(t("input",{"onUpdate:modelValue":i[1]||(i[1]=s=>I(listName)?listName.value=s:null),type:"text",class:"form-control text-box","aria-label":"listNameInput","aria-describedby":"input-edit",placeholder:"List Name"},null,512),[[$,e.listName]])]),t("div",yt,[t("div",gt,[vt,r(v,{rangeId:a.yearRangeData.rangeId,labelText:a.yearRangeData.labelText,minValue:a.yearRangeData.minValue,maxValue:a.yearRangeData.maxValue,rangeStep:a.yearRangeData.rangeStep,inputDisabled:!0},null,8,["rangeId","labelText","minValue","maxValue","rangeStep"]),r(p,{style:{"margin-top":"8px"},selectId:a.genreSelectData.selectId,labelText:a.genreSelectData.labelText,selections:a.genreSelectData.selections,inputDisabled:!0},null,8,["selectId","labelText","selections"]),r(p,{style:{"margin-top":"16px"},selectId:a.studioSelectData.selectId,labelText:a.studioSelectData.labelText,selections:a.studioSelectData.selections,inputDisabled:!0},null,8,["selectId","labelText","selections"]),r(v,{style:{"margin-top":"16px"},rangeId:a.scoreRangeData.rangeId,labelText:a.scoreRangeData.labelText,minValue:a.scoreRangeData.minValue,maxValue:a.scoreRangeData.maxValue,rangeStep:a.scoreRangeData.rangeStep,inputDisabled:!0},null,8,["rangeId","labelText","minValue","maxValue","rangeStep"]),r(pe,{style:{"margin-top":"8px"},flexRadioId:a.statusRadioData.flexRadioId,flexRadioLabelText:a.statusRadioData.flexRadioLabelText,selections:a.statusRadioData.selections,inputDisabled:!0},null,8,["flexRadioId","flexRadioLabelText","selections"])]),t("div",pt,[ft,t("div",$t,[r(w,{class:"form-control text-box",onQuerySearch:a.mySearch,"aria-label":"animeQuery","aria-describedby":"inputGroup-sizing-default"},null,8,["onQuerySearch"])]),(l(!0),n(c,null,u(a.myjson,s=>(l(),n("div",{key:s.id,class:"anime-cards"},[(l(),h(He,{key:s.mal_id,anime_id:s.mal_id,title:s.title,score:s.mal_score,image_url:s.image_url,type:s.type,onAddEntry:a.emitAddEntry},null,8,["anime_id","title","score","image_url","type","onAddEntry"]))]))),128))]),t("div",It,[St,r(Me,{columns:a.animeTableColumns,items:e.listItems,onRemoveEntry:a.emitRemoveEntry},null,8,["columns","items","onRemoveEntry"])])])])]),t("div",xt,[Tt,t("div",null,[t("button",{type:"button",class:"btn btn-transparent",onClick:i[2]||(i[2]=s=>a.$emit("cancelEdit",e.listName,e.listItems)),"data-bs-dismiss":"modal"},"Cancel"),t("button",{type:"button",class:"btn btn-primary",onClick:i[3]||(i[3]=s=>a.$emit("saveChanges",e.listName,e.listItems)),"data-bs-dismiss":"modal"},Rt)])])])])]),r(ot,{"modal-id":"confirmationModal","modal-label":"confirmationModalLabel","prev-modal-id":"editMode","warning-text":"Wait!","confirmation-text":"Are you sure you want to delete your list "+e.listNameStatic+"?",onConfirmed:i[4]||(i[4]=s=>a.$emit("deleteList"))},null,8,["confirmation-text"])]))}});var Dt=d(wt,[["__scopeId","data-v-06b8cbd4"]]);const y=e=>(m("data-v-0f27bd76"),e=e(),b(),e),Ct={class:"container min-vh-100"},Et={class:"row d-flex justify-content-end",style:{"background-color":"#000021",margin:"0"}},Nt=y(()=>t("i",{class:"bi bi-pencil-square",id:"edit-icon"},null,-1)),Vt=y(()=>t("label",{for:"edit-icon",style:{"margin-left":"8px"}},"Edit List",-1)),Mt=[Nt,Vt],Ot={class:"nav nav-tabs",id:"listTab",role:"tablist"},jt=["id","data-bs-target","aria-controls","title","onClick"],Bt={class:"nav-item nav-add-list"},Ft=y(()=>t("button",{id:"add-list",type:"button",class:"btn shadow-none btn-list","data-bs-toggle":"modal","data-bs-target":"#listCreate"},[t("i",{class:"bi bi-file-earmark-plus",id:"add-list"}),t("label",{for:"add-list",style:{"margin-left":"4px"}},"New")],-1)),Pt={class:"tab-content",id:"listTabContent"},Ut=["id","aria-labelledby"],Yt={data(){return{list_tabs:[{id:"watching",text:"Watching",list:[],key:0},{id:"completed",text:"Completed",list:[],key:1},{id:"to_watch",text:"To Watch",list:[],key:2}],list_key:2,list_custom_key:0,currentTab:0,currentTabName:"",currentTabAnimeList:[],renameModalTitle:"Create List",renameModalPlaceholder:"List Name",renameModalId:"listCreate",animeTableColumns:["Title","Score","Type"]}},methods:{createList(e){e!==""&&(this.list_tabs.push({id:"custom"+(++this.list_custom_key).toString(),text:e,list:[],key:++this.list_key}),document.getElementById("dismiss").click(),e="")},addToList(e,a,i,s){this.currentTabAnimeList.push({position:this.currentTabAnimeList.length+1,main_pic:i,title:e,type:s,score:a})},removeFromList(e){this.currentTabAnimeList.splice(e-1,1)},tabChange(e){this.currentTab=e},editListAuxiliars(){this.currentTabName=this.list_tabs[this.currentTab].text,this.currentTabAnimeList=this.list_tabs[this.currentTab].list.slice()},saveListEdition(e,a){this.list_tabs[this.currentTab].text=e,this.list_tabs[this.currentTab].list=a},deleteList(){this.list_tabs.splice(this.currentTab,1),this.list_key--;for(var e=this.currentTab;e<=this.list_key;e++)this.list_tabs[e].key-=1},tabName(e){return e.length>10?e.slice(0,10)+"...":e}},mounted(){document.getElementById(this.list_tabs[0].id+"-tab").click()}},qt=Object.assign(Yt,{setup(e){return(a,i)=>(l(),n("div",Ct,[t("div",Et,[t("button",{type:"button",class:"btn shadow-none btn-edit","data-bs-toggle":"modal","data-bs-target":"#editMode",onClick:i[0]||(i[0]=(...s)=>a.editListAuxiliars&&a.editListAuxiliars(...s))},Mt)]),r(Dt,{"list-name":a.currentTabName,"list-name-static":a.currentTabName,"list-items":a.currentTabAnimeList,onCancelEdit:a.editListAuxiliars,onDeleteList:a.deleteList,onSaveChanges:a.saveListEdition,onAddEntry:a.addToList,onRemoveEntry:a.removeFromList},null,8,["list-name","list-name-static","list-items","onCancelEdit","onDeleteList","onSaveChanges","onAddEntry","onRemoveEntry"]),t("ul",Ot,[(l(!0),n(c,null,u(a.list_tabs,s=>(l(),n("li",{class:"nav-item",role:"presentation",key:s.key},[t("button",{class:"nav-link",id:s.id+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+s.id,type:"button",role:"tab","aria-controls":s.id,"aria-selected":"false",title:s.text,onClick:Ht=>a.tabChange(s.key)},o(a.tabName(s.text)),9,jt)]))),128)),t("li",Bt,[Ft,r(ie,{title:a.renameModalTitle,placeholder:a.renameModalPlaceholder,modalId:a.renameModalId,onRenameAction:a.createList},null,8,["title","placeholder","modalId","onRenameAction"])])]),t("div",Pt,[(l(!0),n(c,null,u(a.list_tabs,s=>(l(),n("div",{class:"tab-pane fade",id:s.id,role:"tabpanel","aria-labelledby":s+"-tab",key:s.key},[r(Y,{columns:a.animeTableColumns,items:s.list},null,8,["columns","items"])],8,Ut))),128))])]))}});var Gt=d(qt,[["__scopeId","data-v-0f27bd76"]]);const Qt=e=>(m("data-v-19c5fb99"),e=e(),b(),e),Wt=Qt(()=>t("h1",null,"My Lists",-1)),Kt={class:"container"},zt={setup(e){return(a,i)=>(l(),n("div",null,[Wt,t("div",Kt,[r(Gt)])]))}};var ea=d(zt,[["__scopeId","data-v-19c5fb99"]]);export{ea as default};