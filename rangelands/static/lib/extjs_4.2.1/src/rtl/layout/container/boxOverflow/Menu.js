Ext.define("Ext.rtl.layout.container.boxOverflow.Menu",{override:"Ext.layout.container.boxOverflow.Menu",getSuffixConfig:function(n){return n?this.callParent():this.getPrefixConfig(!0)},getPrefixConfig:function(n){return n?this.callParent():this.getSuffixConfig(!0)}})