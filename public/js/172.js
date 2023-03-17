"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[172],{8106:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(3645),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,".navbar-brand[data-v-647dda2f]{color:#fff!important;font-size:1.5rem;margin-right:1rem;padding-bottom:.3125rem;padding-top:.3125rem;text-decoration:none;white-space:nowrap}[data-v-647dda2f] .v-toolbar__content{padding-left:0!important;padding-right:0!important}",""]);const a=i},3820:(t,e,n)=>{n.d(e,{Z:()=>i});const r={name:"KNavLink",components:{Link:n(6454).rU},props:{url:{type:String,default:null,required:!0},active:{type:Boolean,default:!1,required:!1},label:{type:String,default:"Link",required:!1},routeName:{type:String,default:"Link",required:!1},routeParent:{type:String,default:"Link",required:!1},method:{type:String,default:"get",required:!1}},computed:{classes:function(){return route().current(this.routeName)||route().current(this.routeParent)?"nav-link-exact-active":"nav-link-exact-inactive"}}};const i=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Link",{staticClass:"text-decoration-none ",class:t.classes,staticStyle:{cursor:"pointer"},attrs:{href:t.url,method:t.method,tag:"span"}},[t._t("default",(function(){return[n("h4",[t._v(t._s(t.label))])]}))],2)}),[],!1,null,"31edd6a6",null).exports},8123:(t,e,n)=>{n.d(e,{Z:()=>i});const r={name:"KSnackBar",methods:{open:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"close",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4?arguments[4]:void 0;this.text=t,this.color=e,this.action=r,this.timeout=i,this.snackbar=!0,n&&(this.action_text=n)},onClickAction:function(){this.snackbar=!1,this.action&&"function"==typeof this.action&&this.action()}},data:function(){return{text:null,action:null,snackbar:!1,color:"success",action_text:"close",timeout:3e3}}};const i=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{timeout:t.timeout,color:t.color},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({staticClass:"text-capitalize",attrs:{text:""},on:{click:t.onClickAction}},"v-btn",r,!1),[t._v("\n            "+t._s(t.action_text)+"\n        ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n\n    ")])}),[],!1,null,"7f58c3dc",null).exports},204:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(1865);const i={name:"AppSideNav",components:{KNavLink:n(3820).Z},data:function(){return{drawer:null,mini:null}},mounted:function(){var t=this;this.$root.$on("toggleNav",(function(e){t.drawer=e||!t.drawer})),this.$root.$on("toggleNavMini",(function(e){t.mini=e||!t.mini}))},methods:{hasChildren:function(t){return t.children&&t.children instanceof Array},childIsParent:function(t){return route().current(t)}}};var a=n(1900);const o=(0,a.Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",dark:"",color:"primary"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",{staticClass:"px-2"},[n("v-list-item-title",[n("KNavLink",{attrs:{url:t.route("welcome")}},[n("h3",{staticClass:"text-center white--text"},[t._v(" Karajkom QA")])])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.$page.props.dashboard_menu,(function(e,r){return[e.type&&"SEPARATOR"===e.type?[e.title?n("v-list-item",{attrs:{dense:""}},[t.mini?n("v-divider"):t._e(),t._v(" "),t.mini?t._e():n("v-list-item-subtitle",{staticClass:"text-capitalize "},[t._v(t._s(e.title)+"\n                        ")])],1):t._e()]:[t.hasChildren(e)?[n("v-tooltip",{attrs:{right:"",color:"secondary"},scopedSlots:t._u([{key:"activator",fn:function(r){var i=r.on;r.attrs;return[n("v-list-group",t._g({attrs:{"no-action":"",value:t.route().current(e.parent),color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize"},[t._v(t._s(e.title)+"\n                                            ")])],1)]},proxy:!0}],null,!0)},t.mini?i:null),[t._v(" "),t._l(e.children,(function(e){return[n("v-list-item",{staticClass:"pl-6",class:{"v-item--active v-list-item--active":t.route().current(e.href)||t.childIsParent(e.parent)},attrs:{dense:"",link:""},on:{click:function(n){t.$inertia.visit(t.route(e.href))}}},[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize"},[t._v(t._s(e.title)+"\n                                                ")])],1)],1)]}))],2)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.title))])])]:[n("v-tooltip",{attrs:{right:"",color:"secondary"},scopedSlots:t._u([{key:"activator",fn:function(r){var i=r.on;r.attrs;return[n("v-list-item",t._g({class:{"v-item--active v-list-item--active white--text":t.route().current(e.href)||t.route().current(e.parent)},attrs:{dense:"",link:"",value:t.route(e.href),color:"accent"},on:{click:function(n){t.$inertia.visit(t.route(e.href))}}},t.mini?i:null),[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize"},[t._v(t._s(e.title)+"\n                                        ")])],1)],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.title))])])]]]}))],2)],1)],1)}),[],!1,null,"0047345a",null).exports;var s=n(7501);const l={name:"AppLayout",components:{AppFooter:n(6554).Z,AppTopBar:s.Z,AppSideNav:o,LayoutWrapper:r.Z},props:{isSideNav:{type:Boolean,default:!0,required:!1}},computed:{currentRoute:function(){return location.pathname.substr(1)}}};const c=(0,a.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LayoutWrapper",[t._t("navigation",(function(){return[t.$vuetify.breakpoint.smAndDown?n("app-side-nav",{key:t.currentRoute+"nav"}):t._e(),t._v(" "),n("app-top-bar",{key:t.currentRoute,attrs:{isSideNav:t.isSideNav}})]})),t._v(" "),n("v-main",{staticClass:"pb-16"},[n("v-container",[t._t("default")],2)],1),t._v(" "),t._t("footer",(function(){return[n("app-footer")]}))],2)}),[],!1,null,"5b3abe2e",null).exports},1865:(t,e,n)=>{n.d(e,{Z:()=>i});const r={name:"LayoutWrapper",components:{KSnackBar:n(8123).Z},data:function(){return{}},mounted:function(){window.addEventListener("online",this.checkNetwork),window.addEventListener("offline",this.checkNetwork)},watch:{},computed:{},methods:{checkNetwork:function(){window.navigator.onLine?this.$refs.snackbar.open("You are online now","success"):this.$refs.snackbar.open("seems like you are offline, Please check your connection","error",null,null,-1)}}};const i=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t._t("default"),t._v(" "),n("k-snack-bar",{ref:"snackbar"})],2)}),[],!1,null,"d1a4771a",null).exports},6554:(t,e,n)=>{n.d(e,{Z:()=>i});const r={name:"AppFooter"};const i=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"pt-16",attrs:{padless:"",color:"primary"}},[n("v-container",[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("span",{staticClass:"subtitle-2 k--text-color-white"},[t._v("Copyright © "+t._s((new Date).getFullYear()))])]),t._v(" "),n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("span",{staticClass:"subtitle-2 k--text-color-white"},[t._v("Works of Milad Khader")])]),t._v(" "),n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("span",{staticClass:"subtitle-2 m-0 k--text-color-white"},[t._v("Made with "),n("svg",{staticClass:"bi bi-heart",staticStyle:{display:"inline"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"}})]),t._v(" in Amman, Jordan for Karajkom LLC")])])],1)],1)}),[],!1,null,"17fd2fee",null).exports},7501:(t,e,n)=>{n.d(e,{Z:()=>l});const r={name:"AppTopBar",components:{KNavLink:n(3820).Z},methods:{signOut:function(){this.$inertia.post(route("logout"))},toggleNavBar:function(){this.$root.$emit("toggleNav")}},props:{isSideNav:{type:Boolean,default:!0,required:!1}}};var i=n(3379),a=n.n(i),o=n(8106),s={insert:"head",singleton:!1};a()(o.Z,s);o.Z.locals;const l=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",flat:"",color:"primary",height:"80"}},[n("v-container",{attrs:{fluid:t.$vuetify.breakpoint.smAndDown}},[n("div",{staticClass:"d-flex align-center"},[t.$vuetify.breakpoint.smAndDown?[n("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:t.toggleNavBar}}),t._v(" "),n("v-spacer")]:t._e(),t._v(" "),n("k-nav-link",{staticClass:"mx-2 k--text-color-white",attrs:{url:t.route("welcome"),label:"KarajkomQA"}},[n("span",{staticClass:"navbar-brand"},[t._v("KarajkomQA")])]),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.$page.props.dashboard_menu,(function(e,r){return t.$vuetify.breakpoint.mdAndUp?[n("k-nav-link",{staticClass:"mx-2",attrs:{"route-name":"item.href","route-parent":e.parent,url:t.route(e.href),label:e.title}})]:t._e()})),t._v(" "),t.$page.props.user&&t.$vuetify.breakpoint.mdAndUp?n("a",{staticClass:"nav-link-exact-inactive text-decoration-none font-weight-bold",attrs:{href:t.route("help")}},[t._v("Help")]):t._e(),t._v(" "),t.$page.props.user?n("v-menu",{attrs:{bottom:"",dark:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.attrs,i=e.on;return[n("v-btn",t._g(t._b({attrs:{"min-width":"0",plain:"",ripple:!1}},"v-btn",r,!1),i),[n("v-avatar",[n("v-img",{attrs:{src:t.$page.props.user.profile_photo_url}})],1)],1)]}}],null,!1,1791302697)},[t._v(" "),n("v-card",[n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.$page.props.user.profile_photo_url}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$page.props.user.email)+"\n                                ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                                    "+t._s(t.$page.props.user.role)+"\n                                ")]),t._v(" "),t.$page.props.user.department?n("v-list-item-subtitle",[t._v("\n                                    "+t._s(t.$page.props.user.department)+" Department\n                                ")]):t._e()],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{dense:""}},[n("k-nav-link",{attrs:{url:t.route("user:profile.show")}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"secondary"}},[t._v("account_circle\n                                    ")])],1),t._v(" "),n("v-list-item-title",[t._v("Profile")])],1)],1),t._v(" "),n("k-nav-link",{attrs:{url:t.route("dashboard")}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"secondary"}},[t._v("dashboard\n                                    ")])],1),t._v(" "),n("v-list-item-title",[t._v("Dashboard")])],1)],1),t._v(" "),n("v-list-item",{on:{click:t.signOut}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"secondary"}},[t._v("power_settings_new\n                                ")])],1),t._v(" "),n("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1):t._e()],2)])],1)}),[],!1,null,"647dda2f",null).exports},7172:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});const r={name:"Help",components:{AppLayout:n(204).Z}};const i=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("AppLayout",[t._v("\n    Help page\n")])}),[],!1,null,"7ad10b98",null).exports},1900:(t,e,n)=>{function r(t,e,n,r,i,a,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:c}}n.d(e,{Z:()=>r})}}]);