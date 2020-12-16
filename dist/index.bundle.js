module.exports=function(e){var t={};function a(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(l,r,function(t){return e[t]}.bind(null,r));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=3)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l={black:"#000000",white:"#FFFFFF",whiteFade50:"rgba(255,255,255,0.5",gray100:"#F7FAFC",gray200:"#EDF2F7",gray300:"#E2E8F0",gray400:"#CBD5E0",gray500:"#A0AEC0",gray600:"#718096",gray700:"#4A5568",gray800:"#2D3748",gray900:"#1A202C",red100:"#FFF5F5",red200:"#FED7D7",red300:"#FEB2B2",red400:"#FC8181",red500:"#F56565",red600:"#E53E3E",red700:"#C53030",red800:"#9B2C2C",red900:"#742A2A",orange100:"#FFFAF0",orange200:"#FEEBC8",orange300:"#FBD38D",orange400:"#F6AD55",orange500:"#ED8936",orange600:"#DD6B20",orange700:"#C05621",orange800:"#9C4221",orange900:"#7B341E",yellow100:"#FFFFF0",yellow200:"#FEFCBF",yellow300:"#FAF089",yellow400:"#F6E05E",yellow500:"#ECC94B",yellow600:"#D69E2E",yellow700:"#B7791F",yellow800:"#975A16",yellow900:"#744210",green100:"#F0FFF4",green200:"#C6F6D5",green300:"#9AE6B4",green400:"#68D391",green500:"#48BB78",green600:"#38A169",green700:"#2F855A",green800:"#276749",green900:"#22543D",teal100:"#E6FFFA",teal200:"#B2F5EA",teal300:"#81E6D9",teal400:"#4FD1C5",teal500:"#38B2AC",teal600:"#319795",teal700:"#2C7A7B",teal800:"#285E61",teal900:"#234E52",blue100:"#EBF8FF",blue200:"#BEE3F8",blue300:"#90CDF4",blue400:"#63B3ED",blue500:"#4299E1",blue600:"#3182CE",blue700:"#2B6CB0",blue800:"#2C5282",blue900:"#2A4365",indigo100:"#EBF4FF",indigo200:"#C3DAFE",indigo300:"#A3BFFA",indigo400:"#7F9CF5",indigo500:"#667EEA",indigo600:"#5A67D8",indigo700:"#4C51BF",indigo800:"#434190",indigo900:"#3C366B",purple100:"#FAF5FF",purple200:"#E9D8FD",purple300:"#D6BCFA",purple400:"#B794F4",purple500:"#9F7AEA",purple600:"#805AD5",purple700:"#6B46C1",purple800:"#553C9A",purple900:"#44337A",pink100:"#FFF5F7",pink200:"#FED7E2",pink300:"#FBB6CE",pink400:"#F687B3",pink500:"#ED64A6",pink600:"#D53F8C",pink700:"#B83280",pink800:"#97266D",pink900:"#702459"},r=Object.assign(Object.assign({},l),{text:l.gray800,textSecondary:l.gray600,textTertiary:l.gray500,invertedText:l.white,invertedTextSecondary:l.gray300,invertedTextTertiary:l.gray600}),n={12:".75rem",14:".875rem",16:"1rem",18:"1.125rem",20:"1.25rem",24:"1.5rem",28:"1.75rem",30:"1.875rem",32:"2rem",36:"2.25rem",40:"2.5rem",48:"3rem",64:"4rem"},o={0:"0rem",1:"1px",2:"0.125rem",4:"0.25rem",8:"0.5rem",12:"0.75rem",14:"0.875rem",16:"1rem",20:"1.25rem",24:"1.5rem",32:"2rem",40:"2.5rem",48:"3rem",64:"4rem",80:"5rem",96:"6rem",128:"8rem",160:"10rem",192:"12rem",224:"14rem",256:"16rem"},i={colors:r,fonts:{text:'"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',display:'"Barlow", system-ui,  Arial, sans-serif',mono:'"Jetbrains Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},fontSizes:Object.assign(Object.assign({},n),{small:n[14],body:n[16],large:n[20],display:n[40],displaySmall:n[24],displayLarge:n[48]}),space:Object.assign(Object.assign({},o),{none:o[0],one:o[1],small:o[8],medium:o[12],large:o[20]}),radii:{small:"5px",medium:"8px"},shadows:{small:"0px 4px 8px rgba(60,45,111,0.1), 0px 1px 3px rgba(60,45,111,0.15)"},breakpoints:{phone:"640px",tablet:"767px"},transitions:{standard:"0.1s ease-in"},buttons:{primary:{color:{default:r.invertedText,disabled:l.whiteFade50},background:{default:l.green500,hover:l.green600,active:l.green700}}}};t.default=i},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=t.Header=t.default=void 0;var r=a(0);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(r).default}});var n=a(4);Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return l(n).default}});var o=a(5);Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return l(o).default}})},function(e,t,a){"use strict";var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(a(1)),s=o(a(0)),c=o(a(2)),d=c.default.div`
  color: ${s.default.colors.gray400};
  font-weight: 600;
  font-size: ${s.default.fontSizes[14]};

  a {
    transition: color ${s.default.transitions.standard};
    padding: 0 ${s.default.space[12]};
    margin: 0 ${s.default.space[8]};
  }

  a:hover {
    color: ${s.default.colors.white};
  }

  .github {
    display: none;
  }

  @media (max-width: ${s.default.breakpoints.phone}) {
    a[href] {
      display: block;
      padding: ${s.default.space[8]} ${s.default.space[12]};
    }

    .github {
      display: block;
    }
  }
`,u=()=>i.default.createElement(d,null,i.default.createElement("a",{href:"https://www.prisma.io/docs/getting-started/quickstart-typescript"},"Quickstart"),i.default.createElement("a",{href:"https://www.prisma.io/docs/"},"Docs"),i.default.createElement("a",{href:"https://www.prisma.io/docs/about/faq"},"FAQ"),i.default.createElement("a",{href:"https://www.prisma.io/community"},"Community"),i.default.createElement("a",{href:"https://www.prisma.io/blog/"},"Blog"),i.default.createElement("a",{href:"https://github.com/prisma",className:"github"},"GitHub")),m=c.default.nav`
  position: relative;
  display: none;

  .menu {
    outline: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${s.default.fontSizes[16]};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${s.default.colors.gray300};
  }

  .list {
    display: none;
    position: absolute;
    right: 0;
    background: blue;
    text-align: right;
    padding: ${s.default.space[16]} 0;
    border-radius: 6px;
    background: ${s.default.colors.gray800};
  }

  .list[data-open="true"] {
    display: block;
  }

  @media (max-width: ${s.default.breakpoints.phone}) {
    display: block;
  }
`;class f extends i.Component{constructor(e){super(e),this.state={open:!1},this.toggle=()=>{this.setState({open:!this.state.open})},this.maybeClose=e=>{const t=e.target;this.state.open&&t instanceof HTMLElement&&(this.nav.current&&this.nav.current.contains(t)||this.setState({open:!1}))},this.nav=i.createRef()}componentDidMount(){"undefined"!=typeof window&&window.addEventListener("click",this.maybeClose)}componentWillUnmount(){"undefined"!=typeof window&&window.removeEventListener("click",this.maybeClose)}render(){return i.default.createElement(m,{ref:this.nav},i.default.createElement("button",{className:"menu",onClick:this.toggle},"menu"),i.default.createElement("div",{className:"list","data-open":this.state.open},i.default.createElement(u,null)))}}const p=c.default.nav`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.5;

  .logo {
    height: 24px;
    fill: ${s.default.colors.white};
  }

  .github {
    transition: transform ${s.default.transitions.standard};
    margin-left: ${s.default.space[24]};
  }

  .github:hover {
    transform: scale(1.2);
  }

  .github svg {
    height: 24px;
    fill: ${s.default.colors.white};
  }

  .menu {
    display: flex;
  }

  @media (max-width: ${s.default.breakpoints.phone}) {
    .menu {
      display: none;
    }

    .github {
      display: none;
    }
  }
`,h=()=>i.default.createElement(p,null,i.default.createElement("a",{href:"https://www.prisma.io/"},i.default.createElement("svg",{className:"logo",viewBox:"0 0 90 24",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"logoTitle"},i.default.createElement("title",{id:"logoTitle"},"Prisma.io"),i.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.736 11.947h.9c.842 0 1.471-.168 1.89-.502.417-.335.626-.822.626-1.462 0-.645-.175-1.122-.525-1.43-.35-.308-.899-.462-1.646-.462h-1.245v3.856zm6.179-2.061c0 1.398-.434 2.466-1.303 3.206-.867.741-2.101 1.11-3.702 1.11h-1.174v4.62H32V5.835h4.122c1.565 0 2.755.34 3.57 1.017.815.678 1.223 1.69 1.223 3.034zM48.167 8.704c.365 0 .668.027.91.08l-.203 2.54a3.08 3.08 0 00-.795-.088c-.859 0-1.528.222-2.008.666-.48.444-.72 1.066-.72 1.866v5.054H42.66V8.891h2.039l.397 1.67h.132a3.726 3.726 0 011.24-1.346c.521-.34 1.087-.51 1.7-.51zM50.505 18.822h2.692V8.891h-2.692v9.931zM50.39 6.323c0-.882.489-1.323 1.465-1.323.977 0 1.466.441 1.466 1.323 0 .421-.122.748-.366.982-.245.234-.611.35-1.1.35-.976 0-1.465-.443-1.465-1.332zM62.675 15.873c0 1.019-.352 1.795-1.055 2.328-.703.532-1.755.799-3.155.799-.719 0-1.33-.049-1.836-.147a6.904 6.904 0 01-1.421-.43v-2.24c.5.238 1.063.436 1.69.596.627.16 1.178.24 1.655.24.977 0 1.465-.284 1.465-.853a.715.715 0 00-.194-.52c-.13-.133-.353-.284-.67-.453a16.977 16.977 0 00-1.272-.59c-.759-.32-1.317-.616-1.672-.889a2.488 2.488 0 01-.777-.937c-.162-.352-.243-.786-.243-1.301 0-.883.34-1.565 1.02-2.048.68-.482 1.642-.724 2.89-.724 1.189 0 2.345.261 3.469.782l-.812 1.954a14.913 14.913 0 00-1.386-.524 4.326 4.326 0 00-1.315-.204c-.794 0-1.192.216-1.192.648 0 .243.129.454.384.631.257.178.817.441 1.682.79.77.315 1.336.608 1.695.88.358.273.623.586.794.942.17.355.256.779.256 1.27zM73.34 18.822h-2.693v-5.8c0-.717-.119-1.255-.357-1.613-.238-.358-.613-.537-1.125-.537-.689 0-1.189.254-1.5.764-.313.51-.469 1.347-.469 2.514v4.672h-2.692V8.891h2.057l.362 1.27h.15a2.741 2.741 0 011.147-1.07c.5-.258 1.074-.387 1.722-.387 1.477 0 2.477.486 3 1.457h.239c.265-.462.654-.82 1.17-1.075.514-.255 1.095-.382 1.743-.382 1.118 0 1.964.289 2.537.866.574.578.86 1.503.86 2.776v6.476h-2.7v-5.8c0-.717-.12-1.255-.358-1.613-.238-.358-.613-.537-1.125-.537-.66 0-1.152.237-1.479.71-.326.474-.49 1.226-.49 2.257v4.983zM87.326 14.22l-1.042.036c-.783.024-1.365.166-1.747.427-.383.26-.574.657-.574 1.19 0 .764.435 1.146 1.306 1.146.624 0 1.123-.18 1.496-.542.374-.361.56-.84.56-1.44v-.816zm.794 4.602l-.52-1.35h-.072c-.453.575-.919.973-1.399 1.195-.479.222-1.104.333-1.875.333-.948 0-1.693-.273-2.238-.817-.544-.545-.816-1.32-.816-2.328 0-1.054.366-1.831 1.099-2.332.733-.5 1.837-.777 3.314-.83l1.713-.053v-.436c0-1.006-.512-1.51-1.536-1.51-.789 0-1.716.24-2.78.72l-.892-1.83c1.136-.598 2.395-.898 3.778-.898 1.324 0 2.339.29 3.045.871.706.58 1.059 1.463 1.059 2.647v6.618h-1.88zM18.01 19.037L7.163 22.224a.454.454 0 01-.58-.52L10.46 3.267c.073-.345.552-.4.704-.08l7.173 15.138a.514.514 0 01-.327.713zm1.86-.752L11.562.757a1.333 1.333 0 00-1.136-.755 1.32 1.32 0 00-1.213.626l-9.009 14.5c-.279.451-.273 1.008.016 1.455l4.404 6.778a1.419 1.419 0 001.59.581l12.782-3.756c.392-.116.712-.39.88-.756a1.354 1.354 0 00-.008-1.145z"}))),i.default.createElement("div",{className:"menu"},i.default.createElement(u,null),i.default.createElement("a",{href:"https://github.com/prisma/prisma",className:"github"},i.default.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 12.03C0 5.386 5.373 0 12 0s12 5.386 12 12.03c0 5.313-3.434 9.82-8.2 11.413-.608.118-.824-.257-.824-.578l.004-.669c.004-.62.01-1.556.01-2.632 0-1.122-.383-1.854-.814-2.227 2.672-.298 5.48-1.316 5.48-5.936 0-1.313-.466-2.386-1.235-3.229.124-.303.535-1.526-.118-3.183 0 0-1.006-.323-3.297 1.233-.959-.267-1.986-.4-3.006-.405-1.02.005-2.046.138-3.004.405-2.293-1.556-3.3-1.233-3.3-1.233-.652 1.657-.241 2.88-.117 3.183-.767.843-1.236 1.916-1.236 3.23 0 4.609 2.802 5.64 5.467 5.944-.343.3-.654.831-.762 1.609-.394.177-1.136.428-1.899.259a.344.344 0 00-.133-.074.333.333 0 00-.158-.012c-.41-.152-.814-.444-1.162-.952a.32.32 0 00-.13-.205l-.01-.016s-.095-.174-.282-.391a.252.252 0 00-.07-.15.253.253 0 00-.153-.083 2.541 2.541 0 00-.45-.337.236.236 0 00-.094-.052 2.003 2.003 0 00-.79-.227s-1.171-.015-.082.731c0 0 .786.37 1.332 1.76 0 0 .705 2.148 4.043 1.42.003.546.007 1.075.011 1.491v.003l.005.745c0 .318-.22.69-.82.58A12.03 12.03 0 010 12.03zm4.507 4.912c-.076-.023-.15-.003-.173.05-.028.06.02.142.108.18.085.042.179.024.205-.036.023-.044.002-.1-.046-.142a2.114 2.114 0 00-.094-.052zm.544.39a.12.12 0 00-.093.027c-.058.054-.044.166.035.25.076.084.188.108.245.055a.12.12 0 00.036-.1 2.95 2.95 0 00-.223-.233zm.515.639c-.065-.046-.138-.057-.19-.022-.075.052-.075.18-.001.287.074.107.194.155.268.104.047-.033.064-.095.053-.164a3.58 3.58 0 01-.13-.205zm1.292 1.157c-.07.013-.126.052-.142.108-.028.096.061.206.197.247.136.04.27-.003.3-.097.017-.058-.01-.122-.064-.172a2.223 2.223 0 01-.29-.086zm-.53-.006c-.066.073-.206.053-.309-.046-.105-.097-.134-.235-.068-.307.067-.073.207-.053.31.046.105.097.137.235.067.307zm1.892.376c.003.1-.112.182-.255.183-.143.004-.26-.076-.26-.174 0-.1.112-.182.255-.184.143-.003.26.077.26.175zm.766.185c.141-.026.24-.126.224-.223-.019-.098-.146-.156-.287-.132-.14.026-.24.125-.223.225.018.096.147.155.286.13z"}))))),g=c.default.div`
  padding: 0 ${s.default.space[16]};
  display: flex;
`;t.default=()=>i.default.createElement(g,null,i.default.createElement(h,null),i.default.createElement(f,null))},function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a(1)),n=l(a(0)),o=l(a(2)).default.div`
  margin: ${n.default.space[96]} auto ${n.default.space[256]} auto;
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 0;
  padding-top: ${n.default.space[80]};
  border-top: 1px solid ${n.default.colors.gray300};
  .logo {
    height: 24px;
  }

  .column {
    flex: 2;
  }
  .four {
    flex: 3;
  }

  .column .header {
    font-weight: bold;
    font-size: ${n.default.fontSizes[16]};
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${n.default.colors.gray500};
  }

  .column .link {
    display: block;
    margin-top: ${n.default.space[24]};
    font-size: ${n.default.fontSizes[16]};
    line-height: 1;
    color: ${n.default.colors.gray500};
  }

  .column .link + .link {
    margin-top: ${n.default.space[16]};
  }

  .column .link:hover {
    color: ${n.default.colors.gray600};
  }

  .column .link:active {
    color: ${n.default.colors.gray700};
  }

  .column .group + .group {
    margin-top: ${n.default.space[48]};
  }

  .jobs .tag {
    display: inline-block;
    border-radius: 6px;
    margin-left: ${n.default.space[8]};
    padding: ${n.default.space[4]} ${n.default.space[8]};
    background: ${n.default.colors.green500};
    font-size: ${n.default.fontSizes[12]};
    font-weight: bold;
    color: white;
    transition: transform ${n.default.transitions.standard};
  }

  .jobs:hover .tag {
    transform: scale(1.05);
  }

  .jobs .tag.black {
    background: ${n.default.colors.black};
  }

  .logo {
    fill: ${n.default.colors.gray500};
  }

  .four .description {
    margin-top: ${n.default.space[16]};
    font-size: ${n.default.fontSizes[16]};
    line-height: 1.375;
    color: ${n.default.colors.gray500};
  }

  .social {
    margin-top: ${n.default.space[32]};
    display: flex;
    max-width: 100px;
  }
  .social a + a {
    margin-left: ${n.default.space[16]};
  }

  .social svg {
    width: 24px;
    height: 24px;
    transition: transform ${n.default.transitions.standard};
  }

  .social svg:hover {
    transform: scale(1.2);
  }

  .copyright {
    margin-top: ${n.default.space[32]};
    font-size: ${n.default.fontSizes[16]};
    line-height: 1;
    color: ${n.default.colors.gray500};
  }

  a.cookie-pref {
    text-decoration: underline;
    cursor: pointer;
  }

  .berlin {
    margin-top: ${n.default.space[8]};
    font-size: ${n.default.fontSizes[16]};
    line-height: 1;
    color: ${n.default.colors.gray500};
  }

  @media (max-width: ${n.default.breakpoints.tablet}) {
    margin-top: ${n.default.space[48]};
    margin-bottom: ${n.default.space[48]};
    flex-direction: column;
    padding: 0 24px;

    .column {
      margin-top: ${n.default.space[48]};
    }

    .column .group + .group {
      margin-top: ${n.default.space[48]};
    }
  }
`;t.default=({newsletterComponent:e})=>r.default.createElement(o,null,r.default.createElement("div",{className:"column one"},r.default.createElement("img",{src:"https://images2.prisma.io/footer-logo.png",alt:"Prisma Logo",style:{width:"90px",height:"24px"}})),r.default.createElement("div",{className:"column two"},r.default.createElement("div",{className:"group"},r.default.createElement("h3",{className:"header"},"Products"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client"},"Prisma Client"),r.default.createElement("a",{className:"link",href:"https://app.prisma.io/login"},"Prisma 1 Cloud")),r.default.createElement("div",{className:"group"},r.default.createElement("h3",{className:"header"},"Resources"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/docs/"},"Docs"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/docs/getting-started/quickstart-typescript"},"Get Started"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/generating-prisma-client"},"API Reference"),r.default.createElement("a",{className:"link",href:"https://github.com/prisma/prisma-examples"},"Examples"),r.default.createElement("a",{className:"link",href:"https://www.howtographql.com/"},"How to GraphQL"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/dataguide/"},"Data Guide"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/nextjs"},"Prisma with Next.js"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/graphql"},"Prisma with GraphQL"),r.default.createElement("a",{className:"link",href:"/apollo"},"Prisma with Apollo"),r.default.createElement("a",{className:"link",href:"/nestjs"},"Prisma with NestJS"),r.default.createElement("a",{className:"link",href:"/express"},"Prisma with Express"),r.default.createElement("a",{className:"link",href:"/hapi"},"Prisma with hapi"))),r.default.createElement("div",{className:"column three"},r.default.createElement("div",{className:"group"},r.default.createElement("h3",{className:"header"},"Community"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/community"},"Meet the Community"),r.default.createElement("a",{className:"link",href:"https://slack.prisma.io/"},"Slack"),r.default.createElement("a",{className:"link",href:"https://github.com/prisma"},"GitHub"),r.default.createElement("a",{className:"link",href:"https://github.com/prisma/prisma/discussions"},"Discussions"),r.default.createElement("a",{className:"link",href:"https://www.meetup.com/graphql-berlin/"},"GraphQL Meetup"),r.default.createElement("a",{className:"link",href:"https://www.meetup.com/TypeScript-Berlin/"},"TypeScript Meetup"),r.default.createElement("a",{className:"link",href:"https://www.meetup.com/advanced-typescript-trickery/",rel:"norefferer noopener",target:"_blank"},"Advanced TypeScript Trickery")),r.default.createElement("div",{className:"group"},r.default.createElement("h3",{className:"header"},"Company"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/about"},"About"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/jobs"},"Jobs"),r.default.createElement("a",{className:"link jobs",href:"https://www.notion.so/prismaio/What-Prisma-Cares-About-32946d99f9ea4925a796663dc8945c42"},"Causes ",r.default.createElement("span",{className:"tag black"},"Black Lives Matter")),r.default.createElement("a",{className:"link",href:"/blog/"},"Blog"),r.default.createElement("a",{className:"link",href:"https://pris.ly/privacy"},"Terms & Privacy"),r.default.createElement("a",{className:"link",href:"https://www.prisma.io/sitemap"},"HTML Sitemap"))),r.default.createElement("div",{className:"column four"},r.default.createElement("div",{className:"group"},r.default.createElement("h3",{className:"header"},"Newsletter"),r.default.createElement("p",{className:"description"},"Stay up to date with the latest features and changes to Prisma"),e),r.default.createElement("div",{className:"group"},r.default.createElement("h3",{className:"header"},"Find Us"),r.default.createElement("div",{className:"social"},r.default.createElement("a",{href:"https://twitter.com/prisma"},r.default.createElement("svg",{viewBox:"0 0 24 20 ",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"footerIconTwitter"},r.default.createElement("title",{id:"footerIconTwitter"},"Find us on Twitter"),r.default.createElement("path",{d:"M23 1.01a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0023 1.01v0z",stroke:n.default.colors.gray500,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),r.default.createElement("a",{href:"https://www.youtube.com/prismadata"},r.default.createElement("svg",{viewBox:"0 0 25 18",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"footerIconYT"},r.default.createElement("title",{id:"footerIconYT"},"Find us on YouTube"),r.default.createElement("path",{d:"M22.54 3.42a2.78 2.78 0 00-1.94-2C18.88 1 12 1 12 1s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 8.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 16c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2c.313-1.732.467-3.49.46-5.25a29.005 29.005 0 00-.46-5.33v0z",stroke:n.default.colors.gray500,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.default.createElement("path",{d:"M9.75 12.02l5.75-3.27-5.75-3.27v6.54z",stroke:n.default.colors.gray500,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),r.default.createElement("a",{href:"https://slack.prisma.io/"},r.default.createElement("svg",{viewBox:"0 0 26 26",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"footerIconSlack"},r.default.createElement("title",{id:"footerIconSlack"},"Join us on Slack"),r.default.createElement("path",{d:"M16 10.6c-.996 0-1.8-.804-1.8-1.8v-6c0-.996.804-1.8 1.8-1.8s1.8.804 1.8 1.8v6c0 .996-.804 1.8-1.8 1.8zM23.2 10.6h-1.8V8.8c0-.996.804-1.8 1.8-1.8s1.8.804 1.8 1.8-.804 1.8-1.8 1.8zM10 15.4c.996 0 1.8.804 1.8 1.8v6c0 .996-.804 1.8-1.8 1.8s-1.8-.804-1.8-1.8v-6c0-.996.804-1.8 1.8-1.8zM2.8 15.4h1.8v1.8c0 .996-.804 1.8-1.8 1.8S1 18.196 1 17.2s.804-1.8 1.8-1.8zM15.4 16c0-.996.804-1.8 1.8-1.8h6c.996 0 1.8.804 1.8 1.8s-.804 1.8-1.8 1.8h-6c-.996 0-1.8-.804-1.8-1.8zM17.2 21.4h-1.8v1.8c0 .996.804 1.8 1.8 1.8s1.8-.804 1.8-1.8-.804-1.8-1.8-1.8zM10.6 10c0-.996-.804-1.8-1.8-1.8h-6C1.804 8.2 1 9.004 1 10s.804 1.8 1.8 1.8h6c.996 0 1.8-.804 1.8-1.8zM8.8 4.6h1.8V2.8c0-.996-.804-1.8-1.8-1.8S7 1.804 7 2.8s.804 1.8 1.8 1.8z",stroke:n.default.colors.gray500,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),r.default.createElement("a",{href:"https://github.com/prisma"},r.default.createElement("svg",{viewBox:"0 0 25 26",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"footerIconGH"},r.default.createElement("title",{id:"footerIconGH"},"Find us on GitHub"),r.default.createElement("path",{d:"M8.99 21.576C3.283 23.288 3.283 18.722 1 18.152M16.98 25v-4.417a3.847 3.847 0 00-1.073-2.98c3.584-.399 7.35-1.757 7.35-7.99a6.21 6.21 0 00-1.712-4.28 5.787 5.787 0 00-.103-4.302S20.096.63 16.98 2.72a15.272 15.272 0 00-7.99 0C5.874.63 4.527 1.03 4.527 1.03a5.787 5.787 0 00-.103 4.304 6.21 6.21 0 00-1.712 4.314c0 6.187 3.767 7.545 7.35 7.99a3.847 3.847 0 00-1.072 2.945V25",stroke:n.default.colors.gray500,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))),r.default.createElement("p",{className:"copyright"},"Prisma © 2018-2020."),r.default.createElement("p",{className:"berlin"},"Made with ❤️ in Berlin and worldwide"))))}]);
//# sourceMappingURL=index.bundle.js.map