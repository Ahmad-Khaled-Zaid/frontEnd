(this.webpackJsonpsolution=this.webpackJsonpsolution||[]).push([[0],{54:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(13),r=n.n(a),i=n(9),o=n(10),s=n(12),j=n(11),u=(n(31),n(16)),b=n(25),l=n(2),h=function(t){Object(s.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)(u.a,{bg:"dark",variant:"dark",sticky:"top",children:Object(l.jsx)(b.a,{children:Object(l.jsx)(u.a.Brand,{href:"#home",children:"Books Library"})})})}}]),n}(c.Component),d=n(8),O=n(26),x=n.n(O),p=function(t){Object(s.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).componentDidMount=function(){x.a.get("".concat("http://localhost:4321","/booksCollection")).then((function(t){c.setState({BooksData:t.data})})).catch((function(t){return alert(t.message)}))},c.state={BooksData:[]},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:this.state.BooksData.length>0&&Object(l.jsx)(l.Fragment,{children:this.state.BooksData.map((function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d.a,{style:{width:"18rem"},children:Object(l.jsxs)(d.a.Body,{children:[Object(l.jsx)(d.a.Title,{children:t.title}),Object(l.jsx)(d.a.Text,{children:t.description}),Object(l.jsx)(d.a.Text,{children:t.status}),Object(l.jsx)(d.a.Text,{children:t.email})]})})})}))})})}}]),n}(c.Component),f=function(t){Object(s.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{}),Object(l.jsx)(p,{})]})}}]),n}(c.Component);r.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.67e94834.chunk.js.map