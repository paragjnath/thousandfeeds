(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{312:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(0),i=a.n(c),o=a(155),l=a(322),s=(a(50),a(166),a(116),a(70),a(576),a(2)),m=a.n(s),d=a(20),p=a(468),u=a.n(p),y=a(578),f=a.n(y),h=a(644),x=a.n(h),g=(a(304),a(305),a(306),f.a.Item),b=x.a.TextArea,_=function(e){var t=e.form.getFieldDecorator;function a(t){t.preventDefault(),e.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),function(e){var t=this;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(a=Object.assign({"form-name":"contact"},e),Object.keys(a).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])}).join("&"))}).then(function(){console.log("Form submission success"),Object(d.navigate)("/success")}).catch(function(e){console.error("Form submission error:",e),t.handleNetworkError()});var a}(t))})}return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.ThemeContext.Consumer,null,function(e){return i.a.createElement("div",{className:m.a.dynamic([["1647325995",[e.color.brand.primary,e.color.brand.primary]]])+" form"},i.a.createElement(f.a,{name:"contact",onSubmit:a,"data-netlify":"true","data-netlify-honeypot":"bot-field"},i.a.createElement(g,{label:"Name"},t("name",{rules:[{whitespace:!0}]})(i.a.createElement(x.a,{name:"name"}))),i.a.createElement(g,{label:"E-mail"},t("email",{rules:[{required:!0,message:"Please input your e-mail address!",whitespace:!0,type:"email"}]})(i.a.createElement(x.a,{name:"email"}))),i.a.createElement(g,{label:"Message"},t("message",{rules:[{required:!0,message:"Please input your message!",whitespace:!0}]})(i.a.createElement(b,{name:"message",placeholder:"",autosize:{minRows:4,maxRows:10}}))),i.a.createElement(g,null,i.a.createElement(u.a,{type:"primary",htmlType:"submit"},"Submit"))),i.a.createElement(m.a,{styleId:"1647325995",css:[".form.__jsx-style-dynamic-selector{background:transparent;}",".form.__jsx-style-dynamic-selector .ant-row.ant-form-item{margin:0 0 1em;}",".form.__jsx-style-dynamic-selector .ant-row.ant-form-item:last-child{margin-top:1em;}",".form.__jsx-style-dynamic-selector .ant-form-item-control{line-height:1em;}",".form.__jsx-style-dynamic-selector .ant-form-item-label{line-height:1em;margin-bottom:0.5em;}",".form.__jsx-style-dynamic-selector .ant-form-item{margin:0;}",".form.__jsx-style-dynamic-selector .ant-input{-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:auto;font-size:1.2em;padding:0.5em 0.6em;}",".form.__jsx-style-dynamic-selector .ant-btn-primary{height:auto;font-size:1.2em;padding:0.5em 3em;background:"+e.color.brand.primary+";border:1px solid "+e.color.brand.primary+";}",".form.__jsx-style-dynamic-selector .ant-form-explain{margin-top:0.2em;}","@media screen and (min-width:1024px){.form.__jsx-style-dynamic-selector input{max-width:50%;}}"],dynamic:[e.color.brand.primary,e.color.brand.primary]}))}))};_.propTypes={form:r.a.object};var E=f.a.create({})(_),w=a(323),j=a(318);a.d(t,"query",function(){return v});var k=function(e){var t=e.data.site.siteMetadata.facebook;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.ThemeContext.Consumer,null,function(e){return i.a.createElement(l.a,{theme:e},i.a.createElement("header",null,i.a.createElement(w.a,{title:"Contact",theme:e})),i.a.createElement(E,{theme:e}))}),i.a.createElement(j.a,{facebook:t}))};k.propTypes={data:r.a.object.isRequired};t.default=k;var v="3238590904"},318:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),i=a.n(c),o=a(332),l=a.n(o),s=a(29),m=a.n(s),d=function(e){var t=e.data,a=e.facebook,n=((t||{}).frontmatter||{}).title,c=((t||{}).frontmatter||{}).description,i=((t||{}).frontmatter||{}).cover,o=((t||{}).fields||{}).slug,s=n?n+" - "+m.a.shortSiteTitle:m.a.siteTitle,d=c||m.a.siteDescription,p=i||m.a.siteImage,u=m.a.siteUrl+m.a.pathPrefix+o;return r.a.createElement(l.a,{htmlAttributes:{lang:m.a.siteLanguage,prefix:"og: http://ogp.me/ns#"}},r.a.createElement("title",null,s),r.a.createElement("meta",{name:"description",content:d}),r.a.createElement("meta",{property:"og:url",content:u}),r.a.createElement("meta",{property:"og:title",content:s}),r.a.createElement("meta",{property:"og:description",content:d}),r.a.createElement("meta",{property:"og:image",content:p}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"fb:app_id",content:a.appId}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:m.a.authorTwitterAccount?m.a.authorTwitterAccount:""}))};d.propTypes={data:i.a.object,facebook:i.a.object.isRequired};var p=d;a.d(t,"a",function(){return p})},322:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(0),i=a.n(c),o=a(1),l=a.n(o),s=function(e){var t=e.children,a=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("article",{className:r.a.dynamic([["2846578189",[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]]])+" article"},t),i.a.createElement(r.a,{styleId:"2846578189",css:[".article.__jsx-style-dynamic-selector{padding:"+a.space.inset.default+";margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+") calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.desktop+";}}"],dynamic:[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]}))};s.propTypes={children:l.a.node.isRequired,theme:l.a.object.isRequired};var m=s;a.d(t,"a",function(){return m})},323:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(0),i=a.n(c),o=a(1),l=a.n(o),s=function(e){var t=e.title,a=e.children,n=e.theme;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement("h1",{className:r.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},t):i.a.createElement("h1",{className:r.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},a),i.a.createElement(r.a,{styleId:"1826841480",css:["h1.__jsx-style-dynamic-selector{font-size:"+n.font.size.xxl+";margin:"+n.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+n.time.duration.long+";-webkit-animation-duration:"+n.time.duration.long+";animation-duration:"+n.time.duration.long+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+n.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+n.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+n.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.4);}}"],dynamic:[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]}))};s.propTypes={title:l.a.string,children:l.a.node,theme:l.a.object.isRequired},t.a=s}}]);
//# sourceMappingURL=component---src-pages-contact-js-093f5d8b0a85d991ec41.js.map