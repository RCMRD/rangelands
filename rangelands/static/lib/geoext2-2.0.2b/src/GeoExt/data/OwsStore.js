Ext.define("GeoExt.data.OwsStore",{extend:"Ext.data.Store",requires:["GeoExt.Version"],alternateClassName:["GeoExt.data.OWSStore"],config:{url:null,format:null,baseParams:null},constructor:function(n){n.format&&(this.format=n.format,delete n.format);this.callParent([n]);n.url&&this.setUrl(n.url);this.format&&this.setFormat(this.format);var t=this.getProxy();t&&(t.startParam=!1,t.limitParam=!1,t.pageParam=!1);n.baseParams&&this.setBaseParams(n.baseParams)},applyBaseParams:function(n){if(n&&Ext.isObject(n)){var t=this.getProxy();t&&(t.extraParams=n)}},applyUrl:function(n){if(n&&Ext.isString(n)){var t=this.getProxy();t&&(t.url=n)}},applyFormat:function(n){var t=this.getProxy(),i=t?t.getReader():null;i&&(i.format=n)}})