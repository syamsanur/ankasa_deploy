(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~eb7344d5"],{"331b":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("5843"),r=i("ea44"),s=i("3790"),a=Object(s["b"])({components:{BCollapse:n["a"]},plugins:{VBTogglePlugin:r["a"]}})},3734:function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i("c637"),r=i("8fb1"),s=i("dcb3"),a=i("b42e"),o=i("365c"),c=i("6c06");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h={id:{type:String},header:{type:String},headerTag:{type:String,default:"header"},headerVariant:{type:String},headerClasses:{type:[String,Array,Object]},ariaDescribedby:{type:String}},p=s["a"].extend({name:n["G"],functional:!0,props:h,render:function(t,e){var i,n=e.props,s=e.data,l=e.slots,h=e.scopedSlots,p=l(),b=h||{},f=s.attrs||{};s.attrs={};var v=null;(Object(o["a"])(r["g"],b,p)||n.header)&&(v=n.id?"_bv_".concat(n.id,"_group_dd_header"):null,i=t(n.headerTag,{staticClass:"dropdown-header",class:[n.headerClasses,d({},"text-".concat(n.variant),n.variant)],attrs:{id:v,role:"heading"}},Object(o["b"])(r["g"],{},b,p)||n.header));var g=[v,n.ariaDescribedBy].filter(c["a"]).join(" ").trim();return t("li",Object(a["a"])(s,{attrs:{role:"presentation"}}),[i||t(),t("ul",{staticClass:"list-unstyled",attrs:u(u({},f),{},{id:n.id||null,role:"group","aria-describedby":g||null})},Object(o["b"])(r["c"],{},b,p))])}})},5680:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i("c637"),r=i("dcb3"),s=i("b42e"),a=i("11de");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=r["a"].extend({name:n["F"],functional:!0,props:c(c({},a["b"]),{},{disabled:{type:Boolean,default:!1},formClass:{type:[String,Object,Array]}}),render:function(t,e){var i=e.props,n=e.data,r=e.children,o=n.attrs||{},l=n.on||{};return n.attrs={},n.on={},t("li",Object(s["a"])(n,{attrs:{role:"presentation"}}),[t(a["a"],{ref:"form",staticClass:"b-dropdown-form",class:[i.formClass,{disabled:i.disabled}],props:i,attrs:c(c({},o),{},{disabled:i.disabled,tabindex:i.disabled?null:"-1"}),on:l},r)])}})},5843:function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));var n=i("c637"),r=i("0056"),s=i("8fb1"),a=i("dcb3"),o=i("1a61"),c=i("906c"),l=i("938d"),u=i("6b77"),d=i("90ef"),h=i("602d"),p=i("8c18"),b=i("39ba"),f="bv::collapse::accordion",v=a["a"].extend({name:n["A"],mixins:[d["a"],h["a"],p["a"]],model:{prop:"visible",event:"input"},props:{isNav:{type:Boolean,default:!1},accordion:{type:String},visible:{type:Boolean,default:!1},tag:{type:String,default:"div"},appear:{type:Boolean,default:!1}},data:function(){return{show:this.visible,transitioning:!1}},computed:{classObject:function(){return{"navbar-collapse":this.isNav,collapse:!this.transitioning,show:this.show&&!this.transitioning}}},watch:{visible:function(t){t!==this.show&&(this.show=t)},show:function(t,e){t!==e&&this.emitState()}},created:function(){this.show=this.visible},mounted:function(){var t=this;this.show=this.visible,this.listenOnRoot(b["d"],this.handleToggleEvt),this.listenOnRoot(f,this.handleAccordionEvt),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(b["b"],(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&l["j"]&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){Object(u["c"])(t,window,"resize",this.handleResize,r["a"]),Object(u["c"])(t,window,"orientationchange",this.handleResize,r["a"])},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit("show")},onAfterEnter:function(){this.transitioning=!1,this.$emit("shown")},onLeave:function(){this.transitioning=!0,this.$emit("hide")},onAfterLeave:function(){this.transitioning=!1,this.$emit("hidden")},emitState:function(){this.$emit("input",this.show),this.emitOnRoot(b["a"],this.safeId(),this.show),this.accordion&&this.show&&this.emitOnRoot(f,this.safeId(),this.accordion)},emitSync:function(){this.emitOnRoot(b["c"],this.safeId(),this.show)},checkDisplayBlock:function(){var t=Object(c["p"])(this.$el,"show");Object(c["A"])(this.$el,"show");var e="block"===Object(c["k"])(this.$el).display;return t&&Object(c["b"])(this.$el,"show"),e},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(c["k"])(this.$el).display&&(Object(c["v"])(e,".nav-link,.dropdown-item")||Object(c["e"])(".nav-link,.dropdown-item",e))&&(this.checkDisplayBlock()||(this.show=!1))},handleToggleEvt:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvt:function(t,e){this.accordion&&e===this.accordion&&(t===this.safeId()?this.show||this.toggle():this.show&&this.toggle())},handleResize:function(){this.show="block"===Object(c["k"])(this.$el).display}},render:function(t){var e=this,i={visible:this.show,close:function(){return e.show=!1}},n=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},[this.normalizeSlot(s["c"],i)]);return t(o["a"],{props:{appear:this.appear},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[n])}})},"63d5":function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i("c637"),r=i("dcb3"),s=i("b42e");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={id:{type:String},tag:{type:String,default:"header"},variant:{type:String}},u=r["a"].extend({name:n["H"],functional:!0,props:l,render:function(t,e){var i=e.props,n=e.data,r=e.children,a=n.attrs||{};return n.attrs={},t("li",Object(s["a"])(n,{attrs:{role:"presentation"}}),[t(i.tag,{staticClass:"dropdown-header",class:c({},"text-".concat(i.variant),i.variant),attrs:o(o({},a),{},{id:i.id||null,role:"heading"}),ref:"header"},r)])}})},6865:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n=i("c637"),r=i("dcb3"),s=i("493b"),a=i("8c18");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={active:{type:Boolean,default:!1},activeClass:{type:String,default:"active"},buttonClass:{type:[String,Array,Object]},disabled:{type:Boolean,default:!1},variant:{type:String}},d=r["a"].extend({name:n["J"],mixins:[s["a"],a["a"]],inheritAttrs:!1,inject:{bvDropdown:{default:null}},props:u,computed:{computedAttrs:function(){return c(c({},this.bvAttrs),{},{role:"menuitem",type:"button",disabled:this.disabled})}},methods:{closeDropdown:function(){this.bvDropdown&&this.bvDropdown.hide(!0)},onClick:function(t){this.$emit("click",t),this.closeDropdown()}},render:function(t){var e;return t("li",{attrs:{role:"presentation"}},[t("button",{staticClass:"dropdown-item",class:[this.buttonClass,(e={},l(e,this.activeClass,this.active),l(e,"text-".concat(this.variant),this.variant&&!(this.active||this.disabled)),e)],attrs:this.computedAttrs,on:{click:this.onClick},ref:"button"},this.normalizeSlot())])}})},"8c60":function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var n=i("dd9a"),r=i("9eaa"),s=i("6865"),a=i("63d5"),o=i("f47c"),c=i("5680"),l=i("e7df"),u=i("3734"),d=i("3790"),h=Object(d["b"])({components:{BDropdown:n["a"],BDd:n["a"],BDropdownItem:r["a"],BDdItem:r["a"],BDropdownItemButton:s["a"],BDropdownItemBtn:s["a"],BDdItemButton:s["a"],BDdItemBtn:s["a"],BDropdownHeader:a["a"],BDdHeader:a["a"],BDropdownDivider:o["a"],BDdDivider:o["a"],BDropdownForm:c["a"],BDdForm:c["a"],BDropdownText:l["a"],BDdText:l["a"],BDropdownGroup:u["a"],BDdGroup:u["a"]}})},"9eaa":function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));var n=i("c637"),r=i("dcb3"),s=i("906c"),a=i("d82f"),o=i("493b"),c=i("8c18"),l=i("aa59");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){h(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=Object(a["k"])(l["b"],["event","routerTag"]),b=r["a"].extend({name:n["I"],mixins:[o["a"],c["a"]],inheritAttrs:!1,inject:{bvDropdown:{default:null}},props:d(d({},p),{},{linkClass:{type:[String,Array,Object]},variant:{type:String}}),computed:{computedAttrs:function(){return d(d({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var t=this;Object(s["D"])((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit("click",t),this.closeDropdown()}},render:function(t){var e=this.linkClass,i=this.variant,n=this.active,r=this.disabled,s=this.onClick;return t("li",{attrs:{role:"presentation"}},[t(l["a"],{staticClass:"dropdown-item",class:[e,h({},"text-".concat(i),i&&!(n||r))],props:this.$props,attrs:this.computedAttrs,on:{click:s},ref:"item"},this.normalizeSlot())])}})},a005:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("c637"),r=i("dcb3"),s=i("b42e"),a=i("2326");function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={type:{type:String,default:"iframe",validator:function(t){return Object(a["a"])(["iframe","embed","video","object","img","b-img","b-img-lazy"],t)}},tag:{type:String,default:"div"},aspect:{type:String,default:"16by9"}},l=r["a"].extend({name:n["L"],functional:!0,props:c,render:function(t,e){var i=e.props,n=e.data,r=e.children;return t(i.tag,{ref:n.ref,staticClass:"embed-responsive",class:o({},"embed-responsive-".concat(i.aspect),i.aspect)},[t(i.type,Object(s["a"])(n,{ref:"",staticClass:"embed-responsive-item"}),r)])}})},d3b4:function(t,e,i){"use strict";i.d(e,"a",(function(){return x}));var n=i("c637"),r=i("0056"),s=i("9bfa"),a=i("dcb3"),o=i("f07e"),c=i("47df"),l=i("228e"),u=i("906c"),d=i("938d"),h=i("6b77"),p=i("7b1e"),b=i("a8c8"),f=i("3a58"),v=i("90ef"),g=i("8c18"),O={next:{dirClass:"carousel-item-left",overlayClass:"carousel-item-next"},prev:{dirClass:"carousel-item-right",overlayClass:"carousel-item-prev"}},y=650,m=500,j=40,w={TOUCH:"touch",PEN:"pen"},S={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend oTransitionEnd",transition:"transitionend"},P=function(t){for(var e in S)if(!Object(p["o"])(t.style[e]))return S[e];return null},x=a["a"].extend({name:n["x"],mixins:[v["a"],g["a"]],provide:function(){return{bvCarousel:this}},model:{prop:"value",event:"input"},props:{labelPrev:{type:String,default:function(){return Object(l["c"])(n["x"],"labelPrev")}},labelNext:{type:String,default:function(){return Object(l["c"])(n["x"],"labelNext")}},labelGotoSlide:{type:String,default:function(){return Object(l["c"])(n["x"],"labelGotoSlide")}},labelIndicators:{type:String,default:function(){return Object(l["c"])(n["x"],"labelIndicators")}},interval:{type:Number,default:5e3},indicators:{type:Boolean,default:!1},controls:{type:Boolean,default:!1},noAnimation:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},noWrap:{type:Boolean,default:!1},noTouch:{type:Boolean,default:!1},noHoverPause:{type:Boolean,default:!1},imgWidth:{type:[Number,String]},imgHeight:{type:[Number,String]},background:{type:String},value:{type:Number,default:0}},data:function(){return{index:this.value||0,isSliding:!1,transitionEndEvent:null,slides:[],direction:null,isPaused:!(Object(f["c"])(this.interval,0)>0),touchStartX:0,touchDeltaX:0}},computed:{numSlides:function(){return this.slides.length}},watch:{value:function(t,e){t!==e&&this.setSlide(Object(f["c"])(t,0))},interval:function(t,e){t!==e&&(t?(this.pause(!0),this.start(!1)):this.pause(!1))},isPaused:function(t,e){t!==e&&this.$emit(t?"paused":"unpaused")},index:function(t,e){t===e||this.isSliding||this.doSlide(t,e)}},created:function(){this.$_interval=null,this.$_animationTimeout=null,this.$_touchTimeout=null,this.$_observer=null,this.isPaused=!(Object(f["c"])(this.interval,0)>0)},mounted:function(){this.transitionEndEvent=P(this.$el)||null,this.updateSlides(),this.setObserver(!0)},beforeDestroy:function(){this.clearInterval(),this.clearAnimationTimeout(),this.clearTouchTimeout(),this.setObserver(!1)},methods:{clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearInterval(this.$_interval),this.$_interval=null})),clearAnimationTimeout:function(){clearTimeout(this.$_animationTimeout),this.$_animationTimeout=null},clearTouchTimeout:function(){clearTimeout(this.$_touchTimeout),this.$_touchTimeout=null},setObserver:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,t&&(this.$_observer=Object(c["a"])(this.$refs.inner,this.updateSlides.bind(this),{subtree:!1,childList:!0,attributes:!0,attributeFilter:["id"]}))},setSlide:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(d["j"]&&document.visibilityState&&document.hidden)){var n=this.noWrap,r=this.numSlides;t=Object(b["c"])(t),0!==r&&(this.isSliding?this.$once("sliding-end",(function(){return e.setSlide(t,i)})):(this.direction=i,this.index=t>=r?n?r-1:0:t<0?n?0:r-1:t,n&&this.index!==t&&this.index!==this.value&&this.$emit("input",this.index)))}},prev:function(){this.setSlide(this.index-1,"prev")},next:function(){this.setSlide(this.index+1,"next")},pause:function(t){t||(this.isPaused=!0),this.clearInterval()},start:function(t){t||(this.isPaused=!1),this.clearInterval(),this.interval&&this.numSlides>1&&(this.$_interval=setInterval(this.next,Object(b["d"])(1e3,this.interval)))},restart:function(){this.$el.contains(Object(u["g"])())||this.start()},doSlide:function(t,e){var i=this,n=Boolean(this.interval),s=this.calcDirection(this.direction,e,t),a=s.overlayClass,o=s.dirClass,c=this.slides[e],l=this.slides[t];if(c&&l){if(this.isSliding=!0,n&&this.pause(!1),this.$emit("sliding-start",t),this.$emit("input",this.index),this.noAnimation)Object(u["b"])(l,"active"),Object(u["A"])(c,"active"),this.isSliding=!1,this.$nextTick((function(){return i.$emit("sliding-end",t)}));else{Object(u["b"])(l,a),Object(u["y"])(l),Object(u["b"])(c,o),Object(u["b"])(l,o);var d=!1,p=function e(){if(!d){if(d=!0,i.transitionEndEvent){var n=i.transitionEndEvent.split(/\s+/);n.forEach((function(t){return Object(h["a"])(l,t,e,r["a"])}))}i.clearAnimationTimeout(),Object(u["A"])(l,o),Object(u["A"])(l,a),Object(u["b"])(l,"active"),Object(u["A"])(c,"active"),Object(u["A"])(c,o),Object(u["A"])(c,a),Object(u["G"])(c,"aria-current","false"),Object(u["G"])(l,"aria-current","true"),Object(u["G"])(c,"aria-hidden","true"),Object(u["G"])(l,"aria-hidden","false"),i.isSliding=!1,i.direction=null,i.$nextTick((function(){return i.$emit("sliding-end",t)}))}};if(this.transitionEndEvent){var b=this.transitionEndEvent.split(/\s+/);b.forEach((function(t){return Object(h["b"])(l,t,p,r["a"])}))}this.$_animationTimeout=setTimeout(p,y)}n&&this.start(!1)}},updateSlides:function(){this.pause(!0),this.slides=Object(u["F"])(".carousel-item",this.$refs.inner);var t=this.slides.length,e=Object(b["d"])(0,Object(b["e"])(Object(b["c"])(this.index),t-1));this.slides.forEach((function(i,n){var r=n+1;n===e?(Object(u["b"])(i,"active"),Object(u["G"])(i,"aria-current","true")):(Object(u["A"])(i,"active"),Object(u["G"])(i,"aria-current","false")),Object(u["G"])(i,"aria-posinset",String(r)),Object(u["G"])(i,"aria-setsize",String(t))})),this.setSlide(e),this.start(this.isPaused)},calcDirection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t?O[t]:i>e?O.next:O.prev},handleClick:function(t,e){var i=t.keyCode;"click"!==t.type&&i!==s["l"]&&i!==s["e"]||(Object(h["d"])(t),e())},handleSwipe:function(){var t=Object(b["a"])(this.touchDeltaX);if(!(t<=j)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0?this.prev():e<0&&this.next()}},touchStart:function(t){d["f"]&&w[t.pointerType.toUpperCase()]?this.touchStartX=t.clientX:d["f"]||(this.touchStartX=t.touches[0].clientX)},touchMove:function(t){t.touches&&t.touches.length>1?this.touchDeltaX=0:this.touchDeltaX=t.touches[0].clientX-this.touchStartX},touchEnd:function(t){d["f"]&&w[t.pointerType.toUpperCase()]&&(this.touchDeltaX=t.clientX-this.touchStartX),this.handleSwipe(),this.pause(!1),this.clearTouchTimeout(),this.$_touchTimeout=setTimeout(this.start,m+Object(b["d"])(1e3,this.interval))}},render:function(t){var e=this,i=t("div",{ref:"inner",class:["carousel-inner"],attrs:{id:this.safeId("__BV_inner_"),role:"list"}},[this.normalizeSlot()]),n=t();if(this.controls){var r=function(t){e.isSliding?Object(h["d"])(t,{propagation:!1}):e.handleClick(t,e.prev)},a=function(t){e.isSliding?Object(h["d"])(t,{propagation:!1}):e.handleClick(t,e.next)};n=[t("a",{class:["carousel-control-prev"],attrs:{href:"#",role:"button","aria-controls":this.safeId("__BV_inner_"),"aria-disabled":this.isSliding?"true":null},on:{click:r,keydown:r}},[t("span",{class:["carousel-control-prev-icon"],attrs:{"aria-hidden":"true"}}),t("span",{class:["sr-only"]},[this.labelPrev])]),t("a",{class:["carousel-control-next"],attrs:{href:"#",role:"button","aria-controls":this.safeId("__BV_inner_"),"aria-disabled":this.isSliding?"true":null},on:{click:a,keydown:a}},[t("span",{class:["carousel-control-next-icon"],attrs:{"aria-hidden":"true"}}),t("span",{class:["sr-only"]},[this.labelNext])])]}var c=t("ol",{class:["carousel-indicators"],directives:[{name:"show",rawName:"v-show",value:this.indicators,expression:"indicators"}],attrs:{id:this.safeId("__BV_indicators_"),"aria-hidden":this.indicators?"false":"true","aria-label":this.labelIndicators,"aria-owns":this.safeId("__BV_inner_")}},this.slides.map((function(i,n){return t("li",{key:"slide_".concat(n),class:{active:n===e.index},attrs:{role:"button",id:e.safeId("__BV_indicator_".concat(n+1,"_")),tabindex:e.indicators?"0":"-1","aria-current":n===e.index?"true":"false","aria-label":"".concat(e.labelGotoSlide," ").concat(n+1),"aria-describedby":e.slides[n].id||null,"aria-controls":e.safeId("__BV_inner_")},on:{click:function(t){e.handleClick(t,(function(){e.setSlide(n)}))},keydown:function(t){e.handleClick(t,(function(){e.setSlide(n)}))}}})}))),l={mouseenter:this.noHoverPause?o["a"]:this.pause,mouseleave:this.noHoverPause?o["a"]:this.restart,focusin:this.pause,focusout:this.restart,keydown:function(t){if(!/input|textarea/i.test(t.target.tagName)){var i=t.keyCode;i!==s["h"]&&i!==s["k"]||(Object(h["d"])(t),e[i===s["h"]?"prev":"next"]())}}};return!this.noTouch&&d["h"]&&(d["f"]?(l["&pointerdown"]=this.touchStart,l["&pointerup"]=this.touchEnd):(l["&touchstart"]=this.touchStart,l["&touchmove"]=this.touchMove,l["&touchend"]=this.touchEnd)),t("div",{staticClass:"carousel",class:{slide:!this.noAnimation,"carousel-fade":!this.noAnimation&&this.fade,"pointer-event":!this.noTouch&&d["h"]&&d["f"]},style:{background:this.background},attrs:{role:"region",id:this.safeId(),"aria-busy":this.isSliding?"true":"false"},on:l},[i,n,c])}})},d7b1:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("d3b4"),r=i("febd"),s=i("3790"),a=Object(s["b"])({components:{BCarousel:n["a"],BCarouselSlide:r["a"]}})},dd9a:function(t,e,i){"use strict";i.d(e,"b",(function(){return g})),i.d(e,"a",(function(){return O}));var n=i("c637"),r=i("8fb1"),s=i("dcb3"),a=i("2326"),o=i("228e"),c=i("8690"),l=i("fa73"),u=i("95ae"),d=i("90ef"),h=i("8c18"),p=i("1947");function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var g={text:{type:String},html:{type:String},variant:{type:String,default:function(){return Object(o["c"])(n["D"],"variant")}},size:{type:String,default:function(){return Object(o["c"])(n["D"],"size")}},block:{type:Boolean,default:!1},menuClass:{type:[String,Array,Object]},toggleTag:{type:String,default:"button"},toggleText:{type:String,default:function(){return Object(o["c"])(n["D"],"toggleText")}},toggleClass:{type:[String,Array,Object]},noCaret:{type:Boolean,default:!1},split:{type:Boolean,default:!1},splitHref:{type:String},splitTo:{type:[String,Object]},splitVariant:{type:String,default:function(){return Object(o["c"])(n["D"],"splitVariant")}},splitClass:{type:[String,Array,Object]},splitButtonType:{type:String,default:"button",validator:function(t){return Object(a["a"])(["button","submit","reset"],t)}},lazy:{type:Boolean,default:!1},role:{type:String,default:"menu"}},O=s["a"].extend({name:n["D"],mixins:[d["a"],u["b"],h["a"]],props:g,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,i=this.variant,n=this.size,s=this.block,a=this.disabled,o=this.split,u=this.role,d=this.hide,h=this.toggle,b={variant:i,size:n,block:s,disabled:a},v="button-content",g=this.normalizeSlot(v),O=this.hasNormalizedSlot(v)?{}:Object(c["a"])(this.html,this.text),y=t();if(o){var m=this.splitTo,j=this.splitHref,w=this.splitButtonType,S=f(f({},b),{},{variant:this.splitVariant||i});m?S.to=m:j?S.href=j:w&&(S.type=w),y=t(p["a"],{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:S,domProps:O,on:{click:this.onSplitClick},ref:"button"},g),g=[t("span",{class:["sr-only"]},[this.toggleText])],O={}}var P=t(p["a"],{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":Object(l["g"])(e)},props:f(f({},b),{},{tag:this.toggleTag,block:s&&!o}),domProps:O,on:{mousedown:this.onMousedown,click:h,keydown:h},ref:"toggle"},g),x=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:u,tabindex:"-1","aria-labelledby":this.safeId(o?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(r["c"],{hide:d}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[y,P,x])}})},e7df:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("c637"),r=i("dcb3"),s=i("b42e");function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o=r["a"].extend({name:n["K"],functional:!0,props:{tag:{type:String,default:"p"},textClass:{type:[String,Array,Object]},variant:{type:String}},render:function(t,e){var i=e.props,n=e.data,r=e.children,o=i.tag,c=i.textClass,l=i.variant,u=n.attrs||{};return n.attrs={},t("li",Object(s["a"])(n,{attrs:{role:"presentation"}}),[t(o,{staticClass:"b-dropdown-text",class:[c,a({},"text-".concat(l),l)],props:i,attrs:u,ref:"text"},r)])}})},edbf:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("a005"),r=i("3790"),s=Object(r["b"])({components:{BEmbed:n["a"]}})},f47c:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i("c637"),r=i("dcb3"),s=i("b42e");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={tag:{type:String,default:"hr"}},u=r["a"].extend({name:n["E"],functional:!0,props:l,render:function(t,e){var i=e.props,n=e.data,r=n.attrs||{};return n.attrs={},t("li",Object(s["a"])(n,{attrs:{role:"presentation"}}),[t(i.tag,{staticClass:"dropdown-divider",attrs:o(o({},r),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}})},febd:function(t,e,i){"use strict";i.d(e,"a",(function(){return g}));var n=i("c637"),r=i("dcb3"),s=i("938d"),a=i("6b77"),o=i("8690"),c=i("cf75"),l=i("90ef"),u=i("8c18"),d=i("4918");function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){b(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={imgSrc:{type:String},imgAlt:{type:String},imgWidth:{type:[Number,String]},imgHeight:{type:[Number,String]},imgBlank:{type:Boolean,default:!1},imgBlankColor:{type:String,default:"transparent"}},v=p(p({},f),{},{contentVisibleUp:{type:String},contentTag:{type:String,default:"div"},caption:{type:String},captionHtml:{type:String},captionTag:{type:String,default:"h3"},text:{type:String},textHtml:{type:String},textTag:{type:String,default:"p"},background:{type:String}}),g=r["a"].extend({name:n["y"],mixins:[l["a"],u["a"]],inject:{bvCarousel:{default:function(){return{noTouch:!0}}}},props:v,computed:{contentClasses:function(){return[this.contentVisibleUp?"d-none":"",this.contentVisibleUp?"d-".concat(this.contentVisibleUp,"-block"):""]},computedWidth:function(){return this.imgWidth||this.bvCarousel.imgWidth||null},computedHeight:function(){return this.imgHeight||this.bvCarousel.imgHeight||null}},render:function(t){var e=this.normalizeSlot("img");if(!e&&(this.imgSrc||this.imgBlank)){var i={};!this.bvCarousel.noTouch&&s["h"]&&(i.dragstart=function(t){return Object(a["d"])(t,{propagation:!1})}),e=t(d["a"],{props:p(p({},Object(c["b"])(f,this.$props,c["e"].bind(null,"img"))),{},{width:this.computedWidth,height:this.computedHeight,fluidGrow:!0,block:!0}),on:i})}var n=[!(!this.caption&&!this.captionHtml)&&t(this.captionTag,{domProps:Object(o["a"])(this.captionHtml,this.caption)}),!(!this.text&&!this.textHtml)&&t(this.textTag,{domProps:Object(o["a"])(this.textHtml,this.text)}),this.normalizeSlot()||!1],r=t();return n.some(Boolean)&&(r=t(this.contentTag,{staticClass:"carousel-caption",class:this.contentClasses},n.map((function(e){return e||t()})))),t("div",{staticClass:"carousel-item",style:{background:this.background||this.bvCarousel.background||null},attrs:{id:this.safeId(),role:"listitem"}},[e,r])}})}}]);
//# sourceMappingURL=chunk-vendors~eb7344d5.cad136ee.js.map