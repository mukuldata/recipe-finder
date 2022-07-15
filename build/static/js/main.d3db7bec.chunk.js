(this["webpackJsonprecipe-search-app"]=this["webpackJsonprecipe-search-app"]||[]).push([[0],{54:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var c,i,r,a,o,s,d,l,p,b,j,x,h,O,u,g=t(0),f=t.n(g),w=t(14),m=t.n(w),v=(t(54),t(27)),y=t(42),k=t(5),C=t(16),S=t(6),z=S.a.div(c||(c=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),I=S.a.div(i||(i=Object(k.a)(["\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  padding: 20px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 0 3px 6px 0 #555;\n"]))),R=S.a.div(r||(r=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  border-radius: 6px;\n  margin-left: 20px;\n  width: 50%;\n  background-color: white;\n"]))),J=S.a.img(a||(a=Object(k.a)(["\n  width: 32px;\n  height: 32px;\n"]))),M=S.a.input(o||(o=Object(k.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 15px;\n"]))),T=S.a.img(s||(s=Object(k.a)(["\nwidth: 36px;\nheight: 36px;\nmargin: 15px;\n"]))),_=S.a.img(d||(d=Object(k.a)(["\nwidth: 120px;\nheight: 120px;\nmargin: 200px;\nopacity: 50%;\n"]))),q=S.a.div(l||(l=Object(k.a)(["\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\npadding: 30px;\ngap: 20px;\njustify-content: space-evenly;\n"]))),B=S.a.div(p||(p=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 300px;\n  box-shadow: 0 3px 10px 0 #aaa;\n"]))),E=S.a.img(b||(b=Object(k.a)(["\n  object-fit: cover;\n  height: 200px;\n"]))),F=S.a.span(j||(j=Object(k.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 10px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),N=S.a.span(x||(x=Object(k.a)(["\n  color: #eb3300;\n  font-size: 18px;\n  text-align: center;\n  border: solid 1px #eb3300;\n  border-radius: 3px;\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),W=Object(S.a)(N)(h||(h=Object(k.a)(["\n  color: green;\n  border: solid 1px green;\n  margin-bottom: 12px;\n"]))),A=Object(S.a)(N)(O||(O=Object(k.a)(["\n  color: green;\n  border: solid 1px green;\n"]))),D=t(46),G=t.n(D),H=t(104),K=t(102),L=t(105),P=t(103),Q=t(3),U=function(e){var n=Object(g.useState)(""),t=Object(C.a)(n,2),c=t[0],i=t[1],r=e.recipe,a=r.label,o=r.image,s=r.ingredients,d=r.url;return Object(Q.jsxs)(B,{children:[Object(Q.jsxs)(H.a,{onClose:function(){return console.log("adsadad")},"aria-labelledby":"simple-dialog-title",open:!!c,children:[Object(Q.jsx)(L.a,{children:"Ingredients"}),Object(Q.jsxs)(K.a,{children:[Object(Q.jsx)(F,{children:a}),Object(Q.jsxs)("table",{children:[Object(Q.jsxs)("thead",{children:[Object(Q.jsx)("th",{children:"Ingredient"}),Object(Q.jsx)("th",{children:"Weight"})]}),Object(Q.jsx)("tbody",{children:s.map((function(e,n){return Object(Q.jsxs)("tr",{className:"ingredient-list",children:[Object(Q.jsx)("td",{children:e.text}),Object(Q.jsx)("td",{children:e.weight})]},n)}))})]})]}),Object(Q.jsxs)(P.a,{children:[Object(Q.jsx)(A,{onClick:function(){return window.open(d)},children:"See More"}),Object(Q.jsx)(N,{onClick:function(){return i("")},children:"Close"})]})]}),Object(Q.jsx)(E,{src:o,alt:a}),Object(Q.jsx)(F,{children:a}),Object(Q.jsx)(W,{onClick:function(){return i(!c)},children:"Ingredients"}),Object(Q.jsx)(N,{onClick:function(){return window.open(d)},children:"See Complete Recipe"})]})},V=S.a.div(u||(u=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),X=function(){var e=Object(g.useState)(""),n=Object(C.a)(e,2),t=n[0],c=n[1],i=Object(g.useState)([]),r=Object(C.a)(i,2),a=r[0],o=r[1],s=Object(g.useState)(),d=Object(C.a)(s,2),l=d[0],p=d[1],b=function(){var e=Object(y.a)(Object(v.a)().mark((function e(n){var t;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("bae2a74b","&app_key=").concat("bbbda048072b34f225e999b9ee508aee"));case 2:t=e.sent,o(t.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(Q.jsxs)(V,{children:[Object(Q.jsxs)(I,{children:[Object(Q.jsxs)(z,{children:[Object(Q.jsx)(T,{src:"/react-recipe-finder/hamburger.svg"}),"Recipe Finder"]}),Object(Q.jsxs)(R,{children:[Object(Q.jsx)(J,{src:"/react-recipe-finder/search-icon.svg"}),Object(Q.jsx)(M,{placeholder:"Search Recipe",value:t,onChange:function(e){clearTimeout(l),c(e.target.value);var n=setTimeout((function(){return b(e.target.value)}),500);p(n)}})]})]}),Object(Q.jsx)(q,{children:null!==a&&void 0!==a&&a.length?a.map((function(e,n){return Object(Q.jsx)(U,{recipe:e.recipe},n)})):Object(Q.jsx)(_,{src:"/react-recipe-finder/hamburger.svg"})})]})};m.a.render(Object(Q.jsx)(f.a.StrictMode,{children:Object(Q.jsx)(X,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.d3db7bec.chunk.js.map