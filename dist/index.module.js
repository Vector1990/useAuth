import t,{useCallback as e,useEffect as n}from"react";import{useService as r}from"@xstate/react";import{addSeconds as i,isAfter as o,differenceInSeconds as u}from"date-fns";import{Machine as a,assign as s,interpret as c}from"xstate";import{choose as h}from"xstate/lib/actions";import l from"auth0-js";import f from"netlify-identity-widget";function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var p=c(a({id:"useAuth",initial:"unauthenticated",context:{user:{},expiresAt:null,authResult:null,isAuthenticating:!1,error:void 0,errorType:void 0,config:{navigate:function(){return console.error("Please specify a navigation method that works with your router")},callbackDomain:"http://localhost:8000"}},states:{unauthenticated:{on:{LOGIN:"authenticating",CHECK_SESSION:"verifying",SET_CONFIG:{actions:["setConfig"]}}},authenticating:{on:{ERROR:"error",AUTHENTICATED:"authenticated",SET_CONFIG:{actions:["setConfig"]}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},verifying:{invoke:{id:"checkSession",src:function(t,e){return t.config.authProvider.checkSession()},onDone:{target:"authenticated"},onError:{target:"error"}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},authenticated:{on:{LOGOUT:"unauthenticated",SET_CONFIG:{actions:["setConfig"]},CHECK_SESSION:"verifying"},entry:["saveUserToContext","saveToLocalStorage"],exit:h([{cond:function(t,e){return"CHECK_SESSION"!==e.type},actions:["clearUserFromContext","clearLocalStorage"]}])},error:{entry:["saveErrorToContext","clearUserFromContext","clearLocalStorage"]}}},{actions:{startAuthenticating:s(function(t){return{isAuthenticating:!0}}),stopAuthenticating:s(function(t){return{isAuthenticating:!1}}),saveUserToContext:s(function(t,e){var n=e.data?e.data:e,r=n.authResult;return{user:n.user,authResult:r,expiresAt:i(new Date,r.expiresIn)}}),clearUserFromContext:s(function(t){return{user:{},expiresAt:null,authResult:null}}),saveToLocalStorage:function(t,e){var n=t.expiresAt,r=t.user;"undefined"!=typeof localStorage&&(localStorage.setItem("useAuth:expires_at",n?n.toISOString():"0"),localStorage.setItem("useAuth:user",JSON.stringify(r)))},clearLocalStorage:function(){"undefined"!=typeof localStorage&&(localStorage.removeItem("useAuth:expires_at"),localStorage.removeItem("useAuth:user"))},saveErrorToContext:s(function(t,e){return{errorType:e.errorType,error:e.error}}),setConfig:s(function(t,e){return{config:d({},t.config,e)}})}}));p.start(),function(t){if("undefined"!=typeof localStorage){var e=new Date(localStorage.getItem("useAuth:expires_at")||"0"),n=new Date;if(o(e,n)){var r=JSON.parse(localStorage.getItem("useAuth:user")||"{}");t("LOGIN"),t("AUTHENTICATED",{user:r,authResult:{expiresIn:u(e,n)}})}}}(p.send);var v=function(){var t=r(p),n=t[0],i=t[1],u=n.context.config,a=u.authProvider,s=u.navigate,c=u.callbackDomain,h=e(function(t){var e=(void 0===t?{}:t).postLoginRoute,n=void 0===e?"/":e;try{if(!a||!s)return console.warn("authProvider not configured yet"),Promise.resolve();var r=function(){if("undefined"!=typeof window)return i("LOGIN"),Promise.resolve(a.handleLoginCallback(i)).then(function(t){t&&s(n)})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},[a,s]),l=function(){return!(!n.context.expiresAt||!o(n.context.expiresAt,new Date))};return{isAuthenticating:n.context.isAuthenticating,isAuthenticated:l,isAuthorized:function(t){var e=Array.isArray(t)?t:[t],r=null==a?void 0:a.userRoles(n.context.user);return!(!l()||!r)&&e.some(function(t){return r.includes(t)})},user:n.context.user,userId:null==a?void 0:a.userId(n.context.user),authResult:n.context.authResult,login:function(){null==a||a.authorize()},signup:function(){null==a||a.signup()},logout:function(t){null==a||a.logout(""+c+t),i("LOGOUT"),s(t||"/")},handleAuthentication:h,dispatch:i}};function g(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}var m=function(){function t(t){this.checkSessionOnLoad=!0,this.dispatch=t.dispatch,this.customPropertyNamespace=t.customPropertyNamespace,this.auth0=new l.WebAuth(d({},t))}var e=t.prototype;return e.authorize=function(){this.auth0.authorize()},e.signup=function(){this.auth0.authorize({mode:"signUp",screen_hint:"signup"})},e.logout=function(t){this.auth0.logout({returnTo:t})},e.userId=function(t){return t.sub},e.userRoles=function(t){var e=t[(this.customPropertyNamespace+"/user_metadata").replace(/\/+user_metadata/,"/user_metadata")];return(null==e?void 0:e.roles)||null},e.handleLoginCallback=function(){try{var t=this;return Promise.resolve(new Promise(function(e,n){t.auth0.parseHash(function(n,r){try{n&&(t.dispatch("ERROR",{error:n,errorType:"authResult"}),e(!1));var i=g(function(){return Promise.resolve(t.handleAuthResult(r)).then(function(t){e(t)})},function(n){t.dispatch("ERROR",{error:n,errorType:"handleAuth"}),e(!1)});return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(t){return Promise.reject(t)}})}))}catch(t){return Promise.reject(t)}},e.checkSession=function(){try{var t=this;return Promise.resolve(new Promise(function(e,n){t.auth0.checkSession({},function(r,i){try{var o=function(){if(!r&&i&&i.accessToken&&i.idToken){var o=g(function(){return Promise.resolve(t.fetchUser(i)).then(function(t){e({user:t,authResult:i})})},function(t){n(t)});if(o&&o.then)return o.then(function(){})}else n(r||new Error("Session invalid"))}();return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(t){return Promise.reject(t)}})}))}catch(t){return Promise.reject(t)}},e.handleAuthResult=function(t){try{var e=this;return t&&t.accessToken&&t.idToken?Promise.resolve(e.fetchUser(t)).then(function(n){return e.dispatch("AUTHENTICATED",{authResult:t,user:n}),!0}):Promise.resolve(!1)}catch(t){return Promise.reject(t)}},e.fetchUser=function(t){try{var e=this;return Promise.resolve(new Promise(function(n,r){e.auth0.client.userInfo((null==t?void 0:t.accessToken)||"",function(t,e){t?r(t):n(e)})}))}catch(t){return Promise.reject(t)}},t}(),y={__proto__:null,Auth0:m,NetlifyIdentity:function(){function t(t){var e=this;this.checkSessionOnLoad=!1,this.netlifyIdentity=f,this.netlifyIdentity.init(t),this.dispatch=t.dispatch,this.netlifyIdentity.on("error",function(t){e.dispatch("ERROR",{error:t,errorType:"netlifyError"})}),this.netlifyIdentity.on("login",function(t){var n;e.dispatch("AUTHENTICATED",{user:t,authResult:{expiresIn:null==(n=t.token)?void 0:n.expires_in}})}),this.netlifyIdentity.on("init",function(t){var n;t&&(e.dispatch("LOGIN"),e.dispatch("AUTHENTICATED",{user:t,authResult:{expiresIn:null==(n=t.token)?void 0:n.expires_in}}))})}var e=t.prototype;return e.authorize=function(){this.dispatch("LOGIN"),this.netlifyIdentity.open("login")},e.signup=function(){this.dispatch("LOGIN"),this.netlifyIdentity.open("signup")},e.logout=function(t){this.netlifyIdentity.logout()},e.handleLoginCallback=function(t){try{return console.warn("handleLoginCallback is unnecessary with Netlify Identity Widget"),Promise.resolve(!0)}catch(t){return Promise.reject(t)}},e.checkSession=function(){try{return console.warn("checkSession is unnecessary with Netlify Identity Widget"),Promise.resolve({user:{},authResult:{}})}catch(t){return Promise.reject(t)}},e.userId=function(t){return t.id},e.userRoles=function(t){return[t.role]||null},t}()},I=function(e){var r=e.children,i=e.navigate,o=e.auth0_domain,u=e.auth0_params,a=void 0===u?{}:u,s=e.customPropertyNamespace,c={domain:o,clientID:e.auth0_client_id,redirectUri:("undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000")+"/auth0_callback",audience:"https://"+(e.auth0_audience_domain||o)+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},h=v().dispatch;return n(function(){var t=new m(d({dispatch:h,customPropertyNamespace:s},c,a));h("SET_CONFIG",{authProvider:t,navigate:i}),h("CHECK_SESSION")},[i,s]),n(function(){console.warn("Using the AuthProvider root component is deprecated. Migrate to AuthConfig or manual dispatching. Takes  5min.")},[]),t.createElement(t.Fragment,null,r)};export{I as AuthProvider,y as Providers,v as useAuth};
//# sourceMappingURL=index.module.js.map
