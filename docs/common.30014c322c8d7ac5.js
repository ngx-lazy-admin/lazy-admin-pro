"use strict";(self.webpackChunkgo_admin_ng=self.webpackChunkgo_admin_ng||[]).push([[592],{4390:(Z,I,o)=>{o.d(I,{XZ:()=>F,qw:()=>N});var f=o(655),e=o(5e3),P=o(3075),T=o(6831),O=o(591),L=o(1086),C=o(8929),A=o(3426),x=o(3753),y=o(2868),m=o(4850),a=o(7625),v=o(13),R=o(2198),j=o(5778),c=o(6947),g=o(1721),h=o(9808),S=o(9439),B=o(925),z=o(7525),U=o(739);function b(i,r){1&i&&(e.TgZ(0,"div",2),e._UZ(1,"nz-spin"),e.qZA())}function K(i,r){}function W(i,r){if(1&i&&(e.TgZ(0,"div",3),e.YNc(1,K,0,0,"ng-template",4),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t.nzToolkit)}}const u="codeEditor";function E(i){return(...r)=>{i&&i(...r)}}const p=new T.t(1);let l="unload",$=(()=>{class i{constructor(t,n){this.nzConfigService=t,this.firstEditorInitialized=!1,this.option={},this.option$=new O.X(this.option);const d=this.nzConfigService.getConfigForComponent(u);this.document=n,this.config=Object.assign({},d),this.option=this.config.defaultEditorOption||{},this.subscription=this.nzConfigService.getConfigChangeEventForComponent(u).subscribe(()=>{const s=this.nzConfigService.getConfigForComponent(u);s&&this._updateDefaultOption(s.defaultEditorOption)})}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription=null}_updateDefaultOption(t){this.option=Object.assign(Object.assign({},this.option),t),this.option$.next(this.option),t.theme&&monaco.editor.setTheme(t.theme)}requestToInit(){return"LOADED"===l?(this.onInit(),(0,L.of)(this.getLatestOption())):("unload"===l&&(this.config.useStaticLoading&&"undefined"==typeof monaco?(0,c.ZK)("You choose to use static loading but it seems that you forget to config webpack plugin correctly. Please refer to our official websitefor more details about static loading."):this.loadMonacoScript()),p.pipe((0,y.b)(()=>this.onInit()),(0,m.U)(()=>this.getLatestOption())))}loadMonacoScript(){if(this.config.useStaticLoading)return void Promise.resolve().then(()=>this.onLoad());if("loading"===l)return;l="loading";const t=this.config.assetsRoot,n=t?`${t}/vs`:"assets/vs",d=window,s=this.document.createElement("script");s.type="text/javascript",s.src=`${n}/loader.js`;const _=()=>{D(),d.require.config({paths:{vs:n}}),d.require(["vs/editor/editor.main"],()=>{this.onLoad()})},M=()=>{throw D(),new Error(`${c.Bq} cannot load assets of monaco editor from source "${n}".`)},D=()=>{s.removeEventListener("load",_),s.removeEventListener("error",M),this.document.documentElement.removeChild(s)};s.addEventListener("load",_),s.addEventListener("error",M),this.document.documentElement.appendChild(s)}onLoad(){l="LOADED",p.next(!0),p.complete(),E(this.config.onLoad)()}onInit(){this.firstEditorInitialized||(this.firstEditorInitialized=!0,E(this.config.onFirstEditorInit)()),E(this.config.onInit)()}getLatestOption(){return Object.assign({},this.option)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(S.jY),e.LFG(h.K0))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),F=(()=>{class i{constructor(t,n,d,s){this.nzCodeEditorService=t,this.ngZone=n,this.platform=s,this.nzEditorMode="normal",this.nzOriginalText="",this.nzLoading=!1,this.nzFullControl=!1,this.nzEditorInitialized=new e.vpe,this.editorOptionCached={},this.destroy$=new C.xQ,this.resize$=new C.xQ,this.editorOption$=new O.X({}),this.editorInstance=null,this.value="",this.modelSet=!1,this.onDidChangeContentDisposable=null,this.onChange=_=>{},this.onTouch=()=>{},this.el=d.nativeElement,this.el.classList.add("ant-code-editor")}set nzEditorOption(t){this.editorOption$.next(t)}ngAfterViewInit(){!this.platform.isBrowser||this.nzCodeEditorService.requestToInit().pipe((0,a.R)(this.destroy$)).subscribe(t=>this.setup(t))}ngOnDestroy(){this.onDidChangeContentDisposable&&(this.onDidChangeContentDisposable.dispose(),this.onDidChangeContentDisposable=null),this.editorInstance&&(this.editorInstance.dispose(),this.editorInstance=null),this.destroy$.next(),this.destroy$.complete()}writeValue(t){this.value=t,this.setValue()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}layout(){this.resize$.next()}setup(t){this.ngZone.runOutsideAngular(()=>(0,g.ov)().pipe((0,a.R)(this.destroy$)).subscribe(()=>{this.editorOptionCached=t,this.registerOptionChanges(),this.initMonacoEditorInstance(),this.registerResizeChange(),this.setValue(),this.nzFullControl||this.setValueEmitter(),this.nzEditorInitialized.observers.length&&this.ngZone.run(()=>this.nzEditorInitialized.emit(this.editorInstance))}))}registerOptionChanges(){(0,A.aj)([this.editorOption$,this.nzCodeEditorService.option$]).pipe((0,a.R)(this.destroy$)).subscribe(([t,n])=>{this.editorOptionCached=Object.assign(Object.assign(Object.assign({},this.editorOptionCached),n),t),this.updateOptionToMonaco()})}initMonacoEditorInstance(){this.ngZone.runOutsideAngular(()=>{this.editorInstance="normal"===this.nzEditorMode?monaco.editor.create(this.el,Object.assign({},this.editorOptionCached)):monaco.editor.createDiffEditor(this.el,Object.assign({},this.editorOptionCached))})}registerResizeChange(){this.ngZone.runOutsideAngular(()=>{(0,x.R)(window,"resize").pipe((0,v.b)(300),(0,a.R)(this.destroy$)).subscribe(()=>{this.layout()}),this.resize$.pipe((0,a.R)(this.destroy$),(0,R.h)(()=>!!this.editorInstance),(0,m.U)(()=>({width:this.el.clientWidth,height:this.el.clientHeight})),(0,j.x)((t,n)=>t.width===n.width&&t.height===n.height),(0,v.b)(50)).subscribe(()=>{this.editorInstance.layout()})})}setValue(){if(this.editorInstance){if(this.nzFullControl&&this.value)return void(0,c.ZK)("should not set value when you are using full control mode! It would result in ambiguous data flow!");if("normal"===this.nzEditorMode)if(this.modelSet){const t=this.editorInstance.getModel();this.preservePositionAndSelections(()=>t.setValue(this.value))}else this.editorInstance.setModel(monaco.editor.createModel(this.value,this.editorOptionCached.language)),this.modelSet=!0;else if(this.modelSet){const t=this.editorInstance.getModel();this.preservePositionAndSelections(()=>{t.modified.setValue(this.value),t.original.setValue(this.nzOriginalText)})}else{const t=this.editorOptionCached.language;this.editorInstance.setModel({original:monaco.editor.createModel(this.nzOriginalText,t),modified:monaco.editor.createModel(this.value,t)}),this.modelSet=!0}}}preservePositionAndSelections(t){if(!this.editorInstance)return void t();const n=this.editorInstance.getPosition(),d=this.editorInstance.getSelections();t(),n&&this.editorInstance.setPosition(n),d&&this.editorInstance.setSelections(d)}setValueEmitter(){const t="normal"===this.nzEditorMode?this.editorInstance.getModel():this.editorInstance.getModel().modified;this.onDidChangeContentDisposable=t.onDidChangeContent(()=>{this.emitValue(t.getValue())})}emitValue(t){this.value!==t&&(this.value=t,this.ngZone.run(()=>{this.onChange(t)}))}updateOptionToMonaco(){this.editorInstance&&this.editorInstance.updateOptions(Object.assign({},this.editorOptionCached))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36($),e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(B.t4))},i.\u0275cmp=e.Xpm({type:i,selectors:[["nz-code-editor"]],inputs:{nzEditorMode:"nzEditorMode",nzOriginalText:"nzOriginalText",nzLoading:"nzLoading",nzFullControl:"nzFullControl",nzToolkit:"nzToolkit",nzEditorOption:"nzEditorOption"},outputs:{nzEditorInitialized:"nzEditorInitialized"},exportAs:["nzCodeEditor"],features:[e._Bn([{provide:P.JU,useExisting:(0,e.Gpc)(()=>i),multi:!0}])],decls:2,vars:2,consts:[["class","ant-code-editor-loading",4,"ngIf"],["class","ant-code-editor-toolkit",4,"ngIf"],[1,"ant-code-editor-loading"],[1,"ant-code-editor-toolkit"],[3,"ngTemplateOutlet"]],template:function(t,n){1&t&&(e.YNc(0,b,2,0,"div",0),e.YNc(1,W,2,1,"div",1)),2&t&&(e.Q6J("ngIf",n.nzLoading),e.xp6(1),e.Q6J("ngIf",n.nzToolkit))},directives:[z.W,h.O5,h.tP],encapsulation:2,changeDetection:0}),(0,f.gn)([(0,g.yF)()],i.prototype,"nzLoading",void 0),(0,f.gn)([(0,g.yF)()],i.prototype,"nzFullControl",void 0),i})(),N=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[h.ez,U.PV,z.j]]}),i})()}}]);