Ext.define("Ext.panel.Tool",{extend:"Ext.Component",requires:["Ext.tip.QuickTipManager"],alias:"widget.tool",isTool:!0,baseCls:Ext.baseCSSPrefix+"tool",disabledCls:Ext.baseCSSPrefix+"tool-disabled",toolPressedCls:Ext.baseCSSPrefix+"tool-pressed",toolOverCls:Ext.baseCSSPrefix+"tool-over",ariaRole:"button",childEls:["toolEl"],renderTpl:['<img role="presentation" id="{id}-toolEl" src="{blank}" class="{baseCls}-img {baseCls}-{type}{childElCls}" role="presentation"/>'],toolOwner:null,tooltipType:"qtip",stopEvent:!0,height:15,width:15,_toolTypes:{close:1,collapse:1,down:1,expand:1,gear:1,help:1,left:1,maximize:1,minimize:1,minus:1,next:1,pin:1,plus:1,prev:1,print:1,refresh:1,restore:1,right:1,save:1,search:1,toggle:1,unpin:1,up:1},initComponent:function(){var n=this;n.addEvents("click");n.id&&n._toolTypes[n.id]&&Ext.global.console&&Ext.global.console.warn("When specifying a tool you should use the type option, the id can conflict now that tool is a Component");n.type=n.type||n.id;Ext.applyIf(n.renderData,{baseCls:n.baseCls,blank:Ext.BLANK_IMAGE_URL,type:n.type});n.tooltip=n.tooltip||n.qtip;n.callParent()},afterRender:function(){var n=this,t;n.callParent(arguments);n.el.on({click:n.onClick,mousedown:n.onMouseDown,mouseover:n.onMouseOver,mouseout:n.onMouseOut,scope:n});n.tooltip&&(Ext.quickTipsActive&&Ext.isObject(n.tooltip)?Ext.tip.QuickTipManager.register(Ext.apply({target:n.id},n.tooltip)):(t=n.tooltipType=="qtip"?"data-qtip":"title",n.el.dom.setAttribute(t,n.tooltip)))},getFocusEl:function(){return this.el},setType:function(n){var t=this,i=t.type;return t.type=n,t.rendered?(i&&t.toolEl.removeCls(t.baseCls+"-"+i),t.toolEl.addCls(t.baseCls+"-"+n)):t.renderData.type=n,t},onClick:function(n,t){var i=this;return i.disabled?!1:(i.el.removeCls(i.toolPressedCls),i.el.removeCls(i.toolOverCls),i.stopEvent!==!1&&n.stopEvent(),i.handler?Ext.callback(i.handler,i.scope||i,[n,t,i.ownerCt,i]):i.callback&&Ext.callback(i.callback,i.scope||i,[i.toolOwner||i.ownerCt,i,n]),i.fireEvent("click",i,n),!0)},onDestroy:function(){Ext.quickTipsActive&&Ext.isObject(this.tooltip)&&Ext.tip.QuickTipManager.unregister(this.id);this.callParent()},onMouseDown:function(){if(this.disabled)return!1;this.el.addCls(this.toolPressedCls)},onMouseOver:function(){if(this.disabled)return!1;this.el.addCls(this.toolOverCls)},onMouseOut:function(){this.el.removeCls(this.toolOverCls)}})