Ext.define("Ext.Template",{requires:["Ext.dom.Helper","Ext.util.Format"],inheritableStatics:{from:function(n,t){return n=Ext.getDom(n),new this(n.value||n.innerHTML,t||"")}},constructor:function(n){var t=this,r=arguments,f=[],e=0,u=r.length,i;if(t.initialConfig={},u===1&&Ext.isArray(n)&&(r=n,u=r.length),u>1)for(;e<u;e++)i=r[e],typeof i=="object"?(Ext.apply(t.initialConfig,i),Ext.apply(t,i)):f.push(i);else f.push(n);t.html=f.join("");t.compiled&&t.compile()},isTemplate:!0,disableFormats:!1,re:/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,apply:function(n){function f(t,f,e,o){return e&&u?(o=o?[n[f]].concat(Ext.functionFactory("return ["+o+"];")()):[n[f]],e.substr(0,5)=="this."?r[e.substr(5)].apply(r,o):i[e].apply(i,o)):n[f]!==undefined?n[f]:""}var t=this,u=t.disableFormats!==!0,i=Ext.util.Format,r=t;return t.compiled?t.compiled(n).join(""):t.html.replace(t.re,f)},applyOut:function(n,t){var i=this;return i.compiled?t.push.apply(t,i.compiled(n)):t.push(i.apply(n)),t},applyTemplate:function(){return this.apply.apply(this,arguments)},set:function(n,t){var i=this;return i.html=n,i.compiled=null,t?i.compile():i},compileARe:/\\/g,compileBRe:/(\r\n|\n)/g,compileCRe:/'/g,compile:function(){function u(n,t,i,u){return i&&r?(u=u?","+u:"",i=i.substr(0,5)!="this."?"fm."+i+"(":"this."+i.substr(5)+"("):(u="",i="(values['"+t+"'] == undefined ? '' : "),"',"+i+"values['"+t+"']"+u+") ,'"}var n=this,f=Ext.util.Format,r=n.disableFormats!==!0,t,i;return i=n.html.replace(n.compileARe,"\\\\").replace(n.compileBRe,"\\n").replace(n.compileCRe,"\\'").replace(n.re,u),t="this.compiled = function(values){ return ['"+i+"'];};",eval(t),n},insertFirst:function(n,t,i){return this.doInsert("afterBegin",n,t,i)},insertBefore:function(n,t,i){return this.doInsert("beforeBegin",n,t,i)},insertAfter:function(n,t,i){return this.doInsert("afterEnd",n,t,i)},append:function(n,t,i){return this.doInsert("beforeEnd",n,t,i)},doInsert:function(n,t,i,r){var u=Ext.DomHelper.insertHtml(n,Ext.getDom(t),this.apply(i));return r?Ext.get(u):u},overwrite:function(n,t,i){var r=Ext.DomHelper.overwrite(Ext.getDom(n),this.apply(t));return i?Ext.get(r):r}})