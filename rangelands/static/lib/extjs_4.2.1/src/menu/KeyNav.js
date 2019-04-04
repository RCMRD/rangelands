Ext.define("Ext.menu.KeyNav",{extend:"Ext.util.KeyNav",requires:["Ext.FocusManager"],constructor:function(n){var t=this;t.menu=n.target;t.callParent([Ext.apply({down:t.down,enter:t.enter,esc:t.escape,left:t.left,right:t.right,space:t.enter,tab:t.tab,up:t.up},n)])},down:function(n){var t=this,i=t.menu.focusedItem;if(i&&n.getKey()==Ext.EventObject.DOWN&&t.isWhitelisted(i))return!0;t.focusNextItem(1)},enter:function(n){var t=this.menu,i=t.focusedItem;if(t.activeItem)t.onClick(n);else if(i&&i.isFormField)return!0},escape:function(){Ext.menu.Manager.hideAll()},focusNextItem:function(n){for(var i=this.menu,r=i.items,e=i.focusedItem,o=e?r.indexOf(e):-1,t=o+n,u=r.length,s=0,f;s<u&&t!==o;){if(t<0?t=u-1:t>=u&&(t=0),f=r.getAt(t),i.canActivateItem(f)){i.setActiveItem(f);break}t+=n;++s}},isWhitelisted:function(n){return Ext.FocusManager.isWhitelisted(n)},left:function(){var n=this.menu,t=n.focusedItem;if(t&&this.isWhitelisted(t))return!0;n.hide();n.parentMenu&&n.parentMenu.focus()},right:function(){var t=this.menu,i=t.focusedItem,r=t.activeItem,n;if(i&&this.isWhitelisted(i))return!0;r&&(n=t.activeItem.menu,n&&(r.expandMenu(0),n.setActiveItem(n.child(":focusable"))))},tab:function(n){var t=this;n.shiftKey?t.up(n):t.down(n)},up:function(n){var t=this,i=t.menu.focusedItem;if(i&&n.getKey()==Ext.EventObject.UP&&t.isWhitelisted(i))return!0;t.focusNextItem(-1)}})