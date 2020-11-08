function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react"),r=e(t),n=e(require("auth0-js")),o=require("@xstate/react"),a=require("xstate");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var u=a.Machine({id:"useAuth",initial:"unauthenticated",context:{user:{},expiresAt:null,authResult:null,isAuthenticating:!1,error:void 0,errorType:void 0,config:{navigate:function(){return console.error("Please specify a navigation method that works with your router")},callbackDomain:"http://localhost:8000",customPropertyNamespace:"http://localhost:8000"}},states:{unauthenticated:{on:{LOGIN:"authenticating",SET_CONFIG:{actions:["setConfig"]}}},authenticating:{on:{ERROR:"error",AUTHENTICATED:"authenticated",SET_CONFIG:{actions:["setConfig"]}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},authenticated:{on:{LOGOUT:"unauthenticated",SET_CONFIG:{actions:["setConfig"]}},entry:["saveUserToContext","saveToLocalStorage"],exit:["clearUserFromContext","clearLocalStorage"]},error:{entry:["saveErrorToContext","clearUserFromContext","clearLocalStorage"]}}},{actions:{startAuthenticating:a.assign((function(e){return{isAuthenticating:!0}})),stopAuthenticating:a.assign((function(e){return{isAuthenticating:!1}})),saveUserToContext:a.assign((function(e,t){var r=t.authResult;return{user:t.user,authResult:r,expiresAt:1e3*r.expiresIn+(new Date).getTime()}})),clearUserFromContext:a.assign((function(e){return{user:{},expiresAt:null,authResult:null}})),saveToLocalStorage:function(e,t){var r=e.user;"undefined"!=typeof localStorage&&(localStorage.setItem("useAuth:expires_at",JSON.stringify(e.expiresAt)),localStorage.setItem("useAuth:user",JSON.stringify(r)))},clearLocalStorage:function(){"undefined"!=typeof localStorage&&(localStorage.removeItem("useAuth:expires_at"),localStorage.removeItem("useAuth:user"))},saveErrorToContext:a.assign((function(e,t){return{errorType:t.errorType,error:t.error}})),setConfig:a.assign((function(e,t){return console.log("SET CONFIG",e,t),{config:i({},e.config,{},t)}}))}}),s=a.interpret(u);s.start(),function(e){if("undefined"!=typeof localStorage){var t=new Date(JSON.parse(localStorage.getItem("useAuth:expires_at")||"0"));if(t>new Date){var r=JSON.parse(localStorage.getItem("useAuth:user")||"{}");e("LOGIN"),e("AUTHENTICATED",{user:r,authResult:{expiresIn:((new Date).getTime()-t.getTime())/1e3}})}}}(s.send);var c=function(){var e=o.useService(s),r=e[0],n=e[1],a=r.context.config,u=a.authProvider,c=a.navigate,l=a.callbackDomain,h=a.customPropertyNamespace,f=t.useCallback((function(e,t){n(i({type:e},t||{}))}),[n]),p=function(){return!!(r.context.expiresAt&&(new Date).getTime()<r.context.expiresAt)};return{isAuthenticating:r.context.isAuthenticating,isAuthenticated:p,isAuthorized:function(e){var t=Array.isArray(e)?e:[e],n=r.context.user[(h+"/user_metadata").replace(/\/+user_metadata/,"/user_metadata")];return!(!p()||!n)&&t.some((function(e){return n.roles.includes(e)}))},user:r.context.user,userId:r.context.user?r.context.user.sub:null,authResult:r.context.authResult,login:function(){u&&u.authorize()},signup:function(){u&&u.authorize({mode:"signUp",screen_hint:"signup"})},logout:function(){u&&u.logout({returnTo:l}),f("LOGOUT"),c("/")},handleAuthentication:function(e){var t=(void 0===e?{}:e).postLoginRoute,r=void 0===t?"/":t;"undefined"!=typeof window&&(f("LOGIN"),u&&u.parseHash((function(e,t){try{return Promise.resolve(function(e){var t=e.err,r=e.dispatch,n=e.authProvider,o=e.authResult;try{return o&&o.accessToken&&o.idToken?Promise.resolve(function(e,t){try{var a=Promise.resolve(function(e){var t=e.dispatch,r=e.authProvider,n=e.authResult;try{return Promise.resolve(new Promise((function(e,o){r.client.userInfo(n.accessToken||"",(function(r,a){r?(t("ERROR",{errorType:"userInfo",error:r}),o(r)):(t("AUTHENTICATED",{authResult:n,user:a}),e(a))}))})))}catch(e){return Promise.reject(e)}}({dispatch:r,authProvider:n,authResult:o})).then((function(){return!0}))}catch(e){return!1}return a&&a.then?a.then(void 0,(function(){return!1})):a}()):t?(console.error(t),r("ERROR",{error:t,errorType:"authResult"}),Promise.resolve(!1)):Promise.resolve(!1)}catch(e){return Promise.reject(e)}}({err:e,authResult:t,dispatch:f,authProvider:u})).then((function(){c(r)}))}catch(e){return Promise.reject(e)}})))},dispatch:f}};t.createContext({auth0:null,callback_domain:"http://localhost:8000",customPropertyNamespace:"http://localhost:8000",navigate:function(e){}}),exports.AuthProvider=function(e){var o=e.children,a=e.navigate,u=e.auth0_domain,s=e.auth0_params,l=e.customPropertyNamespace,h="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000",f={domain:u,clientID:e.auth0_client_id,redirectUri:h+"/auth0_callback",audience:"https://"+(e.auth0_audience_domain||u)+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},p=c().dispatch;return t.useEffect((function(){var e=new n.WebAuth(i({},f,{},s));p("SET_CONFIG",{authProvider:e})}),[]),t.useEffect((function(){p("SET_CONFIG",{navigate:a})}),[a]),t.useEffect((function(){p("SET_CONFIG",{customPropertyNamespace:l})}),[l]),t.useEffect((function(){p("SET_CONFIG",{callbackDomain:h})}),[h]),r.createElement(r.Fragment,null,o)},exports.useAuth=c;
//# sourceMappingURL=index.js.map
