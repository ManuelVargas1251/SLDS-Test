var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/breadcrumbs/base/example.jsx.js"]=webpackJsonpSLDS___internal_chunked_showcase([1,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137],{0:function(e,t){e.exports=React},38:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(e){return e&&e.__esModule?e:{default:e}}(r(0)),l=function(e){return n.default.createElement("li",{className:"slds-breadcrumb__item slds-text-title_caps"},n.default.createElement("a",{href:e.href},e.children))};l.propTypes={href:n.default.PropTypes.string};var u=function(e){return n.default.createElement("nav",a({},e,{role:"navigation","aria-label":"Breadcrumbs"}),n.default.createElement("ol",{className:"slds-breadcrumb slds-list_horizontal slds-wrap"},e.children))};u.Crumb=l,t.default=u},56:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0)),l=a(r(38)),u=l.default.Crumb;t.default=n.default.createElement(l.default,null,n.default.createElement(u,{href:"javascript:void(0);"},"Parent Entity"),n.default.createElement(u,{href:"javascript:void(0);"},"Parent Record Name"))}},[56]);