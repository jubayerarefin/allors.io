(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(93),s=n(91),l=n(96);t.default=function(e){const{content:t}=e,{frontMatter:n,metadata:a}=t,{title:c,description:i}=n,{permalink:p}=a;return r.a.createElement(o.a,{title:c,description:i,permalink:p},r.a.createElement("main",null,r.a.createElement("div",{className:"container margin-vert--lg padding-vert--lg"},r.a.createElement(s.a,{components:l.a},r.a.createElement(t,null)))))}},94:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),s};e.exports=a,e.exports.default=a},95:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],s=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=s);for(var l=n;l!=r;l+=s)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},96:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),s=n(89),l=n(90),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(20).a,theme:c};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var y=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),p(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),p(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=u({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?u({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,l=[],c=[l];s>-1;){for(;(o=a[s]++)<r[s];){var i=void 0,p=t[s],u=n[s][o];if("string"==typeof u?(p=s>0?p:["plain"],i=u):(p=h(p,u.type),u.alias&&(p=h(p,u.alias)),i=u.content),"string"==typeof i){var g=i.split(y),m=g.length;l.push({types:p,content:g[0]});for(var f=1;f<m;f++)d(l),c.push(l=[]),l.push({types:p,content:g[f]})}else s++,t.push(p),n.push(i),a.push(0),r.push(i.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return d(l),c}(void 0!==s?t.tokenize(a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),v=n(94),b=n.n(v),k=n(95),j=n.n(k),E=n(88),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},x=n(97);var N=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(E.a)(),{isDarkTheme:t}=Object(x.a)(),n=e.theme||O,a=e.darkTheme||n;return t?a:n},C=n(48),T=n.n(C);const w=/{([\d,-]+)}/,$=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map(e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},B=/title=".*"/;var P=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:s={}}}}=Object(E.a)(),[c,p]=Object(r.useState)(!1),[u,y]=Object(r.useState)(!1);Object(r.useEffect)(()=>{y(!0)},[]);const d=Object(r.useRef)(null);let h=[],g="";const m=N();if(n&&w.test(n)){const e=n.match(w)[1];h=j.a.parse(e).filter(e=>e>0)}n&&B.test(n)&&(g=n.match(B)[0].split("title=")[1].replace(/"+/g,""));let v=t&&t.replace(/language-/,"");!v&&s.defaultLanguage&&(v=s.defaultLanguage);let k=e.replace(/\n$/,"");if(0===h.length&&void 0!==v){let t="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return $(["js","jsBlock"]);case"jsx":case"tsx":return $(["js","jsBlock","jsx"]);case"html":return $(["js","jsBlock","html"]);case"python":case"py":return $(["python"]);default:return $()}})(v),a=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<a.length;){const o=e+1,s=a[e].match(n);if(null!==s){switch(s.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":t+=`${o},`;break;case"highlight-start":r=o;break;case"highlight-end":t+=`${r}-${o-1},`}a.splice(e,1)}else e+=1}h=j.a.parse(t),k=a.join("\n")}const O=()=>{b()(k),p(!0),setTimeout(()=>p(!1),2e3)};return o.a.createElement(f,Object(a.a)({},i,{key:String(u),theme:m,code:k,language:v}),({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:s})=>o.a.createElement(o.a.Fragment,null,g&&o.a.createElement("div",{style:t,className:T.a.codeBlockTitle},g),o.a.createElement("div",{className:T.a.codeBlockContent},o.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(T.a.copyButton,{[T.a.copyButtonWithTitle]:g}),onClick:O},c?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,T.a.codeBlock,{[T.a.codeBlockWithTitle]:g})},o.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return h.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(a.a)({key:t},n),e.map((e,t)=>o.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t})))))}))))))},S=(n(49),n(50)),D=n.n(S);var L=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:a=!1}={}}={}}={}}=Object(E.a)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",{[D.a.enhancedAnchor]:!a}),id:t}),n.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):o.a.createElement(e,n)},A=n(51),I=n.n(A);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(P,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(s.a,e),pre:e=>o.a.createElement("div",Object(a.a)({className:I.a.mdxCodeBlock},e)),h1:L("h1"),h2:L("h2"),h3:L("h3"),h4:L("h4"),h5:L("h5"),h6:L("h6")}}}]);