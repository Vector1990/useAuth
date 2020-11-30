function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react"),n=e(t),r=require("@xstate/react"),o=require("date-fns"),i=require("xstate"),a=require("xstate/lib/actions"),u=e(require("auth0-js"));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=i.Machine({id:"useAuth",initial:"unauthenticated",context:{user:{},expiresAt:null,authResult:null,isAuthenticating:!1,error:void 0,errorType:void 0,config:{navigate:function(){return console.error("Please specify a navigation method that works with your router")},callbackDomain:"http://localhost:8000",customPropertyNamespace:"http://localhost:8000"}},states:{unauthenticated:{on:{LOGIN:"authenticating",CHECK_SESSION:"verifying",SET_CONFIG:{actions:["setConfig"]}}},authenticating:{on:{ERROR:"error",AUTHENTICATED:"authenticated",SET_CONFIG:{actions:["setConfig"]}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},verifying:{invoke:{id:"checkSession",src:function(e,t){return e.config.authProvider.checkSession()},onDone:{target:"authenticated"},onError:{target:"error"}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},authenticated:{on:{LOGOUT:"unauthenticated",SET_CONFIG:{actions:["setConfig"]},CHECK_SESSION:"verifying"},entry:["saveUserToContext","saveToLocalStorage"],exit:a.choose([{cond:function(e,t){return"CHECK_SESSION"!==t.type},actions:["clearUserFromContext","clearLocalStorage"]}])},error:{entry:["saveErrorToContext","clearUserFromContext","clearLocalStorage"]}}},{actions:{startAuthenticating:i.assign(function(e){return{isAuthenticating:!0}}),stopAuthenticating:i.assign(function(e){return{isAuthenticating:!1}}),saveUserToContext:i.assign(function(e,t){var n=t.data?t.data:t,r=n.authResult;return{user:n.user,authResult:r,expiresAt:o.addSeconds(new Date,r.expiresIn)}}),clearUserFromContext:i.assign(function(e){return{user:{},expiresAt:null,authResult:null}}),saveToLocalStorage:function(e,t){var n=e.expiresAt,r=e.user;"undefined"!=typeof localStorage&&(localStorage.setItem("useAuth:expires_at",n?n.toISOString():"0"),localStorage.setItem("useAuth:user",JSON.stringify(r)))},clearLocalStorage:function(){"undefined"!=typeof localStorage&&(localStorage.removeItem("useAuth:expires_at"),localStorage.removeItem("useAuth:user"))},saveErrorToContext:i.assign(function(e,t){return{errorType:t.errorType,error:t.error}}),setConfig:i.assign(function(e,t){return{config:s({},e.config,t)}})}}),l=i.interpret(c);l.start(),function(e){if("undefined"!=typeof localStorage){var t=new Date(localStorage.getItem("useAuth:expires_at")||"0"),n=new Date;if(o.isAfter(t,n)){var r=JSON.parse(localStorage.getItem("useAuth:user")||"{}");e("LOGIN"),e("AUTHENTICATED",{user:r,authResult:{expiresIn:o.differenceInSeconds(t,n)}})}}}(l.send);var h=function(){var e=r.useService(l),n=e[0],i=e[1],a=n.context.config,u=a.authProvider,s=a.navigate,c=a.callbackDomain,h=a.customPropertyNamespace,f=t.useCallback(function(e){var t=(void 0===e?{}:e).postLoginRoute,n=void 0===t?"/":t;try{if(!u||!s||!c)return console.warn("authProvider not configured yet"),Promise.resolve();var r=function(){if("undefined"!=typeof window)return i("LOGIN"),Promise.resolve(u.handleLoginCallback(i)).then(function(e){e&&s(n)})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},[u,s,c]),d=function(){return!(!n.context.expiresAt||!o.isAfter(n.context.expiresAt,new Date))};return{isAuthenticating:n.context.isAuthenticating,isAuthenticated:d,isAuthorized:function(e){var t=Array.isArray(e)?e:[e],r=n.context.user[(h+"/user_metadata").replace(/\/+user_metadata/,"/user_metadata")];return!(!d()||!r)&&t.some(function(e){return r.roles.includes(e)})},user:n.context.user,userId:n.context.user?n.context.user.sub:null,authResult:n.context.authResult,login:function(){null==u||u.authorize()},signup:function(){null==u||u.signup()},logout:function(){null==u||u.logout(c),i("LOGOUT"),s("/")},handleAuthentication:f,dispatch:i}};function f(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var d=function(){function e(e){this.auth0=new u.WebAuth(s({},e))}var t=e.prototype;return t.authorize=function(){var e;null==(e=this.auth0)||e.authorize()},t.signup=function(){var e;null==(e=this.auth0)||e.authorize({mode:"signUp",screen_hint:"signup"})},t.logout=function(e){var t;null==(t=this.auth0)||t.logout({returnTo:e})},t.handleLoginCallback=function(e){try{var t=this;return Promise.resolve(new Promise(function(n,r){var o;null==(o=t.auth0)||o.parseHash(function(r,o){try{r&&(e("ERROR",{error:r,errorType:"authResult"}),n(!1));var i=f(function(){return Promise.resolve(t.handleAuthResult({authResult:o,dispatch:e})).then(function(e){n(e)})},function(t){e("ERROR",{error:t,errorType:"handleAuth"}),n(!1)});return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(e){return Promise.reject(e)}})}))}catch(e){return Promise.reject(e)}},t.checkSession=function(){try{var e=this;return Promise.resolve(new Promise(function(t,n){var r;null==(r=e.auth0)||r.checkSession({},function(r,o){try{var i=function(){if(!r&&o&&o.accessToken&&o.idToken){var i=f(function(){return Promise.resolve(e.fetchUser({authResult:o})).then(function(e){t({user:e,authResult:o})})},function(e){n(e)});if(i&&i.then)return i.then(function(){})}else n(r||new Error("Session invalid"))}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(e){return Promise.reject(e)}})}))}catch(e){return Promise.reject(e)}},t.handleAuthResult=function(e){try{var t=e.dispatch,n=e.authResult;return n&&n.accessToken&&n.idToken?Promise.resolve(this.fetchUser({authResult:n})).then(function(e){return t("AUTHENTICATED",{authResult:n,user:e}),!0}):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},t.fetchUser=function(e){try{var t=this;return Promise.resolve(new Promise(function(n,r){var o,i;null==(o=t.auth0)||o.client.userInfo((null==(i=e.authResult)?void 0:i.accessToken)||"",function(e,t){e?r(e):n(t)})}))}catch(e){return Promise.reject(e)}},e}();exports.AuthProvider=function(e){var r=e.children,o=e.navigate,i=e.auth0_domain,a=e.auth0_params,u=void 0===a?{}:a,c=e.customPropertyNamespace,l="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000",f={domain:i,clientID:e.auth0_client_id,redirectUri:l+"/auth0_callback",audience:"https://"+(e.auth0_audience_domain||i)+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},v=h().dispatch;return t.useEffect(function(){var e=new d(s({},f,u));v("SET_CONFIG",{authProvider:e,navigate:o,customPropertyNamespace:c,callbackDomain:l}),v("CHECK_SESSION")},[o,c,l]),n.createElement(n.Fragment,null,r)},exports.useAuth=h;
//# sourceMappingURL=index.js.map
