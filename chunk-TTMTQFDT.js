import{a as P}from"./chunk-TPZMI3WE.js";import{a as j}from"./chunk-AJHQIYSA.js";import"./chunk-BZOGU3KS.js";import{E as M,ga as O}from"./chunk-KT3R54X4.js";import"./chunk-FJD7T3QK.js";import{Ab as b,Cc as F,Da as a,Fb as C,Gb as g,Gc as D,Hc as $,L as n,La as d,Ma as l,Na as v,Y as p,gb as f,ib as h,mb as u,nb as y,oc as I,ra as m,sa as r,za as c}from"./chunk-7HUVPVHK.js";var A=s=>({visible:s}),G=(()=>{let e=class e extends ${constructor(i,t,o){super(),this.store=i,this.auth=t,this.authDb=o,this.visible=!1,this.favorite$=this.store.select(F).pipe(n(this.destroy$))}ngOnInit(){this.store.select(D).pipe(n(this.destroy$)).subscribe(i=>{i&&(this.userId=i,this.store.dispatch(M({userId:this.userId})),this.visible=!this.visible)})}};e.\u0275fac=function(t){return new(t||e)(r(I),r(O),r(P))},e.\u0275cmp=p({type:e,selectors:[["app-favorites-page"]],standalone:!0,features:[c,f],decls:3,vars:6,consts:[[3,"ngClass"],[3,"data"]],template:function(t,o){t&1&&(d(0,"div",0),v(1,"app-movie-list",1),u(2,"async"),l()),t&2&&(a("ngClass",h(4,A,o.visible)),m(),a("data",y(2,2,o.favorite$)))},dependencies:[j,g,b,C],styles:["div[_ngcontent-%COMP%]{opacity:0;transition:opacity .5s .1s}div.visible[_ngcontent-%COMP%]{opacity:1}"]});let s=e;return s})();export{G as FavoritesPageComponent};