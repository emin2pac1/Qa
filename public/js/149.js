"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[149],{8106:(t,e,r)=>{r.d(e,{Z:()=>a});var o=r(3645),n=r.n(o)()((function(t){return t[1]}));n.push([t.id,".navbar-brand[data-v-647dda2f]{color:#fff!important;font-size:1.5rem;margin-right:1rem;padding-bottom:.3125rem;padding-top:.3125rem;text-decoration:none;white-space:nowrap}[data-v-647dda2f] .v-toolbar__content{padding-left:0!important;padding-right:0!important}",""]);const a=n},3820:(t,e,r)=>{r.d(e,{Z:()=>n});const o={name:"KNavLink",components:{Link:r(6454).rU},props:{url:{type:String,default:null,required:!0},active:{type:Boolean,default:!1,required:!1},label:{type:String,default:"Link",required:!1},routeName:{type:String,default:"Link",required:!1},routeParent:{type:String,default:"Link",required:!1},method:{type:String,default:"get",required:!1}},computed:{classes:function(){return route().current(this.routeName)||route().current(this.routeParent)?"nav-link-exact-active":"nav-link-exact-inactive"}}};const n=(0,r(1900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Link",{staticClass:"text-decoration-none ",class:t.classes,staticStyle:{cursor:"pointer"},attrs:{href:t.url,method:t.method,tag:"span"}},[t._t("default",(function(){return[r("h4",[t._v(t._s(t.label))])]}))],2)}),[],!1,null,"31edd6a6",null).exports},8123:(t,e,r)=>{r.d(e,{Z:()=>n});const o={name:"KSnackBar",methods:{open:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"close",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4?arguments[4]:void 0;this.text=t,this.color=e,this.action=o,this.timeout=n,this.snackbar=!0,r&&(this.action_text=r)},onClickAction:function(){this.snackbar=!1,this.action&&"function"==typeof this.action&&this.action()}},data:function(){return{text:null,action:null,snackbar:!1,color:"success",action_text:"close",timeout:3e3}}};const n=(0,r(1900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-snackbar",{attrs:{timeout:t.timeout,color:t.color},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[r("v-btn",t._b({staticClass:"text-capitalize",attrs:{text:""},on:{click:t.onClickAction}},"v-btn",o,!1),[t._v("\n            "+t._s(t.action_text)+"\n        ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n\n    ")])}),[],!1,null,"7f58c3dc",null).exports},6340:(t,e,r)=>{r.d(e,{Z:()=>l});var o=r(1865);const n={name:"GuestSideNav"};var a=r(1900);const s=(0,a.Z)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"3a6aaccc",null).exports;var i=r(7501);const c={name:"GuestLayout",components:{AppFooter:r(6554).Z,AppTopBar:i.Z,GuestSideNav:s,LayoutWrapper:o.Z},props:{},computed:{currentRoute:function(){return location.pathname.substr(1)}}};const l=(0,a.Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("LayoutWrapper",[t._t("navigation",(function(){return[r("app-top-bar",{key:t.currentRoute})]})),t._v(" "),r("v-main",[r("v-container",[t._t("default")],2)],1),t._v(" "),t._t("footer",(function(){return[r("app-footer")]}))],2)}),[],!1,null,"404fee91",null).exports},1865:(t,e,r)=>{r.d(e,{Z:()=>n});const o={name:"LayoutWrapper",components:{KSnackBar:r(8123).Z},data:function(){return{}},mounted:function(){window.addEventListener("online",this.checkNetwork),window.addEventListener("offline",this.checkNetwork)},watch:{},computed:{},methods:{checkNetwork:function(){window.navigator.onLine?this.$refs.snackbar.open("You are online now","success"):this.$refs.snackbar.open("seems like you are offline, Please check your connection","error",null,null,-1)}}};const n=(0,r(1900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[t._t("default"),t._v(" "),r("k-snack-bar",{ref:"snackbar"})],2)}),[],!1,null,"d1a4771a",null).exports},6554:(t,e,r)=>{r.d(e,{Z:()=>n});const o={name:"AppFooter"};const n=(0,r(1900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{staticClass:"pt-16",attrs:{padless:"",color:"primary"}},[r("v-container",[r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("span",{staticClass:"subtitle-2 k--text-color-white"},[t._v("Copyright © "+t._s((new Date).getFullYear()))])]),t._v(" "),r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("span",{staticClass:"subtitle-2 k--text-color-white"},[t._v("Works of Milad Khader")])]),t._v(" "),r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("span",{staticClass:"subtitle-2 m-0 k--text-color-white"},[t._v("Made with "),r("svg",{staticClass:"bi bi-heart",staticStyle:{display:"inline"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"}})]),t._v(" in Amman, Jordan for Karajkom LLC")])])],1)],1)}),[],!1,null,"17fd2fee",null).exports},7501:(t,e,r)=>{r.d(e,{Z:()=>c});const o={name:"AppTopBar",components:{KNavLink:r(3820).Z},methods:{signOut:function(){this.$inertia.post(route("logout"))},toggleNavBar:function(){this.$root.$emit("toggleNav")}},props:{isSideNav:{type:Boolean,default:!0,required:!1}}};var n=r(3379),a=r.n(n),s=r(8106),i={insert:"head",singleton:!1};a()(s.Z,i);s.Z.locals;const c=(0,r(1900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"",flat:"",color:"primary",height:"80"}},[r("v-container",{attrs:{fluid:t.$vuetify.breakpoint.smAndDown}},[r("div",{staticClass:"d-flex align-center"},[t.$vuetify.breakpoint.smAndDown?[r("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:t.toggleNavBar}}),t._v(" "),r("v-spacer")]:t._e(),t._v(" "),r("k-nav-link",{staticClass:"mx-2 k--text-color-white",attrs:{url:t.route("welcome"),label:"KarajkomQA"}},[r("span",{staticClass:"navbar-brand"},[t._v("KarajkomQA")])]),t._v(" "),r("v-spacer"),t._v(" "),t._l(t.$page.props.dashboard_menu,(function(e,o){return t.$vuetify.breakpoint.mdAndUp?[r("k-nav-link",{staticClass:"mx-2",attrs:{"route-name":"item.href","route-parent":e.parent,url:t.route(e.href),label:e.title}})]:t._e()})),t._v(" "),t.$page.props.user&&t.$vuetify.breakpoint.mdAndUp?r("a",{staticClass:"nav-link-exact-inactive text-decoration-none font-weight-bold",attrs:{href:t.route("help")}},[t._v("Help")]):t._e(),t._v(" "),t.$page.props.user?r("v-menu",{attrs:{bottom:"",dark:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,n=e.on;return[r("v-btn",t._g(t._b({attrs:{"min-width":"0",plain:"",ripple:!1}},"v-btn",o,!1),n),[r("v-avatar",[r("v-img",{attrs:{src:t.$page.props.user.profile_photo_url}})],1)],1)]}}],null,!1,1791302697)},[t._v(" "),r("v-card",[r("v-list",{attrs:{dense:""}},[r("v-list-item",[r("v-list-item-avatar",[r("v-img",{attrs:{src:t.$page.props.user.profile_photo_url}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$page.props.user.email)+"\n                                ")]),t._v(" "),r("v-list-item-subtitle",[t._v("\n                                    "+t._s(t.$page.props.user.role)+"\n                                ")]),t._v(" "),t.$page.props.user.department?r("v-list-item-subtitle",[t._v("\n                                    "+t._s(t.$page.props.user.department)+" Department\n                                ")]):t._e()],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{attrs:{dense:""}},[r("k-nav-link",{attrs:{url:t.route("user:profile.show")}},[r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{color:"secondary"}},[t._v("account_circle\n                                    ")])],1),t._v(" "),r("v-list-item-title",[t._v("Profile")])],1)],1),t._v(" "),r("k-nav-link",{attrs:{url:t.route("dashboard")}},[r("v-list-item",[r("v-list-item-icon",[r("v-icon",{attrs:{color:"secondary"}},[t._v("dashboard\n                                    ")])],1),t._v(" "),r("v-list-item-title",[t._v("Dashboard")])],1)],1),t._v(" "),r("v-list-item",{on:{click:t.signOut}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"secondary"}},[t._v("power_settings_new\n                                ")])],1),t._v(" "),r("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1):t._e()],2)])],1)}),[],!1,null,"647dda2f",null).exports},8149:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const o={name:"ForgotPassword",metaInfo:{title:"Forgot Password"},components:{GuestLayout:r(6340).Z},props:{status:String},data:function(){return{recovery:!1,form:this.$inertia.form({code:"",recovery_code:""})}},methods:{submit:function(){this.form.post(this.route("two-factor.login"))},toggleRecovery:function(){var t=this;this.recovery=!this.recovery,this.$nextTick((function(){t.recovery?(t.$refs.recovery_code.focus(),t.form.code=""):(t.$refs.code.focus(),t.form.recovery_code="")}))}}};const n=(0,r(1900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("GuestLayout",[r("v-container",{staticClass:" px-lg-16 px-0 fill-height mb-16",attrs:{fluid:""}},[r("v-row",{staticClass:"justify-center"},[r("v-col",{staticClass:"d-flex  justify-center",attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:" py-8 px-6 rounded-xl",attrs:{flat:"",width:"100%"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[r("v-row",{attrs:{"no-gutters":"",justify:"center"}},[t.recovery?[t._v("\n                                    Please confirm access to your account by entering one of your emergency recovery\n                                    codes.\n                                ")]:[t._v("\n                                    Please confirm access to your account by entering the authentication code\n                                    provided by your authenticator application.\n                                ")]],2),t._v(" "),r("v-row",{attrs:{"no-gutters":"",justify:"center"}},[r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return e.preventDefault(),t.toggleRecovery.apply(null,arguments)}}},[t.recovery?[t._v("\n                                        Use an authentication code\n                                    ")]:[t._v("\n                                        Use a recovery code\n                                    ")]],2)],1),t._v(" "),r("v-form",[r("v-row",[t.recovery?r("v-text-field",{ref:"recovery_code",staticClass:"pt-5",attrs:{outlined:"",placeholder:"Recovery Code",autofocus:"",id:"recovery_code",autocomplete:"one-time-code","error-messages":t.form.errors.recovery_code},model:{value:t.form.recovery_code,callback:function(e){t.$set(t.form,"recovery_code",e)},expression:"form.recovery_code"}}):r("v-text-field",{ref:"code",staticClass:"pt-5",attrs:{placeholder:"Code",outlined:"",autofocus:"",id:"code",autocomplete:"one-time-code","error-messages":t.form.errors.code},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),r("v-row",{staticClass:" d-sm-flex "},[t.$vuetify.breakpoint.smAndUp?r("v-spacer"):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-card-actions",{staticClass:"justify-md-right d-sm-flex justify-center justify-md-end"},[r("v-btn",{staticClass:"rounded-pill py-6 px-15 text-capitalize",attrs:{elevation:"12",disabled:t.form.processing,type:"submit",color:"primary",loading:t.form.processing},on:{click:t.submit}},[t._v("\n                                                Login\n                                            ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"598ddaa0",null).exports},1900:(t,e,r)=>{function o(t,e,r,o,n,a,s,i){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),o&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=i?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:l}}r.d(e,{Z:()=>o})}}]);