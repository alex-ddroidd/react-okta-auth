(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{43:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(22),r=n.n(i),o=n(8),a=n.n(o),s=n(12),l=n(2),u=n(9),h=n(7),j=n(1),d=function(){var t=Object(l.f)(),e=function(){var e=Object(s.a)(a.a.mark((function e(n,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.replace(Object(h.toRelativeUrl)(c||"/",window.location.origin));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n=Object(u.d)(),c=n.authState,i=n.oktaAuth;return c?c.isAuthenticated?Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"You are authenticated"}),Object(j.jsx)("button",{onClick:function(){e(),i.signOut({originalUri:"/"})},children:"Logout"})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"You are not authenticated"}),Object(j.jsx)("button",{onClick:function(){return i.signInWithRedirect({originalUri:"/profile"})},children:"Login"})]}):Object(j.jsx)("div",{children:"Loading authentication..."})},b=function(){return"YOU MUST BE AUTHENTICATED!"},p=n(26),O=function(){var t=Object(u.d)(),e=t.authState,n=t.oktaAuth,i=Object(c.useState)(null),r=Object(p.a)(i,2),o=r[0],d=r[1],b=Object(l.f)(),O=function(){var t=Object(s.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b.replace(Object(h.toRelativeUrl)(n||"/",window.location.origin));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){e&&e.isAuthenticated?n.getUser().then((function(t){d(t)})):d(null)}),[e,n]),o?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Below is the information from your ID token which was obtained during the \xa0",Object(j.jsx)("a",{href:"https://developer.okta.com/docs/guides/implement-auth-code-pkce",children:"PKCE Flow"})," ","and is now stored in local storage."]}),Object(j.jsxs)("p",{children:["This route is protected with the ",Object(j.jsx)("code",{children:"<SecureRoute>"})," ","component, which will ensure that this page cannot be accessed until you have authenticated."]}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Claim"}),Object(j.jsx)("th",{children:"Value"})]})}),Object(j.jsx)("tbody",{children:Object.entries(o).map((function(t){var e=t[0],n=t[1],c="claim-".concat(e);return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e}),Object(j.jsx)("td",{id:c,children:n.toString()})]},e)}))})]})]}),Object(j.jsx)("button",{onClick:function(){O(),n.signOut({originalUri:"/"})},children:"Logout"})]}):Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Fetching user profile..."})})},f={clientId:"".concat("0oa68si3onWfkinib5d7"),issuer:"https://".concat("dev-40773736.okta.com","/oauth2/default"),redirectUri:"http://localhost:".concat("3000","/login/callback"),scopes:["openid","profile","email"],pkce:!0,disableHttpsCheck:!0},x=new h.OktaAuth(f),g=function(){var t=Object(l.f)(),e=function(){var e=Object(s.a)(a.a.mark((function e(n,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.replace(Object(h.toRelativeUrl)(c||"/",window.location.origin));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(j.jsx)(u.c,{oktaAuth:x,restoreOriginalUri:e,children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,component:d}),Object(j.jsx)(l.a,{path:"/login/callback",exact:!0,component:u.a}),Object(j.jsx)(u.b,{path:"/locked",exact:!0,component:b}),Object(j.jsx)(u.b,{path:"/profile",component:O})]})})},v=n(11);r.a.render(Object(j.jsx)(v.a,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.92d7ea67.chunk.js.map