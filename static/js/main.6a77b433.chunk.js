(this["webpackJsonpgolf-stats"]=this["webpackJsonpgolf-stats"]||[]).push([[0],{76:function(e,t,a){e.exports=a(87)},81:function(e,t,a){},82:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=(a(81),a(82),a(10)),i=a(11),u=a(14),s=a(13),d=a(12),m=function e(){Object(o.a)(this,e),this.holes=void 0,this.holes=new Array},h=a(61),b=a.n(h),p=a(63),E=a.n(p),v=a(62),O=a.n(v),k=a(116),f=a(120),j=a(131),y=a(121),C=a(130),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={value:"CENTER"},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e,t){this.setState({value:t})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k.a,{component:"fieldset"},l.a.createElement(f.a,{component:"label"},"Fairway"),l.a.createElement(j.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top"},l.a.createElement(y.a,{value:"1",control:l.a.createElement(C.a,{color:"primary"}),label:l.a.createElement(b.a,null),labelPlacement:"bottom"}),l.a.createElement(y.a,{value:"2",control:l.a.createElement(C.a,{color:"primary"}),label:l.a.createElement(O.a,null),labelPlacement:"bottom"}),l.a.createElement(y.a,{value:"3",control:l.a.createElement(C.a,{color:"primary"}),label:l.a.createElement(E.a,null),labelPlacement:"bottom"}))))}}]),a}(n.Component),w=a(122),P=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={checked:!1},n.toggleChecked=n.toggleChecked.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y.a,{control:l.a.createElement(w.a,{color:"primary",checked:this.state.checked,onChange:this.toggleChecked}),label:"GIR",color:"secondary"}))}},{key:"toggleChecked",value:function(e,t){this.setState({checked:t})}}]),a}(n.Component),S=a(129),A=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(S.a,{label:"Putts",type:"number",inputProps:{pattern:"[0-9*]"}})}}]),a}(n.Component),N=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(S.a,{label:"Score",type:"number",inputProps:{pattern:"[0-9*]"}})}}]),a}(n.Component),x=a(123),B=a(124),F=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(S.a,{label:"Chip Shots",type:"number",inputProps:{pattern:"[0-9*]"}})}}]),a}(n.Component),H=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(S.a,{label:"Sand Shots",type:"number",inputProps:{pattern:"[0-9*]"}})}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(S.a,{label:"Penalty Strokes",type:"number",inputProps:{pattern:"[0-9*]"}})}}]),a}(n.Component),J=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={open:!0},n.handleClick=n.handleClick.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"handleClick",value:function(e){this.setState({open:!this.state.open})}},{key:"render",value:function(){return l.a.createElement(x.a,{component:"div",disablePadding:!0},l.a.createElement(B.a,null,l.a.createElement(F,null)),l.a.createElement(B.a,null,l.a.createElement(H,null)),l.a.createElement(B.a,null,l.a.createElement(I,null)))}}]),a}(n.Component),M=a(125),R=a(126),W=a(127),G=a(128),T=a(66),V=a.n(T),$=a(67),q=a.n($),z=a(88),D=a(64),K=a.n(D),L=a(65),Q=a.n(L),U=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={holeNumber:1},n.handleBackwardsClick=n.handleBackwardsClick.bind(Object(u.a)(n)),n.handleForwardsClick=n.handleForwardsClick.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"handleBackwardsClick",value:function(e){this.setState({holeNumber:this.state.holeNumber-1})}},{key:"handleForwardsClick",value:function(e){this.setState({holeNumber:this.state.holeNumber+1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(z.a,{onClick:this.handleBackwardsClick},l.a.createElement(K.a,null)),l.a.createElement(S.a,{label:"Hole",type:"number",inputProps:{pattern:"[0-9*]",min:"1"},value:this.state.holeNumber}),l.a.createElement(z.a,{onClick:this.handleForwardsClick},l.a.createElement(Q.a,null)))}}]),a}(n.Component),X=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={db:new m,isAdvancedOptionsExpanded:!1},n.addHole=n.addHole.bind(Object(u.a)(n)),n.handleAdvancedOptionsClick=n.handleAdvancedOptionsClick.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(R.a,null,l.a.createElement(x.a,{component:"div",className:"center-align"},l.a.createElement(B.a,null,l.a.createElement(U,null)),l.a.createElement(B.a,null,l.a.createElement(N,null)),l.a.createElement(B.a,null,l.a.createElement(g,null)),l.a.createElement(B.a,null,l.a.createElement(P,null)),l.a.createElement(B.a,null,l.a.createElement(A,null)),l.a.createElement(B.a,{button:!0,onClick:this.handleAdvancedOptionsClick},l.a.createElement(W.a,{primary:"More"}),this.state.isAdvancedOptionsExpanded?l.a.createElement(V.a,null):l.a.createElement(q.a,null)),l.a.createElement(G.a,{in:this.state.isAdvancedOptionsExpanded,timeout:"auto",unmountOnExit:!0},l.a.createElement(J,null))))))}},{key:"addHole",value:function(){this.state.db()}},{key:"handleAdvancedOptionsClick",value:function(e){this.setState({isAdvancedOptionsExpanded:!this.state.isAdvancedOptionsExpanded})}}]),a}(n.Component);var Y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.6a77b433.chunk.js.map