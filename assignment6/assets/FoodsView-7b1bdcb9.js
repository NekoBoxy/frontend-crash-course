import{u as $,i as M,r as m,j as D,o as U,a as i,c as l,b as h,d as t,w as b,g as f,t as d,k as V,v as B,F as y,e as P,l as F,m as k,R,p as K,h as H}from"./index-be880030.js";import{_ as z}from"./noimage-fd6253b5.js";import{_ as Y,C as j}from"./CNavbar-f5ef701a.js";import{L as A}from"./index.esm-643ac226.js";const L=_=>(K("data-v-0b9c01de"),_=_(),H(),_),O={class:"container"},E={class:"row"},J={class:"col"},Q={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},X={class:"breadcrumb"},q={class:"breadcrumb-item"},G={class:"breadcrumb-item"},W={class:"breadcrumb-item active","aria-current":"page"},Z={class:"row"},tt=L(()=>t("div",{class:"col-6"},[t("h5",null,"美食餐廳")],-1)),et={class:"col-6"},at=["value","selected"],st={class:"container-fluid"},nt={class:"row",style:{"margin-right":"0"}},ot={class:"col-6 area-site"},it={class:"row row-cols-2 g-2"},lt=["onClick"],ct={key:0},rt=["src"],ut={key:1},dt=L(()=>t("img",{src:z,class:"card-img-top",alt:"沒有餐廳圖片"},null,-1)),_t=[dt],pt={class:"card-body"},mt={class:"circle-label"},vt=["title"],ht={class:"card-text"},yt={class:"badge rounded-pill bg-success"},gt={__name:"FoodsView",setup(_){const p=$(),N=M(),c=m(),g=m(),v=m([{title:"基隆市",name:"Keelung"},{title:"臺北市",name:"Taipei"},{title:"新北市",name:"NewTaipei"},{title:"桃園市",name:"Taoyuan"},{title:"苗栗縣",name:"MiaoliCounty"},{title:"新竹縣",name:"HsinchuCounty"},{title:"新竹市",name:"Hsinchu"},{title:"臺中市",name:"Taichung"},{title:"彰化縣",name:"ChanghuaCounty"},{title:"南投縣",name:"NantouCounty"},{title:"雲林縣",name:"YunlinCounty"},{title:"嘉義縣",name:"ChiayiCounty"},{title:"嘉義市",name:"Chiayi"},{title:"臺南市",name:"Tainan"},{title:"高雄市",name:"Kaohsiung"},{title:"屏東縣",name:"PingtungCounty"},{title:"宜蘭縣",name:"YilanCounty"},{title:"花蓮縣",name:"HualienCounty"},{title:"臺東縣",name:"TaitungCounty"},{title:"金門縣",name:"KinmenCounty"},{title:"澎湖縣",name:"PenghuCounty"},{title:"連江縣",name:"LienchiangCounty"}]),n=m("NewTaipei"),x=D(()=>v.value.find(a=>a.name===n.value).title);async function S(){p.push({path:`/foods/${n.value}/`}),await C(),await w()}async function C(){try{const s=await F({method:"get",url:`https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/${n.value}`,params:{$top:"10",$format:"JSON"}});console.log(s.data),c.value=s.data.map(a=>{var e;return{RestaurantID:a.RestaurantID,City:a.City,RestaurantName:a.RestaurantName,Class:a==null?void 0:a.Class,Picture:{PictureUrl1:((e=a==null?void 0:a.Picture)==null?void 0:e.PictureUrl1)||""},Position:a.Position}})}catch(s){alert(s)}}async function w(){const s=new A({apiKey:"AIzaSyC42jlw7i6yloHhAXQp_M7Lxh7_KxzY9bI",version:"weekly",libraries:["places"]}),a={center:{lat:0,lng:0},zoom:11},e=await s.load(),r=new e.maps.Map(g.value,a),u=new e.maps.LatLngBounds;for(let o=0;o<c.value.length;o++){const T=new e.maps.Marker({position:{lat:c.value[o].Position.PositionLat,lng:c.value[o].Position.PositionLon},map:r,title:c.value[o].name,label:(10+o).toString(36).toUpperCase()});u.extend(T.position)}r.fitBounds(u)}async function I(s){console.log("site.RestaurantID",s.RestaurantID),console.log(n.value),await p.push({path:`/food/${n.value}/${s.RestaurantID}`}),await p.go()}return U(async()=>{const s=v.value.find(a=>a.name.toLowerCase()===N.params.city.toLowerCase());n.value=(s==null?void 0:s.name)||n.value,p.replace(`/foods/${n.value}/`),await C(),await w()}),(s,a)=>(i(),l(y,null,[h(j),t("main",null,[t("div",O,[t("div",E,[t("div",J,[t("nav",Q,[t("ol",X,[t("li",q,[h(f(R),{to:"/"},{default:b(()=>[k("首頁")]),_:1})]),t("li",G,[h(f(R),{to:"/foods/NewTaipei"},{default:b(()=>[k("美食餐廳")]),_:1})]),t("li",W,d(x.value),1)])])])]),t("div",Z,[tt,t("div",et,[V(t("select",{id:"selectedCity",onChange:a[0]||(a[0]=e=>S()),"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e)},[(i(!0),l(y,null,P(v.value,e=>(i(),l("option",{value:e.name,key:e.name,selected:e.name===e.value},d(e.title),9,at))),128))],544),[[B,n.value]])])])]),t("div",st,[t("div",nt,[t("div",{ref_key:"areaMap",ref:g,class:"col-6 area-map"},null,512),t("div",ot,[t("div",it,[(i(!0),l(y,null,P(c.value,(e,r)=>{var u;return i(),l("div",{class:"col",key:r},[t("div",{class:"card",onClick:o=>I(e)},[(u=e==null?void 0:e.Picture)!=null&&u.PictureUrl1?(i(),l("div",ct,[t("img",{src:e.Picture.PictureUrl1,class:"card-img-top",alt:"餐廳圖片"},null,8,rt)])):(i(),l("div",ut,_t)),t("div",pt,[t("div",mt,d((10+r).toString(36).toUpperCase()),1),t("h5",{class:"card-title",title:e.RestaurantName},d(e.RestaurantName),9,vt),t("p",ht,[t("span",yt,d(e.Class),1)])])],8,lt)])}),128))])])])])])],64))}},Pt=Y(gt,[["__scopeId","data-v-0b9c01de"]]);export{Pt as default};
