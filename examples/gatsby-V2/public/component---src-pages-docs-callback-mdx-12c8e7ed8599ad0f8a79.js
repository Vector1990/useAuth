(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8p/1":function(e,n,t){"use strict";t("E5k/");var a=t("qWyU"),r=t("CjxU"),o=t("uDoD"),l=t("b9RQ"),i=t("mf32"),c=t("BMxC"),d=t("qKvR"),s=t("7ljp"),u=(t("lfCk"),t("Wbzz")),m=t("q1tI"),b=t.n(m),p=t("eJLp"),h=t("sK1y"),g=t("XZ7F"),f=t("Weur"),j=t("y7Su"),O=t("IDkF"),w=t("OQ2h"),v=t("+NMY");function y(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["cursor: pointer; padding-bottom: 2px"]);return y=function(){return e},e}var k=function(){var e=Object(v.b)(),n=e.isAuthenticated,t=e.login,a=e.logout;return n()?Object(d.d)(b.a.Fragment,null,Object(d.d)(p.a,{onClick:a},"Logout")):Object(d.d)(b.a.Fragment,null,Object(d.d)(p.a,{onClick:t},"Login"))},x=function(e){var n=e.children;return Object(d.d)(h.a,{mt:{base:4,md:0},mr:4,display:"block",color:"sec"},n)},E=function(e){var n=Object(i.b)(),t=n.colorMode,r=n.toggleColorMode,o=Object(g.a)(),l=o.isOpen,s=o.onOpen,m=o.onClose,p=b.a.useRef();return Object(d.d)(f.a,Object.assign({as:"nav",align:"center",justify:"space-between",wrap:"wrap",padding:".6rem",bg:"light"===t?"grey.600":"grey.800",color:"light"===t?"black":"#ccc"},e),Object(d.d)(f.a,{align:"center"},Object(d.d)(c.a,{mt:1,ml:1,mr:3,display:{sm:"block",md:"none"},ref:p,onClick:s,css:Object(d.c)(y())},Object(d.d)("svg",{fill:"light"===t?"black":"white",width:"17px",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(d.d)("title",null,"Menu"),Object(d.d)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),Object(d.d)(f.a,{align:"center",ml:1},Object(d.d)(j.a,{isOpen:l,placement:"left",onClose:m,finalFocusRef:p},Object(d.d)(j.d,null),Object(d.d)(j.c,null,Object(d.d)(j.b,null),Object(d.d)(O.f,null,"Docs"),Object(d.d)(O.b,null,Object(d.d)(u.Link,{to:"/docs/test"},"Getting Started")),Object(d.d)(O.e,null,"Drawer Footer content"))),Object(d.d)(u.Link,{to:"/"},Object(d.d)(a.a,{as:"h1",size:"xl",color:"pri",style:{letterSpacing:"-3px"}},"useAuth")))),Object(d.d)(c.a,{display:{xs:"none",sm:"none",md:"flex"},width:{sm:"full",md:"auto"},alignItems:"center"},Object(d.d)(x,null,Object(d.d)("a",{href:"https://github.com/Swizec/useAuth"},"GitHub  ")),Object(d.d)(k,null),Object(d.d)(c.a,{display:{xs:"none",sm:"none",md:"flex"},mt:{base:4,md:0}},Object(d.d)(w.a,{"aria-label":"Switch to "+("light"===t?"dark":"light")+" mode",isRound:"true","border-top-color":"green !important",variant:"ghost",color:"current",ml:"1.735rem",fontSize:"20px",onClick:r,icon:"light"===t?"sun":"moon"}))))};function C(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  /*\n    This will hide the focus indicator if the element receives focus via the mouse,\n    but it will still show up on keyboard focus.\n  */\n  .js-focus-visible :focus:not([data-focus-visible-added]) {\n     outline: none;\n     box-shadow: none;\n   }\n\n   html {\n    scroll-behavior: smooth;\n  }\n\n  @media screen and (prefers-reduced-motion: reduce) {\n    html {\n      scroll-behavior: auto;\n    }\n  }\n\n    body {\n        overflow: hidden;\n        padding: 0;\n    }\n\n    .container {\n    height: 90vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr;\n\n    /*  to add a footer, use 1fr 30px(for the footer) etc in grid-template-rows  */\n    grid-template-rows: 1fr;\n    }\n\n    .body {\n        display: grid;\n        grid-template-columns: .75fr 3fr;\n        overflow: hidden;\n        margin-top: 1rem;\n    }\n\n    @media (max-width: 767px) {\n      .body {\n          grid-template-columns: 1fr;\n      }\n    }\n\n    .body p {\n        padding-bottom: 1.25rem;\n    }\n\n\n\n    .sidebar li {\n      margin-bottom: .5rem;\n      font-size: 1rem;\n      font-weight: bold;\n      cursor: pointer;\n    }\n\n\n    .sidenav {\n      list-style-type: none;\n    }\n\n    @media (min-width: 360px) {\n      .sidebar {\n        display: none;\n      }\n    }\n  \n\n    .footer {\n        border-top: 1px solid lightgrey;\n    }\n\n    .content {\n      margin-top: .4rem;\n      overflow-y: scroll;\n    }\n\n\n\n    pre {\n      padding-top: .5rem;\n      padding-left: .5rem;\n      margin-bottom: 1rem;\n      border-radius: 8px;\n      overflow: auto;\n    }\n\n    @media (min-width: 360px) {\n      pre {\n        font-size: .8rem;\n      }\n    }\n\n    @media (min-width: 500px) {\n      pre {\n        font-size: .9rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n    @media (min-width: 768px) {\n      pre {\n        font-size: 1rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n    @media (min-width: 360px) {\n      code {\n        font-size: .9rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n    @media (min-width: 768px) {\n      code {\n        font-size: 1rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n    @media (min-width: 1024px) {\n      code {\n        font-size: 1.1rem;\n        color: #569CD6;\n        background-color: #0E0E0E;\n        padding: 4px;\n        border-radius: 3px;\n      }\n    }\n\n\n\n\n\n\n    \n"]);return C=function(){return e},e}var z=Object(d.c)(C()),A={h1:function(e){return b.a.createElement(a.a,Object.assign({as:"h1",size:"lg",mb:"1.2rem",mt:"-3px"},e))},h2:function(e){return b.a.createElement(a.a,Object.assign({as:"h2",size:"md",mb:"1rem"},e))},h3:function(e){return b.a.createElement(a.a,Object.assign({as:"h3",size:"md",mb:"1rem"},e))}};n.a=function(e){var n=e.children;return b.a.createElement(b.a.Fragment,null,b.a.createElement(r.a,{theme:o.a},b.a.createElement(l.a,null),b.a.createElement(d.a,{styles:z}),b.a.createElement(i.a,null,b.a.createElement(E,null),b.a.createElement(c.a,{className:"container"},b.a.createElement(c.a,{className:"body"},b.a.createElement(c.a,{ml:4,display:{sm:"none",md:"block"},className:"sidebar"},b.a.createElement("ul",{className:"sidenav"},b.a.createElement("li",null),b.a.createElement("li",null,b.a.createElement(u.Link,{to:"./docs/getting-started/"},"Getting Started")),b.a.createElement("li",null,b.a.createElement(u.Link,{to:"./docs/auth/"},"Auth Provider")),b.a.createElement("li",null,b.a.createElement(u.Link,{to:"./docs/callback"},"Callback page")),b.a.createElement("li",null,b.a.createElement(u.Link,{to:"./docs/enjoy"},"Enjoy")))),b.a.createElement(s.a,{components:A},b.a.createElement(c.a,{fontSize:["sm","md","lg","xl"],maxW:"40rem",pl:"2rem",pr:"1rem",width:{sm:"full"},display:"block",className:"content"},n)))))))}},T9Pj:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return c}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var a=t("7ljp"),r=t("8p/1");var o={},l={_frontmatter:o},i=r.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(i,Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"3-create-the-callback-page",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#3-create-the-callback-page","aria-label":"3 create the callback page permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"3. Create the callback page"),Object(a.b)("p",null,"Auth0 and most other authentication providers use OAuth. That requires redirecting your user to their login form. After login, the provider redirects the user back to your app."),Object(a.b)("p",null,"Any way of creating React pages should work, here's what I use for Gatsby:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import React, { useEffect } from "react"\nimport { useAuth } from "react-use-auth"\nimport Layout from "../components/layout"\n\nconst Auth0CallbackPage = () = {\n    const { handleAuthentication } = useAuth()\n    useEffect(() => {\n        handleAuthentication()\n    }, [])\n\n    return (\n        <Layout>\n          <h1>\n            This is the auth callback page, \n            you should be redirected immediately!\n          </h1>\n        </Layout>\n    )\n}\n\nexport default Auth0CallbackPage\n')),Object(a.b)("p",null,"The goal is to load a page, briefly show some text, and run the ",Object(a.b)("inlineCode",{parentName:"p"},"handleAuthentication")," method from useAuthon page load."),Object(a.b)("p",null,"That method will create a cookie in local storage with your user's information and redirect back to homepage. Redirecting to other post-login pages currently isn't supported but is a good idea now that I thought of it 🤔"),Object(a.b)("p",null,"PS: Make sure you add ",Object(a.b)("inlineCode",{parentName:"p"},"domain/auth0_callback")," as a valid callback URL in your Auth0 config"))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-callback-mdx-12c8e7ed8599ad0f8a79.js.map