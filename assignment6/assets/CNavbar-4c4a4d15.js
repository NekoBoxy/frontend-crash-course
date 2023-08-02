import{b as p,s as f,x as d,d as a,T as A,w,k as V,q as O,y as o,z as g,A as b,m,t as y,F as M,f as N,u as R,r as $,B as I,o as z,c as j,e as r,h as T,R as k,l as Z,p as _,i as q}from"./index-532de041.js";function D(e){return e===0?!1:Array.isArray(e)&&e.length===0?!0:!e}function U(e){return(...t)=>!e(...t)}function Y(e,t){return e===void 0&&(e="undefined"),e===null&&(e="null"),e===!1&&(e="false"),e.toString().toLowerCase().indexOf(t.trim())!==-1}function H(e,t,i,l){return t?e.filter(u=>Y(l(u,i),t)).sort((u,n)=>l(u,i).length-l(n,i).length):e}function J(e){return e.filter(t=>!t.$isLabel)}function E(e,t){return i=>i.reduce((l,u)=>u[e]&&u[e].length?(l.push({$groupLabel:u[t],$isLabel:!0}),l.concat(u[e])):l,[])}function Q(e,t,i,l,u){return n=>n.map(s=>{if(!s[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const h=H(s[i],e,t,u);return h.length?{[l]:s[l],[i]:h}:[]})}const P=(...e)=>t=>e.reduce((i,l)=>l(i),t);var W={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(e,t){return D(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const e=this.search||"",t=e.toLowerCase().trim();let i=this.options.concat();return this.internalSearch?i=this.groupValues?this.filterAndFlat(i,t,this.label):H(i,t,this.label,this.customLabel):i=this.groupValues?E(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(U(this.isSelected)):i,this.taggable&&t.length&&!this.isExistingOption(t)&&(this.tagPosition==="bottom"?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(e=>e[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(t=>this.customLabel(t,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(e,t,i){return P(Q(t,i,this.groupValues,this.groupLabel,this.customLabel),E(this.groupValues,this.groupLabel))(e)},flatAndStrip(e){return P(E(this.groupValues,this.groupLabel),J)(e)},updateSearch(e){this.search=e},isExistingOption(e){return this.options?this.optionKeys.indexOf(e)>-1:!1},isSelected(e){const t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled(e){return!!e.$isDisabled},getOptionLabel(e){if(D(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;const t=this.customLabel(e,this.label);return D(t)?"":t},select(e,t){if(e.$isLabel&&this.groupSelect){this.selectGroup(e);return}if(!(this.blockKeys.indexOf(t)!==-1||this.disabled||e.$isDisabled||e.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(t==="Tab"&&!this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e)){t!=="Tab"&&this.removeElement(e);return}this.multiple?this.$emit("update:modelValue",this.internalValue.concat([e])):this.$emit("update:modelValue",e),this.$emit("select",e,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(e){const t=this.options.find(i=>i[this.groupLabel]===e.$groupLabel);if(t){if(this.wholeGroupSelected(t)){this.$emit("remove",t[this.groupValues],this.id);const i=this.internalValue.filter(l=>t[this.groupValues].indexOf(l)===-1);this.$emit("update:modelValue",i)}else{let i=t[this.groupValues].filter(l=>!(this.isOptionDisabled(l)||this.isSelected(l)));this.max&&i.splice(this.max-this.internalValue.length),this.$emit("select",i,this.id),this.$emit("update:modelValue",this.internalValue.concat(i))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(e){return e[this.groupValues].every(t=>this.isSelected(t)||this.isOptionDisabled(t))},wholeGroupDisabled(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement(e,t=!0){if(this.disabled||e.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const i=typeof e=="object"?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.multiple){const l=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("update:modelValue",l)}else this.$emit("update:modelValue",null);this.$emit("remove",e,this.id),this.closeOnSelect&&t&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}},X={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},groupHighlight(e,t){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":t.$isLabel}];const i=this.options.find(l=>l[this.groupLabel]===t.$groupLabel);return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement({key:e}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(e){this.pointer=e,this.pointerDirty=!0}}},K={name:"vue-multiselect",mixins:[W,X],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:e=>`and ${e} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const x={ref:"tags",class:"multiselect__tags"},ee={class:"multiselect__tags-wrap"},te={class:"multiselect__spinner"},ie={key:0},se={class:"multiselect__option"},le={class:"multiselect__option"},ne=m("No elements found. Consider changing the search query."),ae={class:"multiselect__option"},oe=m("List is empty.");function re(e,t,i,l,u,n){return p(),f("div",{tabindex:e.searchable?-1:i.tabindex,class:[{"multiselect--active":e.isOpen,"multiselect--disabled":i.disabled,"multiselect--above":n.isAbove,"multiselect--has-options-group":n.hasOptionGroup},"multiselect"],onFocus:t[14]||(t[14]=s=>e.activate()),onBlur:t[15]||(t[15]=s=>e.searchable?!1:e.deactivate()),onKeydown:[t[16]||(t[16]=g(o(s=>e.pointerForward(),["self","prevent"]),["down"])),t[17]||(t[17]=g(o(s=>e.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:t[18]||(t[18]=g(o(s=>e.addPointerElement(s),["stop","self"]),["enter","tab"])),onKeyup:t[19]||(t[19]=g(s=>e.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+e.id},[d(e.$slots,"caret",{toggle:e.toggle},()=>[a("div",{onMousedown:t[1]||(t[1]=o(s=>e.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),d(e.$slots,"clear",{search:e.search}),a("div",x,[d(e.$slots,"selection",{search:e.search,remove:e.removeElement,values:n.visibleValues,isOpen:e.isOpen},()=>[V(a("div",ee,[(p(!0),f(M,null,N(n.visibleValues,(s,h)=>d(e.$slots,"tag",{option:s,search:e.search,remove:e.removeElement},()=>[(p(),f("span",{class:"multiselect__tag",key:h},[a("span",{textContent:y(e.getOptionLabel(s))},null,8,["textContent"]),a("i",{tabindex:"1",onKeypress:g(o(v=>e.removeElement(s),["prevent"]),["enter"]),onMousedown:o(v=>e.removeElement(s),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[O,n.visibleValues.length>0]]),e.internalValue&&e.internalValue.length>i.limit?d(e.$slots,"limit",{key:0},()=>[a("strong",{class:"multiselect__strong",textContent:y(i.limitText(e.internalValue.length-i.limit))},null,8,["textContent"])]):b("v-if",!0)]),a(A,{name:"multiselect__loading"},{default:w(()=>[d(e.$slots,"loading",{},()=>[V(a("div",te,null,512),[[O,i.loading]])])]),_:3}),e.searchable?(p(),f("input",{key:0,ref:"search",name:i.name,id:e.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:e.placeholder,style:n.inputStyle,value:e.search,disabled:i.disabled,tabindex:i.tabindex,onInput:t[2]||(t[2]=s=>e.updateSearch(s.target.value)),onFocus:t[3]||(t[3]=o(s=>e.activate(),["prevent"])),onBlur:t[4]||(t[4]=o(s=>e.deactivate(),["prevent"])),onKeyup:t[5]||(t[5]=g(s=>e.deactivate(),["esc"])),onKeydown:[t[6]||(t[6]=g(o(s=>e.pointerForward(),["prevent"]),["down"])),t[7]||(t[7]=g(o(s=>e.pointerBackward(),["prevent"]),["up"])),t[9]||(t[9]=g(o(s=>e.removeLastElement(),["stop"]),["delete"]))],onKeypress:t[8]||(t[8]=g(o(s=>e.addPointerElement(s),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+e.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):b("v-if",!0),n.isSingleLabelVisible?(p(),f("span",{key:1,class:"multiselect__single",onMousedown:t[10]||(t[10]=o((...s)=>e.toggle&&e.toggle(...s),["prevent"]))},[d(e.$slots,"singleLabel",{option:n.singleValue},()=>[m(y(e.currentOptionLabel),1)])],32)):b("v-if",!0),n.isPlaceholderVisible?(p(),f("span",{key:2,class:"multiselect__placeholder",onMousedown:t[11]||(t[11]=o((...s)=>e.toggle&&e.toggle(...s),["prevent"]))},[d(e.$slots,"placeholder",{},()=>[m(y(e.placeholder),1)])],32)):b("v-if",!0)],512),a(A,{name:"multiselect"},{default:w(()=>[V(a("div",{class:"multiselect__content-wrapper",onFocus:t[12]||(t[12]=(...s)=>e.activate&&e.activate(...s)),tabindex:"-1",onMousedown:t[13]||(t[13]=o(()=>{},["prevent"])),style:{maxHeight:e.optimizedHeight+"px"},ref:"list"},[a("ul",{class:"multiselect__content",style:n.contentStyle,role:"listbox",id:"listbox-"+e.id},[d(e.$slots,"beforeList"),e.multiple&&e.max===e.internalValue.length?(p(),f("li",ie,[a("span",se,[d(e.$slots,"maxElements",{},()=>[m("Maximum of "+y(e.max)+" options selected. First remove a selected option to select another.",1)])])])):b("v-if",!0),!e.max||e.internalValue.length<e.max?(p(!0),f(M,{key:1},N(e.filteredOptions,(s,h)=>(p(),f("li",{class:"multiselect__element",key:h,id:e.id+"-"+h,role:s&&(s.$isLabel||s.$isDisabled)?null:"option"},[s&&(s.$isLabel||s.$isDisabled)?b("v-if",!0):(p(),f("span",{key:0,class:[e.optionHighlight(h,s),"multiselect__option"],onClick:o(v=>e.select(s),["stop"]),onMouseenter:o(v=>e.pointerSet(h),["self"]),"data-select":s&&s.isTag?e.tagPlaceholder:n.selectLabelText,"data-selected":n.selectedLabelText,"data-deselect":n.deselectLabelText},[d(e.$slots,"option",{option:s,search:e.search,index:h},()=>[a("span",null,y(e.getOptionLabel(s)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),s&&(s.$isLabel||s.$isDisabled)?(p(),f("span",{key:1,"data-select":e.groupSelect&&n.selectGroupLabelText,"data-deselect":e.groupSelect&&n.deselectGroupLabelText,class:[e.groupHighlight(h,s),"multiselect__option"],onMouseenter:o(v=>e.groupSelect&&e.pointerSet(h),["self"]),onMousedown:o(v=>e.selectGroup(s),["prevent"])},[d(e.$slots,"option",{option:s,search:e.search,index:h},()=>[a("span",null,y(e.getOptionLabel(s)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):b("v-if",!0)],8,["id","role"]))),128)):b("v-if",!0),V(a("li",null,[a("span",le,[d(e.$slots,"noResult",{search:e.search},()=>[ne])])],512),[[O,i.showNoResults&&e.filteredOptions.length===0&&e.search&&!i.loading]]),V(a("li",null,[a("span",ae,[d(e.$slots,"noOptions",{},()=>[oe])])],512),[[O,i.showNoOptions&&(e.options.length===0||n.hasOptionGroup===!0&&e.filteredOptions.length===0)&&!e.search&&!i.loading]]),d(e.$slots,"afterList")],12,["id"])],36),[[O,e.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}K.render=re;const ue=(e,t)=>{const i=e.__vccOpts||e;for(const[l,u]of t)i[l]=u;return i},B=e=>(_("data-v-f994aaa3"),e=e(),q(),e),he={class:"navbar navbar-expand-lg"},de={class:"container"},pe=B(()=>r("svg",{width:"26",height:"50",viewBox:"0 0 26 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M19.6363 0.0718377C19.4018 -0.0457234 19.1366 -0.0114587 18.8628 0.119881C17.1046 0.963288 15.8673 2.70266 14.0577 3.42855C12.4813 4.06089 11.369 5.66105 10.7206 7.00628C10.2695 7.94232 10.4127 9.20263 9.64947 9.90619C9.49319 10.0502 9.29251 10.142 9.03694 10.142C7.92123 10.142 2.34264 19.6527 1.22692 23.0094C0.111204 26.3661 0.669073 24.6877 0.111215 29.1633C0.00155004 30.0432 -0.0205352 30.8059 0.0168167 31.4614C0.150292 33.8041 1.66897 35.94 2.49052 38.1371L2.90051 39.2335C3.08646 39.6064 4.01623 40.688 6.24766 42.0307C7.23547 42.6251 8.11396 43.3876 8.83474 44.1338C10.2121 45.5596 10.2454 48.9565 12.0224 49.8312C13.3501 50.4848 13.9002 49.1294 13.6316 47.6707C13.597 47.4827 13.5536 47.2813 13.4998 47.0658C13.1358 45.6053 13.4894 43.5492 13.834 42.2337C13.9682 41.7216 14.1756 41.2311 14.4174 40.7605C17.5645 34.6369 19.6565 33.0389 20.1941 31.9606C20.4145 31.5186 20.4764 29.1356 20.5705 28.6505C20.6804 28.084 20.752 27.3381 20.752 26.3661C20.752 24.7263 21.0576 23.015 21.429 21.5692C21.9253 19.6366 21.3277 16.8435 22.9834 15.7365C23.7252 15.2406 24.3871 14.0349 24.8931 12.8044C25.5552 11.1944 24.8757 9.4618 24.0991 7.90417C23.6529 7.00905 25.0289 4.92043 25.7727 3.98801C26.1446 3.61504 26.3306 2.75721 24.0991 2.30964C21.3099 1.75019 20.752 0.631289 19.6363 0.0718377Z",fill:"#392A93"})],-1)),ce=B(()=>r("div",null,[r("span",{class:"nav-logo-en"},"Taiwan"),r("span",{class:"nav-logo-zhtw"},"島遊")],-1)),fe=B(()=>r("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[r("span",{class:"navbar-toggler-icon"})],-1)),ge={class:"collapse navbar-collapse",id:"navbarSupportedContent"},me={class:"navbar-nav mb-2 mb-lg-0 ms-auto"},be={class:"nav-item"},ve={class:"nav-link"},ye={class:"nav-item"},we={class:"nav-link"},Se={class:"nav-item d-flex",style:{"align-items":"center",width:"300px"}},Ve=B(()=>r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.6798 4C7.01399 4 4.0423 6.91015 4.0423 10.5C4.0423 14.0899 7.01399 17 10.6798 17C14.3455 17 17.3172 14.0899 17.3172 10.5C17.3172 6.91015 14.3455 4 10.6798 4ZM2 10.5C2 5.80558 5.88606 2 10.6798 2C15.4735 2 19.3595 5.80558 19.3595 10.5C19.3595 12.5926 18.5873 14.5087 17.3067 15.9897L21.7009 20.2929C22.0997 20.6834 22.0997 21.3166 21.7009 21.7071C21.3021 22.0976 20.6556 22.0976 20.2568 21.7071L15.8127 17.3551C14.3751 18.3892 12.6003 19 10.6798 19C5.88606 19 2 15.1944 2 10.5Z",fill:"#392A93"})],-1)),Oe=[Ve],$e={__name:"CNavbar",setup(e){const t=R(),i=$([{title:"基隆市",name:"Keelung"},{title:"臺北市",name:"Taipei"},{title:"新北市",name:"NewTaipei"},{title:"桃園市",name:"Taoyuan"},{title:"苗栗縣",name:"MiaoliCounty"},{title:"新竹縣",name:"HsinchuCounty"},{title:"新竹市",name:"Hsinchu"},{title:"臺中市",name:"Taichung"},{title:"彰化縣",name:"ChanghuaCounty"},{title:"南投縣",name:"NantouCounty"},{title:"雲林縣",name:"YunlinCounty"},{title:"嘉義縣",name:"ChiayiCounty"},{title:"嘉義市",name:"Chiayi"},{title:"臺南市",name:"Tainan"},{title:"高雄市",name:"Kaohsiung"},{title:"屏東縣",name:"PingtungCounty"},{title:"宜蘭縣",name:"YilanCounty"},{title:"花蓮縣",name:"HualienCounty"},{title:"臺東縣",name:"TaitungCounty"},{title:"金門縣",name:"KinmenCounty"},{title:"澎湖縣",name:"PenghuCounty"},{title:"連江縣",name:"LienchiangCounty"}]),l=$(""),u=$([]),n=$(!1),s=$(null),h=async function(c){c&&(n.value=!0,clearTimeout(s.value),s.value=setTimeout(async()=>{let S=[];try{S=(await Z({method:"get",url:"https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot",params:{$top:"10",$filter:`contains(Keyword,'${c}') or contains(ScenicSpotName,'${c}')`,$format:"JSON"}})).data.map(C=>{const G=i.value.find(F=>F.title===C.City);return{title:C.ScenicSpotName,name:C.ScenicSpotID,url:`/point/${G.name}/${C.ScenicSpotID}`}})}catch(L){console.log("err",L)}u.value=[...i.value,...S],n.value=!1},500))};async function v(){const c=u.value[0];await t.push({path:c.url}),await t.go()}return I(l,async c=>{await t.push({path:c.url}),await t.go()}),z(async()=>{i.value=i.value.map(c=>({...c,url:`/points/${c.name}`}))}),(c,S)=>(p(),j("nav",he,[r("div",de,[a(T(k),{to:"/",class:"navbar-brand nav-logo"},{default:w(()=>[pe,ce]),_:1}),fe,r("div",ge,[r("ul",me,[r("li",be,[r("div",ve,[a(T(k),{to:"/points/Taipei"},{default:w(()=>[m("旅遊景點")]),_:1})])]),r("li",ye,[r("div",we,[a(T(k),{to:"/foods/NewTaipei"},{default:w(()=>[m("美食餐廳")]),_:1})])]),r("li",Se,[a(T(K),{modelValue:l.value,"onUpdate:modelValue":S[0]||(S[0]=L=>l.value=L),options:u.value,onSearchChange:h,label:"title",placeholder:"想去哪玩呢？",loading:n.value,"show-labels":!1},{noOptions:w(()=>[m(" 請輸入景點或縣市名稱 ")]),noResult:w(()=>[m(" 請更換關鍵字 ")]),_:1},8,["modelValue","options","loading"]),r("button",{class:"btn btn-outline-success",style:{border:"none"},type:"submit",onClick:v},Oe)])])])])]))}},Ce=ue($e,[["__scopeId","data-v-f994aaa3"]]);export{Ce as C,ue as _};
