(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{163:function(e,t,a){"use strict";a.d(t,"b",function(){return x});var n=a(0),r=a.n(n),i=a(4),p=a.n(i),o=a(34),c=a.n(o);a.d(t,"a",function(){return c.a});a(175);var l=r.a.createContext({}),x=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};x.propTypes={data:p.a.object,query:p.a.string.isRequired,render:p.a.func,children:p.a.func}},175:function(e,t,a){var n;e.exports=(n=a(201))&&n.default||n},179:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(35),a(168);var n=a(0),r=a.n(n),i=a(261),p=a.n(i),o=Object(n.createContext)({value:{importType:"esm",usageParadigm:"fp",importModularity:"full"},onChange:function(){}}),c="wealth-configurable-code-block",l=o.Provider;t.b=function(e){var t=e.children,a=Object(n.useState)(p.a.get(c)||{importType:"esm",usageParadigm:"fp",importModularity:"full"}),i=a[0],o=a[1];Object(n.useEffect)(function(){p.a.set(c,i)},[i]);return r.a.createElement(l,{value:{value:i,onChange:function(e){var t=e.name,a=e.value;return o(function(e){var n;return Object.assign({},e,((n={})[t]=a,n))})}}},t)}},180:function(e,t,a){"use strict";var n=a(219),r=a(0),i=a.n(r),p=a(4),o=a.n(p),c=a(262),l=a.n(c),x=a(163);function s(e){var t=e.description,a=e.lang,r=e.meta,p=e.keywords,o=e.title;return i.a.createElement(x.b,{query:g,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(r)})},data:n})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=s;var g="1025518380"},186:function(e,t,a){"use strict";var n=a(229),r=a.n(n),i=a(200),p=a(0),o=a.n(p),c=a(4),l=a.n(c),x=a(163),s=a(162),g=a(167),m=(a(145),a(197)),d=a.n(m),b=a(259),u=a.n(b),f=a(187),h=a.n(f),y=Object(s.b)(x.a).withConfig({displayName:"HomeLink__StyledLink",componentId:"i4eehr-0"})(["display:flex;color:white;text-decoration:none;align-items:center;"]),v=Object(s.b)(h.a).withConfig({displayName:"HomeLink__StyledLogo",componentId:"i4eehr-1"})(["width:50px;fill:#fff;"]),E=Object(s.b)("h2").withConfig({displayName:"HomeLink__StyledHeader",componentId:"i4eehr-2"})(["margin:0 0 0 20px;font-size:2rem;font-weight:300;"]),w=function(e){var t=e.children;return o.a.createElement(y,{to:"/"},o.a.createElement(v,null),o.a.createElement(E,{variant:"display3",color:"inherit",noWrap:!0},t))},k=a(188),C=a(215),H=a.n(C),S=s.b.nav.withConfig({displayName:"DesktopNavigation__Nav",componentId:"sc-1rtlq81-0"})(["margin-left:50px;"]),z=s.b.ul.withConfig({displayName:"DesktopNavigation__NavList",componentId:"sc-1rtlq81-1"})(["margin:0;padding:0;list-style-type:none;"]),N=s.b.li.withConfig({displayName:"DesktopNavigation__NavListItem",componentId:"sc-1rtlq81-2"})(["margin:0;"]),R=Object(s.b)(x.a).withConfig({displayName:"DesktopNavigation__NavListLink",componentId:"sc-1rtlq81-3"})(["color:white;margin-right:30px;&,&:hover,&:focus{text-decoration:none;}"]),T=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,null,o.a.createElement(z,null,o.a.createElement(N,null,o.a.createElement(R,{to:"/getting-started"},"Getting Started"),o.a.createElement(R,{to:"/guides"},"Guides")))))},_=(a(35),a(7)),A=a.n(_),O=a(256),W=a.n(O),M=a(212),j=a.n(M),I=a(178),L=a.n(I),F=a(253),q=a.n(F),P=a(196),B=a.n(P),D=a(213),G=a.n(D),J=a(251),Q=a.n(J),U=a(230),V=a.n(U),K=Object(s.b)(V.a).withConfig({displayName:"MobileNavigation__MenuIcon",componentId:"sc-1ior9tn-0"})(["color:white;"]),X=Object(s.b)(x.a).withConfig({displayName:"MobileNavigation__MenuLink",componentId:"sc-1ior9tn-1"})(["&,&:focus{color:black;text-decoration:none;}"]),Y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t.handleToggle=function(){t.setState(function(e){return{open:!e.open}})},t.handleClose=function(e){t.anchorEl.contains(e.target)||t.setState({open:!1})},t}return A()(t,e),t.prototype.render=function(){var e=this,t=this.state.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q.a,{buttonRef:function(t){e.anchorEl=t},"aria-owns":t?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:this.handleToggle},o.a.createElement(K,{fontSize:"large"})),o.a.createElement(q.a,{open:t,anchorEl:this.anchorEl,transition:!0,disablePortal:!0},function(t){var a=t.TransitionProps,n=t.placement;return o.a.createElement(j.a,Object.assign({},a,{id:"menu-list-grow",style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),o.a.createElement(L.a,null,o.a.createElement(W.a,{onClickAway:e.handleClose},o.a.createElement(G.a,null,o.a.createElement(B.a,{onClick:e.handleClose},o.a.createElement(X,{to:"/getting-started"},"Getting Started")),o.a.createElement(B.a,{onClick:e.handleClose},o.a.createElement(X,{to:"/guides"},"Guides"))))))}))},t}(p.Component),Z=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{smDown:!0},o.a.createElement(T,null)),o.a.createElement(H.a,{mdUp:!0},o.a.createElement(Y,null)))},$=s.b.div.withConfig({displayName:"Header__InnerWrap",componentId:"sc-137sz4s-0"})(["display:flex;align-items:center;margin-left:auto;max-width:960px;padding:1.45rem 1.0875rem;"]),ee=function(e){var t=e.siteTitle;return o.a.createElement(d.a,{position:"sticky"},o.a.createElement(k.a,null,o.a.createElement(u.a,{disableGutters:!0},o.a.createElement(w,null,t),o.a.createElement($,null,o.a.createElement(Z,null)))))};ee.propTypes={siteTitle:l.a.string},ee.defaultProps={siteTitle:""};var te=ee,ae=a(260),ne=a.n(ae),re=a(218),ie=Object(g.createMuiTheme)(ne()(!0,{},{typography:{useNextVariants:!0}},re)),pe=a(179);function oe(){var e=r()(['\n  body {\n    margin: 0;\n    font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n  }\n\n  .line-numbers .line-numbers-rows {\n    padding-top: 1rem;\n    padding-left: 1rem;\n    bottom: 0;\n  }\n']);return oe=function(){return e},e}var ce=Object(s.a)(oe()),le=s.b.div.withConfig({displayName:"Layout__ContentWrapper",componentId:"sc-5eelkd-0"})(["overflow:hidden;"]),xe=function(e){var t=e.children;return o.a.createElement(g.MuiThemeProvider,{theme:ie},o.a.createElement(x.b,{query:"4130953669",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,null),o.a.createElement(te,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(le,null,o.a.createElement(pe.b,null,t)))},data:i}))};xe.propTypes={children:l.a.node.isRequired};t.a=xe},187:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("g",{key:0},n.createElement("path",{d:"M0,0c0,0,1.2,0.8,3.4,2.3c1.1,0.8,2.4,1.7,3.9,2.9c0.8,0.6,1.6,1.2,2.5,1.9c0.9,0.7,1.8,1.4,2.7,2.2\r\n\t\t\tc3.8,3,8.3,6.9,13.2,11.4c4.9,4.5,10.3,9.7,15.9,15.5C53,47.7,65.2,61.7,77.2,77.5c6,7.9,11.9,16.1,17.7,24.7\r\n\t\t\tc5.8,8.5,11.4,17.4,16.8,26.4c5.4,9,10.5,18.1,15.3,27.3c4.8,9.1,9.3,18.3,13.4,27.3c8.2,18,14.7,35.4,19.6,50.9\r\n\t\t\tc2.4,7.7,4.4,14.9,6,21.4c1.6,6.5,2.8,12.2,3.7,17.1c0.2,1.2,0.4,2.3,0.6,3.4c0.2,1.1,0.3,2.1,0.5,3.1c0.3,1.9,0.5,3.5,0.7,4.9\r\n\t\t\tc0.3,2.7,0.4,4.1,0.4,4.1s-1.2-0.8-3.4-2.3c-1.1-0.8-2.4-1.7-4-2.9c-0.8-0.6-1.6-1.2-2.5-1.9c-0.9-0.7-1.8-1.4-2.7-2.2\r\n\t\t\tc-3.8-3-8.3-6.9-13.3-11.3c-4.9-4.5-10.3-9.7-16-15.4c-11.3-11.6-23.5-25.6-35.5-41.4c-6-7.9-11.9-16.1-17.7-24.7\r\n\t\t\tc-5.8-8.6-11.4-17.4-16.7-26.4c-5.4-9-10.5-18.1-15.3-27.3c-4.8-9.1-9.3-18.3-13.3-27.3c-8.2-18-14.7-35.4-19.6-50.9\r\n\t\t\tc-2.4-7.7-4.4-14.9-6-21.4c-1.6-6.5-2.8-12.2-3.7-17C2,14.2,1.8,13.1,1.6,12C1.4,10.9,1.3,9.9,1.1,9C0.8,7.1,0.6,5.5,0.4,4.1\r\n\t\t\tC0.1,1.5,0,0,0,0z"})),n.createElement("g",{key:1},n.createElement("path",{d:"M171.8,287.9c0,0,0-1.4,0.1-4c0-1.3,0.1-2.9,0.2-4.7c0.1-0.9,0.1-1.9,0.2-3c0.1-1,0.2-2.2,0.3-3.3\r\n\t\t\tc0.4-4.7,1.1-10.3,2.1-16.7c1-6.3,2.3-13.4,4-21c3.4-15.2,8.3-32.4,14.7-50.2c3.2-8.9,6.8-18,10.7-27.1\r\n\t\t\tc3.9-9.1,8.1-18.2,12.6-27.2c4.5-9,9.2-17.9,14.1-26.5c4.9-8.6,10-16.9,15.2-24.9c10.4-15.9,21.2-30.2,31.3-42\r\n\t\t\tc5-5.9,9.9-11.2,14.4-15.8c4.5-4.6,8.6-8.5,12.1-11.7c0.9-0.8,1.7-1.5,2.5-2.2c0.8-0.7,1.6-1.3,2.3-1.9c1.4-1.2,2.6-2.2,3.6-3\r\n\t\t\tc2-1.6,3.2-2.5,3.2-2.5s0,1.4-0.1,4c0,1.3-0.1,2.9-0.2,4.7c-0.1,0.9-0.1,1.9-0.2,3c-0.1,1-0.2,2.2-0.3,3.3\r\n\t\t\tc-0.4,4.7-1.1,10.3-2.1,16.7c-1,6.4-2.3,13.4-4,21c-3.4,15.2-8.3,32.4-14.7,50.2c-3.2,8.9-6.8,18-10.7,27.1\r\n\t\t\tc-3.9,9.1-8.2,18.2-12.7,27.2c-4.5,9-9.2,17.9-14.2,26.5c-4.9,8.6-10,16.9-15.3,24.9c-10.4,15.9-21.2,30.2-31.3,42\r\n\t\t\tc-5,5.9-9.9,11.2-14.4,15.8c-4.5,4.6-8.5,8.6-12.1,11.7c-0.9,0.8-1.7,1.5-2.5,2.2c-0.8,0.7-1.6,1.3-2.3,1.9\r\n\t\t\tc-1.4,1.2-2.6,2.2-3.6,3C173,287.1,171.8,287.9,171.8,287.9z"})),n.createElement("g",{key:2},n.createElement("path",{d:"M133,0c0,0,1.2,0.8,3.4,2.3c1.1,0.8,2.4,1.7,3.9,2.9c0.8,0.6,1.6,1.2,2.5,1.9c0.9,0.7,1.8,1.4,2.7,2.2\r\n\t\t\tc3.8,3,8.3,6.9,13.2,11.4c4.9,4.5,10.3,9.7,15.9,15.5c11.3,11.6,23.5,25.6,35.5,41.4c6,7.9,11.9,16.1,17.7,24.7\r\n\t\t\tc5.8,8.5,11.4,17.4,16.8,26.4c5.4,9,10.5,18.1,15.3,27.3c4.8,9.1,9.3,18.3,13.4,27.3c8.2,18,14.7,35.4,19.6,50.9\r\n\t\t\tc2.4,7.7,4.4,14.9,6,21.4c1.6,6.5,2.8,12.2,3.7,17.1c0.2,1.2,0.4,2.3,0.6,3.4c0.2,1.1,0.3,2.1,0.5,3.1c0.3,1.9,0.5,3.5,0.7,4.9\r\n\t\t\tc0.3,2.7,0.4,4.1,0.4,4.1s-1.2-0.8-3.4-2.3c-1.1-0.8-2.4-1.7-4-2.9c-0.8-0.6-1.6-1.2-2.5-1.9c-0.9-0.7-1.8-1.4-2.7-2.2\r\n\t\t\tc-3.8-3-8.3-6.9-13.3-11.3c-4.9-4.5-10.3-9.7-16-15.4c-11.3-11.6-23.5-25.6-35.5-41.4c-6-7.9-11.9-16.1-17.7-24.7\r\n\t\t\tc-5.8-8.6-11.4-17.4-16.7-26.4c-5.4-9-10.5-18.1-15.3-27.3c-4.8-9.1-9.3-18.3-13.3-27.3c-8.2-18-14.7-35.4-19.6-50.9\r\n\t\t\tc-2.4-7.7-4.4-14.9-6-21.4c-1.6-6.5-2.8-12.2-3.7-17c-0.2-1.2-0.4-2.3-0.6-3.4c-0.2-1.1-0.3-2.1-0.5-3.1c-0.3-1.9-0.5-3.5-0.7-4.9\r\n\t\t\tC133.1,1.5,133,0,133,0z"})),n.createElement("g",{key:3},n.createElement("path",{d:"M304.9,287.9c0,0,0-1.4,0.1-4c0-1.3,0.1-2.9,0.2-4.7c0.1-0.9,0.1-1.9,0.2-3c0.1-1,0.2-2.2,0.3-3.3\r\n\t\t\tc0.4-4.7,1.1-10.3,2.1-16.7c1-6.3,2.3-13.4,4-21c3.4-15.2,8.3-32.4,14.7-50.2c3.2-8.9,6.8-18,10.7-27.1\r\n\t\t\tc3.9-9.1,8.1-18.2,12.6-27.2c4.5-9,9.2-17.9,14.1-26.5c4.9-8.6,10-16.9,15.2-24.9c10.4-15.9,21.2-30.2,31.3-42\r\n\t\t\tc5-5.9,9.9-11.2,14.4-15.8c4.5-4.6,8.6-8.5,12.1-11.7c0.9-0.8,1.7-1.5,2.5-2.2c0.8-0.7,1.6-1.3,2.3-1.9c1.4-1.2,2.6-2.2,3.6-3\r\n\t\t\tc2-1.6,3.2-2.5,3.2-2.5s0,1.4-0.1,4c0,1.3-0.1,2.9-0.2,4.7c-0.1,0.9-0.1,1.9-0.2,3c-0.1,1-0.2,2.2-0.3,3.3\r\n\t\t\tc-0.4,4.7-1.1,10.3-2.1,16.7c-1,6.4-2.3,13.4-4,21c-3.4,15.2-8.3,32.4-14.7,50.2c-3.2,8.9-6.8,18-10.7,27.1\r\n\t\t\tc-3.9,9.1-8.2,18.2-12.7,27.2c-4.5,9-9.2,17.9-14.2,26.5c-4.9,8.6-10,16.9-15.3,24.9c-10.4,15.9-21.2,30.2-31.3,42\r\n\t\t\tc-5,5.9-9.9,11.2-14.4,15.8c-4.5,4.6-8.5,8.6-12.1,11.7c-0.9,0.8-1.7,1.5-2.5,2.2c-0.8,0.7-1.6,1.3-2.3,1.9\r\n\t\t\tc-1.4,1.2-2.6,2.2-3.6,3C306,287.1,304.9,287.9,304.9,287.9z"}))]))}r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 448.6 287.9",enableBackground:"new 0 0 448.6 287.9",xmlSpace:"preserve"},e.exports=r,r.default=r},188:function(e,t,a){"use strict";var n=a(162).b.div.withConfig({displayName:"Container",componentId:"sc-1njwdm8-0"})(["margin:0 auto;width:960px;padding:0 10px;max-width:calc(100% - 20px);"]);t.a=n},200:function(e){e.exports={data:{site:{siteMetadata:{title:"Wealth"}}}}},201:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),p=a.n(i),o=a(58),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:p.a.shape({pathname:p.a.string.isRequired}).isRequired},t.default=l},218:function(e){e.exports={breakpoints:{keys:["xs","sm","md","lg","xl"],values:{xs:0,lg:1280,sm:600,xl:1920,md:960}},mixins:{toolbar:{minHeight:56,"@media (min-width:0px) and (orientation: landscape)":{minHeight:48},"@media (min-width:600px)":{minHeight:64}}},shadows:["none","0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)","0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)","0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)","0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)","0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)","0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)","0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)","0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)","0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)","0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)","0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)","0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)","0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)","0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)","0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)","0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)","0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)","0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)","0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)","0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)","0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)","0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)","0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)","0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)"],direction:"ltr",overrides:{},transitions:{easing:{easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},duration:{standard:300,short:250,enteringScreen:225,shorter:200,leavingScreen:195,shortest:150,complex:375}},typography:{headline:{color:"rgba(0, 0, 0, 0.87)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',lineHeight:"1.35417em",fontSize:"1.5rem",fontWeight:400},display2:{marginLeft:"-.02em",color:"rgba(0, 0, 0, 0.54)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',lineHeight:"1.13333em",fontSize:"2.8125rem",fontWeight:400},fontWeightLight:300,display3:{marginLeft:"-.02em",color:"rgba(0, 0, 0, 0.54)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',letterSpacing:"-.02em",lineHeight:"1.30357em",fontSize:"3.5rem",fontWeight:400},display4:{marginLeft:"-.04em",color:"rgba(0, 0, 0, 0.54)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',letterSpacing:"-.04em",lineHeight:"1.14286em",fontSize:"7rem",fontWeight:300},fontWeightRegular:400,display1:{color:"rgba(0, 0, 0, 0.54)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',lineHeight:"1.20588em",fontSize:"2.125rem",fontWeight:400},button:{textTransform:"uppercase",color:"rgba(0, 0, 0, 0.87)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:"0.875rem",fontWeight:500},fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',body2:{color:"rgba(0, 0, 0, 0.87)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',lineHeight:"1.71429em",fontSize:"0.875rem",fontWeight:500},caption:{color:"rgba(0, 0, 0, 0.54)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',lineHeight:"1.375em",fontSize:"0.75rem",fontWeight:400},fontSize:14,fontWeightMedium:500,title:{color:"rgba(0, 0, 0, 0.87)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',lineHeight:"1.16667em",fontSize:"1.3125rem",fontWeight:500},subheading:{color:"rgba(0, 0, 0, 0.87)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',lineHeight:"1.5em",fontSize:"1rem",fontWeight:400},body1:{color:"rgba(0, 0, 0, 0.87)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',lineHeight:"1.46429em",fontSize:"0.875rem",fontWeight:400}},zIndex:{modal:1300,snackbar:1400,drawer:1200,appBar:1100,mobileStepper:1e3,tooltip:1500},shape:{borderRadius:4},props:{},spacing:{unit:8},palette:{tonalOffset:.2,background:{paper:"#fff",default:"#fafafa"},contrastThreshold:3,grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A700:"#616161",A100:"#d5d5d5",A400:"#303030",A200:"#aaaaaa"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",secondary:{main:"#424242",light:"rgb(103, 103, 103)",dark:"rgb(46, 46, 46)",contrastText:"#fff"},common:{black:"#000",white:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},type:"light",action:{hoverOpacity:.08,hover:"rgba(0, 0, 0, 0.08)",selected:"rgba(0, 0, 0, 0.14)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabled:"rgba(0, 0, 0, 0.26)",active:"rgba(0, 0, 0, 0.54)"},primary:{main:"#0277BD",light:"rgb(52, 146, 202)",dark:"rgb(1, 83, 132)",contrastText:"#fff"}},themeName:"Lochmara Tundora Bee"}},219:function(e){e.exports={data:{site:{siteMetadata:{title:"Wealth",description:"Wealth is a money management JavaScript library.",author:"@amirmohsena"}}}}}}]);
//# sourceMappingURL=2-4e81f0073ac6c773fcbb.js.map