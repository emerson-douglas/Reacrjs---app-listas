(this.webpackJsonpprojeto=this.webpackJsonpprojeto||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),r=a(7),c=a.n(r),s=(a(13),a(8)),i=a(2),u=a(3),l=a(5),h=a(4),j=(a(14),a(0)),d=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).titulo="",n.texto="",n}return Object(u.a)(a,[{key:"_handleMudaTitulo",value:function(t){t.stopPropagation(),this.titulo=t.target.value}},{key:"_handleMudaTexto",value:function(t){t.stopPropagation(),this.texto=t.target.value}},{key:"_criarCard",value:function(t){t.preventDefault(),t.stopPropagation(),this.props.criarNota(this.titulo,this.texto)}},{key:"render",value:function(){return Object(j.jsxs)("form",{className:"form-cadastro",onSubmit:this._criarCard.bind(this),children:[Object(j.jsx)("input",{type:"text",placeholder:"T\xedtulo",className:"form-cadastro_input",onChange:this._handleMudaTitulo.bind(this)}),Object(j.jsx)("textarea",{rows:15,placeholder:"Escreva sua nota...",className:"form-cadastro_input textarea",onChange:this._handleMudaTexto.bind(this)}),Object(j.jsx)("button",{className:"form-cadastro_submit",children:"Criar Nota"}),Object(j.jsx)("button",{type:"button",className:"form-cadastro_submit alert",children:"limpar formulario"})]})}}]),a}(n.Component),b=(a(16),function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("section",{className:"card-nota",children:[Object(j.jsx)("header",{className:"card-nota_cabecalho",children:Object(j.jsx)("h3",{className:"card-nota_titulo",children:this.props.titulo})}),Object(j.jsx)("p",{className:"card-nota_texto",children:this.props.texto})]})}}]),a}(n.Component)),p=(a(17),function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("ul",{className:"lista-notas",children:this.props.notas.map((function(t,e){return Object(j.jsx)("li",{className:"lista-notas_item",children:Object(j.jsx)(b,{titulo:t.titulo,texto:t.texto})},e)}))})}}]),a}(n.Component)),f=(a(18),a(19),function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).notas=[],t.state={notas:[]},t}return Object(u.a)(a,[{key:"criarNota",value:function(t,e){if(e.length>500||e.length<=0||t.length>80||t.length<=0)return alert("numero de caracteres inv\xe1lido"),0;var a={titulo:t,texto:e},n={notas:[].concat(Object(s.a)(this.state.notas),[a])};this.setState(n)}},{key:"render",value:function(){return Object(j.jsxs)("section",{className:"conteudo",children:[Object(j.jsx)(d,{criarNota:this.criarNota.bind(this)}),Object(j.jsx)(p,{notas:this.state.notas})]})}}]),a}(n.Component)),O=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),o(t),r(t),c(t)}))};c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),O()}],[[20,1,2]]]);
//# sourceMappingURL=main.5c738188.chunk.js.map