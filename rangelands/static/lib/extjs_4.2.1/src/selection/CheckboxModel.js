Ext.define("Ext.selection.CheckboxModel",{alias:"selection.checkboxmodel",extend:"Ext.selection.RowModel",mode:"MULTI",injectCheckbox:0,checkOnly:!1,showHeaderCheckbox:undefined,checkSelector:"."+Ext.baseCSSPrefix+"grid-row-checker",headerWidth:24,checkerOnCls:Ext.baseCSSPrefix+"grid-hd-checker-on",constructor:function(){var n=this;n.callParent(arguments);n.mode==="SINGLE"&&n.showHeaderCheckbox!==!0&&(n.showHeaderCheckbox=!1)},beforeViewRender:function(n){var t=this,i;if(t.callParent(arguments),!t.hasLockedHeader()||n.headerCt.lockedCt){if(t.showHeaderCheckbox!==!1)n.headerCt.on("headerclick",t.onHeaderClick,t);t.addCheckbox(n,!0);i=n.ownerCt;n.headerCt.lockedCt&&(i=i.ownerCt);t.mon(i,"reconfigure",t.onReconfigure,t)}},bindComponent:function(){var n=this;n.sortable=!1;n.callParent(arguments)},hasLockedHeader:function(){for(var t=this.views,i=t.length,n=0;n<i;n++)if(t[n].headerCt.lockedCt)return!0;return!1},addCheckbox:function(n,t){var r=this,i=r.injectCheckbox,u=n.headerCt;i!==!1&&(i=="first"?i=0:i=="last"&&(i=u.getColumnCount()),Ext.suspendLayouts(),n.getStore().buffered&&(r.showHeaderCheckbox=!1),u.add(i,r.getHeaderConfig()),Ext.resumeLayouts());t!==!0&&n.refresh()},onReconfigure:function(n,t,i){i&&this.addCheckbox(this.views[0])},toggleUiHeader:function(n){var r=this.views[0],u=r.headerCt,t=u.child("gridcolumn[isCheckerHd]"),i=this.checkerOnCls;t&&(n?t.addCls(i):t.removeCls(i))},onHeaderClick:function(n,t,i){if(t.isCheckerHd){i.stopEvent();var r=this,u=t.el.hasCls(Ext.baseCSSPrefix+"grid-hd-checker-on");r.preventFocus=!0;u?r.deselectAll():r.selectAll();delete r.preventFocus}},getHeaderConfig:function(){var n=this,t=n.showHeaderCheckbox!==!1;return{isCheckerHd:t,text:"&#160;",clickTargetName:"el",width:n.headerWidth,sortable:!1,draggable:!1,resizable:!1,hideable:!1,menuDisabled:!0,dataIndex:"",cls:t?Ext.baseCSSPrefix+"column-header-checkbox ":"",renderer:Ext.Function.bind(n.renderer,n),editRenderer:n.editRenderer||n.renderEmpty,locked:n.hasLockedHeader()}},renderEmpty:function(){return"&#160;"},refresh:function(){this.callParent(arguments);this.updateHeaderState()},renderer:function(n,t){var i=Ext.baseCSSPrefix;return t.tdCls=i+"grid-cell-special "+i+"grid-cell-row-checker",'<div class="'+i+'grid-row-checker">&#160;<\/div>'},processSelection:function(n,t,i,r,u){var f=this,o=u.getTarget(f.checkSelector),e;(!f.checkOnly||o)&&(o?(e=f.getSelectionMode(),e!=="SINGLE"&&f.setSelectionMode("SIMPLE"),f.selectWithEvent(t,u),f.setSelectionMode(e)):f.selectWithEvent(t,u))},onSelectChange:function(){this.callParent(arguments);this.suspendChange||this.updateHeaderState()},onStoreLoad:function(){this.callParent(arguments);this.updateHeaderState()},onStoreAdd:function(){this.callParent(arguments);this.updateHeaderState()},onStoreRemove:function(){this.callParent(arguments);this.updateHeaderState()},onStoreRefresh:function(){this.callParent(arguments);this.updateHeaderState()},maybeFireSelectionChange:function(n){n&&!this.suspendChange&&this.updateHeaderState();this.callParent(arguments)},resumeChanges:function(){this.callParent();this.suspendChange||this.updateHeaderState()},updateHeaderState:function(){var n=this,u=n.store,f=u.getCount(),e=n.views,i=!1,o=0,r,s,t;if(!u.buffered&&f>0){for(r=n.selected,i=!0,t=0,s=r.getCount();t<s;++t){if(!n.storeHasSelected(r.getAt(t)))break;++o}i=f===o}e&&e.length&&n.toggleUiHeader(i)}})