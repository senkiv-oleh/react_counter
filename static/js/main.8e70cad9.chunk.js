(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),u=n(2),o=n.n(u),r=(n(12),n(3)),s=n(4),i=n(6),l=n(5),d=(n(13),function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(t=e.call.apply(e,[this].concat(c))).state={count:0,cklicks:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.cklicks<5&&0!==t.state.cklicks?(t.setState((function(t){return{cklicks:t.cklicks+1}})),t.addOne()):(t.setState({cklicks:1}),t.addOne(),t.add100())},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.count;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Count: ".concat(t)),c.a.createElement("div",{className:"add"},c.a.createElement("button",{type:"button",className:"add__button",onClick:this.addOne},"Add One"),c.a.createElement("button",{type:"button",className:"add__button",onClick:this.add100},"Add 100"),c.a.createElement("button",{type:"button",className:"add__button",onClick:this.increase},"Increise")))}}]),n}(c.a.Component)),k=function(){return c.a.createElement(d,null)};o.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.8e70cad9.chunk.js.map