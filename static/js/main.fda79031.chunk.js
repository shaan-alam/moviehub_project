(this.webpackJsonpmoviehub_project=this.webpackJsonpmoviehub_project||[]).push([[0],{150:function(e,a,t){e.exports=t(277)},155:function(e,a,t){},157:function(e,a,t){},277:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(34),l=t.n(c),o=(t(155),t(156),t(157),t(129)),m=t(130),i=t(139),u=t(138),s=t(23),v=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).toggleNav=function(){var a=e.refs.navbar;"topnav"===a.className?a.className+=" responsive":a.className="topnav"},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",{class:"topnav",id:"myTopnav",ref:"navbar"},r.a.createElement(s.b,{to:"/"},r.a.createElement("a",{href:"#!",className:"logo"},"MovieHUB")),r.a.createElement("a",{href:"#!"},"Home"),r.a.createElement("a",{href:"#!"},"API"),r.a.createElement("a",{href:"#!"},"GitHUb"),r.a.createElement("a",{href:"#!",class:"icon",onClick:this.toggleNav},r.a.createElement("i",{class:"fa fa-bars"}))))}}]),t}(r.a.Component),E=t(40),f=t.n(E),h=t(62),p=t(31),d=Object(n.createContext)({});function b(e){var a=e.children,t=Object(n.useState)(""),c=Object(p.a)(t,2),l=c[0],o=c[1],m=Object(n.useState)({}),i=Object(p.a)(m,2),u=i[0],s=i[1],v=Object(n.useState)(!1),E=Object(p.a)(v,2),b=E[0],g=E[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(f.a.mark((function e(){var a,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,fetch("http://www.omdbapi.com/?s=".concat(l,"&apikey=2df6ffde"));case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,s(t),g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]);return r.a.createElement(d.Provider,{value:{movie:u,getMovieName:function(e){o(encodeURI(e))},loading:b}},a)}var g=t(291),j=t(287),w=t(140),O=t(36);var y=function(e){return r.a.createElement(g.a.Column,null,r.a.createElement(s.b,{to:"/movies/".concat(e.movie.imdbID)},r.a.createElement(j.a,null,r.a.createElement(w.a,{src:e.movie.Poster,wrapped:!0,ui:!1}),r.a.createElement(j.a.Content,null,r.a.createElement(j.a.Header,null,e.movie.Title)),r.a.createElement(j.a.Content,{extra:!0},r.a.createElement(O.a,{name:"calendar"}),e.movie.Year))))},k=t(290),x=t(284);function C(){var e=Object(n.useContext)(d);return e.loading?r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(k.a,{active:!0,inverted:!0},r.a.createElement(x.a,null,"Loading"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{stackable:!0,columns:3},e.movie.Search&&e.movie.Search.map((function(e){return r.a.createElement(y,{movie:e,key:e.imdbID})}))))}var S=t(289),L=t(292),N=t(285);var I=function(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],c=a[1],l=Object(n.useContext)(d);function o(){return r.a.createElement(S.a,{negative:!0,style:{margin:"2rem 0"}},r.a.createElement(S.a.Header,null,"Sorry....No Movie found!"),r.a.createElement("p",null,"Try again with another Movie name!"))}return r.a.createElement("header",null,r.a.createElement(L.a,{as:"h1",textAlign:"center",color:"blue"},"Search for a Movie!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.getMovieName(t)}},r.a.createElement(N.a,{fluid:!0,icon:"search",placeholder:"Search...",onChange:function(e){return c(e.target.value)}})),"False"===l.movie.Response&&r.a.createElement(o,null))},P=t(278),A=t(288);function D(e){return e.movie.Poster?r.a.createElement(w.a,{src:e.movie.Poster,fluid:!0}):r.a.createElement(A.a,{style:{height:"100%",width:"100%"}},r.a.createElement(A.a.Image,null))}function M(e){return e.movie.Poster?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{as:"h1"},e.movie.Title),r.a.createElement(L.a,{as:"h5"},"Actors: ",e.movie.Actors),r.a.createElement(L.a,{as:"h5"},"Director: ",e.movie.Director),r.a.createElement(L.a,{as:"h5"},"Awards: ",e.movie.Awards),r.a.createElement(L.a,{as:"h5"},"Genre: ",e.movie.Genre),r.a.createElement(L.a,{as:"h5"},"Languages: ",e.movie.Language),r.a.createElement(L.a,{as:"h5"},"Released: ",e.movie.Released),r.a.createElement(L.a,{as:"h5"},"Writer: ",e.movie.Writer),r.a.createElement(L.a,{as:"h5"},"Imdb Rating: ",e.movie.imdbRating)):r.a.createElement(A.a,null,r.a.createElement(A.a.Paragraph,null,r.a.createElement(A.a.Line,null),r.a.createElement(A.a.Line,null),r.a.createElement(A.a.Line,null),r.a.createElement(A.a.Line,null),r.a.createElement(A.a.Line,null)),r.a.createElement(A.a.Paragraph,null,r.a.createElement(A.a.Line,null),r.a.createElement(A.a.Line,null),r.a.createElement(A.a.Line,null)))}var R=function(e){var a=Object(n.useState)({}),t=Object(p.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(f.a.mark((function e(a){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}})()("http://www.omdbapi.com/?i=".concat(e.match.params.movieID,"&apikey=2df6ffde"))})),console.log(c),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/"},r.a.createElement(P.a,{animated:!0,style:{marginTop:"1rem"},primary:!0},r.a.createElement(P.a.Content,{visible:!0},"Back"),r.a.createElement(P.a.Content,{hidden:!0},r.a.createElement(O.a,{name:"arrow left"})))),r.a.createElement(g.a,{stackable:!0,columns:2,style:{marginTop:"2rem"}},r.a.createElement(g.a.Column,null,r.a.createElement(D,{movie:c})),r.a.createElement(g.a.Column,null,r.a.createElement(M,{movie:c}))))},T=t(15);function H(){return r.a.createElement(b,null,r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement(I,null),r.a.createElement(s.a,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",component:C,exact:!0}),r.a.createElement(T.a,{path:"/movies/:movieID",component:R,exact:!0})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[150,1,2]]]);
//# sourceMappingURL=main.fda79031.chunk.js.map