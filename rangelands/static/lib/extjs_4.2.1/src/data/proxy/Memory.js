Ext.define("Ext.data.proxy.Memory",{extend:"Ext.data.proxy.Client",alias:"proxy.memory",alternateClassName:"Ext.data.MemoryProxy",constructor:function(n){this.callParent([n]);this.setReader(this.reader)},updateOperation:function(n,t,i){var r=0,u=n.getRecords(),f=u.length;for(r;r<f;r++)u[r].commit();n.setCompleted();n.setSuccessful();Ext.callback(t,i||this,[n])},create:function(){this.updateOperation.apply(this,arguments)},update:function(){this.updateOperation.apply(this,arguments)},destroy:function(){this.updateOperation.apply(this,arguments)},read:function(n,t,i){var f=this,r=n.resultSet=f.getReader().read(f.data),e=r.records,u=n.sorters,o=n.groupers,s=n.filters;n.setCompleted();r.success&&(s&&s.length&&(e=r.records=Ext.Array.filter(e,Ext.util.Filter.createFilterFn(s))),o&&o.length&&(u=u?u.concat(o):u),u&&u.length&&(r.records=Ext.Array.sort(e,Ext.util.Sortable.createComparator(u))),f.enablePaging&&n.start!==undefined&&n.limit!==undefined&&(n.start>=r.total?(r.success=!1,r.count=0,r.records=[]):(r.records=Ext.Array.slice(r.records,n.start,n.start+n.limit),r.count=r.records.length)));r.success?n.setSuccessful():f.fireEvent("exception",f,null,n);Ext.callback(t,i||f,[n])},clear:Ext.emptyFn})