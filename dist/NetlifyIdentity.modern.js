import t from"netlify-identity-widget";class i{constructor(i){this.dispatch=i.dispatch,this.netlifyIdentity=t,this.netlifyIdentity.init(i),this.netlifyIdentity.on("error",t=>{this.dispatch("ERROR",{error:t,errorType:"netlifyError"})}),this.netlifyIdentity.on("login",t=>{var i;this.dispatch("AUTHENTICATED",{user:t,authResult:{expiresIn:null==(i=t.token)?void 0:i.expires_in}})}),this.netlifyIdentity.on("init",t=>{var i;console.log("INIT",t),t&&(this.dispatch("LOGIN"),this.dispatch("AUTHENTICATED",{user:t,authResult:{expiresIn:null==(i=t.token)?void 0:i.expires_in}}))})}static addDefaultParams(t={},i){return t}authorize(){this.dispatch("LOGIN"),this.netlifyIdentity.open("login")}signup(){this.dispatch("LOGIN"),this.netlifyIdentity.open("signup")}logout(t){this.netlifyIdentity.logout()}async handleLoginCallback(t){return console.warn("handleLoginCallback is unnecessary with Netlify Identity Widget"),!0}async checkSession(){try{await this.netlifyIdentity.refresh()}catch(t){throw new Error("Session invalid")}const t=this.netlifyIdentity.currentUser();var i;if(t)return{user:t,authResult:{expiresIn:null==(i=t.token)?void 0:i.expires_in}};throw new Error("Session invalid")}userId(t){return t.id}userRoles(t){return[t.role]||null}}export{i as NetlifyIdentity};
//# sourceMappingURL=NetlifyIdentity.modern.js.map
