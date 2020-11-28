import e,{useCallback as t,useEffect as r}from"react";import n from"auth0-js";import{useService as o}from"@xstate/react";import{Machine as a,assign as i,interpret as u}from"xstate";function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=u(a({id:"useAuth",initial:"unauthenticated",context:{user:{},expiresAt:null,authResult:null,isAuthenticating:!1,error:void 0,errorType:void 0,config:{navigate:function(){return console.error("Please specify a navigation method that works with your router")},callbackDomain:"http://localhost:8000",customPropertyNamespace:"http://localhost:8000"}},states:{unauthenticated:{on:{LOGIN:"authenticating",SET_CONFIG:{actions:["setConfig"]}}},authenticating:{on:{ERROR:"error",AUTHENTICATED:"authenticated",SET_CONFIG:{actions:["setConfig"]}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},authenticated:{on:{LOGOUT:"unauthenticated",SET_CONFIG:{actions:["setConfig"]}},entry:["saveUserToContext","saveToLocalStorage"],exit:["clearUserFromContext","clearLocalStorage"]},error:{entry:["saveErrorToContext","clearUserFromContext","clearLocalStorage"]}}},{actions:{startAuthenticating:i(function(e){return{isAuthenticating:!0}}),stopAuthenticating:i(function(e){return{isAuthenticating:!1}}),saveUserToContext:i(function(e,t){var r=t.authResult;return{user:t.user,authResult:r,expiresAt:1e3*r.expiresIn+(new Date).getTime()}}),clearUserFromContext:i(function(e){return{user:{},expiresAt:null,authResult:null}}),saveToLocalStorage:function(e,t){var r=e.user;"undefined"!=typeof localStorage&&(localStorage.setItem("useAuth:expires_at",JSON.stringify(e.expiresAt)),localStorage.setItem("useAuth:user",JSON.stringify(r)))},clearLocalStorage:function(){"undefined"!=typeof localStorage&&(localStorage.removeItem("useAuth:expires_at"),localStorage.removeItem("useAuth:user"))},saveErrorToContext:i(function(e,t){return{errorType:t.errorType,error:t.error}}),setConfig:i(function(e,t){return console.log("SET CONFIG",e,t),{config:s({},e.config,t)}})}}));c.start(),function(e){if("undefined"!=typeof localStorage){var t=new Date(JSON.parse(localStorage.getItem("useAuth:expires_at")||"0"));if(t>new Date){var r=JSON.parse(localStorage.getItem("useAuth:user")||"{}");e("LOGIN"),e("AUTHENTICATED",{user:r,authResult:{expiresIn:((new Date).getTime()-t.getTime())/1e3}})}}}(c.send);var l=function(){var e=o(c),r=e[0],n=e[1],a=r.context.config,i=a.authProvider,u=a.navigate,s=a.callbackDomain,l=a.customPropertyNamespace,h=t(function(e){var t=(void 0===e?{}:e).postLoginRoute,r=void 0===t?"/":t;i&&u&&s?"undefined"!=typeof window&&(n("LOGIN"),i.parseHash(function(e,t){try{return Promise.resolve(function(e){var t=e.err,r=e.dispatch,n=e.authProvider,o=e.authResult;try{return o&&o.accessToken&&o.idToken?Promise.resolve(function(e,t){try{var a=Promise.resolve(function(e){var t=e.dispatch,r=e.authProvider,n=e.authResult;try{return Promise.resolve(new Promise(function(e,o){r.client.userInfo(n.accessToken||"",function(r,a){r?(t("ERROR",{errorType:"userInfo",error:r}),o(r)):(t("AUTHENTICATED",{authResult:n,user:a}),e(a))})}))}catch(e){return Promise.reject(e)}}({dispatch:r,authProvider:n,authResult:o})).then(function(){return!0})}catch(e){return!1}return a&&a.then?a.then(void 0,function(){return!1}):a}()):t?(console.error(t),r("ERROR",{error:t,errorType:"authResult"}),Promise.resolve(!1)):Promise.resolve(!1)}catch(e){return Promise.reject(e)}}({err:e,authResult:t,dispatch:n,authProvider:i})).then(function(){u(r)})}catch(e){return Promise.reject(e)}})):console.warn("authProvider not configured yet")},[i,u,s]),p=function(){return!!(r.context.expiresAt&&(new Date).getTime()<r.context.expiresAt)};return{isAuthenticating:r.context.isAuthenticating,isAuthenticated:p,isAuthorized:function(e){var t=Array.isArray(e)?e:[e],n=r.context.user[(l+"/user_metadata").replace(/\/+user_metadata/,"/user_metadata")];return!(!p()||!n)&&t.some(function(e){return n.roles.includes(e)})},user:r.context.user,userId:r.context.user?r.context.user.sub:null,authResult:r.context.authResult,login:function(){i&&i.authorize()},signup:function(){i&&i.authorize({mode:"signUp",screen_hint:"signup"})},logout:function(){i&&i.logout({returnTo:s}),n("LOGOUT"),u("/")},handleAuthentication:h,dispatch:n}},h=function(t){var o=t.children,a=t.navigate,i=t.auth0_domain,u=t.auth0_params,c=t.customPropertyNamespace,h="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000",p={domain:i,clientID:t.auth0_client_id,redirectUri:h+"/auth0_callback",audience:"https://"+(t.auth0_audience_domain||i)+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},f=l().dispatch;return r(function(){var e=new n.WebAuth(s({},p,u));f("SET_CONFIG",{authProvider:e,navigate:a,customPropertyNamespace:c,callbackDomain:h})},[a,c,h]),e.createElement(e.Fragment,null,o)};export{h as AuthProvider,l as useAuth};
//# sourceMappingURL=index.module.js.map
