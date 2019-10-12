!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("auth0-js"),require("react")):"function"==typeof define&&define.amd?define(["exports","auth0-js","react"],t):t(e.reactUseAuth={},e.Auth0,e.react)}(this,function(e,t,r){t=t&&t.hasOwnProperty("default")?t.default:t;var n="default"in r?r.default:r;function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e,t){return e(t={exports:{}},t.exports),t.exports}var i=a(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116;function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case a:case u:case i:case y:return e;default:switch(e=e&&e.$$typeof){case s:case p:case c:return e;default:return t}}case m:case d:case o:return t}}}function v(e){return h(e)===l}t.typeOf=h,t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=m,t.Memo=d,t.Portal=o,t.Profiler=u,t.StrictMode=i,t.Suspense=y,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===l||e===u||e===i||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===c||e.$$typeof===s||e.$$typeof===p)},t.isAsyncMode=function(e){return v(e)||h(e)===f},t.isConcurrentMode=v,t.isContextConsumer=function(e){return h(e)===s},t.isContextProvider=function(e){return h(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return h(e)===p},t.isFragment=function(e){return h(e)===a},t.isLazy=function(e){return h(e)===m},t.isMemo=function(e){return h(e)===d},t.isPortal=function(e){return h(e)===o},t.isProfiler=function(e){return h(e)===u},t.isStrictMode=function(e){return h(e)===i},t.isSuspense=function(e){return h(e)===y}});o(i);var u=a(function(e,t){"production"!==process.env.NODE_ENV&&function(){Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116;function m(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var m=e.type;switch(m){case s:case f:case o:case i:case a:case p:return m;default:var h=m&&m.$$typeof;switch(h){case c:case l:case u:return h;default:return t}}case d:case y:case n:return t}}}var h=s,v=f,b=c,g=u,O=r,w=l,S=o,j=d,E=y,x=n,P=i,_=a,T=p,A=!1;function I(e){return m(e)===f}t.typeOf=m,t.AsyncMode=h,t.ConcurrentMode=v,t.ContextConsumer=b,t.ContextProvider=g,t.Element=O,t.ForwardRef=w,t.Fragment=S,t.Lazy=j,t.Memo=E,t.Portal=x,t.Profiler=P,t.StrictMode=_,t.Suspense=T,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===i||e===a||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===u||e.$$typeof===c||e.$$typeof===l)},t.isAsyncMode=function(e){return A||(A=!0,function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];(function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0,a="Warning: "+e.replace(/%s/g,function(){return r[o++]});"undefined"!=typeof console&&console.warn(a);try{throw new Error(a)}catch(e){}}).apply(void 0,[t].concat(n))}}(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),I(e)||m(e)===s},t.isConcurrentMode=I,t.isContextConsumer=function(e){return m(e)===c},t.isContextProvider=function(e){return m(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return m(e)===l},t.isFragment=function(e){return m(e)===o},t.isLazy=function(e){return m(e)===d},t.isMemo=function(e){return m(e)===y},t.isPortal=function(e){return m(e)===n},t.isProfiler=function(e){return m(e)===i},t.isStrictMode=function(e){return m(e)===a},t.isSuspense=function(e){return m(e)===p}}()});o(u);var c=a(function(e){e.exports="production"===process.env.NODE_ENV?i:u}),s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in r=Object(arguments[a]))f.call(r,i)&&(o[i]=r[i]);if(s){n=s(r);for(var u=0;u<n.length;u++)l.call(r,n[u])&&(o[n[u]]=r[n[u]])}}return o},y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d=function(){};if("production"!==process.env.NODE_ENV){var m=y,h={},v=Function.call.bind(Object.prototype.hasOwnProperty);d=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function b(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(v(e,a)){var i;try{if("function"!=typeof e[a]){var u=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw u.name="Invariant Violation",u}i=e[a](t,a,n,r,null,m)}catch(e){i=e}if(!i||i instanceof Error||d((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in h)){h[i.message]=!0;var c=o?o():"";d("Failed "+r+" type: "+i.message+(null!=c?c:""))}}}b.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(h={})};var g=b,O=Function.call.bind(Object.prototype.hasOwnProperty),w=function(){};function S(){return null}function j(){}function E(){}"production"!==process.env.NODE_ENV&&(w=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),E.resetWarningCache=j;var x=a(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,n="@@iterator",o="<<anonymous>>",a={array:s("array"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:u(S),arrayOf:function(e){return u(function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var u=t[r];if(!Array.isArray(u))return new i("Invalid "+o+" `"+a+"` of type `"+l(u)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<u.length;c++){var s=e(u,c,n,o,a+"["+c+"]",y);if(s instanceof Error)return s}return null})},element:u(function(t,r,n,o,a){var u=t[r];return e(u)?null:new i("Invalid "+o+" `"+a+"` of type `"+l(u)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:u(function(e,t,r,n,o){var a=e[t];return c.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+l(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(t,r,n,a,u){var c;return t[r]instanceof e?null:new i("Invalid "+a+" `"+u+"` of type `"+((c=t[r]).constructor&&c.constructor.name?c.constructor.name:o)+"` supplied to `"+n+"`, expected instance of `"+(e.name||o)+"`.")})},node:u(function(e,t,r,n,o){return f(e[t])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}),objectOf:function(e){return u(function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var u=t[r],c=l(u);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var s in u)if(O(u,s)){var f=e(u,s,n,o,a+"."+s,y);if(f instanceof Error)return f}return null})},oneOf:function(e){return Array.isArray(e)?u(function(t,r,n,o,a){for(var u=t[r],c=0;c<e.length;c++)if((s=u)===(f=e[c])?0!==s||1/s==1/f:s!=s&&f!=f)return null;var s,f,l=JSON.stringify(e,function(e,t){return"symbol"===d(t)?String(t):t});return new i("Invalid "+o+" `"+a+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+l+".")}):("production"!==process.env.NODE_ENV&&w(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),S)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&w("Invalid argument supplied to oneOfType, expected an instance of array."),S;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return w("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+m(r)+" at index "+t+"."),S}return u(function(t,r,n,o,a){for(var u=0;u<e.length;u++)if(null==(0,e[u])(t,r,n,o,a,y))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")})},shape:function(e){return u(function(t,r,n,o,a){var u=t[r],c=l(u);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(u,s,n,o,a+"."+s,y);if(p)return p}}return null})},exact:function(e){return u(function(t,r,n,o,a){var u=t[r],c=l(u);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var s=p({},t[r],e);for(var f in s){var d=e[f];if(!d)return new i("Invalid "+o+" `"+a+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(u,f,n,o,a+"."+f,y);if(m)return m}return null})}};function i(e){this.message=e,this.stack=""}function u(e){if("production"!==process.env.NODE_ENV)var r={},n=0;function a(a,u,c,s,f,l,p){if(s=s||o,l=l||c,p!==y){if(t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=s+":"+c;!r[m]&&n<3&&(w("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,n++)}}return null==u[c]?a?new i(null===u[c]?"The "+f+" `"+l+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+f+" `"+l+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(u,c,s,f,l)}var u=a.bind(null,!1);return u.isRequired=a.bind(null,!0),u}function s(e){return u(function(t,r,n,o,a,u){var c=t[r];return l(c)!==e?new i("Invalid "+o+" `"+a+"` of type `"+d(c)+"` supplied to `"+n+"`, expected `"+e+"`."):null})}function f(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(f);if(null===t||e(t))return!0;var o=function(e){var o=t&&(r&&t[r]||t[n]);if("function"==typeof o)return o}();if(!o)return!1;var a,i=o.call(t);if(o!==t.entries){for(;!(a=i.next()).done;)if(!f(a.value))return!1}else for(;!(a=i.next()).done;){var u=a.value;if(u&&!f(u[1]))return!1}return!0;default:return!1}}function l(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function d(e){if(null==e)return""+e;var t=l(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function m(e){var t=d(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,a.checkPropTypes=g,a.resetWarningCache=g.resetWarningCache,a.PropTypes=a,a}(c.isElement,!0):function(){function e(e,t,r,n,o,a){if(a!==y){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:E,resetWarningCache:j};return r.PropTypes=r,r}()}),P=function(e,t){switch(t.type){case"login":var r=t.authResult,n=t.user,o=1e3*r.expiresIn+(new Date).getTime();return"undefined"!=typeof localStorage&&(localStorage.setItem("expires_at",JSON.stringify(o)),localStorage.setItem("user",JSON.stringify(n))),Object.assign({},e,{user:n,expiresAt:o,authResult:r});case"logout":return"undefined"!=typeof localStorage&&(localStorage.removeItem("expires_at"),localStorage.removeItem("user")),Object.assign({},e,{user:{},expiresAt:null,authResult:null});case"stopAuthenticating":return Object.assign({},e,{isAuthenticating:!1});case"startAuthenticating":return Object.assign({},e,{isAuthenticating:!0});case"error":return Object.assign({},e,{user:{},expiresAt:null,authResult:null,errorType:t.errorType,error:t.error});default:return e}},_=function(e){var t=e.err,r=e.dispatch,n=e.auth0,o=e.authResult;try{return console.log("HAI"),r({type:"stopAuthenticating"}),Promise.resolve(o&&o.accessToken&&o.idToken?Promise.resolve(function(e){var t=e.dispatch,r=e.auth0,n=e.authResult;try{return Promise.resolve(new Promise(function(e,o){r.client.userInfo(n.accessToken,function(r,a){r?(t({type:"error",errorType:"userInfo",error:r}),o(r)):(t({type:"login",authResult:n,user:a}),e(a))})}))}catch(e){return Promise.reject(e)}}({dispatch:r,auth0:n,authResult:o})).then(function(){return!0}):t?(console.error(t),r({type:"error",error:t,errorType:"authResult"}),!1):void 0)}catch(e){return Promise.reject(e)}},T=r.createContext(null),A=function(e){var o=e.children,a=e.navigate,i=e.auth0_domain,u="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"http://localhost:8000",c=new t.WebAuth(Object.assign({},{domain:i,clientID:e.auth0_client_id,redirectUri:u+"/auth0_callback",audience:"https://"+i+"/api/v2/",responseType:"token id_token",scope:"openid profile email"},e.auth0_params)),s=r.useReducer(P,{user:{},expiresAt:null,isAuthenticating:!1}),f=s[0],l=s[1],p=r.useState({state:f,dispatch:l,auth0:c,callback_domain:u,navigate:a}),y=p[0],d=p[1];return r.useEffect(function(){d(function(e){return Object.assign({},e,{state:f})})},[f]),r.useEffect(function(){l({type:"startAuthenticating"}),c.checkSession({},function(e,t){l({type:"stopAuthenticating"}),console.log(e),e?l({type:"error",errorType:"checkSession",error:e}):_({dispatch:l,auth0:c,authResult:t})})},[]),n.createElement(T.Provider,{value:y},o)};A.propTypes={children:x.element,navigate:x.func,auth0_domain:x.string,auth0_client_id:x.string,auth0_params:x.object},e.AuthProvider=A,e.useAuth=function(){var e=r.useContext(T),t=e.state,n=e.dispatch,o=e.auth0,a=e.callback_domain,i=e.navigate;return{isAuthenticating:t.isAuthenticating,isAuthenticated:function(){return t.expiresAt&&(new Date).getTime()<t.expiresAt},user:t.user,userId:t.user?t.user.sub:null,authResult:t.authResult,login:function(){o.authorize()},logout:function(){o.logout({returnTo:a}),n({type:"logout"}),i("/")},handleAuthentication:function(e){void 0===e&&(e={});var t=e.postLoginRoute;void 0===t&&(t="/"),"undefined"!=typeof window&&(n({type:"startAuthenticating"}),o.parseHash(function(e,r){try{return Promise.resolve(_({err:e,authResult:r,dispatch:n,auth0:o})).then(function(){i(t)})}catch(e){return Promise.reject(e)}}))}}}});
//# sourceMappingURL=index.umd.js.map
