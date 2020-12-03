import t,{useCallback as e,useEffect as n,createElement as r,Fragment as o}from"react";import{useService as i}from"@xstate/react";import{addSeconds as a,isAfter as u,differenceInSeconds as s}from"date-fns";import{Machine as c,assign as l,interpret as h}from"xstate";import{choose as d}from"xstate/lib/actions";import f from"auth0-js";import p from"netlify-identity-widget";function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var m=h(c({id:"useAuth",initial:"unauthenticated",context:{user:{},expiresAt:null,authResult:null,isAuthenticating:!1,error:void 0,errorType:void 0,config:{navigate:function(){return console.error("Please specify a navigation method that works with your router")},callbackDomain:"http://localhost:8000"}},states:{unauthenticated:{on:{LOGIN:"authenticating",CHECK_SESSION:"verifying",SET_CONFIG:{actions:["setConfig"]}}},authenticating:{on:{ERROR:"error",AUTHENTICATED:"authenticated",SET_CONFIG:{actions:["setConfig"]}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},verifying:{invoke:{id:"checkSession",src:function(t,e){return t.config.authProvider.checkSession()},onDone:{target:"authenticated"},onError:{target:"error"}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},authenticated:{on:{LOGOUT:"unauthenticated",SET_CONFIG:{actions:["setConfig"]},CHECK_SESSION:"verifying"},entry:["saveUserToContext","saveToLocalStorage"],exit:d([{cond:function(t,e){return"CHECK_SESSION"!==e.type},actions:["clearUserFromContext","clearLocalStorage"]}])},error:{entry:["saveErrorToContext","clearUserFromContext","clearLocalStorage"]}}},{actions:{startAuthenticating:l(function(t){return{isAuthenticating:!0}}),stopAuthenticating:l(function(t){return{isAuthenticating:!1}}),saveUserToContext:l(function(t,e){var n=e.data?e.data:e,r=n.authResult;return{user:n.user,authResult:r,expiresAt:a(new Date,r.expiresIn)}}),clearUserFromContext:l(function(t){return{user:{},expiresAt:null,authResult:null}}),saveToLocalStorage:function(t,e){var n=t.expiresAt,r=t.user;"undefined"!=typeof localStorage&&(localStorage.setItem("useAuth:expires_at",n?n.toISOString():"0"),localStorage.setItem("useAuth:user",JSON.stringify(r)))},clearLocalStorage:function(){"undefined"!=typeof localStorage&&(localStorage.removeItem("useAuth:expires_at"),localStorage.removeItem("useAuth:user"))},saveErrorToContext:l(function(t,e){return{errorType:e.errorType,error:e.error}}),setConfig:l(function(t,e){return{config:v({},t.config,e)}})}}));m.start(),function(t){if("undefined"!=typeof localStorage){var e=new Date(localStorage.getItem("useAuth:expires_at")||"0"),n=new Date;if(u(e,n)){var r=JSON.parse(localStorage.getItem("useAuth:user")||"{}");t("LOGIN"),t("AUTHENTICATED",{user:r,authResult:{expiresIn:s(e,n)}})}}}(m.send);var g=function(){var t=i(m),n=t[0],r=t[1],o=n.context.config,a=o.authProvider,s=o.navigate,c=o.callbackDomain,l=e(function(t){var e=(void 0===t?{}:t).postLoginRoute,n=void 0===e?"/":e;try{if(!a||!s)return console.warn("authProvider not configured yet"),Promise.resolve();var o=function(){if("undefined"!=typeof window)return r("LOGIN"),Promise.resolve(a.handleLoginCallback(r)).then(function(t){t&&s(n)})}();return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},[a,s]),h=function(){return!(!n.context.expiresAt||!u(n.context.expiresAt,new Date))};return{isAuthenticating:n.context.isAuthenticating,isAuthenticated:h,isAuthorized:function(t){var e=Array.isArray(t)?t:[t],r=null==a?void 0:a.userRoles(n.context.user);return!(!h()||!r)&&e.some(function(t){return r.includes(t)})},user:n.context.user,userId:null==a?void 0:a.userId(n.context.user),authResult:n.context.authResult,login:function(){null==a||a.authorize()},signup:function(){null==a||a.signup()},logout:function(t){null==a||a.logout(""+c+t),r("LOGOUT"),s(t||"/")},handleAuthentication:l,dispatch:r}};function y(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}var I=function(){function t(t){this.checkSessionOnLoad=!0,this.dispatch=t.dispatch,this.customPropertyNamespace=t.customPropertyNamespace,this.auth0=new f.WebAuth(v({},t))}t.addDefaultParams=function(t,e){return v({redirectUri:e+"/auth0_callback",audience:"https://"+t.domain+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},t)};var e=t.prototype;return e.authorize=function(){this.auth0.authorize()},e.signup=function(){this.auth0.authorize({mode:"signUp",screen_hint:"signup"})},e.logout=function(t){this.auth0.logout({returnTo:t})},e.userId=function(t){return t.sub},e.userRoles=function(t){var e=t[(this.customPropertyNamespace+"/user_metadata").replace(/\/+user_metadata/,"/user_metadata")];return(null==e?void 0:e.roles)||null},e.handleLoginCallback=function(){try{var t=this;return Promise.resolve(new Promise(function(e,n){t.auth0.parseHash(function(n,r){try{n&&(t.dispatch("ERROR",{error:n,errorType:"authResult"}),e(!1));var o=y(function(){return Promise.resolve(t.handleAuthResult(r)).then(function(t){e(t)})},function(n){t.dispatch("ERROR",{error:n,errorType:"handleAuth"}),e(!1)});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(t){return Promise.reject(t)}})}))}catch(t){return Promise.reject(t)}},e.checkSession=function(){try{var t=this;return Promise.resolve(new Promise(function(e,n){t.auth0.checkSession({},function(r,o){try{var i=function(){if(!r&&o&&o.accessToken&&o.idToken){var i=y(function(){return Promise.resolve(t.fetchUser(o)).then(function(t){e({user:t,authResult:o})})},function(t){n(t)});if(i&&i.then)return i.then(function(){})}else n(r||new Error("Session invalid"))}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(t){return Promise.reject(t)}})}))}catch(t){return Promise.reject(t)}},e.handleAuthResult=function(t){try{var e=this;return t&&t.accessToken&&t.idToken?Promise.resolve(e.fetchUser(t)).then(function(n){return e.dispatch("AUTHENTICATED",{authResult:t,user:n}),!0}):Promise.resolve(!1)}catch(t){return Promise.reject(t)}},e.fetchUser=function(t){try{var e=this;return Promise.resolve(new Promise(function(n,r){e.auth0.client.userInfo((null==t?void 0:t.accessToken)||"",function(t,e){t?r(t):n(e)})}))}catch(t){return Promise.reject(t)}},t}(),S={__proto__:null,Auth0:I,NetlifyIdentity:function(){function t(t){var e=this;this.checkSessionOnLoad=!1,this.netlifyIdentity=p,this.netlifyIdentity.init(t),this.dispatch=t.dispatch,this.netlifyIdentity.on("error",function(t){e.dispatch("ERROR",{error:t,errorType:"netlifyError"})}),this.netlifyIdentity.on("login",function(t){var n;e.dispatch("AUTHENTICATED",{user:t,authResult:{expiresIn:null==(n=t.token)?void 0:n.expires_in}})}),this.netlifyIdentity.on("init",function(t){var n;t&&(e.dispatch("LOGIN"),e.dispatch("AUTHENTICATED",{user:t,authResult:{expiresIn:null==(n=t.token)?void 0:n.expires_in}}))})}t.addDefaultParams=function(t,e){return t};var e=t.prototype;return e.authorize=function(){this.dispatch("LOGIN"),this.netlifyIdentity.open("login")},e.signup=function(){this.dispatch("LOGIN"),this.netlifyIdentity.open("signup")},e.logout=function(t){this.netlifyIdentity.logout()},e.handleLoginCallback=function(t){try{return console.warn("handleLoginCallback is unnecessary with Netlify Identity Widget"),Promise.resolve(!0)}catch(t){return Promise.reject(t)}},e.checkSession=function(){try{return console.warn("checkSession is unnecessary with Netlify Identity Widget"),Promise.resolve({user:{},authResult:{}})}catch(t){return Promise.reject(t)}},e.userId=function(t){return t.id},e.userRoles=function(t){return[t.role]||null},t}()},A=function(e){var r=e.children,o=e.navigate,i=e.auth0_domain,a=e.auth0_params,u=void 0===a?{}:a,s=e.customPropertyNamespace,c={domain:i,clientID:e.auth0_client_id,redirectUri:("undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000")+"/auth0_callback",audience:"https://"+(e.auth0_audience_domain||i)+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},l=g().dispatch;return n(function(){var t=new I(v({dispatch:l,customPropertyNamespace:s},c,u));l("SET_CONFIG",{authProvider:t,navigate:o}),l("CHECK_SESSION")},[o,s]),n(function(){console.warn("Using the AuthProvider root component is deprecated. Migrate to AuthConfig or manual dispatching. Takes  5min.")},[]),t.createElement(t.Fragment,null,r)},P=function(t){var e=t.authProvider,i=t.params,a=t.navigate,u=t.children,s=g().dispatch,c="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000";return n(function(){var t=new e(v({dispatch:s},e.addDefaultParams(i,c)));s("SET_CONFIG",{authProvider:t,navigate:a,callbackDomain:c}),t.checkSessionOnLoad&&s("CHECK_SESSION")},[s,e,i,a]),r(o,null,u)};export{P as AuthConfig,A as AuthProvider,S as Providers,g as useAuth};
//# sourceMappingURL=index.module.js.map
