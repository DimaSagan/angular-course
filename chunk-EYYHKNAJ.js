import{a as ne}from"./chunk-MUKURUAG.js";import{a as oe}from"./chunk-4FQJ474O.js";import"./chunk-PS4KDJ64.js";import"./chunk-4EXBTKEA.js";import{Bc as ie,Ca as c,Cc as re,Eb as X,Fb as F,Ha as q,Ia as M,Ja as b,Ka as l,L as A,La as s,Ma as p,Qa as R,Ra as y,Sa as W,Sb as S,Wa as G,Y as w,Ya as z,Za as T,_ as E,_a as V,ab as m,bb as x,da as v,ea as C,fb as P,gb as H,hb as h,ic as Z,ja as L,lb as O,mb as k,mc as ee,na as I,nc as D,oc as te,pc as B,q as j,qa as a,ra as g,rb as J,s as u,v as Q,va as U,ya as Y,zb as K}from"./chunk-LNWTT475.js";var de=["swiper"],he=(r,n)=>n.id,ge=r=>["/",r];function _e(r,n){if(r&1&&(l(0,"swiper-slide"),p(1,"app-primeng-movie-card",11),s()),r&2){let _=n.$implicit;a(),c("mov",_)}}var se=(()=>{let n=class n{constructor(){this.swiperConfig={breakpoints:{992:{slidesPerView:5.5},767.98:{slidesPerView:3.5},320:{slidesPerView:2.5,spaceBetween:10}}},this.movies=null,this.initialized=!1,this.listLink=this.fullListLink}ngAfterViewInit(){this.swiperRef&&this.swiperRef.nativeElement.swiper?this.initialized=!0:console.error("Error: Swiper not initialized.")}changesSlide(i){let t=this.swiperRef.nativeElement.swiper;this.initialized&&(i===-1?t.slidePrev():t.slideNext())}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=w({type:n,selectors:[["app-swiper"]],viewQuery:function(t,e){if(t&1&&z(de,5),t&2){let o;T(o=V())&&(e.swiperRef=o.first)}},inputs:{movies:"movies",fullListLink:"fullListLink"},standalone:!0,features:[P],decls:15,vars:4,consts:[["swiper",""],[1,"swiper"],["space-between","20","speed","500",3,"breakpoints"],[1,"swiper__link"],["routerLinkActive","active-link",1,"swiper__link-item",3,"routerLink"],[1,"pi","pi-arrow-circle-right"],["src","#","alt",""],[1,"prev",3,"click"],[1,"pi","pi-chevron-left"],[1,"next",3,"click"],[1,"pi","pi-chevron-right"],[3,"mov"]],template:function(t,e){if(t&1){let o=R();l(0,"div",1)(1,"swiper-container",2,0),M(3,_e,2,1,"swiper-slide",null,he),l(5,"swiper-slide",3)(6,"a",4)(7,"span"),p(8,"i",5),m(9,"show more"),s(),p(10,"img",6),s()()(),l(11,"button",7),y("click",function(){return v(o),C(e.changesSlide(-1))}),p(12,"i",8),s(),l(13,"button",9),y("click",function(){return v(o),C(e.changesSlide(1))}),p(14,"i",10),s()()}t&2&&(a(),c("breakpoints",e.swiperConfig.breakpoints),a(2),b(e.movies),a(3),c("routerLink",h(2,ge,e.fullListLink)))},dependencies:[oe,F,S],styles:[".swiper[_ngcontent-%COMP%]{position:relative}@media (max-width: 47.99875em){.swiper[_ngcontent-%COMP%]{margin-right:-15px}}.swiper__link-item[_ngcontent-%COMP%]{position:relative;cursor:pointer;background-color:#0000002e;transition:.3s;width:100%}.swiper__link-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.25rem;color:#fff;display:inline-flex;flex-direction:column;gap:.3125rem;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:.3s}.swiper__link-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.875rem}.swiper__link-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;aspect-ratio:304/456;opacity:0}.swiper__link-item[_ngcontent-%COMP%]:hover{background-color:#00000042}.swiper__link-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:orange}.swiper__link-item[_ngcontent-%COMP%]:active{background-color:#00000012}.swiper__link-item[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{color:#ff7300}.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:1;border-radius:50%;width:1.875rem;height:1.875rem}@media (max-width: 61.93625em){.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{display:none}}.prev[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:.3s}.prev[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:scale(1.3)}.prev[_ngcontent-%COMP%]{left:-2.5rem}.next[_ngcontent-%COMP%]{right:-2.5rem}"]});let r=n;return r})();var fe=["swiper"],ue=(r,n)=>n.id,we=r=>["/movie",r];function ve(r,n){if(r&1&&(l(0,"swiper-slide",3)(1,"div",11)(2,"div",12)(3,"div",13)(4,"h2",14),m(5),s(),l(6,"a",15),m(7,"Watch Now "),p(8,"i",16),s(),l(9,"p",17),m(10),s()()(),l(11,"div",18),p(12,"img",19),s()()()),r&2){let _=n.$implicit,i=W();a(5),x(_.title),a(),c("routerLink",h(4,we,_.id)),a(4),x(_.overview),a(2),c("src",i.backdropPath+_.backdrop_path,I)}}var ae=(()=>{let n=class n{constructor(){this.movies=[],this.backdropPath="https://image.tmdb.org/t/p/original",this.minCounterNumber=1,this.maxCounterNumber=1,this.initialized=!1}ngOnInit(){this.movies&&(this.maxCounterNumber=this.movies.length)}ngAfterViewInit(){this.swiperRef&&this.swiperRef.nativeElement.swiper?this.initialized=!0:console.error("Error: Swiper not initialized.")}changesSlide(i){let t=this.swiperRef.nativeElement.swiper;this.initialized&&(i===-1&&this.minCounterNumber!==1?(t.slidePrev(),this.minCounterNumber--):i===1&&this.minCounterNumber!==this.maxCounterNumber&&(t.slideNext(),this.minCounterNumber++))}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=w({type:n,selectors:[["app-swiper-hero"]],viewQuery:function(t,e){if(t&1&&z(fe,5),t&2){let o;T(o=V())&&(e.swiperRef=o.first)}},inputs:{movies:"movies"},standalone:!0,features:[P],decls:18,vars:2,consts:[["swiper",""],[1,"swiper"],["space-between","50","speed","800","slides-per-view","1",1,"my-swiper"],[1,"swiper-slide"],[1,"swiper__action"],[1,"swiper__action-buttons"],[1,"prev",3,"click"],[1,"pi","pi-chevron-left"],[1,"next",3,"click"],[1,"pi","pi-chevron-right"],[1,"swiper__action-counter"],[1,"swiper-slide__wrapper"],[1,"swiper-slide__subscription"],[1,"swiper-slide__subscription-wrapper"],[1,"swiper-slide__title"],[1,"swiper-slide__link",3,"routerLink"],[1,"pi","pi-video"],[1,"swiper-slide__overview"],[1,"swiper-slide__img"],["alt","poster",3,"src"]],template:function(t,e){if(t&1){let o=R();l(0,"div",1)(1,"swiper-container",2,0),M(3,ve,13,6,"swiper-slide",3,ue),s(),l(5,"div",4)(6,"div",5)(7,"button",6),y("click",function(){return v(o),C(e.changesSlide(-1))}),p(8,"i",7),s(),l(9,"button",8),y("click",function(){return v(o),C(e.changesSlide(1))}),p(10,"i",9),s()(),l(11,"div",10)(12,"span"),m(13),s(),l(14,"span"),m(15,"/"),s(),l(16,"span"),m(17),s()()()()}t&2&&(a(3),b(e.movies),a(10),x(e.minCounterNumber),a(4),x(e.maxCounterNumber))},dependencies:[S],styles:['.swiper[_ngcontent-%COMP%]{position:relative}@media (max-width: 47.99875em){.swiper[_ngcontent-%COMP%]{margin:0 -.9375rem}}.swiper__action[_ngcontent-%COMP%]{position:absolute;left:20px;bottom:20px;z-index:12;display:flex;align-items:center;gap:.9375rem}@media (max-width: 47.99875em){.swiper__action[_ngcontent-%COMP%]{display:none}}.swiper__action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;width:2.1875rem;height:2.1875rem;border-radius:50%}.swiper__action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){margin-right:.625rem}.swiper__action-counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:20px;color:#fff;font-weight:500}.swiper-slide[_ngcontent-%COMP%]{background:#1c1c1c;position:relative}.swiper-slide__wrapper[_ngcontent-%COMP%]{display:flex}.swiper-slide__subscription[_ngcontent-%COMP%]{color:#fff;position:absolute;top:50%;transform:translateY(-50%);z-index:1}.swiper-slide__subscription-wrapper[_ngcontent-%COMP%]{width:100%;padding-left:1.25rem}.swiper-slide__title[_ngcontent-%COMP%]{font-size:clamp(1.25rem,.656rem + 2.97vw,3.625rem);font-weight:600}.swiper-slide__title[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.72em}.swiper-slide__link[_ngcontent-%COMP%]{background-color:#fff;color:#000;font-size:clamp(1.125rem,1.016rem + .55vw,1.563rem);font-weight:500;padding:.5rem .625rem;box-shadow:.3125rem .3125rem .3125rem #0004;border-radius:.9375rem;transform-origin:0 center;transition:all .4s;display:inline-flex;align-items:center;gap:.3125rem}.swiper-slide__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:clamp(1.125rem,1.016rem + .55vw,1.563rem)}.swiper-slide__link[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.swiper-slide__link[_ngcontent-%COMP%]:active{transform:scale(1.02);background-color:#d1d1d1}.swiper-slide__link[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.9em}.swiper-slide__overview[_ngcontent-%COMP%]{max-width:37.5rem;text-align:justify;font-size:1.125rem;line-height:1.16;position:relative;background-color:#00000074;padding:1.25rem;margin-left:-1.25rem}@media (max-width: 47.99875em){.swiper-slide__overview[_ngcontent-%COMP%]{display:none}}.swiper-slide__img[_ngcontent-%COMP%]{width:100%;max-height:50rem}.swiper-slide__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;aspect-ratio:16/9;object-fit:cover}.swiper-slide[_ngcontent-%COMP%]:after{content:"";width:210%;height:100%;position:absolute;top:0;left:0;background:#fff;background:radial-gradient(circle,#fff0 26%,#0000005e)}']});let r=n;return r})();var le=(()=>{let n=class n{constructor(i){this.el=i,this.rootMargin="0px",this.threshold=.1}ngOnInit(){let i={root:null,rootMargin:this.rootMargin,threshold:this.threshold};new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&this.el.nativeElement.classList.add("in-view")})},i).observe(this.el.nativeElement)}};n.\u0275fac=function(t){return new(t||n)(g(L))},n.\u0275dir=E({type:n,selectors:[["","appIntersectionObserver",""]],inputs:{rootMargin:"rootMargin",threshold:"threshold"},standalone:!0});let r=n;return r})();var ce=(()=>{let n=class n{constructor(i,t){this.renderer=i,this.elRef=t,this.elementClass="",this.activeStyles={},this.rootMargin="0px",this.startScrollThreshold=.1,this.elementInView=!1}ngOnInit(){let i=window.innerHeight,t=this.elRef.nativeElement,e={root:null,rootMargin:this.rootMargin,threshold:this.startScrollThreshold};this.observer=new IntersectionObserver(o=>{o.forEach(d=>{d.isIntersecting?(this.elementInView=!0,this.applyStyles(),window.addEventListener("scroll",this.scrollHandler)):(this.elementInView=!1,window.removeEventListener("scroll",this.scrollHandler))})},e),this.scrollHandler=()=>{let o=window.scrollY,d=t.getBoundingClientRect().top;if(this.elementInView&&t){let f=Math.min(o/i,1);for(let[pe,me]of Object.entries(this.activeStyles))this.renderer.setStyle(t,pe,this.interpolateStyleValue(me,f))}},this.observer.observe(this.elRef.nativeElement),this.checkElementVisibility()}checkElementVisibility(){let i=this.elRef.nativeElement.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;i.top<t&&i.bottom>=0&&(this.elementInView=!0,this.applyStyles())}applyStyles(){let i=this.elRef.nativeElement,t=window.scrollY,e=window.innerHeight,o=Math.min(t/e,1);for(let[d,f]of Object.entries(this.activeStyles))this.renderer.setStyle(i,d,this.interpolateStyleValue(f,o))}interpolateStyleValue(i,t){return i.includes("calc")?i.replace(/calc\((.+)\)/,(e,o)=>`calc(${parseFloat(o)*t})`):i.replace(/(\d+\.?\d*)/,e=>`${parseFloat(e)*t}`)}ngOnDestroy(){window.removeEventListener("scroll",this.scrollHandler),this.observer&&this.observer.disconnect()}};n.\u0275fac=function(t){return new(t||n)(g(U),g(L))},n.\u0275dir=E({type:n,selectors:[["","appScrollListener",""]],inputs:{elementClass:"elementClass",activeStyles:"activeStyles",rootMargin:"rootMargin",startScrollThreshold:"startScrollThreshold"},standalone:!0});let r=n;return r})();var Ce=r=>({deactivate:r}),Me=r=>({gray:r}),be=()=>[],ye=()=>({opacity:"1"}),$=r=>["/",r];function Pe(r,n){if(r&1&&(l(0,"div",4),p(1,"img",13),s()),r&2){let _=n.$implicit;a(),G("src","https://image.tmdb.org/t/p/w500/",_,"",I)}}var qe=(()=>{let n=class n extends re{constructor(i,t,e){super(),this.store=i,this.cd=t,this.loader=e,this.gray=!1,this.deactivate=!1,this.bgs=[],this.nowPlayingLink="now_playing",this.popularLink="popular",this.topRatedLink="top_rated",this.upcomingLink="upcoming"}ngOnInit(){this.store.select(ie).pipe(A(this.destroy$)).subscribe(i=>{i&&(this.deviceInfo=i)}),this.nowPlaying$=this.store.select(ee).pipe(u(i=>i.slice(0,10))),this.popular$=this.store.select(D).pipe(u(i=>i.slice(0,10))),this.topRated$=this.store.select(te).pipe(u(i=>i.slice(0,10))),this.upcoming$=this.store.select(B).pipe(u(i=>i.slice(0,10))),this.mostPopular=this.store.select(D).pipe(u(i=>i.reduce((t,e)=>(e.vote_average>=7.3&&t.length<10&&t.push(e),t),[]))),this.store.select(B).subscribe(i=>{this.bgs=i.reduce((t,e)=>(e&&t.push(e.poster_path),t),[]).slice(0,21)})}ngAfterViewInit(){this.randomPosition()}randomPosition(){let i=this.generateRandomNumbers(80,4),t=Array.from({length:20},(o,d)=>d%2===0?0:35),e=document.querySelectorAll(".bg-wrapper");for(let o=0;o<e.length;o++){let d=Math.random()*.19999999999999996+1,f=e[o];f.style.left=`${i[o]}%`,f.style.top=`${t[o]}%`,f.style.transform=`scale(${d})`,setTimeout(()=>{f.classList.add("visible")},o*100)}setTimeout(()=>{this.gray=!0},2800)}generateRandomNumbers(i,t){let e=[];for(let o=0;o<i;o+=t)e.push(o);for(let o=e.length-1;o>0;o--){let d=Math.floor(Math.random()*(o+1));[e[o],e[d]]=[e[d],e[o]]}return e}canDeactivate(){return this.deviceInfo.browser==="Safari"||this.deviceInfo.deviceType==="mobile"||this.deviceInfo.deviceType==="tablet"?j(!0):(this.loader.hideLoader(),this.deactivate=!0,Q(500).pipe(u(()=>!0)))}};n.\u0275fac=function(t){return new(t||n)(g(Z),g(J),g(ne))},n.\u0275cmp=w({type:n,selectors:[["app-home-page"]],standalone:!0,features:[Y,P],decls:45,vars:52,consts:[[1,"home-page",3,"ngClass"],[1,"home-page__header","header"],[1,"header__wrapper"],[1,"header__bg",3,"ngClass"],[1,"bg-wrapper"],[1,"header__action"],["fragment","recomendations",1,"pi","pi-chevron-down",3,"routerLink"],["id","recomendations","appScrollListener","",1,"home-page__hero",3,"elementClass","activeStyles","startScrollThreshold","rootMargin"],[3,"movies"],["appIntersectionObserver","",1,"home-page__section","section",3,"threshold","rootMargin"],[3,"routerLink"],[3,"movies","fullListLink"],["appIntersectionObserver","",1,"home-page__section",3,"threshold","rootMargin"],["alt","",3,"src"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"section",1)(2,"div",2)(3,"h1"),m(4,"Welcome on BingeBox"),s(),l(5,"h2"),m(6,"Tv's & Movies online service"),s()(),l(7,"div",3),M(8,Pe,2,2,"div",4,q),s(),l(10,"div",5),p(11,"a",6),s()(),l(12,"section",7)(13,"h3"),m(14,"recomendations"),s(),p(15,"app-swiper-hero",8),O(16,"async"),s(),l(17,"section",9)(18,"h2")(19,"a",10),m(20,"now playing"),s()(),l(21,"div"),p(22,"app-swiper",11),O(23,"async"),s()(),l(24,"section",12)(25,"h2")(26,"a",10),m(27,"popular"),s()(),l(28,"div"),p(29,"app-swiper",11),O(30,"async"),s()(),l(31,"section",12)(32,"h2")(33,"a",10),m(34,"top rated"),s()(),l(35,"div"),p(36,"app-swiper",11),O(37,"async"),s()(),l(38,"section",12)(39,"h2")(40,"a",10),m(41,"upcoming"),s()(),l(42,"div"),p(43,"app-swiper",11),O(44,"async"),s()()()),t&2&&(c("ngClass",h(38,Ce,e.deactivate)),a(7),c("ngClass",h(40,Me,e.gray)),a(),b(e.bgs),a(3),c("routerLink",H(42,be)),a(),c("elementClass","home-page__hero")("activeStyles",H(43,ye))("startScrollThreshold",.1)("rootMargin","0px"),a(3),c("movies",k(16,28,e.mostPopular)),a(2),c("threshold",.25)("rootMargin","0px"),a(2),c("routerLink",h(44,$,e.nowPlayingLink)),a(3),c("movies",k(23,30,e.nowPlaying$))("fullListLink",e.nowPlayingLink),a(2),c("threshold",.25)("rootMargin","0px"),a(2),c("routerLink",h(46,$,e.popularLink)),a(3),c("movies",k(30,32,e.popular$))("fullListLink",e.popularLink),a(2),c("threshold",.25)("rootMargin","0px"),a(2),c("routerLink",h(48,$,e.topRatedLink)),a(3),c("movies",k(37,34,e.topRated$))("fullListLink",e.topRatedLink),a(2),c("threshold",.25)("rootMargin","0px"),a(2),c("routerLink",h(50,$,e.upcomingLink)),a(3),c("movies",k(44,36,e.upcoming$))("fullListLink",e.upcomingLink))},dependencies:[se,F,K,X,S,ae,le,ce],styles:['@keyframes _ngcontent-%COMP%_animationBg{0%{background-position-x:0%}to{background-position-x:200%}}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.25)}to{transform:scale(1)}}.header[_ngcontent-%COMP%]{overflow:clip;position:relative;min-height:calc(100dvh - 50px);margin-bottom:80px}@media (max-width: 47.99875rem){.header[_ngcontent-%COMP%]{margin:0 -.9375rem}}.header__wrapper[_ngcontent-%COMP%]{position:sticky;top:35%;left:0;padding-left:1.25rem;padding-bottom:3.125rem;transform:translate(-100%);transition:transform 1s .3s ease-in-out}.header__wrapper[_ngcontent-%COMP%]:has( + .header__bg.gray)[_ngcontent-%COMP%]{transform:translate(0)}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ff0}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:transparent;background:linear-gradient(90deg,#feff05 12%,#5eaf2b 29%,#fd1d1d 44%,#33adfc,#feff05 88%);display:inline-block;font-size:clamp(4.375rem,4.063rem + 1.56vw,5.625rem);font-weight:600;line-height:1.27;background-size:200%;animation-name:_ngcontent-%COMP%_animationBg;animation-duration:15s;animation-timing-function:linear;animation-iteration-count:infinite;background-clip:text;background-position-x:0%}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(1.875rem,1.563rem + 1.56vw,3.125rem);font-weight:500;padding-left:.3125rem;background-size:100%}.header__bg[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;z-index:-1;filter:grayscale(0%);transition:filter .8s}.header__bg[_ngcontent-%COMP%]:after{content:"";width:100%;height:100%;position:absolute;background:radial-gradient(circle,#37373700,#111);opacity:0;transition:opacity .8s}.header__bg.gray[_ngcontent-%COMP%]{filter:grayscale(100%)}.header__bg.gray[_ngcontent-%COMP%]:after{opacity:1}.header__bg.gray[_ngcontent-%COMP%] + .header__action[_ngcontent-%COMP%]{bottom:1.25rem}.header[_ngcontent-%COMP%]   .bg-wrapper[_ngcontent-%COMP%]{width:350px;position:absolute;opacity:0;transition:opacity .4s,filter .4s 1.5s}.header[_ngcontent-%COMP%]   .bg-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;box-shadow:.3125rem .3125rem 1rem #0000007d}.header[_ngcontent-%COMP%]   .bg-wrapper.visible[_ngcontent-%COMP%]{opacity:1}.header__action[_ngcontent-%COMP%]{position:absolute;left:50%;bottom:-1.25rem;transition:bottom .5s 1.3s;transform:translate(-50%)}.header__action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-transform:uppercase;font-size:1.125rem;font-weight:500;animation-name:_ngcontent-%COMP%_pulse;animation-duration:2s;animation-timing-function:linear;animation-iteration-count:infinite}.header__action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{animation-play-state:paused}.home-page[_ngcontent-%COMP%]{opacity:1;transition:opacity .5s}.home-page.deactivate[_ngcontent-%COMP%]{opacity:0}.home-page__hero[_ngcontent-%COMP%]{padding-top:5rem;opacity:0}.home-page__hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:capitalize;color:#fff;font-size:clamp(1.875rem,1.719rem + .78vw,2.5rem);margin-bottom:1.25rem;font-weight:500}.home-page__hero[_ngcontent-%COMP%]:not(:last-child){margin-bottom:3.125rem}.home-page__section[_ngcontent-%COMP%]{position:relative;border-radius:0 1.375rem;opacity:0;transition:.5s}.home-page__section.in-view[_ngcontent-%COMP%]{opacity:1}.home-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#e8e8e8;font-weight:500;text-transform:capitalize;font-size:clamp(1.875rem,1.719rem + .78vw,2.5rem);z-index:2}.home-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.9375rem}.home-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:all .5s;transform-origin:0 center}.home-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.04)}.home-page__section[_ngcontent-%COMP%]:not(:last-child){margin-bottom:3.125em}']});let r=n;return r})();export{qe as HomePageComponent};