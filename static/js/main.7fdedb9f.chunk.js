(this["webpackJsonpalfa-test"]=this["webpackJsonpalfa-test"]||[]).push([[0],{38:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(10),a=c.n(r),l=(c(38),c(32)),o=c(5),s=c(12),d=c(28),j={recipes:[],liked:[],view:"all"},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return"LIKED"===t.type?Object(o.a)(Object(o.a)({},e),{},{liked:e.liked.includes(t.payload)?e.liked.filter((function(e){return e!==t.payload})):[].concat(Object(l.a)(e.liked),[t.payload])}):"DELETE"===t.type?Object(o.a)(Object(o.a)({},e),{},{recipes:e.recipes.filter((function(e){return e.id!==t.payload}))}):"SET_RECIPES"===t.type?Object(o.a)(Object(o.a)({},e),{},{recipes:t.payload}):"SET_VIEW"===t.type?Object(o.a)(Object(o.a)({},e),{},{view:t.payload}):e},b=Object(s.createStore)(u,j,Object(d.composeWithDevTools)()),p=c(3),O=c(33),h=c(16),f=c(17),x=c.p+"static/media/defaultRecipeImage.a02d278d.png",v=c(1),y=function(e){var t=e.title,c=e.image,i=e.fullRecipe,r=e.id,a=Object(n.useState)(!1),l=Object(O.a)(a,2),o=l[0],s=l[1],d=(Object(p.c)((function(e){return e})),!1===o?"lightGray":"rgb(233, 56, 56)"),j=Object(p.b)();return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsxs)("div",{className:"card-header",children:[Object(v.jsx)("div",{className:"delete",onClick:function(){j({type:"DELETE",payload:r})},children:Object(v.jsx)(h.a,{icon:f.b})}),Object(v.jsx)("h2",{children:t}),Object(v.jsx)("div",{className:"like",onClick:function(){j({type:"LIKED",payload:r})},children:Object(v.jsx)(h.a,{icon:f.a,style:{color:d},onClick:function(){return s(!o)}})})]}),Object(v.jsx)("img",{src:c||x,alt:t}),Object(v.jsx)("a",{href:i,children:"see recipe"})]})},g=function(){var e=Object(p.c)((function(e){return e.view})),t=Object(p.c)((function(e){var t=e.recipes,c=e.liked;return"all"===e.view?t:t.filter((function(e){return c.includes(e.id)}))}));return 0===t.length?Object(v.jsx)("h2",{children:"nothing to show"}):Object(v.jsxs)(i.a.Fragment,{children:[Object(v.jsxs)("h2",{className:"view-header",children:[e," recipes"]}),Object(v.jsx)("div",{className:"card-container",children:t.map((function(e){return e.title&&Object(v.jsx)(y,{id:e.id,title:e.title,image:e.image,fullRecipe:e.sourceUrl},e.id)}))})]})},m=function(){var e=Object(p.c)((function(e){return e.view})),t=Object(p.b)();return"all"===e?Object(v.jsx)("div",{className:"button",children:Object(v.jsx)("button",{onClick:function(){return t({type:"SET_VIEW",payload:"liked"})},children:"show liked"})}):Object(v.jsx)("div",{children:Object(v.jsx)("button",{onClick:function(){return t({type:"SET_VIEW",payload:"all"})},children:"show all"})})},E=c(18),k=c.n(E),w=c(30),C=c(31),S=c.n(C),I="e74d9376b06c40798035256addcf980a",T=function(){var e=Object(p.b)();function t(){return(t=Object(w.a)(k.a.mark((function t(c){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(">>>>> getRecipes"),n=I,t.next=4,S.a.get("https://api.spoonacular.com/recipes/random?&apiKey=".concat(n,"&number=33")).then((function(t){e({type:"SET_RECIPES",payload:t.data.recipes})})).catch((function(e){return console.log("err",e)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(v.jsx)("button",{onClick:function(e){return t.apply(this,arguments)},className:"button",type:"button",children:"Get random recipes"})},N=function(){return 0===Object(p.c)((function(e){return e.recipes})).length?Object(v.jsx)(T,{}):Object(v.jsxs)("div",{children:[Object(v.jsx)(m,{}),Object(v.jsx)(g,{})]})},D=function(){return Object(v.jsx)(p.a,{store:b,children:Object(v.jsx)("div",{className:"pg-container",children:Object(v.jsx)(N,{})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),L()}},[[65,1,2]]]);
//# sourceMappingURL=main.7fdedb9f.chunk.js.map