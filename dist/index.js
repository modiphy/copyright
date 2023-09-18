(()=>{"use strict";const t={color:"inherit",companyName:"Company Name, LLC",logoColor:"currentColor",logoHeight:"1.25em",logoMargin:"0 0 0 0.3em",pipeColor:"inherit",pipeOpacity:.5,pipeMargin:"0 0.5em"};function n(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0 0.5em";return'\n    <span style="color: '.concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"inherit","; opacity: ").concat(t,"; margin: ").concat(n,';">|</span>\n  ')}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function c(t,n){for(var c=0;c<n.length;c++){var i=n[c];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,r=void 0,r=function(t,n){if("object"!==e(t)||null===t)return t;var c=t[Symbol.toPrimitive];if(void 0!==c){var i=c.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(o,"string"),"symbol"===e(r)?r:String(r)),i)}var o,r}function i(t,n,e){return n&&c(t.prototype,n),e&&c(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=i((function e(c){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=c,this.settings=function(t,n){return Object.assign({},t,n)}(t,i),this.container=document.querySelector(this.selector),this.currentYear=(new Date).getFullYear(),this.companyName=this.settings.companyName,this.container.style.display="inline-flex",this.container.style.alignItems="center",this.container.style.flexWrap="wrap",this.container.style.color=this.settings.color,this.container.innerHTML="\n      <span>©".concat(this.currentYear," ").concat(this.companyName,"</span>\n      ").concat(n(this.settings.pipeColor,this.settings.pipeOpacity,this.settings.pipeMargin),"\n      <span>All rights reserved</span>\n      ").concat(n(this.settings.pipeColor,this.settings.pipeOpacity,this.settings.pipeMargin),'\n      <span>Built by</span>\n      <a href="https://www.modiphy.com" title="MODIPHY® DESIGN" style="color: inherit;">').concat(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"currentColor",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1.25em";return'\n    <svg\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 1527.01 373.27"\n    style="display: block; vertical-align: middle; width:auto; margin: '.concat(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0 0 0 0.3em",";height:").concat(n,";fill:").concat(t,';"\n  >\n    <title>MODIPHY® DESIGN</title>\n    <path d="m1502.08,230.03c5.49,0,10.61,2.11,14.41,5.92,3.81,3.83,5.91,9,5.9,14.57,0,11.56-8.99,20.61-20.49,20.61s-20.61-9.06-20.61-20.63c.01-11.48,9.14-20.47,20.78-20.47h0Zm0-4.62c-14.19,0-25.39,11-25.4,25.08,0,14.08,11.19,25.26,25.23,25.26h.04c14.04,0,25.07-11.16,25.07-25.23.01-14.07-11.03-25.1-24.93-25.11h0Z" />\n    <path d="m1511.19,257.48c-1.15-1.85-2.08-3.17-2.77-3.91-.5-.53-1.09-1.04-1.77-1.51,1.67-.39,2.98-1.1,3.9-2.13,1.11-1.23,1.67-2.8,1.67-4.67,0-1.47-.37-2.8-1.1-3.95-.73-1.16-1.73-1.98-2.96-2.43-1.19-.44-3.09-.66-5.66-.66h-10.47v24.5h5.59v-9.89h.57c1.05,0,1.81.08,2.28.25.44.15.87.45,1.28.88.43.46,1.27,1.61,2.48,3.43l3.58,5.33h6.67l-3.28-5.24Zm-13.56-14.44h3.33c2.37,0,3.18.04,3.42.08.69.11,1.2.38,1.56.79.36.42.54.97.54,1.67,0,.63-.14,1.15-.41,1.55-.28.4-.65.68-1.14.85-.37.12-1.38.27-4.17.27h-3.14v-5.2Z" />\n    <path d="m243.78,80.52c-27.17,0-45.3,18.07-52.03,39.35-.34,1.08-1.33,1.83-2.46,1.83h-3.53c-1.14,0-2.13-.74-2.49-1.82-7.39-21.95-25.63-39.36-56.4-39.36-27.84,0-45.63,18.37-51.36,39.29-.31,1.12-1.35,1.89-2.51,1.89h-2.7c-1.45,0-2.62-1.17-2.62-2.62v-31.16c0-1.45-1.17-2.62-2.62-2.62H2.62C1.17,85.3,0,86.47,0,87.92v16.35c0,1.4,1.1,2.53,2.49,2.61,10.42.6,19.2,5.29,19.2,22.16h.01v144.09c0,1.45,1.17,2.62,2.62,2.62h40.72c1.45,0,2.62-1.17,2.62-2.62v-108.05c0-23.16,15.07-40.44,36.77-40.44s37.13,15.81,37.13,38.6v109.88c0,1.45,1.17,2.62,2.62,2.62h40.72c1.45,0,2.62-1.17,2.62-2.62v-108.05c0-26.45,17.9-43.28,42.29-40.04,17.54,2.33,30.51,17.53,30.51,35.22v112.87c0,1.45,1.17,2.62,2.62,2.62h40.72c1.45,0,2.62-1.17,2.62-2.62v-126.06c0-35.29-20.59-66.55-62.5-66.55Z" />\n    <path d="m434.62,80.52c-59.19,0-102.21,42.28-102.21,100s43.02,100,102.21,100,102.21-41.91,102.21-100-45.59-100-102.21-100Zm0,158.09c-31.25,0-55.52-22.43-55.52-58.09s24.27-58.09,55.52-58.09,55.52,23.9,55.52,58.09-24.27,58.09-55.52,58.09Z" />\n    <path d="m682.24,2.62v16.35c0,1.4,1.1,2.53,2.49,2.61,10.42.6,19.2,5.29,19.2,22.16h.1v75.34c0,1.45-1.17,2.62-2.62,2.62h-2.87c-1.12,0-2.09-.71-2.47-1.76-7.89-21.64-29.28-39.42-60.42-39.42-48.9,0-83.46,43.38-83.46,100s34.19,100,83.46,100c31.19,0,52.6-14.69,60.12-39.28.34-1.12,1.35-1.89,2.52-1.89h3.13c1.45,0,2.62,1.17,2.62,2.62v31.16c0,1.45,1.17,2.62,2.62,2.62h40.35c1.45,0,2.62-1.17,2.62-2.62V2.62c0-1.45-1.17-2.62-2.62-2.62h-62.14c-1.45,0-2.62,1.17-2.62,2.62Zm-29.68,235.99c-30.15,0-53.68-22.79-53.68-58.09s23.53-58.09,53.68-58.09,53.31,22.06,53.31,58.09c0,33.46-23.16,58.09-53.31,58.09Z" />\n    <rect x="786.49" y="5.15" width="46.69" height="50" rx="2.62" ry="2.62" />\n    <rect x="786.86" y="85.3" width="45.96" height="190.45" rx="2.62" ry="2.62" />\n    <path d="m982.97,80.52c-27.26,0-50.33,14.7-58.26,39.32-.35,1.1-1.35,1.86-2.51,1.86h-3.16c-1.45,0-2.62-1.17-2.62-2.62v-31.16c0-1.45-1.17-2.62-2.62-2.62h-40.35c-1.45,0-2.62,1.17-2.62,2.62v243.39c-.71,15.17-9.17,19.5-19.14,20.07-1.4.08-2.5,1.21-2.5,2.61v16.34c0,1.45,1.17,2.62,2.62,2.62h61.99c1.45,0,2.62-1.17,2.62-2.62v-128.37c0-1.45,1.17-2.62,2.62-2.62h2.84c1.13,0,2.12.73,2.49,1.8,8.5,24.66,29.52,39.38,58.6,39.38,51.47,0,85.3-43.38,85.3-100s-33.82-100-85.3-100Zm-15.07,158.09c-28.68,0-53.31-22.06-53.31-58.09,0-33.46,23.16-58.09,53.31-58.09s53.68,22.79,53.68,58.09-23.53,58.09-53.68,58.09Z" />\n    <path d="m1203.34,80.52c-26.85,0-46.03,15.68-52.79,39.24-.33,1.14-1.34,1.93-2.53,1.93h-2.73c-1.45,0-2.62-1.17-2.62-2.62V2.62c0-1.45-1.17-2.62-2.62-2.62h-43.34v.06h-19.06c-1.45,0-2.62,1.17-2.62,2.62v16.34c0,1.4,1.1,2.53,2.5,2.61,10.2.59,18.82,5.1,19.18,21.12v230.36c0,1.45,1.17,2.62,2.62,2.62h40.72c1.45,0,2.62-1.17,2.62-2.62v-108.05c0-23.16,16.18-40.44,40.07-40.44,22.06,0,38.24,16.18,38.24,38.6v109.88c0,1.45,1.17,2.62,2.62,2.62h40.72c1.45,0,2.62-1.17,2.62-2.62v-126.06c0-35.29-21.32-66.55-63.61-66.55Z" />\n    <path d="m1450.16,87.08l-49.16,145.34c-.36,1.06-1.36,1.78-2.48,1.78h-4.02c-1.1,0-2.08-.68-2.46-1.71l-53.64-145.48c-.38-1.03-1.36-1.71-2.46-1.71h-56.45c-1.45,0-2.62,1.17-2.62,2.62v16.35c0,1.4,1.1,2.53,2.49,2.61,10.36.6,19.01,5.29,25.28,22.16h0l53.93,145c.38,1.03,1.36,1.71,2.46,1.71h16.87c1.82,0,3.08,1.8,2.46,3.51l-32.72,90.21c-.62,1.7.64,3.5,2.45,3.51l46.78.29c1.12,0,2.12-.7,2.49-1.75l33.75-95.77,65.66-183.77c.1-.28.15-.58.15-.88v-3.18c0-1.45-1.17-2.62-2.62-2.62h-43.67c-1.12,0-2.12.72-2.48,1.78Z" />\n  </svg>\n  ')}(this.settings.logoColor,this.settings.logoHeight,this.settings.logoMargin),"</a>\n    ")}));window.addCopyright=function(t,n){new o(t,n)}})();