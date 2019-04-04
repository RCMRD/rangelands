Ext.define("Ext.dom.AbstractElement_style",{override:"Ext.dom.AbstractElement"},function(){var n=this,v=/\w/g,c=/\s+/,l=/^(?:transparent|(?:rgba[(](?:\s*\d+\s*[,]){3}\s*0\s*[)]))$/i,f=Ext.supports.ClassList,t="padding",i="margin",r="border",e="-left",o="-right",s="-top",h="-bottom",u="-width",y={l:r+e+u,r:r+o+u,t:r+s+u,b:r+h+u},p={l:t+e,r:t+o,t:t+s,b:t+h},w={l:i+e,r:i+o,t:i+s,b:i+h},a=new n.Fly;Ext.override(n,{styleHooks:{},addStyles:function(n,t){var o=0,r=(n||"").match(v),i,u=r.length,f,e=[];if(u==1)o=Math.abs(parseFloat(this.getStyle(t[r[0]]))||0);else if(u){for(i=0;i<u;i++)f=r[i],e.push(t[f]);for(e=this.getStyle(e),i=0;i<u;i++)f=r[i],o+=Math.abs(parseFloat(e[t[f]])||0)}return o},addCls:function(){var t=function(t){String(t).indexOf("undefined")>-1&&Ext.Logger.warn("called with an undefined className: "+t);var e=this,r=e.dom,s=e.trimRe,l=t,o,i,f,h,u;if(typeof t=="string"&&(t=t.replace(s,"").split(c)),r&&t&&!!(h=t.length))if(r.className)if(o=r.classList,o){for(f=0;f<h;++f)u=t[f],u&&(o.contains(u)||(i?i.push(u):(i=r.className.replace(s,""),i=i?[i,u]:[u])));i&&(r.className=i.join(" "))}else n(l);else r.className=t.join(" ");return e},n=function(n){String(n).indexOf("undefined")>-1&&Ext.Logger.warn("called with an undefined className: '"+n+"'");var r=this,t=r.dom,i;return t&&n&&n.length&&(i=Ext.Element.mergeClsList(t.className,n),i.changed&&(t.className=i.join(" "))),r};return f?t:n}(),removeCls:function(n){var i=this,t=i.dom,r,f,u;return typeof n=="string"&&(n=n.replace(i.trimRe,"").split(c)),t&&t.className&&n&&!!(f=n.length)&&(r=t.classList,f===1&&r?n[0]&&r.remove(n[0]):(u=Ext.Element.removeCls(t.className,n),u.changed&&(t.className=u.join(" ")))),i},radioCls:function(n){var r=this.dom.parentNode.childNodes,t,i,u;for(n=Ext.isArray(n)?n:[n],i=0,u=r.length;i<u;i++)t=r[i],t&&t.nodeType==1&&a.attach(t).removeCls(n);return this.addCls(n)},toggleCls:function(){var t=function(t){var i=this,u=i.dom,r;return u&&(t=t.replace(i.trimRe,""),t&&(r=u.classList,r?r.toggle(t):n(t))),i},n=function(n){return this.hasCls(n)?this.removeCls(n):this.addCls(n)};return f?t:n}(),hasCls:function(){var t=function(t){var r=this.dom,u=!1,i;return r&&t&&(i=r.classList,u=i?i.contains(t):n(t)),u},n=function(n){var t=this.dom;return t?n&&(" "+t.className+" ").indexOf(" "+n+" ")!==-1:!1};return f?t:n}(),replaceCls:function(n,t){return this.removeCls(n).addCls(t)},isStyle:function(n,t){return this.getStyle(n)==t},getStyle:function(t,i){var h=this,u=h.dom,v=typeof t!="string",y=h.styleHooks,r=t,c=r,p=1,l,w,o,f,s,e,a;if(v&&(o={},r=c[0],a=0,!(p=c.length)))return o;if(!u||u.documentElement)return o||"";l=u.style;i?e=l:(e=u.ownerDocument.defaultView.getComputedStyle(u,null),e||(i=!0,e=l));do{if(f=y[r],f||(y[r]=f={name:n.normalize(r)}),f.get?s=f.get(u,h,i,e):(w=f.name,s=e[w]),!v)return s;o[r]=s;r=c[++a]}while(a<p);return o},getStyles:function(){var n=Ext.Array.slice(arguments),t=n.length,i;return t&&typeof n[t-1]=="boolean"&&(i=n.pop()),this.getStyle(n,i)},isTransparent:function(n){var t=this.getStyle(n);return t?l.test(t):!1},setStyle:function(t,i){var f=this,e=f.dom,o=f.styleHooks,s=e.style,u=t,r;if(typeof u=="string")r=o[u],r||(o[u]=r={name:n.normalize(u)}),i=i==null?"":i,r.set?r.set(e,i,f):s[r.name]=i,r.afterSet&&r.afterSet(e,i,f);else for(u in t)t.hasOwnProperty(u)&&(r=o[u],r||(o[u]=r={name:n.normalize(u)}),i=t[u],i=i==null?"":i,r.set?r.set(e,i,f):s[r.name]=i,r.afterSet&&r.afterSet(e,i,f));return f},getHeight:function(n){var t=this.dom,i=n?t.clientHeight-this.getPadding("tb"):t.offsetHeight;return i>0?i:0},getWidth:function(n){var t=this.dom,i=n?t.clientWidth-this.getPadding("lr"):t.offsetWidth;return i>0?i:0},setWidth:function(t){var i=this;return i.dom.style.width=n.addUnits(t),i},setHeight:function(t){var i=this;return i.dom.style.height=n.addUnits(t),i},getBorderWidth:function(n){return this.addStyles(n,y)},getPadding:function(n){return this.addStyles(n,p)},margins:w,applyStyles:function(t){if(t){var i,r,u=this.dom;if(typeof t=="function"&&(t=t.call()),typeof t=="string")for(t=Ext.util.Format.trim(t).split(/\s*(?::|;)\s*/),i=0,r=t.length;i<r;)u.style[n.normalize(t[i++])]=t[i++];else typeof t=="object"&&this.setStyle(t)}},setSize:function(t,i){var r=this,u=r.dom.style;return Ext.isObject(t)&&(i=t.height,t=t.width),u.width=n.addUnits(t),u.height=n.addUnits(i),r},getViewSize:function(){var i=document,t=this.dom;return t==i||t==i.body?{width:n.getViewportWidth(),height:n.getViewportHeight()}:{width:t.clientWidth,height:t.clientHeight}},getSize:function(n){var t=this.dom;return{width:Math.max(0,n?t.clientWidth-this.getPadding("lr"):t.offsetWidth),height:Math.max(0,n?t.clientHeight-this.getPadding("tb"):t.offsetHeight)}},repaint:function(){var n=this.dom;return this.addCls(Ext.baseCSSPrefix+"repaint"),setTimeout(function(){a.attach(n).removeCls(Ext.baseCSSPrefix+"repaint")},1),this},getMargin:function(n){var t=this,f={t:"top",l:"left",r:"right",b:"bottom"},i,r,u;if(n)return t.addStyles(n,t.margins);u=[];for(i in t.margins)t.margins.hasOwnProperty(i)&&u.push(t.margins[i]);if(r=t.getStyle(u),r&&typeof r=="object")for(i in t.margins)t.margins.hasOwnProperty(i)&&(r[f[i]]=parseFloat(r[t.margins[i]])||0);return r},mask:function(n,t,i){var r=this,h=r.dom,o=(r.$cache||r.getCache()).data,s=o.mask,e,u,c="",f=Ext.baseCSSPrefix;if(r.addCls(f+"masked"),r.getStyle("position")=="static"&&r.addCls(f+"masked-relative"),s&&s.remove(),c=t&&typeof t=="string"?" "+t:" "+f+"mask-gray",e=r.createChild({cls:f+"mask"+(i!==!1?"":" "+f+"mask-gray"),html:n?'<div class="'+(t||f+"mask-message")+'">'+n+"<\/div>":""}),u=r.getSize(),o.mask=e,h===document.body){u.height=window.innerHeight;r.orientationHandler&&Ext.EventManager.unOrientationChange(r.orientationHandler,r);r.orientationHandler=function(){u=r.getSize();u.height=window.innerHeight;e.setSize(u)};Ext.EventManager.onOrientationChange(r.orientationHandler,r)}e.setSize(u);Ext.is.iPad&&Ext.repaint()},unmask:function(){var n=this,t=(n.$cache||n.getCache()).data,i=t.mask,r=Ext.baseCSSPrefix;i&&(i.remove(),delete t.mask);n.removeCls([r+"masked",r+"masked-relative"]);n.dom===document.body&&(Ext.EventManager.unOrientationChange(n.orientationHandler,n),delete n.orientationHandler)}});Ext.onReady(function(){function o(n,t,i,r){var u=r[this.name]||"";return l.test(u)?"transparent":u}function s(n,t,i,r){var f=r.marginRight,u,e;return f!="0px"&&(u=n.style,e=u.display,u.display="inline-block",f=(i?r:n.ownerDocument.defaultView.getComputedStyle(n,null)).marginRight,u.display=e),f}function h(t,i,r,u){var e=u.marginRight,f,o,s;return e!="0px"&&(f=t.style,o=n.getRightMarginFixCleaner(t),s=f.display,f.display="inline-block",e=(r?u:t.ownerDocument.defaultView.getComputedStyle(t,"")).marginRight,f.display=s,o()),e}var t=Ext.supports,i,r,u,f,e;if(i=n.prototype.styleHooks,t.init&&t.init(),t.RightMargin||(i.marginRight=i["margin-right"]={name:"marginRight",get:t.DisplayChangeInputSelectionBug||t.DisplayChangeTextAreaSelectionBug?h:s}),!t.TransparentColor)for(r=["background-color","border-color","color","outline-color"],u=r.length;u--;)f=r[u],e=n.normalize(f),i[f]=i[e]={name:e,get:o}})})