!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("auth0-js"),require("react")):"function"==typeof define&&define.amd?define(["exports","auth0-js","react"],t):t(e.reactUseAuth={},e.Auth0,e.react)}(this,function(e,t,o){t=t&&t.hasOwnProperty("default")?t.default:t;var n="default"in o?o.default:o,a=function(e,t){switch(t.type){case"login":var o=t.authResult,n=t.user,a=1e3*o.expiresIn+(new Date).getTime();return"undefined"!=typeof localStorage&&(localStorage.setItem("access_token",o.accessToken),localStorage.setItem("id_token",o.idToken),localStorage.setItem("expires_at",JSON.stringify(a)),localStorage.setItem("user",JSON.stringify(n))),{user:n,expiresAt:a};case"logout":return"undefined"!=typeof localStorage&&(localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("user")),{user:{},expiresAt:null};default:return e}},r="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"https://spark-joy.netlify.com/",i=o.createContext(null);e.AuthProvider=function(e){var u=e.children,s=e.navigate,c=new t.WebAuth({domain:"sparkjoy.auth0.com",clientID:"GGfO12E5R8iHPBPh87bym5b3gzmdaYY9",redirectUri:r+"/auth0_callback",audience:"https://sparkjoy.auth0.com/api/v2/",responseType:"token id_token",scope:"openidw profile email"}),l=o.useReducer(a,{user:"undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("user")):{},expiresAt:"undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("expires_at")):null});return n.createElement(i.Provider,{value:{state:l[0],dispatch:l[1],auth0:c,navigate:s}},u)},e.useAuth=function(){var e=o.useContext(i),t=e.state,n=e.dispatch,a=e.auth0,r=e.navigate;return{isAuthenticated:function(){return t.expiresAt&&(new Date).getTime()<t.expiresAt},user:t.user,userId:t.user?t.user.sub:null,login:function(){a.authorize()},logout:function(){n({type:"logout"}),r("/")},handleAuthentication:function(){"undefined"!=typeof window&&a.parseHash(function(e,t){t&&t.accessToken&&t.idToken?function(e){a.client.userInfo(e.accessToken,function(t,o){t?console.log(t):n({type:"login",authResult:e,user:o}),r("/")})}(t):e&&console.log(e)})}}}});
//# sourceMappingURL=index.umd.js.map
