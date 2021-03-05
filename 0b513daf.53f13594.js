(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{158:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},159:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},160:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=u(a),p=n,d=l["".concat(i,".").concat(p)]||l[p]||m[p]||o;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(158),r=a(159),o=(a(0),a(160)),i={title:"MXE Processing Jobs",hide_title:!0,slug:"/metadata-jobs",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/README.md"},c={unversionedId:"metadata-jobs/README",id:"metadata-jobs/README",isDocsHomePage:!1,title:"MXE Processing Jobs",description:"MXE Processing Jobs",source:"@site/genDocs/metadata-jobs/README.md",slug:"/metadata-jobs",permalink:"/docs/metadata-jobs",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/README.md",version:"current"},b=[],s={rightToc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"mxe-processing-jobs"},"MXE Processing Jobs"),Object(o.b)("p",null,"DataHub uses Kafka as the pub-sub message queue in the backend. There are 2 Kafka topics used by DataHub which are\n",Object(o.b)("inlineCode",{parentName:"p"},"MetadataChangeEvent")," and ",Object(o.b)("inlineCode",{parentName:"p"},"MetadataAuditEvent"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MetadataChangeEvent:")," This message is emitted by any data platform or crawler in which there is a change in the metadata."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MetadataAuditEvent:")," This message is emitted by ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/gms"},"DataHub GMS")," to notify that metadata change is registered.")),Object(o.b)("p",null,"To be able to consume from these two topics, there are two ",Object(o.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/streams/"},"Kafka Streams"),"\njobs DataHub uses:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job"},"MCE Consumer Job"),": Writes to ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/gms"},"DataHub GMS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mae-consumer-job"},"MAE Consumer Job"),": Writes to ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/elasticsearch"},"Elasticsearch")," & ",Object(o.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/neo4j"},"Neo4j"))))}u.isMDXComponent=!0}}]);