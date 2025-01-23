(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[374],{6489:function(a,b){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ b.Q=function(a,b){if("string"!=typeof a)throw TypeError("argument str must be a string");for(var d={},e=a.split(";"),g=(b||{}).decode||c,h=0;h<e.length;h++){var i=e[h],j=i.indexOf("=");if(!(j<0)){var k=i.substring(0,j).trim();if(void 0==d[k]){var l=i.substring(j+1,i.length).trim();'"'===l[0]&&(l=l.slice(1,-1)),d[k]=f(l,g)}}}return d},b.q=function(a,b,c){var f=c||{},g=f.encode||d;if("function"!=typeof g)throw TypeError("option encode is invalid");if(!e.test(a))throw TypeError("argument name is invalid");var h=g(b);if(h&&!e.test(h))throw TypeError("argument val is invalid");var i=a+"="+h;if(null!=f.maxAge){var j=f.maxAge-0;if(isNaN(j)||!isFinite(j))throw TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(j)}if(f.domain){if(!e.test(f.domain))throw TypeError("option domain is invalid");i+="; Domain="+f.domain}if(f.path){if(!e.test(f.path))throw TypeError("option path is invalid");i+="; Path="+f.path}if(f.expires){if("function"!=typeof f.expires.toUTCString)throw TypeError("option expires is invalid");i+="; Expires="+f.expires.toUTCString()}if(f.httpOnly&&(i+="; HttpOnly"),f.secure&&(i+="; Secure"),f.sameSite){var k="string"==typeof f.sameSite?f.sameSite.toLowerCase():f.sameSite;switch(k){case!0:case"strict":i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"none":i+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}}return i};var c=decodeURIComponent,d=encodeURIComponent,e=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function f(a,b){try{return b(a)}catch(c){return a}}},9353:function(a,b,c){"use strict";c.d(b,{Z:function(){return ax}});var d=c(1438),e=c(8029),f=c(1799),g=c(6567),h=c(5893),i=c(7294),j=c(5675),k=c.n(j),l=c(2681),m=c.n(l),n=c(2056),o=c.n(n),p=function(a){return(0,h.jsxs)("div",{className:o().container,children:[(0,h.jsx)(k(),{width:"738",height:"295",layout:"responsive",src:"/images/core/civilopedia_chapterheader.png"}),(0,h.jsx)("div",{className:o().text,children:a.title})]})},q=p,r=c(5837),s=c.n(r),t=function(a){return(0,h.jsx)("div",{className:s().chapterHeaderContainer,children:(0,h.jsx)("div",{className:[s().chapterHeaderTitle,m().mainTextColor].join(" "),children:a.title})})},u=t,v=function(a){return(0,h.jsxs)("div",{children:[(0,h.jsx)(u,{title:a.header}),(0,h.jsx)("div",{className:[s().paragraphs,m().mainTextColor].join(" "),dangerouslySetInnerHTML:{__html:a.paragraphs.text.join("<br /><br />")}})]})},w=v,x=function(a){return(0,h.jsx)("div",{dangerouslySetInnerHTML:{__html:a.text.join("<br /><br />")}})},y=x,z=function(a){return(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:[s().headerBodyHeaderText,m().mainTextColor].join(" "),children:a.header}),a.body&&(0,h.jsx)("p",{className:[s().headerBodyHeaderBody,m().mainTextColor].join(" "),dangerouslySetInnerHTML:{__html:a.body}})]})},A=z,B=c(4637),C=c.n(B),D=c(1664),E=c.n(D),F=c(3136),G=function(a){return(0,h.jsx)(F.Z.Consumer,{children:function(b){return(0,h.jsx)(E(),{href:"/".concat(b.ruleset).concat(a.href),children:(0,h.jsx)("a",{style:{textDecoration:"none"},children:a.children})})}})},H=G,I=function(a){var b=(0,h.jsxs)("div",{className:C().iconLabelContainer,children:[(0,h.jsx)("div",{className:C().iconLabelImage,children:(0,h.jsx)(k(),{width:50,height:50,layout:"fixed",src:"/images/core/".concat(a.icon.urlName,".png"),alt:a.icon.urlName})}),(0,h.jsx)("div",{className:C().iconLabelCaption,dangerouslySetInnerHTML:{__html:a.caption}})]});return a.icon.href?(0,h.jsx)(H,{href:a.icon.href.toLowerCase(),children:b}):b},J=I,K=function(a){return(0,h.jsx)(H,{href:a.icon.href&&a.icon.href.toLowerCase(),children:(0,h.jsxs)("div",{className:C().iconLabelContainer,children:[(0,h.jsx)("div",{className:C().iconLabelImage,children:(0,h.jsx)(k(),{width:50,height:50,layout:"fixed",src:"/images/core/".concat(a.icon.urlName,".png"),alt:a.icon.urlName})}),(0,h.jsx)("div",{className:C().iconLabelNumber,children:a.value}),(0,h.jsx)("div",{className:C().iconLabelCaption,dangerouslySetInnerHTML:{__html:a.caption}})]})})},L=K,M=function(a){(0,e.Z)(c,a);var b=(0,g.Z)(c);function c(){return(0,d.Z)(this,c),b.apply(this,arguments)}var f=c.prototype;return f.render=function(){return(0,h.jsx)("div",{className:C().iconListContainer,children:this.renderImages()})},f.renderImages=function(){return this.props.icons.map(function(a){return(0,h.jsx)(H,{href:a.href&&a.href.toLowerCase(),children:(0,h.jsx)("div",{className:C().iconListItem,children:(0,h.jsx)(k(),{width:50,height:50,layout:"fixed",src:"/images/core/".concat(a.urlName,".png"),title:a.tooltip,alt:a.tooltip})})},a.urlName)})},c}(i.Component),N=M,O=function(a){return(0,h.jsx)("div",{className:C().statBoxLabel,dangerouslySetInnerHTML:{__html:a.text}})},P=O,Q=function(a){(0,e.Z)(c,a);var b=(0,g.Z)(c);function c(){return(0,d.Z)(this,c),b.apply(this,arguments)}var i=c.prototype;return i.render=function(){return(0,h.jsxs)("div",{className:C().statBoxFrame,children:[(0,h.jsx)("p",{className:C().statBoxTitle,children:this.props.title}),this.renderViews()]})},i.renderViews=function(){var a=this;return this.props.views.map(function(b,c){return(0,h.jsx)("div",{className:C().statBoxComponent,children:a.renderView(b)},c)})},i.renderView=function(a){switch(a.type){case"separator":return(0,h.jsx)("div",{className:C().separator});case"header":var b=a;return(0,h.jsx)("div",{className:C().statBoxHeaderText,children:b.title});case"label":return(0,h.jsx)(P,(0,f.Z)({},a));case"iconLabel":return(0,h.jsx)(J,(0,f.Z)({},a));case"iconNumberLabel":return(0,h.jsx)(L,(0,f.Z)({},a));case"iconList":return(0,h.jsx)(N,(0,f.Z)({},a));default:return}},c}(i.Component),R=function(a){return(0,h.jsx)("div",{className:s().quoteContainer,dangerouslySetInnerHTML:{__html:a.text}})},S=R,T=function(a){return"tall"===a.type?(0,h.jsx)("div",{className:s().portraitTall,children:(0,h.jsx)(k(),{src:"/images/core/".concat(a.name,".png"),alt:a.name,width:256,height:256})}):(0,h.jsxs)("div",{className:s().portraitSquareMargin,children:[(0,h.jsx)(k(),{layout:"responsive",width:325,height:315,src:"/images/core/civilopedia_portraitsquare.png",alt:"PortraitSquare"}),(0,h.jsx)("div",{className:s().portraitContent,children:(0,h.jsx)(k(),{src:"/images/core/".concat(a.name,".png"),alt:a.name,objectFit:"contain",layout:"intrinsic",width:256,height:256})})]})},U=T,V=function(){return(0,h.jsxs)("div",{className:s().pageFooter,children:[(0,h.jsx)("div",{className:s().pageFooterImage,children:(0,h.jsx)(k(),{layout:"fixed",width:"193",height:"122",src:"/images/core/compass.png",alt:""})}),(0,h.jsx)("div",{className:s().pageFooterDivider})]})},W=V,X=c(5952),Y=c(8504),Z=c(9008),$=c.n(Z),_=c(1175),aa=c.n(_),ab=function(a){(0,e.Z)(c,a);var b=(0,g.Z)(c);function c(){var a;return(0,d.Z)(this,c),a=b.apply(this,arguments),a.renderSection=function(b){var c=b.id===a.props.selectedID,d=c?aa().itemSelected:aa().itemNormal;return(0,h.jsx)(H,{href:"/".concat(b.id).toLowerCase(),children:(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:d,children:[c?(0,h.jsx)("div",{className:aa().selectedArrow,children:(0,h.jsx)(k(),{width:"68",height:"68",layout:"fixed",src:"/images/core/launchbar_hookselectarrow.png",alt:""})}):void 0,(0,h.jsx)("div",{className:aa().iconOffset,children:(0,h.jsx)(k(),{width:"32",height:"32",layout:"fixed",src:"/images/core/".concat(b.icon.toLowerCase(),".png"),alt:b.name,title:b.name})})]})})},b.id)},a}var f=c.prototype;return f.render=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:aa().tabLedge}),this.renderSectionList()]})},f.renderSectionList=function(){return(0,h.jsx)("div",{className:aa().list,children:this.props.sections.map(this.renderSection)})},c}(i.Component),ac=ab,ad=c(9881),ae=c(7568),af=c(4051),ag=c.n(af),ah=c(4179),ai=c.n(ah),aj=c(4886),ak=c(4325),al=c(6489);function am(a,b){void 0===b&&(b={});var c,d,e=an(a);if(c=e,void 0===(d=b.doNotParse)&&(d=!c||"{"!==c[0]&&"["!==c[0]&&'"'!==c[0]),!d)try{return JSON.parse(e)}catch(f){}return a}function an(a){return a&&"j"===a[0]&&":"===a[1]?a.substr(2):a}var ao,ap=function(){return(ap=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},aq=function(){function a(a,b){var c,d,e=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=(c=a,d=b,"string"==typeof c?al.Q(c,d):"object"==typeof c&&null!==c?c:{}),new Promise(function(){e.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return a.prototype._updateBrowserValues=function(a){this.HAS_DOCUMENT_COOKIE&&(this.cookies=al.Q(document.cookie,a))},a.prototype._emitChange=function(a){for(var b=0;b<this.changeListeners.length;++b)this.changeListeners[b](a)},a.prototype.get=function(a,b,c){return void 0===b&&(b={}),this._updateBrowserValues(c),am(this.cookies[a],b)},a.prototype.getAll=function(a,b){void 0===a&&(a={}),this._updateBrowserValues(b);var c={};for(var d in this.cookies)c[d]=am(this.cookies[d],a);return c},a.prototype.set=function(a,b,c){var d;"object"==typeof b&&(b=JSON.stringify(b)),this.cookies=ap(ap({},this.cookies),((d={})[a]=b,d)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=al.q(a,b,c)),this._emitChange({name:a,value:b,options:c})},a.prototype.remove=function(a,b){var c=b=ap(ap({},b),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=ap({},this.cookies),delete this.cookies[a],this.HAS_DOCUMENT_COOKIE&&(document.cookie=al.q(a,"",c)),this._emitChange({name:a,value:void 0,options:b})},a.prototype.addChangeListener=function(a){this.changeListeners.push(a)},a.prototype.removeChangeListener=function(a){var b=this.changeListeners.indexOf(a);b>=0&&this.changeListeners.splice(b,1)},a}(),ar=c(1163),as=function(){var a,b,c=(0,ar.useRouter)(),d=c.locale||"en-US",e=(a=(0,ae.Z)(ag().mark(function a(b){var d,e;return ag().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:d=b.target.value,(e=new aq).set("NEXT_LOCALE",d,{path:"/"}),c.replace("/",void 0,{locale:d});case 4:case"end":return a.stop()}},a)})),function(b){return a.apply(this,arguments)}),f=(b=(0,ae.Z)(ag().mark(function a(b){var d,e;return ag().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:d=b.target.value,(e=new aq).set("RULESET",d,{path:"/"}),c.replace("/".concat(d));case 4:case"end":return a.stop()}},a)})),function(a){return b.apply(this,arguments)});return(0,h.jsxs)("div",{className:ai().container,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:ai().text,children:(0,aj.Z)(d,"choose-language")}),(0,h.jsxs)("select",{className:"select-box",onChange:e,value:d,children:[(0,h.jsx)("option",{value:"en-US",children:"English (United States)"}),(0,h.jsx)("option",{value:"zh-CN",children:"中文（简体）"}),(0,h.jsx)("option",{value:"zh-HK",children:"中文（繁體）"}),(0,h.jsx)("option",{value:"de",children:"Deutsche (Deutschland)"}),(0,h.jsx)("option",{value:"es",children:"Espa\xf1ol (Espa\xf1a)"}),(0,h.jsx)("option",{value:"fr",children:"Franc\xe9s (Francia)"}),(0,h.jsx)("option",{value:"it",children:"Italiano (Italia)"}),(0,h.jsx)("option",{value:"ja",children:"日本語 (日本)"}),(0,h.jsx)("option",{value:"ko",children:"한국어(대한민국)"}),(0,h.jsx)("option",{value:"pl",children:"Polski (Polska)"}),(0,h.jsx)("option",{value:"pt-BR",children:"Portugu\xeas (Brasil)"}),(0,h.jsx)("option",{value:"ru",children:"Русский (Россия)"})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:ai().text,children:(0,aj.Z)(d,"choose-ruleset")}),(0,h.jsx)(F.Z.Consumer,{children:function(a){return(0,h.jsx)("select",{className:ai().selectBox,onChange:f,value:a.ruleset,children:ak.p.map(function(a){return(0,h.jsx)("option",{value:a,children:(0,aj.Z)(d,a)},a)})})}})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("a",{href:"https://apps.apple.com/app/apple-store/id1452113719?pt=101968804&ct=civilopedia.net&mt=8",children:(0,h.jsx)("img",{className:ai().appstoreIcon,alt:"Get it on App Store",src:"/images/store/".concat(d,"/appstore.svg")})}),(0,h.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.spears.civilopedia&utm_source=civilopedia_net",children:(0,h.jsx)("img",{className:ai().googleplayIcon,alt:"Get it on Google Play",src:"/images/store/".concat(d,"/google-play.png")})}),"zh-CN"===d?(0,h.jsx)("a",{href:"http://120.27.215.75/files/civilopedia.apk",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,h.jsx)("div",{className:ai().downloadApk,children:"下载Android安装包"})}):null]}),(0,h.jsx)(E(),{href:"/copyright",children:(0,h.jsx)("a",{className:ai().link,children:(0,aj.Z)(d,"copyright")})}),(0,h.jsx)(E(),{href:"/privacy_policy",children:(0,h.jsx)("a",{className:ai().link,children:(0,aj.Z)(d,"privacy-policy")})})]})},at=c(3278),au=c(2097),av=c(4986),aw=function(a){(0,e.Z)(c,a);var b=(0,g.Z)(c);function c(a){var e;return(0,d.Z)(this,c),(e=b.call(this,a)).renderHtmlHeader=function(){var a=e.props.locale,b=(0,aj.Z)(a,"app_name"),c=(0,aj.Z)(a,"civilization_vi"),d=e.props.sections.filter(function(a){return a.id===e.props.sectionID})[0].name,f="".concat(d," - ").concat(b," - ").concat(c),g=e.props.page.pageHeader?"".concat((0,ad.iT)(e.props.page.pageHeader)," - ").concat(f):f;return(0,h.jsxs)($(),{children:[(0,h.jsx)("title",{children:g}),(0,h.jsx)("meta",{name:"viewport",content:"initial-scale=1"}),(0,h.jsx)("meta",{property:"og:title",content:g}),(0,h.jsx)("meta",{property:"og:type",content:"website"}),e.renderOgImage()]})},e.renderBody=function(){return(0,h.jsx)("div",{className:m().appBackground,children:(0,h.jsx)(au.Z,{children:(0,h.jsxs)("div",{className:m().contentWithSideBar,children:[(0,h.jsx)("div",{className:m().app,children:(0,h.jsxs)("div",{className:m().body,children:[e.renderAppHeader(),e.renderAppContent()]})}),(0,h.jsx)(as,{})]})})})},e.renderAppHeader=function(){return(0,h.jsx)("div",{className:m().appHeader,children:e.renderSectionList()})},e.renderAppContent=function(){return(0,h.jsxs)("div",{className:m().appContent,children:[(0,h.jsxs)("div",{className:m().pageGroupList,children:[(0,h.jsx)(X.Z,{onSearch:function(a){e.setState({keyword:a})}}),(0,h.jsx)(av.l,{keyword:e.state.keyword}),e.renderPageList()]}),e.renderPage()]})},e.renderSectionList=function(){return(0,h.jsx)(ac,{selectedID:e.props.sectionID,sections:e.props.sections})},e.renderPageList=function(){return 0===e.props.groups.length?(0,h.jsx)("div",{className:m().pageList,children:(0,h.jsx)(Y.Z,{})}):(0,h.jsx)("div",{className:m().pageList,children:e.props.groups.map(e.renderGroupItem)})},e.renderGroupItem=function(a){var b=!a.groupName||e.state.expandedPageGroups.includes(a.id);return(0,h.jsxs)("div",{children:[e.renderPageTabGroup(a,b),b?a.pages.map(e.renderPageItem):void 0]},a.groupName||"")},e.renderPageTabGroup=function(a,b){if(a.groupName){var c=b?m().pageTabExpandButtonSelected:m().pageTabExpandButton;return(0,h.jsx)("div",{className:m().pageTab,onClick:function(){return e.onPageGroup(a)},children:(0,h.jsxs)("div",{className:m().pageTabGroup,children:[(0,h.jsx)("p",{className:m().pageTabGroupText,children:a.groupName}),(0,h.jsx)("div",{className:c})]})})}},e.renderPageItem=function(a){var b=e.props.pageID===a.id?m().pageTabSelected:m().pageTab;return(0,h.jsx)(H,{href:"/".concat(e.props.sectionID,"/").concat(a.id).toLowerCase(),children:(0,h.jsx)("div",{className:b,children:(0,h.jsx)("p",{className:m().pageTabText,dangerouslySetInnerHTML:{__html:(0,ad.Ak)(a.name)}})})},a.id)},e.renderPage=function(){return(0,h.jsx)("div",{className:m().page,children:(0,h.jsxs)("div",{className:m().pageFrame,children:[e.renderFrontPage(),e.renderPageHeader(),e.renderContent(),e.renderMobileContent(),(0,h.jsx)(W,{})]})})},e.renderFrontPage=function(){var a=e.props.page;if(a.frontPageTitle)return(0,h.jsx)(q,{title:a.frontPageTitle})},e.renderPageHeader=function(){return e.props.page.frontPageTitle?null:(0,h.jsxs)("div",{className:m().pageHeaderContainer,children:[(0,h.jsx)("div",{className:m().pageHeaderBackground,children:(0,h.jsx)(k(),{layout:"fill",objectFit:"fill",src:"/images/core/civilopedia_pageheader.png"})}),(0,h.jsx)("div",{className:m().pageHeaderBackgroundCompact,children:(0,h.jsx)(k(),{layout:"fill",objectFit:"fill",src:"/images/core/civilopedia_pageheader_compact.png"})}),(0,h.jsx)("div",{className:[m().pageHeaderText,m().mainTextColor].join(" "),dangerouslySetInnerHTML:{__html:(0,ad.iT)(e.props.page.pageHeader||"")}})]})},e.renderContent=function(){var a=e.renderRightColumn();return a&&0===a.length?(0,h.jsx)("div",{className:[m().pageContent,m().pageContentVertical].join(" "),children:e.renderLeftColumn()}):(0,h.jsxs)("div",{className:[m().pageContent,m().pageContentHorizontal].join(" "),children:[(0,h.jsx)("div",{className:m().pageLeftColumn,children:e.renderLeftColumn()}),(0,h.jsx)("div",{className:m().pageRightColumn,children:a})]})},e.renderMobileContent=function(){return(0,h.jsx)("div",{className:[m().pageSingleColumn,m().pageContentVertical].join(" "),children:e.renderSingleColumn()})},e.renderSingleColumn=function(){return e.props.page.detail.map(e.renderPageDetailItem).filter(function(a){return void 0!==a}).map(function(a,b){return(0,h.jsx)("div",{className:m().leftColumnItem,children:a},b)})},e.renderLeftColumn=function(){return e.props.page.detail.filter(function(a){return"chapter"===a.type||"paragraphs"===a.type||"chapterHeader"===a.type||"headerBody"===a.type}).map(e.renderPageDetailItem).filter(function(a){return void 0!==a}).map(function(a,b){return(0,h.jsx)("div",{className:m().leftColumnItem,children:a},b)})},e.renderRightColumn=function(){return e.props.page.detail.filter(function(a){return"statBox"===a.type||"quote"===a.type||"portrait"===a.type}).map(e.renderPageDetailItem).filter(function(a){return void 0!==a}).map(function(a,b){return(0,h.jsx)("div",{className:m().rightColumnItem,children:a},b)})},e.renderPageDetailItem=function(a){switch(a.type){case"chapter":return(0,h.jsx)(w,(0,f.Z)({},a.detail));case"paragraphs":return(0,h.jsx)(y,{text:a.detail.text});case"chapterHeader":return(0,h.jsx)(u,{title:a.detail.text});case"headerBody":return(0,h.jsx)(A,(0,f.Z)({},a.detail));case"statBox":return(0,h.jsx)(Q,(0,f.Z)({},a.detail));case"quote":return(0,h.jsx)(S,(0,f.Z)({},a.detail));case"portrait":return(0,h.jsx)(U,(0,f.Z)({},a.detail));default:return}},e.onPageGroup=function(a){var b=e.state.expandedPageGroups.includes(a.id)?e.state.expandedPageGroups.filter(function(b){return b!==a.id}):e.state.expandedPageGroups.concat([a.id]);e.setState({expandedPageGroups:b})},e.state={expandedPageGroups:e.props.groups.filter(function(b){return b.pages.map(function(a){return a.id}).includes(a.pageID.toUpperCase())}).map(function(a){return a.id}),keyword:""},e}var i=c.prototype;return i.render=function(){return(0,h.jsxs)("div",{children:[this.renderHtmlHeader(),this.renderBody()]})},i.renderOgImage=function(){var a;return(this.props.page.detail.forEach(function(b){"portrait"===b.type&&(a=b.detail.name)}),a)?(0,h.jsx)("meta",{property:"og:image",content:"https://www.civilopedia.net/images/core/".concat(a,".png")}):null},c}(i.Component),ax=(0,at.Z)(aw)},5837:function(a){a.exports={fittingImg:"Component_fittingImg__Ihstm",paragraphs:"Component_paragraphs__tSvTZ",chapterHeaderContainer:"Component_chapterHeaderContainer__DxQyf",chapterHeaderTitle:"Component_chapterHeaderTitle__SXaFO",headerBodyHeaderText:"Component_headerBodyHeaderText__LuO9w",headerBodyHeaderBody:"Component_headerBodyHeaderBody__MkvCp",quoteContainer:"Component_quoteContainer__hp1mi",portraitSquareMargin:"Component_portraitSquareMargin__KedVa",portraitContent:"Component_portraitContent__TiPGl",portraitTall:"Component_portraitTall___EClU",pageFooter:"Component_pageFooter__GwTVs",pageFooterImage:"Component_pageFooterImage__Ey4am",pageFooterDivider:"Component_pageFooterDivider__zRwny",beating:"Component_beating__ov1Dy",beating1:"Component_beating1__odreU",beat:"Component_beat__ciVGA",beating2:"Component_beating2__z0H6S"}},1175:function(a){a.exports={tabLedge:"section-header_tabLedge__Bv4Zf",item:"section-header_item__6pyY8",itemNormal:"section-header_itemNormal__7kV2x section-header_item__6pyY8",itemSelected:"section-header_itemSelected__9KUPl section-header_item__6pyY8",selectedArrow:"section-header_selectedArrow__wKkTq",list:"section-header_list__3qd2t",iconOffset:"section-header_iconOffset__PmBUV"}},4179:function(a){a.exports={container:"side-bar_container__QgPE0",appstoreIcon:"side-bar_appstoreIcon__Hqbk_",googleplayIcon:"side-bar_googleplayIcon__aK5_V",selectBox:"side-bar_selectBox__az02g",text:"side-bar_text__9ID6_ App_mainTextColor__6NGqD",link:"side-bar_link___BKvd side-bar_text__9ID6_ App_mainTextColor__6NGqD",downloadApk:"side-bar_downloadApk__bCRmj"}},2056:function(a){a.exports={container:"FrontPage_container__5Kwhw",text:"FrontPage_text__hTog3"}},4637:function(a){a.exports={statBoxFrame:"StatBox_statBoxFrame__Cgdpy",statBoxTitle:"StatBox_statBoxTitle__kq6wK",statBoxComponent:"StatBox_statBoxComponent__M3Gcj",separator:"StatBox_separator__33cx4",statBoxHeaderText:"StatBox_statBoxHeaderText__bedSz App_mainTextColor__6NGqD",statBoxLabel:"StatBox_statBoxLabel__y5ZB2 App_mainTextColor__6NGqD",iconLabelContainer:"StatBox_iconLabelContainer__vFBc5",iconLabelImage:"StatBox_iconLabelImage__HFejp",iconLabelCaption:"StatBox_iconLabelCaption__i_uw4",iconLabelNumber:"StatBox_iconLabelNumber__HeVRT",iconListContainer:"StatBox_iconListContainer__7i598",iconListItem:"StatBox_iconListItem__IWi8Y"}},9008:function(a,b,c){a.exports=c(5443)}}])