(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[983],{2983:function(J,$,G){var L;typeof globalThis<"u"?globalThis:typeof this<"u"||(typeof window<"u"?window:typeof self<"u"?self:global),J.exports=(L=function(){try{return G(6166)}catch{}}(),function(){"use strict";var Y={662:function(O,y){var p,W=this&&this.__extends||(p=function(s,c){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,v){w.__proto__=v}||function(w,v){for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&(w[h]=v[h])})(s,c)},function(s,c){if("function"!=typeof c&&null!==c)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function w(){this.constructor=s}p(s,c),s.prototype=null===c?Object.create(c):(w.prototype=c.prototype,new w)});Object.defineProperty(y,"__esModule",{value:!0}),y.CellHookData=y.HookData=void 0;var F=function p(s,c,w){this.table=c,this.pageNumber=c.pageNumber,this.pageCount=this.pageNumber,this.settings=c.settings,this.cursor=w,this.doc=s.getDocument()};y.HookData=F;var b=function(p){function s(c,w,v,h,n,t){var e=p.call(this,c,w,t)||this;return e.cell=v,e.row=h,e.column=n,e.section=h.section,e}return W(s,p),s}(F);y.CellHookData=b},790:function(O,y,W){Object.defineProperty(y,"__esModule",{value:!0});var F=W(148),b=W(938),p=W(323),s=W(587),c=W(49),w=W(858);y.default=function v(h){h.API.autoTable=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e;1===n.length?e=n[0]:(console.error("Use of deprecated autoTable initiation"),(e=n[2]||{}).columns=n[0],e.body=n[1]);var r=(0,s.parseInput)(this,e),o=(0,w.createTable)(this,r);return(0,c.drawTable)(this,o),this},h.API.lastAutoTable=!1,h.API.previousAutoTable=!1,h.API.autoTable.previous=!1,h.API.autoTableText=function(n,t,e,r){(0,b.default)(n,t,e,r,this)},h.API.autoTableSetDefaults=function(n){return p.DocHandler.setDefaults(n,this),this},h.autoTableSetDefaults=function(n,t){p.DocHandler.setDefaults(n,t)},h.API.autoTableHtmlToJson=function(n,t){if(void 0===t&&(t=!1),typeof window>"u")return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var e=new p.DocHandler(this),r=(0,F.parseHtml)(e,n,window,t,!1),a=r.body;return{columns:r.head[0].map(function(u){return u.content}),rows:a,data:a}},h.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var n=this.lastAutoTable;return n&&n.finalY?n.finalY:0},h.API.autoTableAddPageContent=function(n){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),h.API.autoTable.globalDefaults||(h.API.autoTable.globalDefaults={}),h.API.autoTable.globalDefaults.addPageContent=n,this},h.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}},938:function(O,y){Object.defineProperty(y,"__esModule",{value:!0}),y.default=function W(F,b,p,s,c){s=s||{};var w=1.15,v=c.internal.scaleFactor,h=c.internal.getFontSize()/v,t="",e=1;if(("middle"===s.valign||"bottom"===s.valign||"center"===s.halign||"right"===s.halign)&&(e=(t="string"==typeof F?F.split(/\r\n|\r|\n/g):F).length||1),p+=h*(2-w),"middle"===s.valign?p-=e/2*h*w:"bottom"===s.valign&&(p-=e*h*w),"center"===s.halign||"right"===s.halign){var r=h;if("center"===s.halign&&(r*=.5),t&&e>=1){for(var o=0;o<t.length;o++)c.text(t[o],b-c.getStringUnitWidth(t[o])*r,p),p+=h*w;return c}b-=c.getStringUnitWidth(F)*r}return"justify"===s.halign?c.text(F,b,p,{maxWidth:s.maxWidth||100,align:"justify"}):c.text(F,b,p),c}},200:function(O,y){function b(s,c){var w=s>0,v=c||0===c;return w&&v?"DF":w?"S":v?"F":null}Object.defineProperty(y,"__esModule",{value:!0}),y.parseSpacing=y.getFillStyle=y.addTableBorder=y.getStringWidth=void 0,y.getStringWidth=function W(s,c,w){return w.applyStyles(c,!0),(Array.isArray(s)?s:[s]).map(function(n){return w.getTextWidth(n)}).reduce(function(n,t){return Math.max(n,t)},0)},y.addTableBorder=function F(s,c,w,v){var h=c.settings.tableLineWidth;s.applyStyles({lineWidth:h,lineColor:c.settings.tableLineColor});var t=b(h,!1);t&&s.rect(w.x,w.y,c.getWidth(s.pageSize().width),v.y-w.y,t)},y.getFillStyle=b,y.parseSpacing=function p(s,c){var w,v,h,n;if(s=s||c,Array.isArray(s)){if(s.length>=4)return{top:s[0],right:s[1],bottom:s[2],left:s[3]};if(3===s.length)return{top:s[0],right:s[1],bottom:s[2],left:s[1]};if(2===s.length)return{top:s[0],right:s[1],bottom:s[0],left:s[1]};s=1===s.length?s[0]:c}return"object"==typeof s?("number"==typeof s.vertical&&(s.top=s.vertical,s.bottom=s.vertical),"number"==typeof s.horizontal&&(s.right=s.horizontal,s.left=s.horizontal),{left:null!==(w=s.left)&&void 0!==w?w:c,top:null!==(v=s.top)&&void 0!==v?v:c,right:null!==(h=s.right)&&void 0!==h?h:c,bottom:null!==(n=s.bottom)&&void 0!==n?n:c}):("number"!=typeof s&&(s=c),{top:s,right:s,bottom:s,left:s})}},913:function(O,y){var s,W=this&&this.__extends||(s=function(c,w){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,h){v.__proto__=h}||function(v,h){for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&(v[n]=h[n])})(c,w)},function(c,w){if("function"!=typeof w&&null!==w)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");function v(){this.constructor=c}s(c,w),c.prototype=null===w?Object.create(w):(v.prototype=w.prototype,new v)});Object.defineProperty(y,"__esModule",{value:!0}),y.getTheme=y.defaultStyles=y.HtmlRowInput=y.FONT_ROW_RATIO=void 0,y.FONT_ROW_RATIO=1.15;var F=function(s){function c(w){var v=s.call(this)||this;return v._element=w,v}return W(c,s),c}(Array);y.HtmlRowInput=F,y.defaultStyles=function b(s){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/s,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}},y.getTheme=function p(s){return{striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}}[s]}},259:function(O,y,W){Object.defineProperty(y,"__esModule",{value:!0}),y.parseCss=void 0;var F=W(200);function s(v,h){var n=c(v,h);if(!n)return null;var t=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!t||!Array.isArray(t))return null;var e=[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])];return 0===parseInt(t[4])||isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function c(v,h){var n=h(v);return"rgba(0, 0, 0, 0)"===n||"transparent"===n||"initial"===n||"inherit"===n?null==v.parentElement?null:c(v.parentElement,h):n}y.parseCss=function b(v,h,n,t,e){var r={},o=1.3333333333333333,a=s(h,function(d){return e.getComputedStyle(d).backgroundColor});null!=a&&(r.fillColor=a);var l=s(h,function(d){return e.getComputedStyle(d).color});null!=l&&(r.textColor=l);var u=s(h,function(d){return e.getComputedStyle(d).borderTopColor});null!=u&&(r.lineColor=u);var g=function w(v,h){var n=[v.paddingTop,v.paddingRight,v.paddingBottom,v.paddingLeft],t=96/(72/h),e=(parseInt(v.lineHeight)-parseInt(v.fontSize))/h/2,r=n.map(function(a){return parseInt(a||"0")/t}),o=(0,F.parseSpacing)(r,0);return e>o.top&&(o.top=e),e>o.bottom&&(o.bottom=e),o}(t,n);g&&(r.cellPadding=g);var m=parseInt(t.borderTopWidth||"");(m=m/o/n)&&(r.lineWidth=m);var S=["left","right","center","justify"];-1!==S.indexOf(t.textAlign)&&(r.halign=t.textAlign),-1!==(S=["middle","bottom","top"]).indexOf(t.verticalAlign)&&(r.valign=t.verticalAlign);var i=parseInt(t.fontSize||"");isNaN(i)||(r.fontSize=i/o);var T=function p(v){var h="";return("bold"===v.fontWeight||"bolder"===v.fontWeight||parseInt(v.fontWeight)>=700)&&(h="bold"),("italic"===v.fontStyle||"oblique"===v.fontStyle)&&(h+="italic"),h}(t);T&&(r.fontStyle=T);var R=(t.fontFamily||"").toLowerCase();return-1!==v.indexOf(R)&&(r.font=R),r}},323:function(O,y){Object.defineProperty(y,"__esModule",{value:!0}),y.DocHandler=void 0;var W={},F=function(){function b(p){this.jsPDFDocument=p,this.userStyles={textColor:p.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:p.internal.getFontSize(),fontStyle:p.internal.getFont().fontStyle,font:p.internal.getFont().fontName,lineWidth:p.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:p.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return b.setDefaults=function(p,s){void 0===s&&(s=null),s?s.__autoTableDocumentDefaults=p:W=p},b.unifyColor=function(p){return Array.isArray(p)?p:"number"==typeof p?[p,p,p]:"string"==typeof p?[p]:null},b.prototype.applyStyles=function(p,s){var c,w,v;void 0===s&&(s=!1),p.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(p.fontStyle);var h=this.jsPDFDocument.internal.getFont(),n=h.fontStyle,t=h.fontName;if(p.font&&(t=p.font),p.fontStyle){n=p.fontStyle;var e=this.getFontList()[t];e&&-1===e.indexOf(n)&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(e[0]),n=e[0])}if(this.jsPDFDocument.setFont(t,n),p.fontSize&&this.jsPDFDocument.setFontSize(p.fontSize),!s){var r=b.unifyColor(p.fillColor);r&&(c=this.jsPDFDocument).setFillColor.apply(c,r),(r=b.unifyColor(p.textColor))&&(w=this.jsPDFDocument).setTextColor.apply(w,r),(r=b.unifyColor(p.lineColor))&&(v=this.jsPDFDocument).setDrawColor.apply(v,r),"number"==typeof p.lineWidth&&this.jsPDFDocument.setLineWidth(p.lineWidth)}},b.prototype.splitTextToSize=function(p,s,c){return this.jsPDFDocument.splitTextToSize(p,s,c)},b.prototype.rect=function(p,s,c,w,v){return this.jsPDFDocument.rect(p,s,c,w,v)},b.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},b.prototype.getTextWidth=function(p){return this.jsPDFDocument.getTextWidth(p)},b.prototype.getDocument=function(){return this.jsPDFDocument},b.prototype.setPage=function(p){this.jsPDFDocument.setPage(p)},b.prototype.addPage=function(){return this.jsPDFDocument.addPage()},b.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},b.prototype.getGlobalOptions=function(){return W||{}},b.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},b.prototype.pageSize=function(){var p=this.jsPDFDocument.internal.pageSize;return null==p.width&&(p={width:p.getWidth(),height:p.getHeight()}),p},b.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},b.prototype.pageNumber=function(){var p=this.jsPDFDocument.internal.getCurrentPageInfo();return p?p.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},b}();y.DocHandler=F},148:function(O,y,W){Object.defineProperty(y,"__esModule",{value:!0}),y.parseHtml=void 0;var F=W(259),b=W(913);function s(w,v,h,n,t,e){for(var r=new b.HtmlRowInput(n),o=0;o<n.cells.length;o++){var a=n.cells[o],l=h.getComputedStyle(a);if(t||"none"!==l.display){var u=void 0;e&&(u=(0,F.parseCss)(w,a,v,l,h)),r.push({rowSpan:a.rowSpan,colSpan:a.colSpan,styles:u,_element:a,content:c(a)})}}var g=h.getComputedStyle(n);if(r.length>0&&(t||"none"!==g.display))return r}function c(w){var v=w.cloneNode(!0);return v.innerHTML=v.innerHTML.replace(/\n/g,"").replace(/ +/g," "),v.innerHTML=v.innerHTML.split(/\<br.*?\>/).map(function(h){return h.trim()}).join("\n"),v.innerText||v.textContent||""}y.parseHtml=function p(w,v,h,n,t){var e,r,o;void 0===n&&(n=!1),void 0===t&&(t=!1),o="string"==typeof v?h.document.querySelector(v):v;var a=Object.keys(w.getFontList()),l=w.scaleFactor(),u=[],g=[],m=[];if(!o)return console.error("Html table could not be found with input: ",v),{head:u,body:g,foot:m};for(var S=0;S<o.rows.length;S++){var i=o.rows[S],T=null===(r=null===(e=i?.parentElement)||void 0===e?void 0:e.tagName)||void 0===r?void 0:r.toLowerCase(),R=s(a,l,h,i,n,t);R&&("thead"===T?u.push(R):"tfoot"===T?m.push(R):g.push(R))}return{head:u,body:g,foot:m}}},587:function(O,y,W){Object.defineProperty(y,"__esModule",{value:!0}),y.parseInput=void 0;var F=W(148),b=W(360),p=W(200),s=W(323),c=W(291);function r(o,a,l){var u=o[0]||a[0]||l[0]||[],g=[];return Object.keys(u).filter(function(m){return"_element"!==m}).forEach(function(m){var i,S=1;"object"==typeof(i=Array.isArray(u)?u[parseInt(m)]:u[m])&&!Array.isArray(i)&&(S=i?.colSpan||1);for(var T=0;T<S;T++){var R;R=Array.isArray(u)?g.length:m+(T>0?"_".concat(T):""),g.push({dataKey:R})}}),g}y.parseInput=function w(o,a){var l=new s.DocHandler(o),u=l.getDocumentOptions(),g=l.getGlobalOptions();(0,c.default)(l,g,u,a);var S,m=(0,b.assign)({},g,u,a);typeof window<"u"&&(S=window);var i=function v(o,a,l){for(var u={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},g=function(T){if("columnStyles"===T)u.columnStyles=(0,b.assign)({},o[T],a[T],l[T]);else{var P=[o,a,l].map(function(x){return x[T]||{}});u[T]=(0,b.assign)({},P[0],P[1],P[2])}},m=0,S=Object.keys(u);m<S.length;m++)g(S[m]);return u}(g,u,a),T=function h(o,a,l){for(var g={didParseCell:[],willDrawCell:[],didDrawCell:[],didDrawPage:[]},m=0,S=[o,a,l];m<S.length;m++){var i=S[m];i.didParseCell&&g.didParseCell.push(i.didParseCell),i.willDrawCell&&g.willDrawCell.push(i.willDrawCell),i.didDrawCell&&g.didDrawCell.push(i.didDrawCell),i.didDrawPage&&g.didDrawPage.push(i.didDrawPage)}return g}(g,u,a),R=function n(o,a){var l,u,g,m,S,i,T,R,d,f,C,H,D,P=(0,p.parseSpacing)(a.margin,40/o.scaleFactor()),x=null!==(l=function t(o,a){var l=o.getLastAutoTable(),u=o.scaleFactor(),g=o.pageNumber(),m=!1;return l&&l.startPageNumber&&(m=l.startPageNumber+l.pageNumber-1===g),"number"==typeof a?a:null!=a&&!1!==a||!m||null==l?.finalY?null:l.finalY+20/u}(o,a.startY))&&void 0!==l?l:P.top;H=!0===a.showFoot?"everyPage":!1===a.showFoot?"never":null!==(u=a.showFoot)&&void 0!==u?u:"everyPage",D=!0===a.showHead?"everyPage":!1===a.showHead?"never":null!==(g=a.showHead)&&void 0!==g?g:"everyPage";var k=null!==(m=a.useCss)&&void 0!==m&&m,A=null!==(S=a.horizontalPageBreakRepeat)&&void 0!==S?S:null;return{includeHiddenHtml:null!==(i=a.includeHiddenHtml)&&void 0!==i&&i,useCss:k,theme:a.theme||(k?"plain":"striped"),startY:x,margin:P,pageBreak:null!==(T=a.pageBreak)&&void 0!==T?T:"auto",rowPageBreak:null!==(R=a.rowPageBreak)&&void 0!==R?R:"auto",tableWidth:null!==(d=a.tableWidth)&&void 0!==d?d:"auto",showHead:D,showFoot:H,tableLineWidth:null!==(f=a.tableLineWidth)&&void 0!==f?f:0,tableLineColor:null!==(C=a.tableLineColor)&&void 0!==C?C:200,horizontalPageBreak:!!a.horizontalPageBreak,horizontalPageBreakRepeat:A}}(l,m),d=function e(o,a,l){var u=a.head||[],g=a.body||[],m=a.foot||[];if(a.html)if(l){var i=(0,F.parseHtml)(o,a.html,l,a.includeHiddenHtml,a.useCss)||{};u=i.head||u,g=i.body||u,m=i.foot||u}else console.error("Cannot parse html in non browser environment");return{columns:a.columns||r(u,g,m),head:u,body:g,foot:m}}(l,m,S);return{id:a.tableId,content:d,hooks:T,styles:i,settings:R}}},291:function(O,y){function F(b){b.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),b.minCellHeight||(b.minCellHeight=b.rowHeight)):b.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),b.cellWidth||(b.cellWidth=b.columnWidth))}Object.defineProperty(y,"__esModule",{value:!0}),y.default=function W(b,p,s,c){for(var w=function(t){t&&"object"!=typeof t&&console.error("The options parameter should be of type object, is: "+typeof t),typeof t.extendWidth<"u"&&(t.tableWidth=t.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),typeof t.margins<"u"&&(typeof t.margin>"u"&&(t.margin=t.margins),console.error("Use of deprecated option: margins, use margin instead.")),t.startY&&"number"!=typeof t.startY&&(console.error("Invalid value for startY option",t.startY),delete t.startY),!t.didDrawPage&&(t.afterPageContent||t.beforePageContent||t.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),t.didDrawPage=function(m){b.applyStyles(b.userStyles),t.beforePageContent&&t.beforePageContent(m),b.applyStyles(b.userStyles),t.afterPageContent&&t.afterPageContent(m),b.applyStyles(b.userStyles),t.afterPageAdd&&m.pageNumber>1&&m.afterPageAdd(m),b.applyStyles(b.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach(function(m){t[m]&&console.error('The "'.concat(m,'" hook has changed in version 3.0, check the changelog for how to migrate.'))}),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach(function(m){var S=m[0],i=m[1];t[i]&&(console.error("Use of deprecated option ".concat(i,". Use ").concat(S," instead")),t[S]=t[i])}),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(m){var S="string"==typeof m?m:m[0],i="string"==typeof m?m:m[1];typeof t[S]<"u"&&(typeof t.styles[i]>"u"&&(t.styles[i]=t[S]),console.error("Use of deprecated option: "+S+", use the style "+i+" instead."))});for(var e=0,r=["styles","bodyStyles","headStyles","footStyles"];e<r.length;e++)F(t[r[e]]||{});for(var a=t.columnStyles||{},l=0,u=Object.keys(a);l<u.length;l++)F(a[u[l]]||{})},v=0,h=[p,s,c];v<h.length;v++)w(h[v])}},287:function(O,y,W){Object.defineProperty(y,"__esModule",{value:!0}),y.Column=y.Cell=y.Row=y.Table=void 0;var F=W(913),b=W(662),p=W(200),s=function(){function h(n,t){this.pageNumber=1,this.pageCount=1,this.id=n.id,this.settings=n.settings,this.styles=n.styles,this.hooks=n.hooks,this.columns=t.columns,this.head=t.head,this.body=t.body,this.foot=t.foot}return h.prototype.getHeadHeight=function(n){return this.head.reduce(function(t,e){return t+e.getMaxCellHeight(n)},0)},h.prototype.getFootHeight=function(n){return this.foot.reduce(function(t,e){return t+e.getMaxCellHeight(n)},0)},h.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},h.prototype.callCellHooks=function(n,t,e,r,o,a){for(var l=0,u=t;l<u.length;l++){var S=!1===(0,u[l])(new b.CellHookData(n,this,e,r,o,a));if(e.text=Array.isArray(e.text)?e.text:[e.text],S)return!1}return!0},h.prototype.callEndPageHooks=function(n,t){n.applyStyles(n.userStyles);for(var e=0,r=this.hooks.didDrawPage;e<r.length;e++)(0,r[e])(new b.HookData(n,this,t))},h.prototype.getWidth=function(n){if("number"==typeof this.settings.tableWidth)return this.settings.tableWidth;if("wrap"===this.settings.tableWidth)return this.columns.reduce(function(r,o){return r+o.wrappedWidth},0);var e=this.settings.margin;return n-e.left-e.right},h}();y.Table=s;var c=function(){function h(n,t,e,r,o){void 0===o&&(o=!1),this.height=0,this.raw=n,n instanceof F.HtmlRowInput&&(this.raw=n._element,this.element=n._element),this.index=t,this.section=e,this.cells=r,this.spansMultiplePages=o}return h.prototype.getMaxCellHeight=function(n){var t=this;return n.reduce(function(e,r){var o;return Math.max(e,(null===(o=t.cells[r.index])||void 0===o?void 0:o.height)||0)},0)},h.prototype.hasRowSpan=function(n){var t=this;return n.filter(function(e){var r=t.cells[e.index];return!!r&&r.rowSpan>1}).length>0},h.prototype.canEntireRowFit=function(n,t){return this.getMaxCellHeight(t)<=n},h.prototype.getMinimumRowHeight=function(n,t){var e=this;return n.reduce(function(r,o){var a=e.cells[o.index];if(!a)return 0;var l=a.styles.fontSize/t.scaleFactor()*F.FONT_ROW_RATIO,g=a.padding("vertical")+l;return g>r?g:r},0)},h}();y.Row=c;var w=function(){function h(n,t,e){var r,o;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=t,this.section=e,this.raw=n;var a=n;null==n||"object"!=typeof n||Array.isArray(n)?(this.rowSpan=1,this.colSpan=1):(this.rowSpan=n.rowSpan||1,this.colSpan=n.colSpan||1,a=null!==(o=null!==(r=n.content)&&void 0!==r?r:n.title)&&void 0!==o?o:n,n._element&&(this.raw=n._element)),this.text=(null!=a?""+a:"").split(/\r\n|\r|\n/g)}return h.prototype.getTextPos=function(){var n,e;if("top"===this.styles.valign)n=this.y+this.padding("top");else if("bottom"===this.styles.valign)n=this.y+this.height-this.padding("bottom");else{var t=this.height-this.padding("vertical");n=this.y+t/2+this.padding("top")}if("right"===this.styles.halign)e=this.x+this.width-this.padding("right");else if("center"===this.styles.halign){var r=this.width-this.padding("horizontal");e=this.x+r/2+this.padding("left")}else e=this.x+this.padding("left");return{x:e,y:n}},h.prototype.getContentHeight=function(n){var r=(Array.isArray(this.text)?this.text.length:1)*(this.styles.fontSize/n*F.FONT_ROW_RATIO)+this.padding("vertical");return Math.max(r,this.styles.minCellHeight)},h.prototype.padding=function(n){var t=(0,p.parseSpacing)(this.styles.cellPadding,0);return"vertical"===n?t.top+t.bottom:"horizontal"===n?t.left+t.right:t[n]},h}();y.Cell=w;var v=function(){function h(n,t,e){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=n,this.raw=t,this.index=e}return h.prototype.getMaxCustomCellWidth=function(n){for(var t=0,e=0,r=n.allRows();e<r.length;e++){var a=r[e].cells[this.index];a&&"number"==typeof a.styles.cellWidth&&(t=Math.max(t,a.styles.cellWidth))}return t},h}();y.Column=v},360:function(O,y){Object.defineProperty(y,"__esModule",{value:!0}),y.assign=void 0,y.assign=function W(F,b,p,s,c){if(null==F)throw new TypeError("Cannot convert undefined or null to object");for(var w=Object(F),v=1;v<arguments.length;v++){var h=arguments[v];if(null!=h)for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&(w[n]=h[n])}return w}},858:function(O,y,W){Object.defineProperty(y,"__esModule",{value:!0}),y.createTable=void 0;var F=W(323),b=W(287),p=W(189),s=W(913),c=W(360);function h(o,a,l,u,g,m){var S={};return a.map(function(T,R){for(var d=0,f={},C=0,P=0,x=0,H=l;x<H.length;x++){var D=H[x];if(null==S[D.index]||0===S[D.index].left)if(0===P){var k,j={};"object"==typeof(k=Array.isArray(T)?T[D.index-C-d]:T[D.dataKey])&&!Array.isArray(k)&&(j=k?.styles||{});var z=r(o,D,R,g,u,m,j),A=new b.Cell(k,z,o);f[D.dataKey]=A,f[D.index]=A,S[D.index]={left:A.rowSpan-1,times:P=A.colSpan-1}}else P--,C++;else S[D.index].left--,P=S[D.index].times,d++}return new b.Row(T,R,o,f)})}function n(o,a){var l={};return o.forEach(function(u){if(null!=u.raw){var g=function t(o,a){if("head"===o){if("object"==typeof a)return a.header||a.title||null;if("string"==typeof a||"number"==typeof a)return a}else if("foot"===o&&"object"==typeof a)return a.footer;return null}(a,u.raw);null!=g&&(l[u.dataKey]=g)}}),Object.keys(l).length>0?l:null}function r(o,a,l,u,g,m,S){var T,i=(0,s.getTheme)(u);"head"===o?T=g.headStyles:"body"===o?T=g.bodyStyles:"foot"===o&&(T=g.footStyles);var R=(0,c.assign)({},i.table,i[o],g.styles,T),f="body"===o&&(g.columnStyles[a.dataKey]||g.columnStyles[a.index])||{},C="body"===o&&l%2==0?(0,c.assign)({},i.alternateRow,g.alternateRowStyles):{},P=(0,s.defaultStyles)(m),x=(0,c.assign)({},P,R,C,f);return(0,c.assign)(x,S)}y.createTable=function w(o,a){var l=new F.DocHandler(o),u=function v(o,a){var g,l=o.content,u=function e(o){return o.map(function(a,l){var u,g,m;return m="object"==typeof a&&null!==(g=null!==(u=a.dataKey)&&void 0!==u?u:a.key)&&void 0!==g?g:l,new b.Column(m,a,l)})}(l.columns);0===l.head.length&&(g=n(u,"head"))&&l.head.push(g),0===l.foot.length&&(g=n(u,"foot"))&&l.foot.push(g);var m=o.settings.theme,S=o.styles;return{columns:u,head:h("head",l.head,u,S,m,a),body:h("body",l.body,u,S,m,a),foot:h("foot",l.foot,u,S,m,a)}}(a,l.scaleFactor()),g=new b.Table(a,u);return(0,p.calculateWidths)(l,g),l.applyStyles(l.userStyles),g}},49:function(O,y,W){Object.defineProperty(y,"__esModule",{value:!0}),y.addPage=y.drawTable=void 0;var F=W(913),b=W(200),p=W(287),s=W(323),c=W(360),w=W(938),v=W(435);function o(d,f,C){var P=d.styles.fontSize/C.scaleFactor()*F.FONT_ROW_RATIO,x=d.padding("vertical"),H=Math.floor((f-x)/P);return Math.max(0,H)}function u(d,f,C,P,x,H,D){var k=function i(d,f,C,P){var x=f.settings.margin.bottom,H=f.settings.showFoot;return("everyPage"===H||"lastPage"===H&&C)&&(x+=f.getFootHeight(f.columns)),d.pageSize().height-P.y-x}(d,f,P,H);if(C.canEntireRowFit(k,D))g(d,f,C,H,D);else if(function l(d,f,C,P){var x=d.pageSize().height,H=P.settings.margin,k=x-(H.top+H.bottom);"body"===f.section&&(k-=P.getHeadHeight(P.columns)+P.getFootHeight(P.columns));var j=f.getMinimumRowHeight(P.columns,d),z=j<C;if(j>k)return console.error("Will not be able to print row ".concat(f.index," correctly since it's minimum height is larger than page height")),!0;if(!z)return!1;var A=f.hasRowSpan(P.columns);return f.getMaxCellHeight(P.columns)>k?(A&&console.error("The content of row ".concat(f.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!(A||"avoid"===P.settings.rowPageBreak)}(d,C,k,f)){var j=function a(d,f,C,P){var x={};d.spansMultiplePages=!0,d.height=0;for(var H=0,D=0,k=C.columns;D<k.length;D++)if(z=d.cells[(j=k[D]).index]){Array.isArray(z.text)||(z.text=[z.text]);var A=new p.Cell(z.raw,z.styles,z.section);(A=(0,c.assign)(A,z)).text=[];var I=o(z,f,P);z.text.length>I&&(A.text=z.text.splice(I,z.text.length));var _=P.scaleFactor();z.contentHeight=z.getContentHeight(_),z.contentHeight>=f&&(z.contentHeight=f,A.styles.minCellHeight-=f),z.contentHeight>d.height&&(d.height=z.contentHeight),A.contentHeight=A.getContentHeight(_),A.contentHeight>H&&(H=A.contentHeight),x[j.index]=A}var B=new p.Row(d.raw,-1,d.section,x,!0);B.height=H;for(var N=0,K=C.columns;N<K.length;N++){var j,z;(A=B.cells[(j=K[N]).index])&&(A.height=B.height),(z=d.cells[j.index])&&(z.height=d.height)}return B}(C,k,f,d);g(d,f,C,H,D),T(d,f,x,H,D),u(d,f,j,P,x,H,D)}else T(d,f,x,H,D),u(d,f,C,P,x,H,D)}function g(d,f,C,P,x){P.x=f.settings.margin.left;for(var H=0,D=x;H<D.length;H++){var k=D[H],j=C.cells[k.index];if(j)if(d.applyStyles(j.styles),j.x=P.x,j.y=P.y,!1!==f.callCellHooks(d,f.hooks.willDrawCell,j,C,k,P)){m(d,j,P);var A=j.getTextPos();(0,w.default)(j.text,A.x,A.y,{halign:j.styles.halign,valign:j.styles.valign,maxWidth:Math.ceil(j.width-j.padding("left")-j.padding("right"))},d.getDocument()),f.callCellHooks(d,f.hooks.didDrawCell,j,C,k,P),P.x+=k.width}else P.x+=k.width;else P.x+=k.width}P.y+=C.height}function m(d,f,C){var P=f.styles;if(d.getDocument().setFillColor(d.getDocument().getFillColor()),"number"==typeof P.lineWidth){var x=(0,b.getFillStyle)(P.lineWidth,P.fillColor);x&&d.rect(f.x,C.y,f.width,f.height,x)}else if("object"==typeof P.lineWidth){d.rect(f.x,C.y,f.width,f.height,"F");var H=Object.keys(P.lineWidth),D=P.lineWidth;H.map(function(k){var j=(0,b.getFillStyle)(D[k],P.fillColor);!function S(d,f,C,P,x,H){var D,k,j,z;switch(P){case"top":D=C.x,k=C.y,j=C.x+f.width,z=C.y;break;case"left":D=C.x,k=C.y,j=C.x,z=C.y+f.height;break;case"right":D=C.x+f.width,k=C.y,j=C.x+f.width,z=C.y+f.height;break;default:D=C.x,k=C.y+f.height-H,j=C.x+f.width,z=C.y+f.height-H}d.getDocument().setLineWidth(H),d.getDocument().line(D,k,j,z,x)}(d,f,C,k,j||"S",D[k])})}}function T(d,f,C,P,x){void 0===x&&(x=[]),d.applyStyles(d.userStyles),"everyPage"===f.settings.showFoot&&f.foot.forEach(function(D){return g(d,f,D,P,x)}),f.callEndPageHooks(d,P);var H=f.settings.margin;(0,b.addTableBorder)(d,f,C,P),R(d),f.pageNumber++,f.pageCount++,P.x=H.left,P.y=H.top,C.y=H.top,"everyPage"===f.settings.showHead&&f.head.forEach(function(D){return g(d,f,D,P,x)})}function R(d){var f=d.pageNumber();d.setPage(f+1),d.pageNumber()===f&&d.addPage()}y.drawTable=function h(d,f){var C=f.settings,P=C.startY,x=C.margin,H={x:x.left,y:P},D=f.getHeadHeight(f.columns)+f.getFootHeight(f.columns),k=P+x.bottom+D;"avoid"===C.pageBreak&&(k+=f.allRows().reduce(function(_,B){return _+B.height},0));var A=new s.DocHandler(d);("always"===C.pageBreak||null!=C.startY&&k>A.pageSize().height)&&(R(A),H.y=x.top);var I=(0,c.assign)({},H);f.startPageNumber=A.pageNumber(),!0===C.horizontalPageBreak?function n(d,f,C,P){v.default.calculateAllColumnsCanFitInPage(d,f).map(function(H,D){d.applyStyles(d.userStyles),D>0?T(d,f,C,P,H.columns):function t(d,f,C,P){var x=f.settings;d.applyStyles(d.userStyles),("firstPage"===x.showHead||"everyPage"===x.showHead)&&f.head.forEach(function(H){return g(d,f,H,C,P)})}(d,f,P,H.columns),function e(d,f,C,P,x){d.applyStyles(d.userStyles),f.body.forEach(function(H,D){u(d,f,H,D===f.body.length-1,C,P,x)})}(d,f,C,P,H.columns),function r(d,f,C,P){var x=f.settings;d.applyStyles(d.userStyles),("lastPage"===x.showFoot||"everyPage"===x.showFoot)&&f.foot.forEach(function(H){return g(d,f,H,C,P)})}(d,f,P,H.columns)})}(A,f,I,H):(A.applyStyles(A.userStyles),("firstPage"===C.showHead||"everyPage"===C.showHead)&&f.head.forEach(function(_){return g(A,f,_,H,f.columns)}),A.applyStyles(A.userStyles),f.body.forEach(function(_,B){u(A,f,_,B===f.body.length-1,I,H,f.columns)}),A.applyStyles(A.userStyles),("lastPage"===C.showFoot||"everyPage"===C.showFoot)&&f.foot.forEach(function(_){return g(A,f,_,H,f.columns)})),(0,b.addTableBorder)(A,f,I,H),f.callEndPageHooks(A,H),f.finalY=H.y,d.lastAutoTable=f,d.previousAutoTable=f,d.autoTable&&(d.autoTable.previous=f),A.applyStyles(A.userStyles)},y.addPage=T},435:function(O,y,W){Object.defineProperty(y,"__esModule",{value:!0});var F=W(200),b=function(c,w){var v=(0,F.parseSpacing)(w.settings.margin,0);return c.pageSize().width-(v.left+v.right)},p=function(c,w,v){void 0===v&&(v={});var n=b(c,w),t=w.settings.horizontalPageBreakRepeat,e=null,r=[],o=[],a=w.columns.length,l=v&&v.start?v.start:0;for(null!=t&&(e=w.columns.find(function(g){return g.dataKey===t||g.index===t}))&&(r.push(e.index),o.push(w.columns[e.index]),n-=e.wrappedWidth);l<a;)if(e?.index!==l){var u=w.columns[l].wrappedWidth;if(n<u){(0===l||l===v.start)&&(r.push(l),o.push(w.columns[l]));break}r.push(l),o.push(w.columns[l]),n-=u,l++}else l++;return{colIndexes:r,columns:o,lastIndex:l}};y.default={getColumnsCanFitInPage:p,calculateAllColumnsCanFitInPage:function(c,w){for(var v=[],h=0,n=w.columns.length;h<n;){var t=p(c,w,{start:0===h?0:h});t&&t.columns&&t.columns.length?(h=t.lastIndex,v.push(t)):h++}return v},getPageAvailableWidth:b}},189:function(O,y,W){Object.defineProperty(y,"__esModule",{value:!0}),y.ellipsize=y.resizeColumns=y.calculateWidths=void 0;var F=W(200),b=W(435);function c(e,r,o){for(var a=r,l=e.reduce(function(f,C){return f+C.wrappedWidth},0),u=0;u<e.length;u++){var g=e[u],i=g.width+a*(g.wrappedWidth/l),T=o(g),R=i<T?T:i;r-=R-g.width,g.width=R}if(r=Math.round(1e10*r)/1e10){var d=e.filter(function(f){return!(r<0)||f.width>o(f)});d.length&&(r=c(d,r,o))}return r}function n(e,r,o,a,l){return e.map(function(u){return function t(e,r,o,a,l){var u=1e4*a.scaleFactor();if((r=Math.ceil(r*u)/u)>=(0,F.getStringWidth)(e,o,a))return e;for(;r<(0,F.getStringWidth)(e+l,o,a)&&!(e.length<=1);)e=e.substring(0,e.length-1);return e.trim()+l}(u,r,o,a,l)})}y.calculateWidths=function p(e,r){!function s(e,r){var o=e.scaleFactor(),a=r.settings.horizontalPageBreak,l=b.default.getPageAvailableWidth(e,r);r.allRows().forEach(function(u){for(var g=0,m=r.columns;g<m.length;g++){var S=m[g],i=u.cells[S.index];if(i){r.callCellHooks(e,r.hooks.didParseCell,i,u,S,null);var R=i.padding("horizontal");i.contentWidth=(0,F.getStringWidth)(i.text,i.styles,e)+R;var d=(0,F.getStringWidth)(i.text.join(" ").split(/\s+/),i.styles,e);i.minReadableWidth=d+i.padding("horizontal"),"number"==typeof i.styles.cellWidth?(i.minWidth=i.styles.cellWidth,i.wrappedWidth=i.styles.cellWidth):"wrap"===i.styles.cellWidth||!0===a?i.contentWidth>l?(i.minWidth=l,i.wrappedWidth=l):(i.minWidth=i.contentWidth,i.wrappedWidth=i.contentWidth):(i.minWidth=i.styles.minCellWidth||10/o,i.wrappedWidth=i.contentWidth,i.minWidth>i.wrappedWidth&&(i.wrappedWidth=i.minWidth))}}}),r.allRows().forEach(function(u){for(var g=0,m=r.columns;g<m.length;g++){var S=m[g],i=u.cells[S.index];if(i&&1===i.colSpan)S.wrappedWidth=Math.max(S.wrappedWidth,i.wrappedWidth),S.minWidth=Math.max(S.minWidth,i.minWidth),S.minReadableWidth=Math.max(S.minReadableWidth,i.minReadableWidth);else{var T=r.styles.columnStyles[S.dataKey]||r.styles.columnStyles[S.index]||{},R=T.cellWidth||T.minCellWidth;R&&"number"==typeof R&&(S.minWidth=R,S.wrappedWidth=R)}i&&(i.colSpan>1&&!S.minWidth&&(S.minWidth=i.minWidth),i.colSpan>1&&!S.wrappedWidth&&(S.wrappedWidth=i.minWidth))}})}(e,r);var o=[],a=0;r.columns.forEach(function(u){var g=u.getMaxCustomCellWidth(r);g?u.width=g:(u.width=u.wrappedWidth,o.push(u)),a+=u.width});var l=r.getWidth(e.pageSize().width)-a;l&&(l=c(o,l,function(u){return Math.max(u.minReadableWidth,u.minWidth)})),l&&(l=c(o,l,function(u){return u.minWidth})),l=Math.abs(l),!r.settings.horizontalPageBreak&&l>.1/e.scaleFactor()&&(l=l<1?l:Math.round(l),console.error("Of the table content, ".concat(l," units width could not fit page"))),function v(e){for(var r=e.allRows(),o=0;o<r.length;o++)for(var a=r[o],l=null,u=0,g=0,m=0;m<e.columns.length;m++){var S=e.columns[m];if((g-=1)>1&&e.columns[m+1])u+=S.width,delete a.cells[S.index];else if(l){var i=l;delete a.cells[S.index],l=null,i.width=S.width+u}else{if(!(i=a.cells[S.index]))continue;if(g=i.colSpan,u=0,i.colSpan>1){l=i,u+=S.width;continue}i.width=S.width+u}}}(r),function h(e,r){for(var o={count:0,height:0},a=0,l=e.allRows();a<l.length;a++){for(var u=l[a],g=0,m=e.columns;g<m.length;g++){var i=u.cells[m[g].index];if(i){r.applyStyles(i.styles,!0);var T=i.width-i.padding("horizontal");if("linebreak"===i.styles.overflow)i.text=r.splitTextToSize(i.text,T+1/r.scaleFactor(),{fontSize:i.styles.fontSize});else if("ellipsize"===i.styles.overflow)i.text=n(i.text,T,i.styles,r,"...");else if("hidden"===i.styles.overflow)i.text=n(i.text,T,i.styles,r,"");else if("function"==typeof i.styles.overflow){var R=i.styles.overflow(i.text,T);i.text="string"==typeof R?[R]:R}i.contentHeight=i.getContentHeight(r.scaleFactor());var d=i.contentHeight/i.rowSpan;i.rowSpan>1&&o.count*o.height<d*i.rowSpan?o={height:d,count:i.rowSpan}:o&&o.count>0&&o.height>d&&(d=o.height),d>u.height&&(u.height=d)}}o.count--}}(r,e),function w(e){for(var r={},o=1,a=e.allRows(),l=0;l<a.length;l++)for(var u=a[l],g=0,m=e.columns;g<m.length;g++){var S=m[g],i=r[S.index];if(o>1)o--,delete u.cells[S.index];else if(i)i.cell.height+=u.height,o=i.cell.colSpan,delete u.cells[S.index],i.left--,i.left<=1&&delete r[S.index];else{var T=u.cells[S.index];if(!T)continue;if(T.height=u.height,T.rowSpan>1){var R=a.length-l;r[S.index]={cell:T,left:T.rowSpan>R?R:T.rowSpan,row:u}}}}}(r)},y.resizeColumns=c,y.ellipsize=n},84:function(O){if(typeof L>"u"){var y=new Error("Cannot find module 'undefined'");throw y.code="MODULE_NOT_FOUND",y}O.exports=L}},E={};function M(O){var y=E[O];if(void 0!==y)return y.exports;var W=E[O]={exports:{}};return Y[O].call(W.exports,W,W.exports,M),W.exports}var U={};return function(){var O=U;Object.defineProperty(O,"__esModule",{value:!0}),O.Cell=O.Column=O.Row=O.Table=O.CellHookData=O.__drawTable=O.__createTable=O.applyPlugin=void 0;var y=M(790),W=M(587),F=M(49),b=M(858),p=M(287);Object.defineProperty(O,"Table",{enumerable:!0,get:function(){return p.Table}});var s=M(662);Object.defineProperty(O,"CellHookData",{enumerable:!0,get:function(){return s.CellHookData}});var c=M(287);function w(e){(0,y.default)(e)}Object.defineProperty(O,"Cell",{enumerable:!0,get:function(){return c.Cell}}),Object.defineProperty(O,"Column",{enumerable:!0,get:function(){return c.Column}}),Object.defineProperty(O,"Row",{enumerable:!0,get:function(){return c.Row}}),O.applyPlugin=w,O.__createTable=function h(e,r){var o=(0,W.parseInput)(e,r);return(0,b.createTable)(e,o)},O.__drawTable=function n(e,r){(0,F.drawTable)(e,r)};try{var t=M(84);t.jsPDF&&(t=t.jsPDF),w(t)}catch{}O.default=function v(e,r){var o=(0,W.parseInput)(e,r),a=(0,b.createTable)(e,o);(0,F.drawTable)(e,a)}}(),U}())}}]);