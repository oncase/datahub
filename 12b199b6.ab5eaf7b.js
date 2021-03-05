(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},159:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},160:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(158),a=r(159),i=(r(0),r(160)),o={title:"What is Generalized Metadata Service (GMS)?",hide_title:!0,slug:"/what/gms",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/gms.md"},c={unversionedId:"docs/what/gms",id:"docs/what/gms",isDocsHomePage:!1,title:"What is Generalized Metadata Service (GMS)?",description:"What is Generalized Metadata Service (GMS)?",source:"@site/genDocs/docs/what/gms.md",slug:"/what/gms",permalink:"/docs/what/gms",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/gms.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Metadata Serving Architecture",permalink:"/docs/architecture/metadata-serving"},next:{title:"Entities",permalink:"/docs/what/entity"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"what-is-generalized-metadata-service-gms"},"What is Generalized Metadata Service (GMS)?"),Object(i.b)("p",null,"Metadata for ",Object(i.b)("a",{parentName:"p",href:"/docs/what/entity"},"entities")," ",Object(i.b)("a",{parentName:"p",href:"/docs/how/entity-onboarding"},"onboarded")," to ",Object(i.b)("a",{parentName:"p",href:"/docs/what/gma"},"GMA")," is served through microservices known as Generalized Metadata Service (GMS). GMS typically provides a ",Object(i.b)("a",{parentName:"p",href:"http://rest.li"},"Rest.li")," API and must access the metadata using ",Object(i.b)("a",{parentName:"p",href:"/docs/architecture/metadata-serving"},"GMA DAOs"),". "),Object(i.b)("p",null,"While a GMS is completely free to define its public APIs, we do provide a list of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub-gma/tree/master/restli-resources/src/main/java/com/linkedin/metadata/restli"},"resource base classes")," to leverage for common patterns."),Object(i.b)("p",null,"GMA is designed to support a distributed fleet of GMS, each serving a subset of the ",Object(i.b)("a",{parentName:"p",href:"/docs/what/graph"},"GMA graph"),". However, for simplicity we include a single centralized GMS (",Object(i.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms"},"datahub-gms"),") that serves all entities."))}l.isMDXComponent=!0}}]);