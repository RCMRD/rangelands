Ext.define("Ext.dom.AbstractElement_traversal",{override:"Ext.dom.AbstractElement",findParent:function(n,t,i){var r=this.dom,e=document.documentElement,u=0,f;for(t=t||50,isNaN(t)&&(f=Ext.getDom(t),t=Number.MAX_VALUE);r&&r.nodeType==1&&u<t&&r!=e&&r!=f;){if(Ext.DomQuery.is(r,n))return i?Ext.get(r):r;u++;r=r.parentNode}return null},findParentNode:function(n,t,i){var r=Ext.fly(this.dom.parentNode,"_internal");return r?r.findParent(n,t,i):null},up:function(n,t,i){return this.findParentNode(n,t,!i)},select:function(n,t){return Ext.dom.Element.select(n,this.dom,t)},query:function(n){return Ext.DomQuery.select(n,this.dom)},down:function(n,t){var i=Ext.DomQuery.selectNode(n,this.dom);return t?i:Ext.get(i)},child:function(n,t){var r,u=this,i;return i=Ext.id(u.dom),i=Ext.escapeId(i),r=Ext.DomQuery.selectNode("#"+i+" > "+n,u.dom),t?r:Ext.get(r)},parent:function(n,t){return this.matchNode("parentNode","parentNode",n,t)},next:function(n,t){return this.matchNode("nextSibling","nextSibling",n,t)},prev:function(n,t){return this.matchNode("previousSibling","previousSibling",n,t)},first:function(n,t){return this.matchNode("nextSibling","firstChild",n,t)},last:function(n,t){return this.matchNode("previousSibling","lastChild",n,t)},matchNode:function(n,t,i,r){if(!this.dom)return null;for(var u=this.dom[t];u;){if(u.nodeType==1&&(!i||Ext.DomQuery.is(u,i)))return r?u:Ext.get(u);u=u[n]}return null},isAncestor:function(n){return this.self.isAncestor.call(this.self,this.dom,n)}})