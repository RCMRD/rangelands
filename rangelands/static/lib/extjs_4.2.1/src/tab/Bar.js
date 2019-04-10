Ext.define("Ext.tab.Bar",{extend:"Ext.panel.Header",alias:"widget.tabbar",baseCls:Ext.baseCSSPrefix+"tab-bar",requires:["Ext.tab.Tab","Ext.util.Point"],isTabBar:!0,defaultType:"tab",plain:!1,childEls:["body","strip"],renderTpl:['<div id="{id}-body" class="{baseCls}-body {bodyCls} {bodyTargetCls}{childElCls}<tpl if="ui"> {baseCls}-body-{ui}<tpl for="uiCls"> {parent.baseCls}-body-{parent.ui}-{.}<\/tpl><\/tpl>"<tpl if="bodyStyle"> style="{bodyStyle}"<\/tpl>>',"{%this.renderContainer(out,values)%}","<\/div>",'<div id="{id}-strip" class="{baseCls}-strip {baseCls}-strip-{dock}{childElCls}','<tpl if="ui"> {baseCls}-strip-{ui}','<tpl for="uiCls"> {parent.baseCls}-strip-{parent.ui}-{.}<\/tpl>','<\/tpl>">',"<\/div>"],_reverseDockNames:{left:"right",right:"left"},initComponent:function(){var n=this;n.plain&&n.addCls(n.baseCls+"-plain");n.addClsWithUI(n.orientation);n.addEvents("change");n.callParent(arguments);Ext.merge(n.layout,n.initialConfig.layout);n.layout.align=n.orientation=="vertical"?"left":"top";n.layout.overflowHandler=new Ext.layout.container.boxOverflow.Scroller(n.layout);n.remove(n.titleCmp);delete n.titleCmp;Ext.apply(n.renderData,{bodyCls:n.bodyCls,dock:n.dock})},onRender:function(){var n=this;if(n.callParent(),n.orientation==="vertical"&&(Ext.isIE8||Ext.isIE9)&&Ext.isStrict)n.el.on({mousemove:n.onMouseMove,scope:n})},afterRender:function(){var n=this.layout;if(this.callParent(),Ext.isIE9&&Ext.isStrict&&this.orientation==="vertical")n.innerCt.on("scroll",function(){n.innerCt.dom.scrollLeft=0})},afterLayout:function(){this.adjustTabPositions();this.callParent(arguments)},adjustTabPositions:function(){var i=this.items.items,t=i.length,n;if(!Ext.isIE9m)if(this.dock==="right")while(t--)n=i[t],n.isVisible()&&n.el.setStyle("left",n.lastBox.width+"px");else if(this.dock==="left")while(t--)n=i[t],n.isVisible()&&n.el.setStyle("left",-n.lastBox.height+"px")},getLayout:function(){var n=this;return n.layout.type=n.orientation==="horizontal"?"hbox":"vbox",n.callParent(arguments)},onAdd:function(n){n.position=this.dock;this.callParent(arguments)},onRemove:function(n){var t=this;n===t.previousTab&&(t.previousTab=null);t.callParent(arguments)},afterComponentLayout:function(){var n=this,t=n.needsScroll;n.callParent(arguments);t&&n.layout.overflowHandler.scrollToItem(n.activeTab);delete n.needsScroll},onClick:function(n,t){var r=this,o=r.tabPanel,f,i,u,e;n.getTarget("."+Ext.baseCSSPrefix+"box-scroller")||(r.orientation==="vertical"&&(Ext.isIE8||Ext.isIE9)&&Ext.isStrict?(e=r.getTabInfoFromPoint(n.getXY()),i=e.tab,u=e.close):(f=n.getTarget("."+Ext.tab.Tab.prototype.baseCls),i=f&&Ext.getCmp(f.id),u=i&&i.closeEl&&t===i.closeEl.dom),u&&n.preventDefault(),i&&i.isDisabled&&!i.isDisabled()&&(i.closable&&u?i.onCloseClick():(o?o.setActiveTab(i.card):r.setActiveTab(i),i.focus())))},onMouseMove:function(n){var t=this,r=t._overTab,u,i;if(!n.getTarget("."+Ext.baseCSSPrefix+"box-scroller")&&(u=t.getTabInfoFromPoint(n.getXY()),i=u.tab,i!==r)){if(r&&r.rendered){r.onMouseLeave(n);t._overTab=null}if(i){i.onMouseEnter(n);t._overTab=i;i.disabled||t.el.setStyle("cursor","pointer")}else t.el.setStyle("cursor","default")}},onMouseLeave:function(n){var t=this._overTab;if(t&&t.rendered)t.onMouseLeave(n)},getTabInfoFromPoint:function(n){for(var u=this,l=u.items.items,rt=l.length,y=u.layout.innerCt,p=y.getXY(),w=new Ext.util.Point(n[0],n[1]),o=0,f,b,t,k,e,s,h,d,g,i,r,a,v,nt,tt,it,c;o<rt;o++)if(f=l[o].lastBox,i=p[0]+f.x,r=p[1]-y.dom.scrollTop+f.y,a=f.width,v=f.height,b=new Ext.util.Region(r,i+a,r+v,i),b.contains(w)){c=l[o];t=c.closeEl;t&&(e=t.getXY(),d=t.getWidth(),g=t.getHeight(),u._isTabReversed===undefined&&(u._isTabReversed=tt=c.btnWrap.dom.currentStyle.filter.indexOf("rotation=2")!==-1),it=tt?this._reverseDockNames[u.dock]:u.dock,it==="right"?(s=i+a-(e[1]-r+t.getHeight()),h=r+(e[0]-i)):(s=i+(e[1]-r),h=r+i+v-e[0]-t.getWidth()),nt=new Ext.util.Region(h,s+d,h+g,s),k=nt.contains(w));break}return{tab:c,close:k}},closeTab:function(n){var i=this,t=n.card,r=i.tabPanel,u;if(t&&t.fireEvent("beforeclose",t)===!1)return!1;if(u=i.findNextActivatable(n),Ext.suspendLayouts(),r&&t){if(delete n.ownerCt,t.fireEvent("close",t),r.remove(t),r.getComponent(t))return n.ownerCt=i,Ext.resumeLayouts(!0),!1;n.fireClose();i.remove(n)}u&&(r?r.setActiveTab(u.card):i.setActiveTab(u),u.focus());Ext.resumeLayouts(!0)},findNextActivatable:function(n){var t=this;if(n.active&&t.items.getCount()>1)return t.previousTab&&t.previousTab!==n&&!t.previousTab.disabled?t.previousTab:n.next("tab[disabled=false]")||n.prev("tab[disabled=false]")},setActiveTab:function(n,t){var i=this;n.disabled||n===i.activeTab||(i.activeTab&&(i.activeTab.isDestroyed?i.previousTab=null:(i.previousTab=i.activeTab,i.activeTab.deactivate())),n.activate(),i.activeTab=n,i.needsScroll=!0,t||(i.fireEvent("change",i,n,n.card),i.updateLayout()))}})