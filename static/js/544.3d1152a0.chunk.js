"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{595:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,u=e(689),c=e(87),o=e(168),i=e(686),s=i.Z.ul(r||(r=(0,o.Z)(["\n  margin-top: 12px;\n"]))),f=i.Z.li(a||(a=(0,o.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n\n  background-color: #2a2a2a;\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  a:hover,\n  a:focus {\n    background-color: #ffc700;\n    color: #111111;\n  }\n\n  a {\n    display: block;\n    padding: 16px 16px;\n  }\n"]))),p=e(184),l=function(n){var t=n.movies,e=(0,u.TH)();return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.original_title;return(0,p.jsx)(f,{children:(0,p.jsx)(c.rU,{state:{from:e},to:"/movies/".concat(t),children:r})},t)}))})}},544:function(n,t,e){e.r(t);var r=e(439),a=e(791),u=e(323),c=e(595),o=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],i=t[1];return(0,a.useEffect)((function(){(0,u.Df)("").then(i)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(c.Z,{movies:e})]})}},323:function(n,t,e){e.d(t,{Df:function(){return i},Eb:function(){return p},Hu:function(){return l},Pg:function(){return f},Ph:function(){return s}});var r=e(861),a=e(687),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="3373af60a4ee1fe7510a1a61c11380e1",i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.3d1152a0.chunk.js.map