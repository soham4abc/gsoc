"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[6887],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=l.createContext({}),u=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),p=o,g=s["".concat(d,".").concat(p)]||s[p]||m[p]||a;return n?l.createElement(g,r(r({ref:t},c),{},{components:n})):l.createElement(g,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var l=n(3117),o=n(102),a=(n(7294),n(3905)),r=["components"],i={sidebar_position:4,title:"Docker Images"},d=void 0,u={unversionedId:"2021/microservice/dockerImages",id:"2021/microservice/dockerImages",title:"Docker Images",description:"\x3c!--",source:"@site/docs/2021/microservice/dockerImages.md",sourceDirName:"2021/microservice",slug:"/2021/microservice/dockerImages",permalink:"/gsoc/docs/2021/microservice/dockerImages",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/dockerImages.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Docker Images"},sidebar:"2021",previous:{title:"Setup",permalink:"/gsoc/docs/2021/microservice/setup"},next:{title:"Introduction",permalink:"/gsoc/docs/2021/minerva/"}},c={},m=[{value:"Base Image",id:"base-image",level:3},{value:"Tag",id:"tag",level:4},{value:"Build Command",id:"build-command",level:4},{value:"Scheduler",id:"scheduler",level:3},{value:"Tag",id:"tag-1",level:4},{value:"Build Command",id:"build-command-1",level:4},{value:"web",id:"web",level:3},{value:"Tag",id:"tag-2",level:4},{value:"Build Command",id:"build-command-2",level:4},{value:"Agents",id:"agents",level:3},{value:"Tag",id:"tag-3",level:5},{value:"Build Command",id:"build-command-3",level:5},{value:"Tag",id:"tag-4",level:5},{value:"Build Command",id:"build-command-4",level:5},{value:"Tag",id:"tag-5",level:5},{value:"Build Command",id:"build-command-5",level:5},{value:"Tag",id:"tag-6",level:5},{value:"Build Command",id:"build-command-6",level:5},{value:"Tag",id:"tag-7",level:5},{value:"Build Command",id:"build-command-7",level:5}],s={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"base-image"},"Base Image"),(0,a.kt)("h4",{id:"tag"},"Tag"),(0,a.kt)("p",null,"fossology/packages"),(0,a.kt)("h4",{id:"build-command"},"Build Command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build -f Dockerfile.pkg . -t fossology/packages:latest")),(0,a.kt)("h3",{id:"scheduler"},"Scheduler"),(0,a.kt)("h4",{id:"tag-1"},"Tag"),(0,a.kt)("p",null,"fossology/scheduler"),(0,a.kt)("h4",{id:"build-command-1"},"Build Command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build -f Dockerfile.scheduler . -t fossology/scheduler:latest")),(0,a.kt)("h3",{id:"web"},"web"),(0,a.kt)("h4",{id:"tag-2"},"Tag"),(0,a.kt)("p",null,"fossology/web"),(0,a.kt)("h4",{id:"build-command-2"},"Build Command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build -f Dockerfile.web . -t fossology/web:latest")),(0,a.kt)("h3",{id:"agents"},"Agents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"ununpack"},"ununpack"))),(0,a.kt)("h5",{id:"tag-3"},"Tag"),(0,a.kt)("p",null,"fossology/ununpack"),(0,a.kt)("h5",{id:"build-command-3"},"Build Command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build -f Dockerfile.ununpack . -t fossology/ununpack:latest")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"wget_agent"},"wget_agent"))),(0,a.kt)("h5",{id:"tag-4"},"Tag"),(0,a.kt)("p",null,"fossology/wgetagent"),(0,a.kt)("h5",{id:"build-command-4"},"Build Command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build -f Dockerfile.wgetagnet . -t fossology/wgetagent:latest")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"nomos"},"nomos"))),(0,a.kt)("h5",{id:"tag-5"},"Tag"),(0,a.kt)("p",null,"fossology/nomos"),(0,a.kt)("h5",{id:"build-command-5"},"Build Command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build -f Dockerfile.nomos . -t fossology/nomos:latest")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"copyright"},"copyright"))),(0,a.kt)("h5",{id:"tag-6"},"Tag"),(0,a.kt)("p",null,"fossology/copyright"),(0,a.kt)("h5",{id:"build-command-6"},"Build Command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build -f Dockerfile.copyright . -t fossology/copyright:latest")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"ojo"},"ojo"))),(0,a.kt)("h5",{id:"tag-7"},"Tag"),(0,a.kt)("p",null,"fossology/ojo"),(0,a.kt)("h5",{id:"build-command-7"},"Build Command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build -f Dockerfile.ojo . -t fossology/ojo:latest")))}p.isMDXComponent=!0}}]);