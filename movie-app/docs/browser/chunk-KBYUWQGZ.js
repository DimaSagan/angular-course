import{a as Z}from"./chunk-EBUZOJG7.js";import"./chunk-EXEYFWHK.js";import"./chunk-VGI2ZXZI.js";import{Da as p,Db as A,Eb as E,Ia as H,Ja as w,Ka as C,La as a,Ma as r,Na as c,Sa as V,Ta as B,Wb as O,Xa as D,Y as v,_ as k,bb as m,cb as y,gb as M,hb as R,ib as h,ja as S,mb as P,mc as U,na as x,nb as b,qc as Y,ra as s,rc as F,s as f,sa as g,sb as L,sc as W,tc as z,wa as N,xa as $,yb as j}from"./chunk-XM22MK7S.js";var ee=(o,i)=>i.id,te=o=>["/",o];function ne(o,i){if(o&1&&(a(0,"swiper-slide"),c(1,"app-primeng-movie-card",10),r()),o&2){let _=i.$implicit;s(),p("mov",_)}}var q=(()=>{let i=class i{constructor(){this.swiperConfig={breakpoints:{992:{slidesPerView:5.5},767.98:{slidesPerView:3.5},320:{slidesPerView:2.5,spaceBetween:10}}},this.movies=null,this.listLink=this.fullListLink}ngOnInit(){}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=v({type:i,selectors:[["app-swiper"]],inputs:{movies:"movies",fullListLink:"fullListLink"},standalone:!0,features:[M],decls:14,vars:4,consts:[[1,"swiper"],["space-between","20","speed","500","navigation-next-el",".next","navigation-prev-el",".prev",3,"breakpoints"],[1,"swiper__link"],["routerLinkActive","active-link",1,"swiper__link-item",3,"routerLink"],[1,"pi","pi-arrow-circle-right"],["src","../../../assets/img/oppenheimer.webp","alt",""],[1,"prev"],[1,"pi","pi-chevron-left"],[1,"next"],[1,"pi","pi-chevron-right"],[3,"mov"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"swiper-container",1),w(2,ne,2,1,"swiper-slide",null,ee),a(4,"swiper-slide",2)(5,"a",3)(6,"span"),c(7,"i",4),m(8,"show more"),r(),c(9,"img",5),r()()(),a(10,"button",6),c(11,"i",7),r(),a(12,"button",8),c(13,"i",9),r()()),t&2&&(s(),p("breakpoints",e.swiperConfig.breakpoints),s(),C(e.movies),s(3),p("routerLink",h(2,te,e.fullListLink)))},dependencies:[Z,E,O],styles:[".swiper[_ngcontent-%COMP%]{position:relative}@media (max-width: 47.99875em){.swiper[_ngcontent-%COMP%]{margin-right:-15px}}.swiper__link-item[_ngcontent-%COMP%]{position:relative;cursor:pointer;background-color:#0000002e;transition:.3s}.swiper__link-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.25rem;color:#fff;display:inline-flex;flex-direction:column;gap:.3125rem;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:.3s}.swiper__link-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.875rem}.swiper__link-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;aspect-ratio:304/456;opacity:0}.swiper__link-item[_ngcontent-%COMP%]:hover{background-color:#00000042}.swiper__link-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:orange}.swiper__link-item[_ngcontent-%COMP%]:active{background-color:#00000012}.swiper__link-item[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{color:#ff7300}swiper-slide[_ngcontent-%COMP%]{transition:.8s}@media (any-hover: hover){swiper-slide[_ngcontent-%COMP%]:hover{transform:scale(.96)}}.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:1;border-radius:50%;width:1.875rem;height:1.875rem}@media (max-width: 61.93625em){.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{display:none}}.prev[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:scale(1.3)}.prev[_ngcontent-%COMP%]{left:-2.5rem}.next[_ngcontent-%COMP%]{right:-2.5rem}"]});let o=i;return o})();var ie=(o,i)=>i.id,oe=o=>["/movie",o];function re(o,i){if(o&1&&(a(0,"swiper-slide",2)(1,"div",10)(2,"div",11)(3,"div",12)(4,"h2",13),m(5),r(),a(6,"a",14),m(7,"Watch Now "),c(8,"i",15),r(),a(9,"p",16),m(10),r()()(),a(11,"div",17),c(12,"img",18),r()()()),o&2){let _=i.$implicit,n=B();s(5),y(_.title),s(),p("routerLink",h(4,oe,_.id)),s(4),y(_.overview),s(2),p("src",n.backdropPath+_.backdrop_path,x)}}var G=(()=>{let i=class i{constructor(n,t){this.cd=n,this.ngZone=t,this.movies=[],this.backdropPath="https://image.tmdb.org/t/p/original",this.minCouterNumber=1,this.maxCouterNumber=1}ngOnInit(){this.movies&&(this.maxCouterNumber=this.movies.length)}ngAfterViewInit(){}upCounterNumber(){this.minCouterNumber++,this.cd.detectChanges(),console.log("+")}downCounterNumber(){this.minCouterNumber--}};i.\u0275fac=function(t){return new(t||i)(g(L),g($))},i.\u0275cmp=v({type:i,selectors:[["app-swiper-hero"]],inputs:{movies:"movies"},standalone:!0,features:[M],decls:17,vars:2,consts:[[1,"swiper"],["space-between","50","speed","800","navigation-next-el",".next","navigation-prev-el",".prev","slides-per-view","1",1,"my-swiper",3,"swiperslidenexttransitionend","swiperslideprevtransitionend"],[1,"swiper-slide"],[1,"swiper__action"],[1,"swiper__action-buttons"],[1,"prev"],[1,"pi","pi-chevron-left"],[1,"next"],[1,"pi","pi-chevron-right"],[1,"swiper__action-counter"],[1,"swiper-slide__wrapper"],[1,"swiper-slide__subscription"],[1,"swiper-slide__subscription-wrapper"],[1,"swiper-slide__title"],[1,"swiper-slide__link",3,"routerLink"],[1,"pi","pi-video"],[1,"swiper-slide__overview"],[1,"swiper-slide__img"],["alt","poster",3,"src"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"swiper-container",1),V("swiperslidenexttransitionend",function(){return e.upCounterNumber()})("swiperslideprevtransitionend",function(){return e.downCounterNumber()}),w(2,re,13,6,"swiper-slide",2,ie),r(),a(4,"div",3)(5,"div",4)(6,"button",5),c(7,"i",6),r(),a(8,"button",7),c(9,"i",8),r()(),a(10,"div",9)(11,"span"),m(12),r(),a(13,"span"),m(14,"/"),r(),a(15,"span"),m(16),r()()()()),t&2&&(s(2),C(e.movies),s(10),y(e.minCouterNumber),s(4),y(e.maxCouterNumber))},dependencies:[O],styles:['.swiper[_ngcontent-%COMP%]{position:relative}@media (max-width: 47.99875em){.swiper[_ngcontent-%COMP%]{margin:0 -.9375rem}}.swiper__action[_ngcontent-%COMP%]{position:absolute;left:20px;bottom:20px;z-index:12;display:flex;align-items:center;gap:.9375rem}@media (max-width: 47.99875em){.swiper__action[_ngcontent-%COMP%]{display:none}}.swiper__action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;width:2.1875rem;height:2.1875rem;border-radius:50%}.swiper__action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){margin-right:.625rem}.swiper__action-counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:20px;color:#fff;font-weight:500}.swiper-slide[_ngcontent-%COMP%]{background:#1c1c1c;position:relative}.swiper-slide__wrapper[_ngcontent-%COMP%]{display:flex}.swiper-slide__subscription[_ngcontent-%COMP%]{color:#fff;position:absolute;top:50%;transform:translateY(-50%);z-index:1}.swiper-slide__subscription-wrapper[_ngcontent-%COMP%]{width:100%;padding-left:1.25rem}.swiper-slide__title[_ngcontent-%COMP%]{font-size:clamp(1.25rem,.656rem + 2.97vw,3.625rem);font-weight:600}.swiper-slide__title[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.72em}.swiper-slide__link[_ngcontent-%COMP%]{background-color:#fff;color:#000;font-size:clamp(1.125rem,1.016rem + .55vw,1.563rem);font-weight:500;padding:.5rem .625rem;box-shadow:.3125rem .3125rem .3125rem #0004;border-radius:.9375rem;transform-origin:0 center;transition:all .4s;display:inline-flex;align-items:center;gap:.3125rem}.swiper-slide__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:clamp(1.125rem,1.016rem + .55vw,1.563rem)}.swiper-slide__link[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.swiper-slide__link[_ngcontent-%COMP%]:active{transform:scale(1.02);background-color:#d1d1d1}.swiper-slide__link[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.9em}.swiper-slide__overview[_ngcontent-%COMP%]{max-width:37.5rem;text-align:justify;font-size:1.125rem;line-height:1.16;position:relative;background-color:#00000074;padding:1.25rem;margin-left:-1.25rem}@media (max-width: 47.99875em){.swiper-slide__overview[_ngcontent-%COMP%]{display:none}}.swiper-slide__img[_ngcontent-%COMP%]{width:100%;max-height:50rem}.swiper-slide__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;aspect-ratio:16/9;object-fit:cover}.swiper-slide[_ngcontent-%COMP%]:after{content:"";width:210%;height:100%;position:absolute;top:0;left:0;background:#fff;background:radial-gradient(circle,#fff0 26%,#0000005e)}']});let o=i;return o})();var J=(()=>{let i=class i{constructor(n){this.el=n,this.rootMargin="0px",this.threshold=.1}ngOnInit(){let n={root:null,rootMargin:this.rootMargin,threshold:this.threshold};new IntersectionObserver(e=>{e.forEach(l=>{l.isIntersecting&&this.el.nativeElement.classList.add("in-view")})},n).observe(this.el.nativeElement)}};i.\u0275fac=function(t){return new(t||i)(g(S))},i.\u0275dir=k({type:i,selectors:[["","appIntersectionObserver",""]],inputs:{rootMargin:"rootMargin",threshold:"threshold"},standalone:!0});let o=i;return o})();var K=(()=>{let i=class i{constructor(n,t){this.renderer=n,this.elRef=t,this.elementClass="",this.activeStyles={},this.rootMargin="0px",this.startScrollThreshold=.1,this.elementInView=!1}ngOnInit(){let n=window.innerHeight,t=this.elRef.nativeElement,e={root:null,rootMargin:this.rootMargin,threshold:this.startScrollThreshold};this.observer=new IntersectionObserver(l=>{l.forEach(d=>{d.isIntersecting?(this.elementInView=!0,this.applyStyles(),window.addEventListener("scroll",this.scrollHandler)):(this.elementInView=!1,window.removeEventListener("scroll",this.scrollHandler))})},e),this.scrollHandler=()=>{let l=window.scrollY,d=t.getBoundingClientRect().top;if(this.elementInView&&t){let u=Math.min(l/n,1);for(let[Q,X]of Object.entries(this.activeStyles))this.renderer.setStyle(t,Q,this.interpolateStyleValue(X,u))}},this.observer.observe(this.elRef.nativeElement),this.checkElementVisibility()}checkElementVisibility(){let n=this.elRef.nativeElement.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;n.top<t&&n.bottom>=0&&(this.elementInView=!0,this.applyStyles())}applyStyles(){let n=this.elRef.nativeElement,t=window.scrollY,e=window.innerHeight,l=Math.min(t/e,1);for(let[d,u]of Object.entries(this.activeStyles))this.renderer.setStyle(n,d,this.interpolateStyleValue(u,l))}interpolateStyleValue(n,t){return n.includes("calc")?n.replace(/calc\((.+)\)/,(e,l)=>`calc(${parseFloat(l)*t})`):n.replace(/(\d+\.?\d*)/,e=>`${parseFloat(e)*t}`)}ngOnDestroy(){window.removeEventListener("scroll",this.scrollHandler),this.observer&&this.observer.disconnect()}};i.\u0275fac=function(t){return new(t||i)(g(N),g(S))},i.\u0275dir=k({type:i,selectors:[["","appScrollListener",""]],inputs:{elementClass:"elementClass",activeStyles:"activeStyles",rootMargin:"rootMargin",startScrollThreshold:"startScrollThreshold"},standalone:!0});let o=i;return o})();var se=o=>({gray:o}),ae=()=>[],le=()=>({opacity:"1"}),T=o=>["/",o];function pe(o,i){if(o&1&&(a(0,"div",4),c(1,"img",13),r()),o&2){let _=i.$implicit;s(),D("src","https://image.tmdb.org/t/p/w500/",_,"",x)}}var Ee=(()=>{let i=class i{constructor(n,t){this.store=n,this.cd=t,this.gray=!1,this.bgs=[],this.nowPlayingLink="now_playing",this.popularLink="popular",this.topRatedLink="top_rated",this.upcomingLink="upcoming"}ngOnInit(){this.nowPlaying$=this.store.select(Y).pipe(f(n=>n.slice(0,10))),this.popular$=this.store.select(F).pipe(f(n=>n.slice(0,10))),this.topRated$=this.store.select(W).pipe(f(n=>n.slice(0,10))),this.upcoming$=this.store.select(z).pipe(f(n=>n.slice(0,10))),this.mostPopular=this.store.select(F).pipe(f(n=>n.reduce((t,e)=>(e.vote_average>=7.3&&t.length<10&&t.push(e),t),[]))),this.store.select(z).subscribe(n=>{this.bgs=n.reduce((t,e)=>(e&&t.push(e.poster_path),t),[]).slice(0,21)})}ngAfterViewInit(){this.randomPosition()}randomPosition(){let n=this.generateRandomNumbers(80,4),t=Array.from({length:20},(l,d)=>d%2===0?0:35),e=document.querySelectorAll(".bg-wrapper");for(let l=0;l<e.length;l++){let d=Math.random()*.19999999999999996+1,u=e[l];u.style.left=`${n[l]}%`,u.style.top=`${t[l]}%`,u.style.transform=`scale(${d})`,setTimeout(()=>{u.classList.add("visible")},l*100)}setTimeout(()=>{this.gray=!0},2800)}generateRandomNumbers(n,t){let e=[];for(let l=0;l<n;l+=t)e.push(l);for(let l=e.length-1;l>0;l--){let d=Math.floor(Math.random()*(l+1));[e[l],e[d]]=[e[d],e[l]]}return e}};i.\u0275fac=function(t){return new(t||i)(g(U),g(L))},i.\u0275cmp=v({type:i,selectors:[["app-home-page"]],standalone:!0,features:[M],decls:45,vars:49,consts:[[1,"home-page"],[1,"home-page__header","header"],[1,"header__wrapper"],[1,"header__bg",3,"ngClass"],[1,"bg-wrapper"],[1,"header__action"],["fragment","recomendations",1,"pi","pi-chevron-down",3,"routerLink"],["id","recomendations","appScrollListener","",1,"home-page__hero",3,"elementClass","activeStyles","startScrollThreshold","rootMargin"],[3,"movies"],["appIntersectionObserver","",1,"home-page__section","section",3,"threshold","rootMargin"],[3,"routerLink"],[3,"movies","fullListLink"],["appIntersectionObserver","",1,"home-page__section",3,"threshold","rootMargin"],["alt","",3,"src"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"section",1)(2,"div",2)(3,"h1"),m(4,"Welcome on BingeBox"),r(),a(5,"h2"),m(6,"Tv's & Movies online service"),r()(),a(7,"div",3),w(8,pe,2,2,"div",4,H),r(),a(10,"div",5),c(11,"a",6),r()(),a(12,"section",7)(13,"h3"),m(14,"recomendations"),r(),c(15,"app-swiper-hero",8),P(16,"async"),r(),a(17,"section",9)(18,"h2")(19,"a",10),m(20,"now playing"),r()(),a(21,"div"),c(22,"app-swiper",11),P(23,"async"),r()(),a(24,"section",12)(25,"h2")(26,"a",10),m(27,"popular"),r()(),a(28,"div"),c(29,"app-swiper",11),P(30,"async"),r()(),a(31,"section",12)(32,"h2")(33,"a",10),m(34,"top rated"),r()(),a(35,"div"),c(36,"app-swiper",11),P(37,"async"),r()(),a(38,"section",12)(39,"h2")(40,"a",10),m(41,"upcoming"),r()(),a(42,"div"),c(43,"app-swiper",11),P(44,"async"),r()()()),t&2&&(s(7),p("ngClass",h(37,se,e.gray)),s(),C(e.bgs),s(3),p("routerLink",R(39,ae)),s(),p("elementClass","home-page__hero")("activeStyles",R(40,le))("startScrollThreshold",.1)("rootMargin","0px"),s(3),p("movies",b(16,27,e.mostPopular)),s(2),p("threshold",.25)("rootMargin","0px"),s(2),p("routerLink",h(41,T,e.nowPlayingLink)),s(3),p("movies",b(23,29,e.nowPlaying$))("fullListLink",e.nowPlayingLink),s(2),p("threshold",.25)("rootMargin","0px"),s(2),p("routerLink",h(43,T,e.popularLink)),s(3),p("movies",b(30,31,e.popular$))("fullListLink",e.popularLink),s(2),p("threshold",.25)("rootMargin","0px"),s(2),p("routerLink",h(45,T,e.topRatedLink)),s(3),p("movies",b(37,33,e.topRated$))("fullListLink",e.topRatedLink),s(2),p("threshold",.25)("rootMargin","0px"),s(2),p("routerLink",h(47,T,e.upcomingLink)),s(3),p("movies",b(44,35,e.upcoming$))("fullListLink",e.upcomingLink))},dependencies:[q,E,j,A,O,G,J,K],styles:['@keyframes _ngcontent-%COMP%_animationBg{0%{background-position-x:0%}to{background-position-x:200%}}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.25)}to{transform:scale(1)}}.header[_ngcontent-%COMP%]{overflow:clip;position:relative;min-height:calc(100vh - 50px);margin-bottom:80px}@media (max-width: 47.99875rem){.header[_ngcontent-%COMP%]{margin:0 -.9375rem}}.header__wrapper[_ngcontent-%COMP%]{position:sticky;top:50%;left:0;padding-left:1.25rem;padding-bottom:3.125rem;transform:translate(-100%);transition:transform 1s .3s ease-in-out}.header__wrapper[_ngcontent-%COMP%]:has( + .header__bg.gray)[_ngcontent-%COMP%]{transform:translate(0)}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:transparent;background:linear-gradient(138deg,#feff05 12%,#71e629 29%,#3fd 44%,#b964ff,#feff05 88%);background-clip:text}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block;font-size:clamp(2.5rem,1.719rem + 3.91vw,5.625rem);font-weight:600;line-height:1.27;background-size:200%;animation-name:_ngcontent-%COMP%_animationBg;animation-duration:12s;animation-timing-function:linear;animation-iteration-count:infinite}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(1.25rem,1.094rem + .78vw,1.875rem);font-weight:500;padding-left:.3125rem;background-size:40%}.header__bg[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;z-index:-1;filter:grayscale(0%);transition:filter .8s}.header__bg[_ngcontent-%COMP%]:after{content:"";width:100%;height:100%;position:absolute;background:radial-gradient(circle,#37373700,#111);opacity:0;transition:opacity .8s}.header__bg.gray[_ngcontent-%COMP%]{filter:grayscale(100%)}.header__bg.gray[_ngcontent-%COMP%]:after{opacity:1}.header__bg.gray[_ngcontent-%COMP%] + .header__action[_ngcontent-%COMP%]{bottom:1.25rem}.header[_ngcontent-%COMP%]   .bg-wrapper[_ngcontent-%COMP%]{width:350px;position:absolute;opacity:0;transition:opacity .4s,filter .4s 1.5s}.header[_ngcontent-%COMP%]   .bg-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;box-shadow:.3125rem .3125rem 1rem #0000007d}.header[_ngcontent-%COMP%]   .bg-wrapper.visible[_ngcontent-%COMP%]{opacity:1}.header__action[_ngcontent-%COMP%]{position:absolute;left:50%;bottom:-1.25rem;transition:bottom .5s 1.3s;transform:translate(-50%)}.header__action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-transform:uppercase;font-size:1.125rem;font-weight:500;animation-name:_ngcontent-%COMP%_pulse;animation-duration:2s;animation-timing-function:linear;animation-iteration-count:infinite}.header__action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{animation-play-state:paused}.home-page__hero[_ngcontent-%COMP%]{padding-top:5rem;opacity:0}.home-page__hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:uppercase;color:#fff;font-size:1.875rem;margin-bottom:1.25rem;font-weight:500}.home-page__hero[_ngcontent-%COMP%]:not(:last-child){margin-bottom:3.125rem}.home-page__section[_ngcontent-%COMP%]{position:relative;border-radius:0 1.375rem;opacity:0;transition:.5s}.home-page__section.in-view[_ngcontent-%COMP%]{opacity:1}.home-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#e8e8e8;font-weight:500;text-transform:capitalize;font-size:2.8125rem;z-index:2}.home-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.9375rem}.home-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:all .5s;transform-origin:0 center}.home-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.04)}.home-page__section[_ngcontent-%COMP%]:not(:last-child){margin-bottom:3.125em}']});let o=i;return o})();export{Ee as HomePageComponent};