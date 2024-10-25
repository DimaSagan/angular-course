import{a as V}from"./chunk-EBUZOJG7.js";import{a as z,d as F}from"./chunk-EXEYFWHK.js";import{$ as M,Ab as R,Ba as p,Da as v,Eb as I,Fc as A,Ha as m,Ja as T,Ka as P,La as s,Ma as a,Na as l,Ra as O,Sa as c,Ta as x,Tb as E,Y as d,bb as y,cb as S,da as B,ea as w,gb as f,ka as g,mb as N,mc as L,nb as k,qc as C,ra as r,rc as D,sa as _,sc as j,tc as $,za as b}from"./chunk-XM22MK7S.js";function G(o,e){o&1&&l(0,"i",1)}function H(o,e){o&1&&l(0,"i",2)}function J(o,e){o&1&&l(0,"i",4)}function K(o,e){o&1&&l(0,"i",5)}var Z=(()=>{let e=class e{constructor(){this.sortByRating=new g,this.sortByTitle=new g,this.sortButtonByRateType=!0,this.sortButtonByTitleType=!0}ngOnInit(){}sortMoviesByRating(){this.sortByRating.emit(),this.sortButtonByRateType=!this.sortButtonByRateType}sortMoviesByTitle(){this.sortByTitle.emit(),this.sortButtonByTitleType=!this.sortButtonByTitleType}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-sort-bar"]],outputs:{sortByRating:"sortByRating",sortByTitle:"sortByTitle"},standalone:!0,features:[f],decls:8,vars:4,consts:[["title","Sort by rate",3,"click"],[1,"pi","pi-sort-amount-up"],[1,"pi","pi-sort-amount-up-alt"],["title","Sort A-Z",3,"click"],[1,"pi","pi-sort-alpha-up"],[1,"pi","pi-sort-alpha-up-alt"]],template:function(t,n){t&1&&(s(0,"div")(1,"button",0),c("click",function(){return n.sortMoviesByRating()}),p(2,G,1,0,"i",1)(3,H,1,0,"i",2),a(),s(4,"button",3),c("click",function(){return n.sortMoviesByTitle()}),p(5,J,1,0,"i",4)(6,K,1,0,"i",5),a(),l(7,"p"),a()),t&2&&(r(2),m(2,n.sortButtonByRateType?2:-1),r(),m(3,n.sortButtonByRateType?-1:3),r(2),m(5,n.sortButtonByTitleType?5:-1),r(),m(6,n.sortButtonByTitleType?-1:6))},styles:["div[_ngcontent-%COMP%]{display:flex;gap:10px}div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;color:#fff}div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}"]});let o=e;return o})();var q=(()=>{let e=class e{transform(i){let t="";return i&&(t=i.replaceAll("_"," ")),t}};e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=M({name:"titleTransform",type:e,pure:!0,standalone:!0});let o=e;return o})();var Q=(o,e)=>e.id;function W(o,e){if(o&1&&l(0,"app-primeng-movie-card",3),o&2){let u=e.$implicit;v("mov",u)}}function X(o,e){if(o&1){let u=O();s(0,"button",5),c("click",function(){B(u);let t=x();return w(t.showMore())}),s(1,"span"),y(2,"show more"),l(3,"i",6),a()()}}var ut=(()=>{let e=class e extends A{constructor(i,t){super(),this.activatedRoute=i,this.store=t,this.data=[],this.sorted=!1,this.currentPage=2,this.showMoreSwitcher=!1}ngOnInit(){if(console.log(this.activatedRoute.routeConfig?.path),this.listName=this.activatedRoute.routeConfig?.path,(this.listName==="watchlist"||this.listName==="favorite")&&(this.showMoreSwitcher=!0),this.listName!=="favorite"&&this.listName!=="watchlist"&&this.listName){let i=sessionStorage.getItem(`${this.listName}`);this.currentPage=i?Number(i):2,this.loadMovieListIfNeeded(this.listName)}}getMovieList(i){this.store.dispatch(z({listName:i}))}loadMovieListIfNeeded(i){let t=this.store.select(C);switch(i){case"now_playing":t=this.store.select(C);break;case"popular":t=this.store.select(D);break;case"top_rated":t=this.store.select(j);break;case"upcoming":t=this.store.select($);break}t.subscribe(n=>{n.length===0&&this.getMovieList(i)})}trackById(i,t){return t.id}sortByRating(){this.data&&(this.sorted?(this.data=[...this.data].sort((i,t)=>i.vote_average-t.vote_average),this.sorted=!1):(this.data=[...this.data].sort((i,t)=>t.vote_average-i.vote_average),this.sorted=!0))}sortByTitle(){this.data&&(this.sorted?(this.data=[...this.data].sort((i,t)=>t.title.localeCompare(i.title)),this.sorted=!1):(this.data=[...this.data].sort((i,t)=>i.title.localeCompare(t.title)),this.sorted=!0))}showMore(){let i=this.listName;this.listName&&["now_playing","upcoming","top_rated","popular"].includes(this.listName)?(this.store.dispatch(F({listName:i,pageNumber:this.currentPage})),this.currentPage++,sessionStorage.setItem(`${this.listName}`,this.currentPage.toString()),console.log("page number",this.currentPage)):console.error("Invalid list name:",this.listName)}};e.\u0275fac=function(t){return new(t||e)(_(E),_(L))},e.\u0275cmp=d({type:e,selectors:[["app-movie-list"]],inputs:{data:"data"},standalone:!0,features:[b,f],decls:9,vars:4,consts:[[1,"header"],[3,"sortByRating","sortByTitle"],[1,"content"],[3,"mov"],["class","show-more-button",3,"click",4,"ngIf"],[1,"show-more-button",3,"click"],[1,"pi","pi-arrow-circle-down"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"h1"),y(2),N(3,"titleTransform"),a(),s(4,"app-sort-bar",1),c("sortByRating",function(){return n.sortByRating()})("sortByTitle",function(){return n.sortByTitle()}),a()(),s(5,"div",2),T(6,W,1,1,"app-primeng-movie-card",3,Q),a(),p(8,X,4,0,"button",4)),t&2&&(r(2),S(k(3,2,n.listName)),r(4),P(n.data),r(2),v("ngIf",!n.showMoreSwitcher))},dependencies:[I,R,V,Z,q],styles:['.header[_ngcontent-%COMP%]{width:100%;display:flex;padding:1.25rem 0;justify-content:space-between}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:25px;font-weight:500;letter-spacing:1px;text-transform:capitalize;flex-grow:1;display:flex;text-wrap:nowrap;align-items:center;gap:.3125rem}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after{content:"";width:100%;height:1.5px;background:#fffcfc;background:linear-gradient(90deg,#fffcfceb 33%,#fff0);display:block}.content[_ngcontent-%COMP%]{width:100%;display:grid;gap:.625rem;grid-template-columns:repeat(auto-fill,minmax(185px,1fr));grid-auto-rows:1fr}@media (min-width: 61.93625em){.content[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.9375rem}}.content[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.625em}.show-more-button[_ngcontent-%COMP%]{width:100%;position:relative;background:#07070700;padding:2.5rem 0;transition:.5s}.show-more-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-transform:capitalize;display:flex;justify-content:center;gap:.3125rem;align-items:center;flex-shrink:1;color:#fff;position:relative;z-index:1;transition:.5s ease;font-size:1.25rem;font-weight:500}.show-more-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.25rem;transition:.5s ease-in}.show-more-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{transform:scale(1.1)}.show-more-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:rotate(360deg)}.show-more-button[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{transform:scale(1.05)}']});let o=e;return o})();export{ut as a};
