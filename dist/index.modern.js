import e,{useContext as t,createContext as r,useReducer as o,useState as n,useEffect as a}from"react";import u from"auth0-js";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var s=function(e,t){switch(t.type){case"login":var r=t.authResult,o=t.user,n=1e3*r.expiresIn+(new Date).getTime();return"undefined"!=typeof localStorage&&(localStorage.setItem("useAuth:expires_at",JSON.stringify(n)),localStorage.setItem("useAuth:user",JSON.stringify(o))),i({},e,{user:o,expiresAt:n,authResult:r});case"logout":return"undefined"!=typeof localStorage&&(localStorage.removeItem("useAuth:expires_at"),localStorage.removeItem("useAuth:user")),i({},e,{user:{},expiresAt:null,authResult:null});case"stopAuthenticating":return i({},e,{isAuthenticating:!1});case"startAuthenticating":return i({},e,{isAuthenticating:!0});case"error":return i({},e,{user:{},expiresAt:null,authResult:null,errorType:t.errorType,error:t.error});default:return e}};"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c=function(e){var t=e.err,r=e.dispatch,o=e.auth0,n=e.authResult;try{return r({type:"stopAuthenticating"}),n&&n.accessToken&&n.idToken?Promise.resolve(function(e,t){try{var a=Promise.resolve(function(e){var t=e.dispatch,r=e.auth0,o=e.authResult;try{return Promise.resolve(new Promise((function(e,n){r.client.userInfo(o.accessToken||"",(function(r,a){r?(t({type:"error",errorType:"userInfo",error:r}),n(r)):(t({type:"login",authResult:o,user:a}),e(a))}))})))}catch(e){return Promise.reject(e)}}({dispatch:r,auth0:o,authResult:n})).then((function(){return!0}))}catch(e){return!1}return a&&a.then?a.then(void 0,(function(){return!1})):a}()):t?(console.error(t),r({type:"error",error:t,errorType:"authResult"}),Promise.resolve(!1)):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},l=function(){var e=t(p),r=e.state,o=e.dispatch,n=e.auth0,a=e.callback_domain,u=e.navigate,i=e.customPropertyNamespace,s=function(){return!!(r.expiresAt&&(new Date).getTime()<r.expiresAt)};return{isAuthenticating:r.isAuthenticating,isAuthenticated:s,isAuthorized:function(e){return console.log("USER",r.user),console.log("key",i+"/user_metadata"),s()&&r.user[i+"/user_metadata"]&&r.user[i+"/user_metadata"].roles.includes(e)},user:r.user,userId:r.user?r.user.sub:null,authResult:r.authResult,login:function(){n&&n.authorize()},logout:function(){n&&n.logout({returnTo:a}),o({type:"logout"}),u("/")},handleAuthentication:function(e){var t=(void 0===e?{}:e).postLoginRoute,r=void 0===t?"/":t;"undefined"!=typeof window&&(o({type:"startAuthenticating"}),n&&n.parseHash((function(e,t){try{return Promise.resolve(c({err:e,authResult:t,dispatch:o,auth0:n})).then((function(){u(r)}))}catch(e){return Promise.reject(e)}})))}}};function h(){var e={};if("undefined"!=typeof localStorage){var t=new Date(JSON.parse(localStorage.getItem("useAuth:expires_at")||"0"));t>new Date&&(e={user:JSON.parse(localStorage.getItem("useAuth:user")||"{}"),expiresAt:t})}return i({},{user:{},expiresAt:null,isAuthenticating:!1},{},e)}var p=r({state:h(),dispatch:function(){},auth0:null,callback_domain:"http://localhost:8000",customPropertyNamespace:"http://localhost:8000",navigate:function(e){}}),m=function(t){var r=t.children,l=t.navigate,m=t.auth0_domain,d=t.customPropertyNamespace,f="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000",y=new u.WebAuth(i({},{domain:m,clientID:t.auth0_client_id,redirectUri:f+"/auth0_callback",audience:"https://"+(t.auth0_audience_domain||m)+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},{},t.auth0_params)),g=o(s,h()),v=g[0],A=g[1],S=n({state:v,dispatch:A,auth0:y,callback_domain:f,customPropertyNamespace:d,navigate:l}),b=S[0],_=S[1];return a((function(){_((function(e){return i({},e,{state:v})}))}),[v]),a((function(){A({type:"startAuthenticating"}),y.checkSession({},(function(e,t){A({type:"stopAuthenticating"}),console.log(e),e?A({type:"error",errorType:"checkSession",error:e}):c({dispatch:A,auth0:y,authResult:t})}))}),[]),e.createElement(p.Provider,{value:b},r)};export{m as AuthProvider,l as useAuth};
//# sourceMappingURL=index.modern.js.map
