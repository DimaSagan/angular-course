import{$ as n}from"./chunk-LNWTT475.js";var p=(()=>{let t=class t{transform(e){if(e===null)return"";let i=Math.floor(e/60).toString(),o=(e%60).toString().padStart(2,"0");return`${i}h ${o}m`}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=n({name:"timeFormat",type:t,pure:!0,standalone:!0});let r=t;return r})();var c=(()=>{let t=class t{transform(e){return e.toFixed(1)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=n({name:"rateFormat",type:t,pure:!0,standalone:!0});let r=t;return r})();export{p as a,c as b};