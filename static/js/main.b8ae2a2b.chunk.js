(this["webpackJsonpcovalent-wallet-app"]=this["webpackJsonpcovalent-wallet-app"]||[]).push([[0],{150:function(e,t,r){},152:function(e,t,r){},16:function(e,t,r){e.exports={root:"BalanceItem_root__2w21y",top:"BalanceItem_top__1VPKV",logo:"BalanceItem_logo__15kTX",logoImg:"BalanceItem_logoImg__LOUrI",balance:"BalanceItem_balance__39PZ8",symbol:"BalanceItem_symbol__3Sgvg",quoteMajor:"BalanceItem_quoteMajor__2cGcJ",quoteMinor:"BalanceItem_quoteMinor__-N3KI",fiat:"BalanceItem_fiat__fonnX"}},202:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(0),s=r.n(n),c=r(14),o=r.n(c),i=(r(150),r(151),r(152),r(153),r(154),r(206)),l=r(22),u=r(15),d=r(4),b=r.n(d),p=r(11),j=r(17),m=r(39),_=r(89),x=r(45),O=r.n(x),v=r(16),f=r.n(v),h=r(31),g=r.n(h),k=function(e){return(100*e).toFixed(2)+"%"},y=function(e,t){return Object(a.jsxs)("span",{className:g.a.display,children:[Object(a.jsx)(i.d,{content:Object(a.jsx)("div",{children:"Supply"}),children:k(e)}),Object(a.jsx)("span",{className:g.a.divider,children:"/"}),Object(a.jsx)(i.d,{content:Object(a.jsx)("div",{children:"Borrow"}),children:k(t)})]})},N=function(e){var t=e.provider,r=e.providerName,n="aave"===t?"https://app.aave.com/":"https://app.compound.finance/";return Object(a.jsxs)("a",{className:g.a.root,href:n,target:"_blank",rel:"noreferrer",children:[Object(a.jsx)(i.d,{className:g.a.logo,content:t.token.contract_name,children:Object(a.jsx)("img",{className:g.a.logoImg,src:t.token.logo_url,alt:t.token.contract_name})}),"aave"===r?y(t.supply_apy,t.stable_borrow_apr):y(t.supply_apr,t.borrow_apr)]})},w=function(e){var t=e.item,r=e.loans,n=Math.floor(t.quote),s=(t.quote-n).toFixed(18).substring(1),c=Object(a.jsx)("div",{children:t.contract_name}),o=r&&r[t.contract_ticker_symbol]&&r[t.contract_ticker_symbol].aave,u=r&&r[t.contract_ticker_symbol]&&r[t.contract_ticker_symbol].comp;return Object(a.jsxs)(i.b,{className:f.a.root,elevation:l.a.ZERO,children:[Object(a.jsxs)("div",{className:f.a.top,children:[Object(a.jsx)("div",{className:f.a.balanceDesc,children:Object(a.jsx)(i.d,{className:f.a.tooltip,content:c,children:Object(a.jsxs)("div",{className:f.a.balance,children:[Object(a.jsx)("div",{className:f.a.logo,children:Object(a.jsx)("img",{className:f.a.logoImg,src:t.logo_url,alt:t.contract_name,width:36,height:36})}),Object(a.jsx)("div",{className:f.a.symbol,title:t.contract_name,children:t.contract_ticker_symbol})]})})}),Object(a.jsxs)("div",{className:f.a.loans,children:[o&&Object(a.jsx)(N,{provider:o,providerName:"aave"}),u&&Object(a.jsx)(N,{provider:u,providerName:"comp"})]})]}),Object(a.jsxs)("div",{className:f.a.bottom,children:[Object(a.jsxs)("div",{className:f.a.quote,children:[Object(a.jsx)("span",{className:f.a.quoteMajor,children:n}),Object(a.jsx)("span",{className:f.a.quoteMinor,children:s})]}),Object(a.jsxs)("div",{className:f.a.fiat,children:["~$",t.quote_rate]})]})]})},I=r(20),q=r(47),B=r.n(q),S=function(e){var t=e.address,r=e.showOverlay,n=t.slice(0,6)+"..."+t.slice(-4);return Object(a.jsxs)(i.b,{className:B.a.root,onClick:r,elevation:l.a.ONE,children:[Object(a.jsx)("div",{className:B.a.address,children:n}),Object(a.jsx)(i.a,{className:B.a.editButton,minimal:!0,type:"button",children:Object(a.jsx)(i.c,{icon:"edit",intent:I.a.PRIMARY})})]})},C=r(56),F=r.n(C),M=r(83),T=r.n(M).a.create({auth:{username:"ckey_f1fbf169cdc04b9dbb6ceea07af",password:""}}),A=function(){var e=Object(p.a)(b.a.mark((function e(t){var r,a,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]&&n[1],e.prev=1,e.next=4,T.get("https://api.covalenthq.com/v1/1/address/".concat(t,"/balances_v2/?nft=").concat(r?"true":"false"));case 4:return a=e.sent,e.abrupt("return",a);case 8:if(e.prev=8,e.t0=e.catch(1),!e.t0.response){e.next=17;break}if(console.log("api response error",e.t0.response),!e.t0.response.data){e.next=14;break}return e.abrupt("return",e.t0.response.data.error_message);case 14:return e.abrupt("return",e.t0.response);case 17:if(!e.t0.request){e.next=22;break}return console.log("api request error",e.t0.request),e.abrupt("return",e.t0.request);case 22:return console.log("unexpected api error",e.t0.message),e.abrupt("return",e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),L=r(28),P=r(84),R=r.n(P),E=function(){return Object(a.jsx)("div",{className:R.a.root,children:Object(a.jsx)(L.a,{intent:I.a.PRIMARY,size:50})})},J=r(25),V=r(40),Y=r(43),G=r(88),K=r(57),W=r.n(K),D=function(e){var t=e.onSubmit,r=e.onCancel,n=e.address,s=e.isCancelable,c=Object(G.a)(),o=c.register,i=c.handleSubmit;return Object(a.jsx)("div",{className:W.a.root,children:Object(a.jsxs)("form",{onSubmit:i(t),children:[Object(a.jsx)(V.a,{helperText:"For example 0xb392b1b6ab28016a019bae72f6cb7b18145b219e",label:"Your wallet address",labelFor:"address",children:Object(a.jsx)(Y.a,{id:"address",placeholder:"Placeholder text",name:"address",defaultValue:n,inputRef:o({required:!0}),className:W.a.addressInputGroup})}),Object(a.jsx)(J.a,{type:"submit",children:"Save"}),s&&Object(a.jsx)(J.a,{type:"button",onClick:r,children:"Cancel"})]})})},X=r(85),H=r.n(X);var Q=r(41),U=r(90),Z=r(58),z=r.n(Z),$=function(){return Object(a.jsx)("div",{className:z.a.root,children:Object(a.jsx)("div",{className:z.a.title,children:"Covallet"})})},ee=function(e){var t=e.setBalances,r=e.hideOverlay,s=e.balances,c=function(e,t){var r=H()(e,t),a=Object(u.a)(r,2),s=a[0],c=a[1],o=Object(n.useState)(s),i=Object(u.a)(o,2),l=i[0],d=i[1];return[l,function(e){d(e),c(e)}]}("address",""),o=Object(u.a)(c,2),i=o[0],l=o[1],d=Object(n.useState)(""),j=Object(u.a)(d,2),m=j[0],_=j[1],x=Object(U.a)(function(){var e=Object(p.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(a);case 2:(n=e.sent).status>=200&&n.status<300?(t(n.data.data),r(),l(n.data.data.address)):_(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),O=Object(u.a)(x,2),v=O[0],f=O[1];Object(n.useEffect)((function(){i&&f(i)}),[i,f]);var h=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(t.address);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:F.a.root,children:[Object(a.jsx)($,{}),v.loading?Object(a.jsx)(E,{}):m?Object(a.jsx)(Q.a,{icon:"error",title:"Address fetching error",description:m,action:Object(a.jsx)(J.a,{onClick:function(){return _("")},children:"Return to form"})}):Object(a.jsx)("div",{className:F.a.container,children:Object(a.jsx)(D,{address:i,onSubmit:h,onCancel:function(){r(),l(s.address)},isCancelable:Boolean(s&&s.address)})})]})},te=function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.get("https://api.covalenthq.com/v1/1/networks/compound/assets/");case 3:return t=e.sent,e.abrupt("return",t);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=16;break}if(console.log("api response error",e.t0.response),!e.t0.response.data){e.next=13;break}return e.abrupt("return",e.t0.response.data.error_message);case 13:return e.abrupt("return",e.t0.response);case 16:if(!e.t0.request){e.next=21;break}return console.log("api request error",e.t0.request),e.abrupt("return",e.t0.request);case 21:return console.log("unexpected api error",e.t0.message),e.abrupt("return",e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),re=r(205),ae=function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.get("https://api.covalenthq.com/v1/1/networks/aave/assets/");case 3:return t=e.sent,e.abrupt("return",t);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=16;break}if(console.log("api response error",e.t0.response),!e.t0.response.data){e.next=13;break}return e.abrupt("return",e.t0.response.data.error_message);case 13:return e.abrupt("return",e.t0.response);case 16:if(!e.t0.request){e.next=21;break}return console.log("api request error",e.t0.request),e.abrupt("return",e.t0.request);case 21:return console.log("unexpected api error",e.t0.message),e.abrupt("return",e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ne=r(86),se=function(e,t,r){return e.reduce((function(e,a){var n=a.underlying,s=Object(_.a)(a,["underlying"]);return Object(m.a)(Object(m.a)({},e),{},Object(j.a)({},a.underlying.contract_ticker_symbol,Object(j.a)({underlying:n},t,Object(m.a)(Object(m.a)({},s),{},{token:s[r]}))))}),{})},ce=function(e){var t=e.balances,r=e.showOverlay,n=Object(re.a)(Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=7;break}return e.abrupt("return",t.data.data.items);case 7:case"end":return e.stop()}}),e)}))),[]),s=Object(re.a)(Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=7;break}return e.abrupt("return",t.data.data.items);case 7:case"end":return e.stop()}}),e)}))),[]),c=s.value&&n.value&&function(e,t){var r=se(e,"aave","atoken"),a=se(t,"comp","ctoken");return Object(ne.merge)(r,a)}(s.value,n.value);return Object(a.jsxs)("div",{className:O.a.wrapper,children:[Object(a.jsx)(S,{address:t.address,showOverlay:r}),Object(a.jsx)("div",{className:O.a.balanceItems,children:t.items.map((function(e){return Object(a.jsx)(w,{item:e,loans:c},e.contract_address)}))})]})},oe=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(),o=Object(u.a)(c,2),i=o[0],l=o[1];return Object(a.jsxs)("div",{className:O.a.root,children:[i&&i.items&&Object(a.jsx)(ce,{balances:i,showOverlay:function(){s(!0)}}),Object(a.jsx)("div",{style:{display:r?"block":"none"},children:Object(a.jsx)(ee,{setBalances:l,balances:i,hideOverlay:function(){return s(!1)}})})]})},ie=r(48),le=r.n(ie),ue=r.p+"static/media/covalent-logo.96c70c5c.png",de=function(){return Object(a.jsx)("div",{className:le.a.root,children:Object(a.jsxs)("a",{className:le.a.link,href:"https://www.covalenthq.com/",target:"_blank",rel:"noreferrer",children:[Object(a.jsx)("span",{children:"Powered by"}),Object(a.jsx)("img",{className:le.a.logoImg,src:ue,alt:"Covalent"})]})})},be=r(87),pe=r.n(be),je=function(){return Object(a.jsxs)(i.b,{className:pe.a.root,elevation:l.a.TWO,children:[Object(a.jsx)($,{}),Object(a.jsx)(oe,{}),Object(a.jsx)(de,{})]})};var me=function(){return Object(a.jsx)(je,{})},_e=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,207)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(me,{})}),document.getElementById("root")),_e()},31:function(e,t,r){e.exports={root:"Loan_root__11Ku5",logo:"Loan_logo__2T4qS",logoImg:"Loan_logoImg__2DOeJ",display:"Loan_display__2NajQ",divider:"Loan_divider__4wfjX"}},45:function(e,t,r){e.exports={root:"Body_root__g6F7S",wrapper:"Body_wrapper__18Tbd",balanceItems:"Body_balanceItems__2PWvI"}},47:function(e,t,r){e.exports={root:"AddressInput_root__a0TVx",address:"AddressInput_address__2TOaV",editButton:"AddressInput_editButton__3TYfd"}},48:function(e,t,r){e.exports={root:"Footer_root__1jAO-",logoImg:"Footer_logoImg__2xKQs",link:"Footer_link__2c75P"}},56:function(e,t,r){e.exports={root:"AccountEditOverlay_root__3YqT_",container:"AccountEditOverlay_container__3WMLd"}},57:function(e,t,r){e.exports={addressInputGroup:"AddressForm_addressInputGroup__18adu"}},58:function(e,t,r){e.exports={root:"Header_root__2ncWU",title:"Header_title__1JN2t"}},84:function(e,t,r){e.exports={root:"Loader_root__1rxh1"}},87:function(e,t,r){e.exports={root:"Root_root__1dxct"}}},[[202,1,2]]]);
//# sourceMappingURL=main.b8ae2a2b.chunk.js.map