(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{d340:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=function(){},o=e("ujdH"),a=e("icah"),d=e("WFzO"),r=e("d+NZ"),i=e("vPfJ"),p=e("OQnT"),c=e("NEdW"),m=e("zk0r"),s=e("g5zm"),v=e("e7hY"),g="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-simple',\n  templateUrl: './simple.component.html',\n  styleUrls: ['./simple.component.scss']\n})\nexport class SimpleComponent implements OnInit {\n  hidden = false;\n  style = {\n    'background-color': 'yellow',\n    'border': 'solid 1px #0088ff',\n    'padding': '10px 20px'\n  };\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}",h='<button class="btn btn-outline-primary" (click)="hidden = !hidden">\u663e\u793a/\u9690\u85cf \u70b9\u6807\u8bb0</button>\n<hr>\n<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">\n  <amap-marker\n    text="\u7eaf\u6587\u672c\u6807\u8bb0"\n    textAlign="center"\n    verticalAlign="middle"\n    cursor="pointer"\n    [position]="[116.397428, 39.90923]"\n    [hidden]="hidden"\n    [draggable]="true"\n    [angle]="10"\n    [style]="style">\n  </amap-marker>\n</ngx-amap>',E=function(){function n(){this.code_ts=g,this.code_html=h,this.hidden=!1,this.style={"background-color":"yellow",border:"solid 1px #0088ff",padding:"10px 20px"}}return n.prototype.ngOnInit=function(){},n}(),_=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(n){return t["\u0275vid"](0,[t["\u0275pid"](0,o.LanguagePipe,[]),(n()(),t["\u0275eld"](1,0,null,null,43,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" \u7b80\u5355\u793a\u4f8b "])),(n()(),t["\u0275eld"](4,0,null,null,40,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,1,"button",[["class","btn btn-outline-primary"]],null,[[null,"click"]],function(n,l,e){var t=!0,u=n.component;return"click"===l&&(t=0!=(u.hidden=!u.hidden)&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["\u663e\u793a/\u9690\u85cf \u6587\u672c\u6807\u8bb0"])),(n()(),t["\u0275eld"](7,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t["\u0275eld"](8,0,null,null,19,"ngx-amap",[["class","demo-map"]],null,null,null,a.d,a.b)),t["\u0275prd"](4608,null,d.A,d.A,[d.u,d.z,d.B,d.C,d.E]),t["\u0275prd"](4608,null,d.F,d.F,[d.u,d.z,d.B,d.D]),t["\u0275prd"](4608,null,d.G,d.G,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.I,d.I,[d.u,d.z,d.B,d.H]),t["\u0275prd"](4608,null,d.J,d.J,[d.u,d.z,d.B,d.D,d.H]),t["\u0275prd"](4608,null,d.K,d.K,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.L,d.L,[d.u,d.z]),t["\u0275prd"](4608,null,d.M,d.M,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.O,d.O,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.P,d.P,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.Q,d.Q,[d.u,d.H,d.z]),t["\u0275prd"](512,null,d.u,d.u,[d.w,d.z]),t["\u0275did"](21,770048,null,0,d.s,[t.ElementRef,d.u,d.z],{zoom:[0,"zoom"],center:[1,"center"],resizeEnable:[2,"resizeEnable"]},null),t["\u0275pad"](22,2),t["\u0275prd"](512,null,d.N,d.N,[d.u,d.z,d.B,d.C]),(n()(),t["\u0275eld"](24,0,null,0,3,"amap-text",[["cursor","pointer"],["text","\u7eaf\u6587\u672c\u6807\u8bb0"],["textAlign","center"],["verticalAlign","middle"]],null,null,null,null,null)),t["\u0275did"](25,1720320,null,1,d.q,[d.z,d.N,d.B,d.C],{text:[0,"text"],textAlign:[1,"textAlign"],verticalAlign:[2,"verticalAlign"],position:[3,"position"],draggable:[4,"draggable"],cursor:[5,"cursor"],angle:[6,"angle"],style:[7,"style"],hidden:[8,"hidden"]},null),t["\u0275qud"](603979776,1,{infoWindowComponent:1}),t["\u0275pad"](27,2),(n()(),t["\u0275eld"](28,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),t["\u0275eld"](29,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,r.b,r.a)),t["\u0275did"](30,180224,null,0,i.a,[p.a,t.Renderer2],null,null),(n()(),t["\u0275eld"](31,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](32,212992,null,0,c.a,[i.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](33,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),t["\u0275did"](34,4243456,null,0,s.MarkdownComponent,[t.ElementRef,v.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](35,2),(n()(),t["\u0275eld"](36,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](37,212992,null,0,c.a,[i.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](38,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),t["\u0275did"](39,4243456,null,0,s.MarkdownComponent,[t.ElementRef,v.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](40,2),(n()(),t["\u0275eld"](41,0,null,0,3,"tab",[["heading","\u652f\u6301\u7684Input"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](42,212992,null,0,c.a,[i.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](43,0,null,null,1,"a",[["href","api-doc/directives/AmapTextDirective.html"],["target","_blank"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(n,l){var e=l.component;n(l,21,0,13,n(l,22,0,116.397428,39.90923),!0),n(l,25,0,"\u7eaf\u6587\u672c\u6807\u8bb0","center","middle",n(l,27,0,116.397428,39.90923),!0,"pointer",10,e.style,e.hidden),n(l,32,0,"HTML"),n(l,34,0,t["\u0275unv"](l,34,0,n(l,35,0,t["\u0275nov"](l,0),e.code_html,"html"))),n(l,37,0,"Component"),n(l,39,0,t["\u0275unv"](l,39,0,n(l,40,0,t["\u0275nov"](l,0),e.code_ts,"typescript"))),n(l,42,0,"\u652f\u6301\u7684Input")},function(n,l){n(l,29,0,t["\u0275nov"](l,30).clazz),n(l,31,0,t["\u0275nov"](l,32).id,t["\u0275nov"](l,32).active,t["\u0275nov"](l,32).addClass),n(l,36,0,t["\u0275nov"](l,37).id,t["\u0275nov"](l,37).active,t["\u0275nov"](l,37).addClass),n(l,41,0,t["\u0275nov"](l,42).id,t["\u0275nov"](l,42).active,t["\u0275nov"](l,42).addClass)})}var f=t["\u0275ccf"]("app-simple",E,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-simple",[],null,null,null,k,_)),t["\u0275did"](1,114688,null,0,E,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),b='\n<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">\n  <amap-text [position]="[116.397428, 39.90923]" [draggable]="true"\n    (ready)="onEvent($event, \'ready\')"\n    (textClick)="onEvent($event, \'textClick\')"\n    (dblClick)="onEvent($event, \'dblClick\')"\n    (rightClick)="onEvent($event, \'rightClick\')"\n    (mouseMove)="onEvent($event, \'mouseMove\')"\n    (mouseOver)="onEvent($event, \'mouseOver\')"\n    (mouseOut)="onEvent($event, \'mouseOut\')"\n    (mouseDown)="onEvent($event, \'mouseDown\')"\n    (mouseUp)="onEvent($event, \'mouseUp\')"\n    (dragStart)="onEvent($event, \'dragStart\')"\n    (dragging)="onEvent($event, \'dragging\')"\n    (dragEnd)="onEvent($event, \'dragEnd\')"\n    (touchStart)="onEvent($event, \'touchStart\')"\n    (touchMove)="onEvent($event, \'touchMove\')"\n    (touchEnd)="onEvent($event, \'touchEnd\')"\n    (moving)="onEvent($event, \'moving\')"\n    (moveend)="onEvent($event, \'moveend\')"\n    (movealong)="onEvent($event, \'movealong\')"\n  ></amap-text>\n</ngx-amap>',C=function(){function n(){this.code_html=b}return n.prototype.ngOnInit=function(){},n.prototype.onEvent=function(n,l){console.log("text event:",l,n)},n}(),z=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function x(n){return t["\u0275vid"](0,[t["\u0275pid"](0,o.LanguagePipe,[]),(n()(),t["\u0275eld"](1,0,null,null,32,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" \u6587\u672c\u6807\u8bb0\u4e8b\u4ef6 (\u8bf7\u67e5\u770bconsole\u8f93\u51fa) "])),(n()(),t["\u0275eld"](4,0,null,null,29,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,20,"ngx-amap",[["class","demo-map"]],null,null,null,a.d,a.b)),t["\u0275prd"](4608,null,d.A,d.A,[d.u,d.z,d.B,d.C,d.E]),t["\u0275prd"](4608,null,d.F,d.F,[d.u,d.z,d.B,d.D]),t["\u0275prd"](4608,null,d.G,d.G,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.I,d.I,[d.u,d.z,d.B,d.H]),t["\u0275prd"](4608,null,d.J,d.J,[d.u,d.z,d.B,d.D,d.H]),t["\u0275prd"](4608,null,d.K,d.K,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.L,d.L,[d.u,d.z]),t["\u0275prd"](4608,null,d.M,d.M,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.O,d.O,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.P,d.P,[d.u,d.H,d.z]),t["\u0275prd"](4608,null,d.Q,d.Q,[d.u,d.H,d.z]),t["\u0275prd"](512,null,d.u,d.u,[d.w,d.z]),t["\u0275did"](18,770048,null,0,d.s,[t.ElementRef,d.u,d.z],{zoom:[0,"zoom"],center:[1,"center"],resizeEnable:[2,"resizeEnable"]},null),t["\u0275pad"](19,2),t["\u0275prd"](512,null,d.N,d.N,[d.u,d.z,d.B,d.C]),(n()(),t["\u0275eld"](21,0,null,0,4,"amap-text",[["text","\u7eaf\u6587\u672c\u6807\u8bb0"]],null,[[null,"ready"],[null,"textClick"],[null,"dblClick"],[null,"rightClick"],[null,"mouseMove"],[null,"mouseOver"],[null,"mouseOut"],[null,"mouseDown"],[null,"mouseUp"],[null,"dragStart"],[null,"dragging"],[null,"dragEnd"],[null,"touchStart"],[null,"touchMove"],[null,"touchEnd"],[null,"moving"],[null,"moveend"],[null,"movealong"]],function(n,l,e){var t=!0,u=n.component;return"ready"===l&&(t=!1!==u.onEvent(e,"ready")&&t),"textClick"===l&&(t=!1!==u.onEvent(e,"textClick")&&t),"dblClick"===l&&(t=!1!==u.onEvent(e,"dblClick")&&t),"rightClick"===l&&(t=!1!==u.onEvent(e,"rightClick")&&t),"mouseMove"===l&&(t=!1!==u.onEvent(e,"mouseMove")&&t),"mouseOver"===l&&(t=!1!==u.onEvent(e,"mouseOver")&&t),"mouseOut"===l&&(t=!1!==u.onEvent(e,"mouseOut")&&t),"mouseDown"===l&&(t=!1!==u.onEvent(e,"mouseDown")&&t),"mouseUp"===l&&(t=!1!==u.onEvent(e,"mouseUp")&&t),"dragStart"===l&&(t=!1!==u.onEvent(e,"dragStart")&&t),"dragging"===l&&(t=!1!==u.onEvent(e,"dragging")&&t),"dragEnd"===l&&(t=!1!==u.onEvent(e,"dragEnd")&&t),"touchStart"===l&&(t=!1!==u.onEvent(e,"touchStart")&&t),"touchMove"===l&&(t=!1!==u.onEvent(e,"touchMove")&&t),"touchEnd"===l&&(t=!1!==u.onEvent(e,"touchEnd")&&t),"moving"===l&&(t=!1!==u.onEvent(e,"moving")&&t),"moveend"===l&&(t=!1!==u.onEvent(e,"moveend")&&t),"movealong"===l&&(t=!1!==u.onEvent(e,"movealong")&&t),t},null,null)),t["\u0275did"](22,1720320,null,1,d.q,[d.z,d.N,d.B,d.C],{text:[0,"text"],position:[1,"position"],draggable:[2,"draggable"],style:[3,"style"]},{ready:"ready",textClick:"textClick",dblClick:"dblClick",rightClick:"rightClick",mouseMove:"mouseMove",mouseOver:"mouseOver",mouseOut:"mouseOut",mouseDown:"mouseDown",mouseUp:"mouseUp",dragStart:"dragStart",dragging:"dragging",dragEnd:"dragEnd",touchStart:"touchStart",touchMove:"touchMove",touchEnd:"touchEnd",moving:"moving",moveend:"moveend",movealong:"movealong"}),t["\u0275qud"](603979776,1,{infoWindowComponent:1}),t["\u0275pad"](24,2),t["\u0275pod"](25,{"font-size":0}),(n()(),t["\u0275eld"](26,0,null,null,7,"div",[["class","mt-3"]],null,null,null,null,null)),(n()(),t["\u0275eld"](27,0,null,null,6,"tabset",[],[[2,"tab-container",null]],null,null,r.b,r.a)),t["\u0275did"](28,180224,null,0,i.a,[p.a,t.Renderer2],null,null),(n()(),t["\u0275eld"](29,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](30,212992,null,0,c.a,[i.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(n()(),t["\u0275eld"](31,0,null,null,2,"markdown",[],null,null,null,m.b,m.a)),t["\u0275did"](32,4243456,null,0,s.MarkdownComponent,[t.ElementRef,v.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](33,2)],function(n,l){var e=l.component;n(l,18,0,13,n(l,19,0,116.397428,39.90923),!0),n(l,22,0,"\u7eaf\u6587\u672c\u6807\u8bb0",n(l,24,0,116.397428,39.90923),!0,n(l,25,0,"20px")),n(l,30,0,"HTML"),n(l,32,0,t["\u0275unv"](l,32,0,n(l,33,0,t["\u0275nov"](l,0),e.code_html,"html")))},function(n,l){n(l,27,0,t["\u0275nov"](l,28).clazz),n(l,29,0,t["\u0275nov"](l,30).id,t["\u0275nov"](l,30).active,t["\u0275nov"](l,30).addClass)})}var M=t["\u0275ccf"]("app-events",C,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-events",[],null,null,null,x,z)),t["\u0275did"](1,114688,null,0,C,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),H=e("Ip0R"),y=e("t/Na"),w=e("ZYCi"),O={title:"\u7b80\u5355\u793a\u4f8b"},R={title:"\u4e8b\u4ef6"},S=function(){},$=e("z+jS"),B=e("asSr"),T=e("7PmN");e.d(l,"AmapTextDemoModuleNgFactory",function(){return A});var A=t["\u0275cmf"](u,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[f,M]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,H.l,H.k,[t.LOCALE_ID,[2,H.p]]),t["\u0275mpd"](4608,y.HttpXsrfTokenExtractor,y["\u0275angular_packages_common_http_http_h"],[H.c,t.PLATFORM_ID,y["\u0275angular_packages_common_http_http_f"]]),t["\u0275mpd"](4608,y["\u0275angular_packages_common_http_http_i"],y["\u0275angular_packages_common_http_http_i"],[y.HttpXsrfTokenExtractor,y["\u0275angular_packages_common_http_http_g"]]),t["\u0275mpd"](5120,y.HTTP_INTERCEPTORS,function(n){return[n]},[y["\u0275angular_packages_common_http_http_i"]]),t["\u0275mpd"](4608,y["\u0275angular_packages_common_http_http_e"],y["\u0275angular_packages_common_http_http_e"],[]),t["\u0275mpd"](6144,y.XhrFactory,null,[y["\u0275angular_packages_common_http_http_e"]]),t["\u0275mpd"](4608,y.HttpXhrBackend,y.HttpXhrBackend,[y.XhrFactory]),t["\u0275mpd"](6144,y.HttpBackend,null,[y.HttpXhrBackend]),t["\u0275mpd"](4608,y.HttpHandler,y["\u0275angular_packages_common_http_http_c"],[y.HttpBackend,t.Injector]),t["\u0275mpd"](4608,y.HttpClient,y.HttpClient,[y.HttpHandler]),t["\u0275mpd"](1073742336,H.b,H.b,[]),t["\u0275mpd"](1073742336,w.o,w.o,[[2,w.t],[2,w.l]]),t["\u0275mpd"](1073742336,S,S,[]),t["\u0275mpd"](1073742336,d.t,d.t,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,y.HttpClientXsrfModule,y.HttpClientXsrfModule,[]),t["\u0275mpd"](1073742336,y.HttpClientModule,y.HttpClientModule,[]),t["\u0275mpd"](1073742336,B.MarkdownModule,B.MarkdownModule,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,w.j,function(){return[[{path:"",redirectTo:"/amap-marker/simple",pathMatch:"full"},{path:"simple",component:E,data:O},{path:"events",component:C,data:R}]]},[]),t["\u0275mpd"](256,y["\u0275angular_packages_common_http_http_f"],"XSRF-TOKEN",[]),t["\u0275mpd"](256,y["\u0275angular_packages_common_http_http_g"],"X-XSRF-TOKEN",[])])})}}]);