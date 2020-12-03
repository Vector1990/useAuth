!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@xstate/react"),require("date-fns"),require("xstate"),require("xstate/lib/actions"),require("auth0-js"),require("netlify-identity-widget")):"function"==typeof define&&define.amd?define(["exports","react","@xstate/react","date-fns","xstate","xstate/lib/actions","auth0-js","netlify-identity-widget"],t):t((e=e||self).reactUseAuth={},e.react,e.react,e.dateFns,e.xstate,e.actions,e.auth0Js,e.netlifyIdentityWidget)}(this,function(e,t,n,r,i,o,a,u){var s="default"in t?t.default:t;function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u;var l=i.Machine({id:"useAuth",initial:"unauthenticated",context:{user:{},expiresAt:null,authResult:null,isAuthenticating:!1,error:void 0,errorType:void 0,config:{navigate:function(){return console.error("Please specify a navigation method that works with your router")},callbackDomain:"http://localhost:8000"}},states:{unauthenticated:{on:{LOGIN:"authenticating",CHECK_SESSION:"verifying",SET_CONFIG:{actions:["setConfig"]}}},authenticating:{on:{ERROR:"error",AUTHENTICATED:"authenticated",SET_CONFIG:{actions:["setConfig"]}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},verifying:{invoke:{id:"checkSession",src:function(e,t){return e.config.authProvider.checkSession()},onDone:{target:"authenticated"},onError:{target:"error"}},entry:["startAuthenticating"],exit:["stopAuthenticating"]},authenticated:{on:{LOGOUT:"unauthenticated",SET_CONFIG:{actions:["setConfig"]},CHECK_SESSION:"verifying"},entry:["saveUserToContext","saveToLocalStorage"],exit:o.choose([{cond:function(e,t){return"CHECK_SESSION"!==t.type},actions:["clearUserFromContext","clearLocalStorage"]}])},error:{entry:["saveErrorToContext","clearUserFromContext","clearLocalStorage"]}}},{actions:{startAuthenticating:i.assign(function(e){return{isAuthenticating:!0}}),stopAuthenticating:i.assign(function(e){return{isAuthenticating:!1}}),saveUserToContext:i.assign(function(e,t){var n=t.data?t.data:t,i=n.authResult;return{user:n.user,authResult:i,expiresAt:r.addSeconds(new Date,i.expiresIn)}}),clearUserFromContext:i.assign(function(e){return{user:{},expiresAt:null,authResult:null}}),saveToLocalStorage:function(e,t){var n=e.expiresAt,r=e.user;"undefined"!=typeof localStorage&&(localStorage.setItem("useAuth:expires_at",n?n.toISOString():"0"),localStorage.setItem("useAuth:user",JSON.stringify(r)))},clearLocalStorage:function(){"undefined"!=typeof localStorage&&(localStorage.removeItem("useAuth:expires_at"),localStorage.removeItem("useAuth:user"))},saveErrorToContext:i.assign(function(e,t){return{errorType:t.errorType,error:t.error}}),setConfig:i.assign(function(e,t){return{config:c({},e.config,t)}})}}),h=i.interpret(l);h.start(),function(e){if("undefined"!=typeof localStorage){var t=new Date(localStorage.getItem("useAuth:expires_at")||"0"),n=new Date;if(r.isAfter(t,n)){var i=JSON.parse(localStorage.getItem("useAuth:user")||"{}");e("LOGIN"),e("AUTHENTICATED",{user:i,authResult:{expiresIn:r.differenceInSeconds(t,n)}})}}}(h.send);var d=function(){var e=n.useService(h),i=e[0],o=e[1],a=i.context.config,u=a.authProvider,s=a.navigate,c=a.callbackDomain,l=t.useCallback(function(e){var t=(void 0===e?{}:e).postLoginRoute,n=void 0===t?"/":t;try{if(!u||!s)return console.warn("authProvider not configured yet"),Promise.resolve();var r=function(){if("undefined"!=typeof window)return o("LOGIN"),Promise.resolve(u.handleLoginCallback(o)).then(function(e){e&&s(n)})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},[u,s]),d=function(){return!(!i.context.expiresAt||!r.isAfter(i.context.expiresAt,new Date))};return{isAuthenticating:i.context.isAuthenticating,isAuthenticated:d,isAuthorized:function(e){var t=Array.isArray(e)?e:[e],n=null==u?void 0:u.userRoles(i.context.user);return!(!d()||!n)&&t.some(function(e){return n.includes(e)})},user:i.context.user,userId:null==u?void 0:u.userId(i.context.user),authResult:i.context.authResult,login:function(){null==u||u.authorize()},signup:function(){null==u||u.signup()},logout:function(e){null==u||u.logout(""+c+e),o("LOGOUT"),s(e||"/")},handleAuthentication:l,dispatch:o}};function f(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var p=function(){function e(e){this.checkSessionOnLoad=!0,this.dispatch=e.dispatch,this.customPropertyNamespace=e.customPropertyNamespace,this.auth0=new a.WebAuth(c({},e))}e.addDefaultParams=function(e,t){return c({redirectUri:t+"/auth0_callback",audience:"https://"+e.domain+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},e)};var t=e.prototype;return t.authorize=function(){this.auth0.authorize()},t.signup=function(){this.auth0.authorize({mode:"signUp",screen_hint:"signup"})},t.logout=function(e){this.auth0.logout({returnTo:e})},t.userId=function(e){return e.sub},t.userRoles=function(e){var t=e[(this.customPropertyNamespace+"/user_metadata").replace(/\/+user_metadata/,"/user_metadata")];return(null==t?void 0:t.roles)||null},t.handleLoginCallback=function(){try{var e=this;return Promise.resolve(new Promise(function(t,n){e.auth0.parseHash(function(n,r){try{n&&(e.dispatch("ERROR",{error:n,errorType:"authResult"}),t(!1));var i=f(function(){return Promise.resolve(e.handleAuthResult(r)).then(function(e){t(e)})},function(n){e.dispatch("ERROR",{error:n,errorType:"handleAuth"}),t(!1)});return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(e){return Promise.reject(e)}})}))}catch(e){return Promise.reject(e)}},t.checkSession=function(){try{var e=this;return Promise.resolve(new Promise(function(t,n){e.auth0.checkSession({},function(r,i){try{var o=function(){if(!r&&i&&i.accessToken&&i.idToken){var o=f(function(){return Promise.resolve(e.fetchUser(i)).then(function(e){t({user:e,authResult:i})})},function(e){n(e)});if(o&&o.then)return o.then(function(){})}else n(r||new Error("Session invalid"))}();return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}})}))}catch(e){return Promise.reject(e)}},t.handleAuthResult=function(e){try{var t=this;return e&&e.accessToken&&e.idToken?Promise.resolve(t.fetchUser(e)).then(function(n){return t.dispatch("AUTHENTICATED",{authResult:e,user:n}),!0}):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},t.fetchUser=function(e){try{var t=this;return Promise.resolve(new Promise(function(n,r){t.auth0.client.userInfo((null==e?void 0:e.accessToken)||"",function(e,t){e?r(e):n(t)})}))}catch(e){return Promise.reject(e)}},e}(),g={__proto__:null,Auth0:p,NetlifyIdentity:function(){function e(e){var t=this;this.checkSessionOnLoad=!1,this.netlifyIdentity=u,this.netlifyIdentity.init(e),this.dispatch=e.dispatch,this.netlifyIdentity.on("error",function(e){t.dispatch("ERROR",{error:e,errorType:"netlifyError"})}),this.netlifyIdentity.on("login",function(e){var n;t.dispatch("AUTHENTICATED",{user:e,authResult:{expiresIn:null==(n=e.token)?void 0:n.expires_in}})}),this.netlifyIdentity.on("init",function(e){var n;e&&(t.dispatch("LOGIN"),t.dispatch("AUTHENTICATED",{user:e,authResult:{expiresIn:null==(n=e.token)?void 0:n.expires_in}}))})}e.addDefaultParams=function(e,t){return e};var t=e.prototype;return t.authorize=function(){this.dispatch("LOGIN"),this.netlifyIdentity.open("login")},t.signup=function(){this.dispatch("LOGIN"),this.netlifyIdentity.open("signup")},t.logout=function(e){this.netlifyIdentity.logout()},t.handleLoginCallback=function(e){try{return console.warn("handleLoginCallback is unnecessary with Netlify Identity Widget"),Promise.resolve(!0)}catch(e){return Promise.reject(e)}},t.checkSession=function(){try{return console.warn("checkSession is unnecessary with Netlify Identity Widget"),Promise.resolve({user:{},authResult:{}})}catch(e){return Promise.reject(e)}},t.userId=function(e){return e.id},t.userRoles=function(e){return[e.role]||null},e}()};e.AuthConfig=function(e){var n=e.authProvider,r=e.params,i=e.navigate,o=e.children,a=d().dispatch,u="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000";return t.useEffect(function(){var e=new n(c({dispatch:a},n.addDefaultParams(r,u)));a("SET_CONFIG",{authProvider:e,navigate:i,callbackDomain:u}),e.checkSessionOnLoad&&a("CHECK_SESSION")},[a,n,r,i]),t.createElement(t.Fragment,null,o)},e.AuthProvider=function(e){var n=e.children,r=e.navigate,i=e.auth0_domain,o=e.auth0_params,a=void 0===o?{}:o,u=e.customPropertyNamespace,l={domain:i,clientID:e.auth0_client_id,redirectUri:("undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000")+"/auth0_callback",audience:"https://"+(e.auth0_audience_domain||i)+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},h=d().dispatch;return t.useEffect(function(){var e=new p(c({dispatch:h,customPropertyNamespace:u},l,a));h("SET_CONFIG",{authProvider:e,navigate:r}),h("CHECK_SESSION")},[r,u]),t.useEffect(function(){console.warn("Using the AuthProvider root component is deprecated. Migrate to AuthConfig or manual dispatching. Takes  5min.")},[]),s.createElement(s.Fragment,null,n)},e.Providers=g,e.useAuth=d});
//# sourceMappingURL=index.umd.js.map
