Ext.define("Ext.data.DirectStore",{extend:"Ext.data.Store",alias:"store.direct",requires:["Ext.data.proxy.Direct"],constructor:function(n){if(n=Ext.apply({},n),!n.proxy){var t={type:"direct",reader:{type:"json"}};Ext.copyTo(t,n,"paramOrder,paramsAsHash,directFn,api,simpleSortMode");Ext.copyTo(t.reader,n,"totalProperty,root,idProperty");n.proxy=t}this.callParent([n])}})