(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l}),a.d(t,"pageQuery",function(){return u});var n=a(0),r=a.n(n),i=a(147);function l(e){var t=e.data,a=(void 0===t?{}:t).markdownRemark,n=void 0===a?{}:a,l=n.frontmatter,u=void 0===l?{}:l,c=n.html,o=void 0===c?"":c;return r.a.createElement(i.a,{title:u.title},r.a.createElement("h1",null,u.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}))}var u="997976791"},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),u=a(143),c=a.n(u);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var o=a(145),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},145:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},146:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),l=a(4),u=a.n(l),c=a(153),o=a.n(c),s=a(144);function d(e){var t=e.description,a=e.lang,r=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n}]})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:u.a.string,lang:u.a.string,title:u.a.string.isRequired},t.a=d;var m="763876243"},147:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),l=a(4),u=a.n(l),c=a(144),o=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{className:"layoutSize"},i.a.createElement(c.Link,{to:"/",className:"brand"},t)),i.a.createElement("nav",{className:"mainNav"},i.a.createElement("ul",{className:"layoutSize"},i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/examples"},"Examples")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/docs/schema"},"Schema")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/dequelabs/axrl/issues"},"Give feedback")))))};o.propTypes={siteTitle:u.a.string},o.defaultProps={siteTitle:""};var s=o,d=a(146),m=(a(151),a(152),function(e){var t=e.children,a=e.title,r=e.pageContext,l=void 0===r?{}:r;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:a||l.title}),i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t))},data:n})});m.propTypes={children:u.a.node.isRequired,title:u.a.string.isRequired};t.a=m},148:function(e){e.exports={data:{site:{siteMetadata:{title:"AXRL: Accessibility Report Language"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),u=a(51),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},150:function(e){e.exports={data:{site:{siteMetadata:{title:"AXRL: Accessibility Report Language",description:"A data format for ICT accessibility testing",author:"Wilco Fiers"}}}}},151:function(e,t,a){},152:function(e,t,a){}}]);
//# sourceMappingURL=component---src-components-page-template-js-edf925b0068f1425d176.js.map