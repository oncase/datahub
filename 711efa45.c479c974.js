(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(158),r=n(159),o=(n(0),n(160)),i={title:"How to onboard an entity?",hide_title:!0,slug:"/how/entity-onboarding",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/entity-onboarding.md"},c={unversionedId:"docs/how/entity-onboarding",id:"docs/how/entity-onboarding",isDocsHomePage:!1,title:"How to onboard an entity?",description:"How to onboard an entity?",source:"@site/genDocs/docs/how/entity-onboarding.md",slug:"/how/entity-onboarding",permalink:"/docs/how/entity-onboarding",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/entity-onboarding.md",version:"current",sidebar:"overviewSidebar",previous:{title:"How to customize the search experience of an entity?",permalink:"/docs/how/customize-elasticsearch-query-template"},next:{title:"How to onboard to GMA graph?",permalink:"/docs/how/graph-onboarding"}},s=[{value:"1. Define URN",id:"1-define-urn",children:[]},{value:"2. Model your metadata",id:"2-model-your-metadata",children:[]},{value:"3. GMA search onboarding",id:"3-gma-search-onboarding",children:[]},{value:"4. GMA graph onboarding",id:"4-gma-graph-onboarding",children:[]},{value:"5. Add rest.li resource endpoints",id:"5-add-restli-resource-endpoints",children:[]},{value:"6. Configure dependency injection",id:"6-configure-dependency-injection",children:[]},{value:"7. UI for entity onboarding WIP",id:"7-ui-for-entity-onboarding-wip",children:[]}],d={rightToc:s};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-to-onboard-an-entity"},"How to onboard an entity?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Refer to ",Object(o.b)("a",{parentName:"p",href:"/docs/how/add-new-aspect"},"this doc")," if you're only interested in adding a new aspect to an existing entity ")),Object(o.b)("p",null,"Currently, DataHub only has a support for 3 ",Object(o.b)("a",{parentName:"p",href:"/docs/what/entity"},"entity")," types: ",Object(o.b)("inlineCode",{parentName:"p"},"datasets"),", ",Object(o.b)("inlineCode",{parentName:"p"},"users")," and ",Object(o.b)("inlineCode",{parentName:"p"},"groups"),".\nIf you want to extend DataHub with your own use cases such as ",Object(o.b)("inlineCode",{parentName:"p"},"metrics"),", ",Object(o.b)("inlineCode",{parentName:"p"},"charts"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dashboards")," etc, you should follow the below steps in order."),Object(o.b)("p",null,"Also we use this following diagram to help you visualize the process.\n",Object(o.b)("img",{alt:"onboard-a-new-entity",src:n(246).default})," "),Object(o.b)("h2",{id:"1-define-urn"},"1. Define URN"),Object(o.b)("p",null,"Refer to ",Object(o.b)("a",{parentName:"p",href:"/docs/what/urn"},"here")," for URN definition."),Object(o.b)("h2",{id:"2-model-your-metadata"},"2. Model your metadata"),Object(o.b)("p",null,"Refer to ",Object(o.b)("a",{parentName:"p",href:"/docs/how/metadata-modelling"},"metadata modelling")," section.\nMake sure to do the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Define ",Object(o.b)("a",{parentName:"li",href:"/docs/what/aspect"},"Aspect")," models."),Object(o.b)("li",{parentName:"ol"},"Define aspect union model. Refer to ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/aspect/DatasetAspect.pdl"},Object(o.b)("inlineCode",{parentName:"a"},"DatasetAspect"))," as an example."),Object(o.b)("li",{parentName:"ol"},"Define ",Object(o.b)("a",{parentName:"li",href:"/docs/what/snapshot"},"Snapshot")," model. Refer to ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/snapshot/DatasetSnapshot.pdl"},Object(o.b)("inlineCode",{parentName:"a"},"DatasetSnapshot"))," as an example."),Object(o.b)("li",{parentName:"ol"},"Add your newly defined snapshot to ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/snapshot/Snapshot.pdl"},"Snapshot Union")," model.")),Object(o.b)("h2",{id:"3-gma-search-onboarding"},"3. GMA search onboarding"),Object(o.b)("p",null,"Refer to ",Object(o.b)("a",{parentName:"p",href:"/docs/how/search-onboarding"},"search onboarding")," if you need to search the entity."),Object(o.b)("h2",{id:"4-gma-graph-onboarding"},"4. GMA graph onboarding"),Object(o.b)("p",null,"Refer to ",Object(o.b)("a",{parentName:"p",href:"/docs/how/graph-onboarding"},"graph onboarding")," if you need to perform graph queries against the entity."),Object(o.b)("h2",{id:"5-add-restli-resource-endpoints"},"5. Add rest.li resource endpoints"),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/impl/src/main/java/com/linkedin/metadata/resources/identity/CorpUsers.java"},Object(o.b)("inlineCode",{parentName:"a"},"CorpUsers"))," for an example of top-level ",Object(o.b)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#writing-resources"},"resource endpoint"),". Optionally add an aspect-specific ",Object(o.b)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#sub-resources"},"sub-resource endpoint")," such as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/impl/src/main/java/com/linkedin/metadata/resources/identity/CorpUsersEditableInfoResource.java"},Object(o.b)("inlineCode",{parentName:"a"},"CorpUsersEditableInfoResource")),"."),Object(o.b)("p",null,"If you want to use this new entity type from the ingestion framework's REST-based sink, you'll need to add it to the new endpoint to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/sink/datahub_rest.py#L25"},"resource list"),"."),Object(o.b)("h2",{id:"6-configure-dependency-injection"},"6. Configure dependency injection"),Object(o.b)("p",null,"GMS uses ",Object(o.b)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans"},"Spring Framework")," for dependency injection. You'll need to add ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/gms/factories/src/main/java/com/linkedin/gms/factory"},"various factories")," to create any custom DAOs used by the rest.li endpoint. You'll also need to add any custom package to the ",Object(o.b)("inlineCode",{parentName:"p"},"base-package")," of ",Object(o.b)("inlineCode",{parentName:"p"},"<context:component-scan>")," tag in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/war/src/main/webapp/WEB-INF/beans.xml"},"beans.xml")),Object(o.b)("h2",{id:"7-ui-for-entity-onboarding-wip"},"7. UI for entity onboarding ","[WIP]"))}b.isMDXComponent=!0},158:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},159:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||l[u]||o;return n?r.a.createElement(m,c(c({ref:t},d),{},{components:n})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},246:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/onboard-a-new-entity-656cf2beada07ae20a558c0c6af709fb.png"}}]);