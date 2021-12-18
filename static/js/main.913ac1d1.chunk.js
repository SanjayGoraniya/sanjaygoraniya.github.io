(this.webpackJsonpsanjaygoraniya=this.webpackJsonpsanjaygoraniya||[]).push([[0],{143:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(55),s=n.n(i),r=n(8),o=n(56),l=n(0),j=c.a.createContext();function d(){return Object(a.useContext)(j)}function m(e){var t=e.children,n=Object(a.useState)(!0),c=Object(r.a)(n,2),i=c[0],s=c[1],d=Object(a.useState)(o),m=Object(r.a)(d,2),b={loading:i,setLoading:s,site:m[0],setSite:m[1],blogData:[{slug:"building-a-react-folder-tree-component",title:"Building A React Folder Tree Component",date:"2020-04-29 18:39:00",readtime:"1",author:"Sanjay Goraniya",tags:["reactjs","javascript"],content:"Content for building a react folder tree component."}]};return Object(l.jsx)(j.Provider,{value:b,children:t})}var b=n(28),u=n(19),h=n.n(u),p=n(3),x=n(4),g=function(e){var t=e.children,n=d().site;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{siteMetadata:n.siteMetadata}),Object(l.jsx)(w,{navigation:n.data.navigation,resume:n.data.resume}),t||null,Object(l.jsx)(P,{social:n.data.social}),Object(l.jsx)(B,{})]})},O=n(18),v=function(e){var t=e.title,n=e.description,a=e.image,c=e.siteMetadata,i=Object(x.f)().pathname,s=c.title,r=c.description,o=c.siteUrl,j=c.image,d=c.twitterUsername,m={title:t||s,description:n||r,image:"".concat(o).concat(a||j),url:"".concat(o).concat(i)};return Object(l.jsxs)(O.a,{title:t,defaultTitle:m.title,titleTemplate:"%s | ".concat(s),children:[Object(l.jsx)("html",{lang:"en"}),Object(l.jsx)("meta",{name:"description",content:m.description}),Object(l.jsx)("meta",{name:"image",content:m.image}),Object(l.jsx)("meta",{name:"theme-color",content:"#444452"}),Object(l.jsx)("meta",{name:"color-scheme",content:"light dark"}),Object(l.jsx)("meta",{property:"og:title",content:m.title}),Object(l.jsx)("meta",{property:"og:description",content:m.description}),Object(l.jsx)("meta",{property:"og:image",content:m.image}),Object(l.jsx)("meta",{property:"og:url",content:m.url}),Object(l.jsx)("meta",{property:"og:type",content:"website"}),Object(l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(l.jsx)("meta",{name:"twitter:creator",content:d}),Object(l.jsx)("meta",{name:"twitter:title",content:m.title}),Object(l.jsx)("meta",{name:"twitter:description",content:m.description}),Object(l.jsx)("meta",{name:"twitter:image",content:m.image}),Object(l.jsx)("meta",{name:"hostname",content:"sanjaygoraniya.github.io"}),Object(l.jsx)("meta",{name:"expected-hostname",content:"sanjaygoraniya.github.io"}),Object(l.jsx)("meta",{name:"google-site-verification",content:"IZHgAsFUeyA4eW6dyR23PtvXdMa08B-a-sanvrWy8zA"})]})},f=v;v.defaultProps={title:null,description:null,image:null};var y=0,_=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2500",height:"2500",viewBox:"0 0 192.756 192.756",children:Object(l.jsxs)("g",{fillRule:"evenodd",clipRule:"evenodd",children:[Object(l.jsx)("path",{id:"bg",fill:"var(--main-background)",d:"M182.814 96.378c0-47.713-38.721-86.434-86.435-86.434-47.713 0-86.438 38.721-86.438 86.434 0 47.71 38.724 86.435 86.438 86.435 47.715-.001 86.435-38.725 86.435-86.435z"}),Object(l.jsx)("path",{id:"ch",fill:"var(--link-text)",d:"M41.123 116.506c14.406 18.729 36.012 30.732 54.264 30.732 12.002 0 22.567-7.199 22.567-14.885 0-8.164-3.842-13.443-21.606-16.328-33.615-6.723-56.663-26.413-56.663-47.538 0-24.97 23.048-43.695 56.663-43.695 10.084 0 22.569 2.879 48.5 18.244v25.932c-20.648-18.248-35.535-25.932-48.5-25.932-18.248 0-24.012 5.764-24.012 13.926 0 7.684 8.642 14.886 24.012 18.725 44.174 12.487 56.661 22.571 56.661 45.624 0 23.527-25.928 45.617-56.661 45.617-21.128 0-33.138-3.361-55.225-19.689v-30.733z"})]})})},w=function(e){var t=e.resume,n=e.navigation,c=Object(a.useState)(""),i=Object(r.a)(c,2),s=i[0],o=i[1],j=Object(a.useState)(!1),d=Object(r.a)(j,2),m=d[0],b=d[1];Object(a.useEffect)((function(){var e=function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>y?(document.querySelector("#top-button").classList.remove("md"),o("down")):e<80?o("top"):(document.querySelector("#top-button").classList.add("md"),o("up")),y=e<=0?0:e,b(!1)};return document.addEventListener("scroll",e,!1),function(){document.removeEventListener("scroll",e,!1)}}),[]);return Object(l.jsx)("header",{className:"navbar ".concat(s),children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("div",{className:"logo",tabIndex:"-1",children:Object(l.jsx)("a",{href:"/",to:"/","aria-label":"home",children:Object(l.jsx)(_,{})})}),Object(l.jsxs)("div",{className:"navbar__links",children:[Object(l.jsx)("ul",{className:"".concat(m?"show":""),children:n.map((function(e,t){return Object(l.jsx)("li",{children:e.to?Object(l.jsx)(p.b,{to:e.to,title:e.title,children:e.name}):Object(l.jsx)("a",{href:(e.origin?window.location.origin:"")+e.href,title:e.title,children:e.name})},t)}))}),Object(l.jsxs)("div",{className:"navbar__link__button",children:[Object(l.jsx)("a",{href:window.location.origin+t.link,title:t.title,className:"link__button",children:t.name}),Object(l.jsx)("div",{className:"link__button",children:Object(l.jsx)(k,{})}),Object(l.jsx)("div",{className:"hamburger__wrapper link__button",children:Object(l.jsx)("button",{className:"hamburger__button ".concat(m?"hamburger__close":"hamburger__open"),onClick:function(){b((function(e){return!e}))},children:Object(l.jsx)("div",{className:"ham-box",children:Object(l.jsx)("div",{className:"ham-box-inner"})})})})]})]})]})})};function k(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){}),[]),Object(a.useEffect)((function(){document.documentElement.classList.add("theme-changing"),document.body.classList.toggle("dark",n);var e=document.querySelector("#manifest");e.href=n?"/manifest-dark.json":"/manifest-light.json";var t=setTimeout((function(){return document.querySelector("html").classList.remove("theme-changing")}),2e3);return function(){clearTimeout(t)}}),[n]);return Object(l.jsx)("div",{className:"toggle-theme-wrapper",children:Object(l.jsxs)("button",{className:"toggle-theme-button","aria-label":"Toggle Theme",children:[Object(l.jsx)("input",{id:"toggle-switch",type:"checkbox",checked:n,onChange:function(e){return c(e.target.checked)},"aria-hidden":"true"}),Object(l.jsxs)("label",{htmlFor:"toggle-switch","aria-hidden":"true",children:[Object(l.jsxs)("svg",{className:"sun",height:22,width:22,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"#FDB813",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(l.jsx)("circle",{cx:12,cy:12,r:5,fill:"none"}),Object(l.jsx)("line",{x1:12,y1:1,x2:12,y2:3}),Object(l.jsx)("line",{x1:12,y1:21,x2:12,y2:23}),Object(l.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),Object(l.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),Object(l.jsx)("line",{x1:1,y1:12,x2:3,y2:12}),Object(l.jsx)("line",{x1:21,y1:12,x2:23,y2:12}),Object(l.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),Object(l.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),Object(l.jsx)("svg",{className:"moon",height:26,width:26,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:Object(l.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",fill:"none"})})]})]})})}var N=function(e){var t=e.title;return Object(l.jsx)("h2",{className:"section__title",children:t})},S=function(){var e=Object(a.useState)("emoji wave-hand animated"),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=setTimeout((function(){return c("emoji wave-hand animated wave")}),1e3);return function(){return clearTimeout(e)}}),[]),Object(a.useEffect)((function(){var e=setTimeout((function(){return c("emoji wave-hand animated")}),1500);return function(){return clearTimeout(e)}}),[n]);return Object(l.jsx)("span",{className:n,onMouseOver:function(){c("emoji wave-hand animated wave")}})};function C(e){var t=e.email,n=e.name,a=d().site.data.intro;return Object(l.jsxs)("section",{className:"intro",id:"intro",children:[Object(l.jsxs)("div",{className:"intro__text",children:[Object(l.jsxs)("div",{className:"intro__hello",children:[Object(l.jsxs)("h3",{children:["Hello, I'm ",Object(l.jsx)(S,{})]}),Object(l.jsx)(R,{className:"name",component:"h1",text:n?"".concat(n):"Sanjay Goraniya"})]}),Object(l.jsxs)("div",{className:"intro__tagline",children:[Object(l.jsxs)("h2",{children:["I build things for the web. ",Object(l.jsx)("span",{className:"emoji technologist"})]}),Object(l.jsx)("p",{className:"specialty",children:a.specialty})]})]}),Object(l.jsx)("div",{className:"intro__contact",children:Object(l.jsx)("a",{href:t,target:"_blank",className:"email-link",rel:"noreferrer",children:a.emailButton})})]})}var L=function(e){var t=e.email;return Object(l.jsxs)("section",{id:"background",className:"section background",children:[Object(l.jsx)(N,{title:"Background"}),Object(l.jsxs)("div",{className:"section__content",children:[Object(l.jsxs)("p",{children:["I'm a freelance Web developer based in ",Object(l.jsx)("a",{className:"underline-link",href:"https://en.wikipedia.org/wiki/India",target:"_blank",rel:"noreferrer",children:"India"}),". As a Web developer, I enjoy bridging the gap between development and design \u2014 combining my technical knowledge with my keen eye for design to create a beautiful product."]}),Object(l.jsx)("p",{children:"My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. Interested in role with company promoting best practices and offering diverse customer projects."}),Object(l.jsxs)("p",{children:["I am looking forward to working with you, my inbox is always open. Whether you have a question or just want to ",Object(l.jsx)("a",{className:"underline-link",href:t,children:"say hi"}),", I'll try my best to get back to you!"]})]})]})};function T(e){var t=e.skills,n=t.languages,a=t.frameworks,c=t.tools,i=t.design;return Object(l.jsxs)("section",{id:"skills",className:"section skills",children:[Object(l.jsx)(N,{title:"Skills"}),Object(l.jsx)("div",{className:"section__content",children:Object(l.jsxs)("div",{className:"skillz",children:[Object(l.jsxs)("div",{className:"skillz__category",children:[Object(l.jsx)("div",{className:"skillz__category__label",children:Object(l.jsxs)("strong",{children:["Programming ",Object(l.jsx)("br",{})," Languages"]})}),Object(l.jsx)("ul",{children:n&&n.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{className:"skillz__category__item",to:"/topics/"+e,children:e})},t)}))})]}),Object(l.jsxs)("div",{className:"skillz__category",children:[Object(l.jsx)("div",{className:"skillz__category__label",children:Object(l.jsxs)("strong",{children:["Libraries &",Object(l.jsx)("br",{})," Frameworks"]})}),Object(l.jsx)("ul",{children:a&&a.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{className:"skillz__category__item",to:"/topics/"+e,children:e})},t)}))})]}),Object(l.jsxs)("div",{className:"skillz__category",children:[Object(l.jsx)("div",{className:"skillz__category__label",children:Object(l.jsxs)("strong",{children:["Tools &",Object(l.jsx)("br",{})," Platforms"]})}),Object(l.jsx)("ul",{children:c&&c.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{className:"skillz__category__item",to:"/topics/"+e,children:e})},t)}))})]}),Object(l.jsxs)("div",{className:"skillz__category",children:[Object(l.jsx)("div",{className:"skillz__category__label",children:Object(l.jsxs)("strong",{children:["Design",Object(l.jsx)("br",{})]})}),Object(l.jsx)("ul",{children:i&&i.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{className:"skillz__category__item",to:"/topics/"+e,children:e})},t)}))})]})]})})]})}var M=function(e){var t=e.experience;return Object(l.jsxs)("section",{id:"experience",className:"section experience",children:[Object(l.jsx)(N,{title:"Experience"}),Object(l.jsx)("div",{className:"section__content",children:Object(l.jsx)("div",{className:"jobs",children:t&&t.map((function(e,t){return Object(l.jsxs)("div",{className:"job",children:[Object(l.jsxs)("div",{className:"time-place",children:[Object(l.jsxs)("div",{className:"job__company",children:[Object(l.jsx)("div",{className:"company-name",children:Object(l.jsx)("strong",{children:e.company})}),Object(l.jsx)("div",{className:"company-links",children:Object(l.jsx)("a",{className:"company-link",target:"_blank",rel:"noreferrer",title:"Website",href:e.url,children:Object(l.jsx)(E,{icon:"Website"})})})]}),Object(l.jsx)("div",{className:"job__time",children:e.time})]}),Object(l.jsx)("div",{className:"job__position",children:e.position})]},t)}))})})]})};var E=function(e){var t=e.icon,n=void 0===t?"Website":t,a={Website:Object(l.jsxs)("svg",{height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(l.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),Object(l.jsx)("polyline",{points:"15 3 21 3 21 9"}),Object(l.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),GitHub:Object(l.jsx)("svg",{height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Object(l.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})};return Object(l.jsx)(l.Fragment,{children:a[n]})};function I(e){var t=e.otherProjects;return Object(l.jsxs)("section",{id:"other-projects",className:"section other-projects",children:[Object(l.jsx)(N,{title:"Other Projects"}),Object(l.jsx)("div",{className:"section__content",children:t&&t.map((function(e,t){return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsxs)("div",{className:"project__name",children:[Object(l.jsx)("div",{className:"project-name",children:Object(l.jsx)("strong",{children:e.name})}),Object(l.jsx)("div",{className:"project-links",children:e.links&&e.links.map((function(e,t){var n=e.title,a=e.url;return Object(l.jsx)("a",{className:"project-link",target:"_blank",rel:"noreferrer",title:n,href:a,children:Object(l.jsx)(E,{icon:n})},t)}))})]}),Object(l.jsx)("p",{children:e.description}),Object(l.jsx)("div",{className:"project__used",children:e.used&&e.used.map((function(e,t){return Object(l.jsx)(p.b,{className:"project__used__item",to:"/topics/"+e.toLowerCase(),children:e},t)}))})]},t)}))})]})}var P=function(e){var t=e.social;return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__copyright",href:"https://sanjaygoraniya.github.io",children:[Object(l.jsx)("div",{className:"top",children:Object(l.jsx)("span",{children:"Designed & Built by\xa0"})}),Object(l.jsx)("div",{className:"bottom",children:Object(l.jsx)("span",{children:"Sanjay Goraniya"})})]}),Object(l.jsx)("div",{className:"footer__links",children:t&&t.map((function(e,t){return Object(l.jsxs)("a",{className:"underline-link",target:"_blank",rel:"noreferrer",title:e.title,href:e.url,children:[Object(l.jsx)("span",{className:"text",children:e.title}),Object(l.jsx)("img",{className:"icon",src:"https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/".concat(e.title.toLowerCase(),".svg"),alt:e.title,title:e.title})]},t)}))})]})};function B(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=function(){i()};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}));var i=function(){c(window.pageYOffset>300)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{id:"top-button",className:n?"fadeIn":"fadeOut",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(l.jsx)("img",{src:"/img/emojis/pointing-up.png",alt:"Scroll Top"})})})}var D=n(22),W=n(39),A=["children","fadeIn","className","index"],H=["text","fadeIn","component"],z=function(e){var t=e.children,n=e.fadeIn,c=void 0===n||n,i=e.className,s=void 0===i?"":i,o=e.index,j=Object(W.a)(e,A),d=Object(a.useState)(""),m=Object(r.a)(d,2),b=m[0],u=m[1],h=Object(a.useState)(c?{opacity:0}:{}),p=Object(r.a)(h,2),x=p[0],g=p[1];Object(a.useEffect)((function(){var e=setTimeout((function(){u(" animate"),g({})}),100*o);return function(){clearTimeout(e)}}),[o,s]);return Object(l.jsx)("span",Object(D.a)(Object(D.a)({className:"".concat(s).concat(b)},j),{},{style:x,onMouseOver:function(){u(" animate")},onAnimationEnd:function(){u("")},children:t}))},R=function(e){var t=e.text,n=e.fadeIn,a=e.component,c=Object(W.a)(e,H),i=a||"h1";return Object(l.jsx)(i,Object(D.a)(Object(D.a)({"aria-label":t},c),{},{children:t.split("").map((function(e,t){return Object(l.jsx)(z,{className:"rubber-text",index:t,"aria-hidden":"true",fadeIn:n,children:e},t)}))}))},G=function(e){var t=e.blog,n=t.slug,a=t.title,c=t.date,i=t.author,s=t.tags,r=new Date(c).toLocaleDateString("en-US");return Object(l.jsxs)("article",{className:"blog__card",children:[Object(l.jsx)(J,{date:r,author:i,readtime:"9 min read"}),Object(l.jsx)(p.b,{className:"blog__link",to:"/blog/".concat(n),children:a}),Object(l.jsx)("div",{className:"blog__tags",children:s&&s.map((function(e,t){return Object(l.jsx)("a",{className:"blog__tag",href:"/blog/tags/".concat(e),children:e},t)}))})]})},J=function(e){var t=e.date,n=e.readtime,a=e.author;return Object(l.jsxs)("div",{className:"blog__details",children:[Object(l.jsxs)("span",{"aria-label":"publish date ".concat(t),children:[Object(l.jsx)("svg",{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(l.jsx)("path",{fill:"currentColor",d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"})}),t]}),Object(l.jsxs)("span",{"aria-label":"".concat(n," minutes read"),children:[Object(l.jsx)("svg",{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(l.jsx)("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"})}),n]}),Object(l.jsxs)("span",{"aria-label":"Written by ".concat(a),children:[Object(l.jsx)("svg",{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"currentColor",d:"M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"})}),a]})]})},F=n(61),U=n.n(F),Q=function(e){var t=e.blog,n=Object(a.useState)(),c=Object(r.a)(n,2),i=c[0],s=c[1],o=t.slug,j=t.title,d=t.date,m=t.author,u=t.tags,p=new Date(d).toLocaleDateString("en-US");Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat("","/blogs/").concat(o,"/index.md"),e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.text();case 7:a=e.sent,s(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error in SingleBlog component",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),Object(a.useEffect)((function(){Array.from(document.querySelectorAll("pre>code")).forEach((function(e){e.dataset.lang=e.classList[0].split("-")[1]}))}));return Object(l.jsxs)("section",{className:"section blog",children:[Object(l.jsx)(J,{date:p,author:m,readtime:function(e){if(e){var t=e&&e.split(" ").length;return t>0?"".concat(Math.ceil(t/200)," min read"):void 0}}(i)}),Object(l.jsx)("h1",{className:"blog__title",children:j}),Object(l.jsx)("div",{className:"blog__content",children:i?Object(l.jsx)(U.a,{children:i,allowDangerousHtml:!0}):Object(l.jsx)("p",{children:"loading..."})}),Object(l.jsx)("div",{className:"blog__tags",children:u&&u.map((function(e,t){return Object(l.jsx)("a",{className:"blog__tag",href:"/blog/tags/".concat(e),children:e},t)}))})]})},V=function(){var e=Array.from(document.querySelectorAll("a")),t={rel:"noopener noreferrer",target:"_blank"};return!!(e&&e.length>0)&&(e.forEach((function(e){return e.host!==window.location.host&&q(e,t)})),!0)},q=function(e,t){for(var n in t)e.setAttribute(n,t[n])},Y=function(e){var t=e.children,n=e.title,c=void 0===n?null:n,i=d().loading;return Object(a.useEffect)((function(){V()}),[]),Object(l.jsxs)(l.Fragment,{children:[c&&Object(l.jsx)(O.a,{title:c}),i?null:t]})},X=function(e){var t=d().site;return c.a.useEffect((function(){if(e.location.hash&&e.location.hash.startsWith("#")){var t=document.body.querySelector(e.location.hash);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}}),[e.location.hash]),Object(l.jsxs)(Y,{children:[Object(l.jsx)(C,{email:"mailto:".concat(t.email)}),Object(l.jsx)(L,{email:"mailto:".concat(t.email)}),Object(l.jsx)(T,{skills:t.data.skills}),Object(l.jsx)(M,{experience:t.data.experience}),Object(l.jsx)(I,{otherProjects:t.data.otherProjects})]})},Z=function(){return Object(a.useEffect)((function(){return document.body.classList.add("not-found"),function(){document.body.classList.remove("not-found")}})),Object(l.jsx)(Y,{title:"Page Not Found",children:Object(l.jsxs)("section",{className:"not-found-content",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"404"}),Object(l.jsx)("h4",{children:"Looks like you're looking for a page that doesn't exist."})]}),Object(l.jsx)(p.b,{to:"/",className:"email-link",rel:"noreferrer",children:"Home Page"})]})})},K=function(){var e=d().blogData;return Object(l.jsx)(Y,{title:"Personal Blog",children:Object(l.jsx)("section",{className:"section blog",children:Object(l.jsx)("div",{className:"blog__list",children:e?e.map((function(e,t){return Object(l.jsx)(G,{blog:e},t)})):Object(l.jsx)("h1",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center"},children:"Blogs not posted yet!"})})})})},$=function(e){var t=d().blogData.find((function(t){return t.slug===e.match.params.slug}));return t?Object(l.jsx)(Y,{title:t.title,children:Object(l.jsx)(Q,{blog:t})}):Object(l.jsx)(Z,{})},ee=function(){return Object(l.jsx)(Y,{title:"Topics",children:Object(l.jsxs)("section",{className:"section topics",children:[Object(l.jsx)("h2",{className:"section__title",children:"Topics"}),Object(l.jsx)("div",{className:"section__content",children:Object(l.jsx)("div",{className:"topics__list",children:[{title:"nodejs",name:"Nodejs"},{title:"reactjs",name:"Reactjs"},{title:"javascript",name:"JavaScript"},{title:"TypeScript",name:"TypeScript"},{title:"PHP",name:"PHP"},{title:"HTML",name:"HTML"},{title:"CSS",name:"CSS"},{title:"Sass",name:"Sass"},{title:"Python",name:"Python"},{title:"GraphQL",name:"GraphQL"},{title:"Node.js",name:"Node.js"},{title:"React",name:"React"},{title:"Express",name:"Express"},{title:"jQuery",name:"jQuery"},{title:"Nunjucks",name:"Nunjucks"},{title:"Vue",name:"Vue"},{title:"Wordpress",name:"Wordpress"},{title:"Socket.IO",name:"Socket.IO"},{title:"Tailwind CSS",name:"Tailwind CSS"},{title:"Craft CMS",name:"Craft CMS"},{title:"Bootstrap",name:"Bootstrap"},{title:"Material UI",name:"Material UI"},{title:"Bash",name:"Bash"},{title:"Git",name:"Git"},{title:"Github",name:"Github"},{title:"Docker",name:"Docker"},{title:"Chrome DevTools",name:"Chrome DevTools"},{title:"Postman",name:"Postman"},{title:"MongoDB",name:"MongoDB"},{title:"Passport.js",name:"Passport.js"},{title:"MySQL",name:"MySQL"},{title:"AWS",name:"AWS"},{title:"Reaction Commerce",name:"Reaction Commerce"},{title:"Hasura",name:"Hasura"},{title:"Prototyping",name:"Prototyping"},{title:"User Testing",name:"User Testing"}].map((function(e,t){var n=e.title,a=e.name;return Object(l.jsx)(p.b,{to:"/topics/".concat(n),className:"topic",children:Object(l.jsxs)("div",{className:"topic__title",children:[Object(l.jsx)("div",{className:"topic__title__tag",children:"#"}),Object(l.jsx)("h3",{children:a})]})},t)}))})})]})})},te=function(e){var t,n=[{aliases:["js","javascript","es","es6","ecmascript"],name:"JavaScript",createdBy:"Brendan Eich",released:"December 4, 1995",website:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",wikipedia:"https://en.wikipedia.org/wiki/JavaScript",logo:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",description:"JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",related:["nodejs"]}],a=n.find((function(t){return t.aliases.includes(e.match.params.topic.toLowerCase())}))||n.javascript;return a?Object(l.jsx)(Y,{title:"Topic : "+a.name.toLowerCase(),children:Object(l.jsx)("section",{className:"section topics",children:Object(l.jsxs)("div",{className:"section__content",children:[Object(l.jsxs)("div",{className:"topic__title",children:[Object(l.jsx)("div",{className:"topic__title__tag",children:"#"}),Object(l.jsx)("h1",{children:a.name})]}),Object(l.jsxs)("div",{className:"topic__details",children:[Object(l.jsxs)("p",{className:"createdby__wrapper",children:["Created by ",Object(l.jsx)("span",{className:"createdby",children:a.createdBy})]}),Object(l.jsxs)("p",{className:"createdby__wrapper",children:["Released ",Object(l.jsx)("span",{className:"createdby",children:a.released})]}),!!a.url&&Object(l.jsx)("a",{href:a.url,children:"Website"}),!!a.wikipedia&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:a.wikipedia,children:"Wikipedia"})]})]}),Object(l.jsxs)("div",{className:"topic__description",children:[!!a.logo&&Object(l.jsx)("div",{className:"topic__img",children:Object(l.jsx)("img",{src:a.logo,width:"100",height:"100",alt:"".concat(a.name," logo")})}),Object(l.jsx)("div",{className:"description__wrapper",children:Object(l.jsx)("p",{children:a.description})})]}),!(null===a||void 0===a||null===(t=a.related)||void 0===t||!t.length)&&Object(l.jsxs)("div",{className:"related__topics",children:[Object(l.jsx)("h2",{children:"Related Topics"}),a.related.map((function(e){return Object(l.jsx)("a",{title:"Topic: "+e,href:"/topics/"+e,className:"topic__tag",children:e},e)}))]})]})})}):Object(l.jsx)(Y,{title:e.match.params.topic.toLowerCase(),children:Object(l.jsx)("section",{className:"section topics",children:Object(l.jsxs)("div",{className:"section__content",children:[Object(l.jsxs)("div",{className:"topic__title",children:[Object(l.jsx)("div",{className:"topic__title__tag",children:"#"}),Object(l.jsx)("h1",{children:e.match.params.topic.toLowerCase()})]}),Object(l.jsxs)("div",{className:"topic__not__found",children:["The ",Object(l.jsx)("strong",{children:e.match.params.topic.toLowerCase()})," topic hasn't been added in the list, yet."]}),Object(l.jsx)(p.b,{className:"email-link",rel:"noreferrer",to:"/topics",children:"Explore topics"})]})})})},ne=function(){var e=d(),t=e.loading,n=e.setLoading,c=e.setSite;return Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/SanjayGoraniya/SanjayGoraniya/main/json/site.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a),n(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n(!1);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,c]),Object(a.useEffect)((function(){document.body.classList.toggle("siteLoading",t);t&&n(!1)}),[t,n]),Object(l.jsx)(p.a,{basename:"/",children:Object(l.jsx)(g,{children:Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{exact:!0,path:"/",component:X}),Object(l.jsx)(x.a,{exact:!0,path:"/topics",component:ee}),Object(l.jsx)(x.a,{path:"/topics/:topic",component:te}),Object(l.jsx)(x.a,{exact:!0,path:"/blog",component:K}),Object(l.jsx)(x.a,{path:"/blog/:slug",component:$}),Object(l.jsx)(x.a,{component:Z})]})})})};s.a.render(Object(l.jsx)(m,{children:Object(l.jsx)(ne,{})}),document.getElementById("root"))},56:function(e){e.exports=JSON.parse('{"name":"Sanjay Goraniya | Full Stack Software Engineer","title":"Sanjay Goraniya | Full Stack Software Engineer","description":"Design-minded front-end software engineer focused on building beautiful interfaces and experiences","url":"https://sanjaygoraniya.com/","baseurl":"sanjaygoraniya.github.io","email":"sanjayrgoraniya@gmail.com","cover":"/img/og.png","logo":"/img/logo/logo1.png","siteMetadata":{"title":"Sanjay Goraniya | Full Stack Software Engineer","description":"Sanjay Goraniya is a software engineer specializing in building websites, applications, and everything in between.","siteUrl":"https://sanjaygoraniya.github.io","image":"/img/og.png","twitterUsername":"@sanjayrgoraniya"},"data":{"navigation":[{"name":"About","title":"About","to":"/#background"},{"name":"Skills","title":"Skills","to":"/#skills"},{"name":"Work","title":"Experience","to":"/#experience"},{"name":"Projects","title":"Projects","to":"/#other-projects"},{"name":"Examples","title":"Examples","href":"/examples","origin":true}],"resume":{"link":"/resume.pdf","name":"Resume","title":"CV"},"intro":{"emailButton":"Hire Me","specialty":"Senior Full Stack Developer / AWS Expert"},"skills":{"languages":["JavaScript (ES6+)","TypeScript","PHP","HTML","CSS/Sass","Python","GraphQL"],"frameworks":["Node.js","React","Express","jQuery","Nunjucks","Vue","Wordpress","Socket.IO","Tailwind CSS","Craft CMS","Bootstrap","Material UI"],"tools":["Bash","Git & Github","Docker","Chrome DevTools","Postman","MongoDB","Passport.js","MySQL","AWS","Reaction Commerce","Hasura"],"design":["Sketch","InDesign","InVision","Prototyping","User Testing"]},"experience":[{"company":"Stack Summation","url":"https://www.stacksummation.com","time":"May 2021 - Present","position":"Senior Full Stack Developer"},{"company":"Techitree","url":"https://www.techitree.com/","time":"October 2019 - December 2020","position":"MERN Developer"},{"company":"AIS Technolabs","url":"https://www.aistechnolabs.com/","time":"April 2019 - October 2019","position":"NodeJS Developer"},{"company":"IANT (Institute Of Advance Network Technology)","url":"https://www.iantindia.com/","time":"June 2016 - July 2017","position":"PHP Developer"}],"otherProjects":[{"name":"IntelliTrack","description":"IntelliTrack is used to manage projects for contractors.","used":["React","HTML","CSS","JavaScript","Material UI","Amplify"],"links":[]},{"name":"UP","description":"UP is a tool which used to analyse and optimise business agility and performance.","used":["React","HTML","CSS","JavaScript","Bootstrap"],"links":[]},{"name":"ReadyForWork","description":"ReadyForWork is a platform that allows coaches to build online courses on their preferred tracks.","used":["Node","Express","React","HTML","CSS","Bootstrap","Material UI"],"links":[]},{"name":"Personal Website V1","description":"My first portfolio website I designed and built in 2020. I learned quite a bit about HTML, CSS, and SEO. Since then, I think my web development and design skills have improved immensely.","used":["JavaScript","ReactJS","HTML","CSS","axios","React Context"],"links":[{"title":"Website","url":"https://sanjaygoraniya.github.io"},{"title":"GitHub","url":"https://github.com/sanjaygoraniya/sanjaygoraniya.github.io"}]},{"name":"WhatsApp Clone - Design","description":"Small CSS design project created during my free time.","used":["JavaScript","HTML","CSS"],"links":[]},{"name":"Blog management","description":"A complete solution to share knowledge, write blog, manage blog and profile.","used":["Node","JavaScript","GraphQL","MongoDB","React"],"links":[]},{"name":"Ecommerce\u2013LuxyList","description":"LuxyList is e-commerce website like online store","used":["RC(Reaction-Commerce)","Node","JavaScript","HTML","CSS","GraphQL","MongoDB","Next"],"links":[]},{"name":"CareerChips","description":"This web application is using for hire IT resource. CareerChips doesn\u2019t ask for any login and that benefits individuals to refer their friends.","used":["Node","GraphQL","JavaScript","MongoDB","React"],"links":[{"title":"Website","url":"http://www.careerchips.com"}]},{"name":"CSGOClub","description":"CSGOClub is a web application for multiple games. In this project more then 10(ten) games are developed.","used":["Node","Express","MySQL","JavaScript","jQuery","HTML","CSS"],"links":[]}],"social":[{"title":"Email","url":"mailto:sanjayrgoraniya@gmail.com"},{"title":"Instagram","url":"https://www.instagram.com/sanjayrgoraniya"},{"title":"GitHub","url":"https://github.com/sanjaygoraniya"},{"title":"LinkedIn","url":"https://www.linkedin.com/in/sanjaygoraniya"}]}}')}},[[143,1,2]]]);
//# sourceMappingURL=main.913ac1d1.chunk.js.map