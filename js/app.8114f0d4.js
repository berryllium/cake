(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d217e3c":"38a3fd83","chunk-2d22d746":"6b4ddc0a","chunk-2d230de3":"8e0ba6d5","chunk-7cdc9efd":"e58eb137"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-7cdc9efd":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d217e3c":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-2d230de3":"31d6cfe0","chunk-7cdc9efd":"58ba1e30"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"container"},[a("div",{staticClass:"top-menu"},[t._m(0),a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{attrs:{src:n("7c04"),alt:"logo"}})]),a("nav",[a("ul",[a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Главная")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/catalog"}},[t._v("Каталог")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/about"}},[t._v("О нас")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/delivery"}},[t._v("Доставка")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/contacts"}},[t._v("Контакты")])],1)])]),t._m(1)],1)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"menu-btn",attrs:{to:"/"}},[n("span")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[n("a",{attrs:{to:"/"}},[n("i",{staticClass:"fa fa-shopping-cart"})]),n("div",{staticClass:"cart-count"},[t._v("3")])])}],i=(n("ae13"),n("2877")),s={},o=Object(i["a"])(s,a,r,!1,null,"10c14596",null);e["a"]=o.exports},"199c":function(t,e,n){"use strict";(function(t){var a=n("1157"),r=n.n(a),i=n("0418"),s=n("fd2d");e["a"]={name:"app",components:{Header:i["a"],Footer:s["a"]},mounted:function(){r()(".menu-btn").on("click",(function(t){t.preventDefault(),r()(this).toggleClass("menu-btn_active"),r()("nav").animate({width:"toggle"},350)})),r()(".nav-item").on("click",(function(){r()(".menu-btn").trigger("click")}))}},t.exports={publicPath:"/tmp/cake"}}).call(this,n("dd40")(t))},2395:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("Header"),n("main",[n("router-view")],1),n("Footer")],1)},i=[],s=n("199c"),o=s["a"],c=(n("7c55"),n("2877")),u=Object(c["a"])(o,r,i,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro"},[n("div",{staticClass:"container"},[n("div",{staticClass:"left"},[n("h2",[t._v("Кондитерская на дому")]),n("div",{staticClass:"text"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores eveniet enim. Fuga aliquid molestias quia veniam voluptatibus inventore dignissimos dolorem quisquam accusantium? Reprehenderit reiciendis asperiores fuga, saepe et illo quidem facilis voluptatum corporis, qui, quisquam magni esse dicta doloremque pariatur quaerat veniam cum? Aperiam, vitae facilis obcaecati, quis laborum ut inventore quidem recusandae totam quam distinctio perferendis expedita porro eius deleniti. Sunt qui pariatur sit fuga, nemo quia necessitatibus omnis assumenda! Necessitatibus beatae aperiam deserunt nesciunt nostrum in, nulla ex doloribus ut eos velit consequuntur consectetur consequatur at officiis enim illum odit id excepturi dolorem blanditiis aspernatur ullam. Esse.")])]),n("div",{staticClass:"right"},[n("div",{staticClass:"main-form"},[n("div",{staticClass:"title"},[t._v("Оставьте заявку")]),n("div",{staticClass:"subtitle"},[t._v("мы с Вами свяжемся!")]),n("form",{attrs:{action:"send.php"}},[n("input",{attrs:{type:"text",name:"name",placeholder:"Ваше имя"}}),n("input",{attrs:{type:"phone",name:"phone",placeholder:"Ваше телефон"}}),n("input",{attrs:{type:"email",name:"email",placeholder:"Ваш email"}}),n("input",{attrs:{type:"submit",value:"Отправить"}})])])])])])}],m=(n("7da3"),{}),v=Object(c["a"])(m,f,p,!1,null,"09637098",null),h=v.exports;a["a"].use(d["a"]);var b=new d["a"]({mode:"history",routes:[{path:"/",component:h},{path:"/catalog",component:function(){return n.e("chunk-7cdc9efd").then(n.bind(null,"247d"))}},{path:"/about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/delivery",component:function(){return n.e("chunk-2d230de3").then(n.bind(null,"edb0"))}},{path:"/contacts",component:function(){return n.e("chunk-2d217e3c").then(n.bind(null,"c93c"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:b,render:function(t){return t(l)}}).$mount("#app")},"7c04":function(t,e,n){t.exports=n.p+"img/logo.c659afe3.png"},"7c55":function(t,e,n){"use strict";var a=n("2395"),r=n.n(a);r.a},"7da3":function(t,e,n){"use strict";var a=n("c8e9"),r=n.n(a);r.a},ae13:function(t,e,n){"use strict";var a=n("df0b"),r=n.n(a);r.a},c8e9:function(t,e,n){},d950:function(t,e,n){"use strict";var a=n("dd32"),r=n.n(a);r.a},dd32:function(t,e,n){},df0b:function(t,e,n){},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("div",{staticClass:"footer-item"},[n("h3",[t._v("Время работы")]),n("p",[t._v("Работаем каждый день с 9.00 до 21.00")])]),n("div",{staticClass:"footer-item"},[n("h3",[t._v("Наши контакты")]),n("p",[t._v(" Звоните: "),n("a",{attrs:{href:"tel:+79999999999"}},[t._v("+79999999999")])]),n("p",[t._v(" Пишите: "),n("a",{attrs:{href:"mailto: test@yandex.ru"}},[t._v("test@yandex.ru")])])]),n("div",{staticClass:"footer-item"},[n("h3",[t._v("Мы в соцсетях")]),n("div",{staticClass:"social-links"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-vk",attrs:{"aria-hidden":"true"}})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-odnoklassniki",attrs:{"aria-hidden":"true"}})])])])])])}],i=(n("d950"),n("2877")),s={},o=Object(i["a"])(s,a,r,!1,null,"b8f9a75a",null);e["a"]=o.exports}});
//# sourceMappingURL=app.8114f0d4.js.map