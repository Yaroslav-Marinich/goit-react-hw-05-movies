"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(687),u=n.n(c),s=n(791),o=n(689),i=n(245),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.M1)(t);case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();e(l)}),[l]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Casting"}),n.length?(0,p.jsx)("div",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:e.name}),(0,p.jsxs)("p",{children:["Character: ",e.character]})]})]},e.id)}))}):(0,p.jsx)("p",{children:"There is no casting available for that movie"})]})}},245:function(e,t,n){n.d(t,{Df:function(){return i},M1:function(){return d},TP:function(){return h},tx:function(){return m},zi:function(){return l}});var r=n(861),a=n(687),c=n.n(a),u=n(243),s="https://api.themoviedb.org/3",o="a2b8e8e4d90d5ba4f206c187ddc5e80f";function i(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.prev=1,n={api_key:o,language:"en-US"},e.next=5,u.Z.get("".concat(s,"/trending/movie/week?page=").concat(t),{params:n});case 5:return r=e.sent,e.abrupt("return",r.data.results);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),p.apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US",query:t,page:1},e.next=4,u.Z.get("".concat(s,"/search/movie?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US"},e.next=4,u.Z.get("".concat(s,"/movie/").concat(t,"?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US"},e.next=4,u.Z.get("".concat(s,"/movie/").concat(t,"/credits?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US",page:1},e.next=4,u.Z.get("".concat(s,"/movie/").concat(t,"/reviews?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=597.e229fa1d.chunk.js.map