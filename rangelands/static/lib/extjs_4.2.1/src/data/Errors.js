Ext.define("Ext.data.Errors",{extend:"Ext.util.MixedCollection",isValid:function(){return this.length===0},getByField:function(n){for(var r=[],i,t=0;t<this.length;t++)i=this.items[t],i.field==n&&r.push(i);return r}})