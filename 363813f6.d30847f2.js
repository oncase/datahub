(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{158:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},159:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))},160:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?n.a.createElement(b,c(c({ref:t},u),{},{components:r})):n.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(158),n=r(159),i=(r(0),r(160)),o={title:"What is Generalized Metadata Architecture (GMA)?",hide_title:!0,slug:"/what/gma",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/gma.md"},c={unversionedId:"docs/what/gma",id:"docs/what/gma",isDocsHomePage:!1,title:"What is Generalized Metadata Architecture (GMA)?",description:"What is Generalized Metadata Architecture (GMA)?",source:"@site/genDocs/docs/what/gma.md",slug:"/what/gma",permalink:"/docs/what/gma",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/gma.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Metadata Ingestion Architecture",permalink:"/docs/architecture/metadata-ingestion"},next:{title:"Metadata Serving Architecture",permalink:"/docs/architecture/metadata-serving"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"what-is-generalized-metadata-architecture-gma"},"What is Generalized Metadata Architecture (GMA)?"),Object(i.b)("p",null,"GMA is the backend infrastructure for DataHub. Unlike existing architectures, GMA leverages multiple storage technologies to efficiently service the four most commonly used query patterns"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Document-oriented CRUD "),Object(i.b)("li",{parentName:"ul"},"Complex queries (including joining distributed tables)"),Object(i.b)("li",{parentName:"ul"},"Graph traversal"),Object(i.b)("li",{parentName:"ul"},"Fulltext search and autocomplete")),Object(i.b)("p",null,"GMA also embraces a distributed model, where each team owns, develops and operates their own metadata services (known as ",Object(i.b)("a",{parentName:"p",href:"/docs/what/gms"},"GMS"),"), while the metadata are automatically aggregated to populate the central ",Object(i.b)("a",{parentName:"p",href:"/docs/what/graph"},"metadata graph")," and ",Object(i.b)("a",{parentName:"p",href:"/docs/what/search-index"},"search indexes"),". This is made possible by standardizing the metadata models and the access layer. "),Object(i.b)("p",null,"We strongly believe that GMA can bring tremendous leverage to any team that has a need to store and access metadata.\nMoreover, standardizing metadata modeling promotes a model-first approach to developments, resulting in a more concise, consistent, and highly connected metadata ecosystem that benefits all DataHub users."))}l.isMDXComponent=!0}}]);