(this["webpackJsonpreact-recipe"]=this["webpackJsonpreact-recipe"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),i=c(6),s=c.n(i),l=(c(13),c(4)),o=c.n(l),u=c(7),p=c(5),j=(c.p,c(15),c(2)),b=c.n(j),h=function(e){var t=e.title,c=e.calories,r=e.image,a=e.ingredients,i=e.url;return Object(n.jsx)("a",{href:i,className:b.a.link,target:"_blank",children:Object(n.jsxs)("div",{className:b.a.recipe,children:[Object(n.jsx)("h4",{children:t}),Object(n.jsx)("ol",{children:a.map((function(e){return Object(n.jsx)("li",{children:e})}))}),Object(n.jsxs)("p",{children:["Calories: ",c]}),Object(n.jsx)("img",{className:b.a.image,src:r,alt:"None"})]})})};var f=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1],i=Object(r.useState)("chicken"),s=Object(p.a)(i,2),l=s[0],j=s[1],b="https://api.edamam.com/search?q=".concat(l,"&app_id=").concat("13070677","&app_key=").concat("fa2574ec4daae30933250b8540a72dca");Object(r.useEffect)((function(){console.log("Effect runs"),f()}),[l]);var f=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:return e.next=4,e.sent.json();case 4:t=e.sent,a(t.hits),console.log(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(e.target[0].value),e.target[0].value="",a([])},className:"search-form",children:[Object(n.jsx)("input",{className:"search-bar",type:"text"}),Object(n.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(n.jsx)("div",{className:"recipe",children:c.map((function(e){return Object(n.jsx)(h,{ingredients:e.recipe.ingredientLines,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,url:e.recipe.url},e.recipe.label)}))})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),d()},2:function(e,t,c){e.exports={recipe:"recipe_recipe__3PpYJ",image:"recipe_image__1E84N",link:"recipe_link__2xgGk"}}},[[16,1,2]]]);
//# sourceMappingURL=main.fa67e03a.chunk.js.map