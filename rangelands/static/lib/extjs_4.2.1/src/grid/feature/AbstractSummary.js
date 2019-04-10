Ext.define("Ext.grid.feature.AbstractSummary",{extend:"Ext.grid.feature.Feature",alias:"feature.abstractsummary",summaryRowCls:Ext.baseCSSPrefix+"grid-row-summary",summaryTableCls:Ext.plainTableCls+" "+Ext.baseCSSPrefix+"grid-table",summaryRowSelector:"."+Ext.baseCSSPrefix+"grid-row-summary",summaryRowTpl:{before:function(n,t){if(n.record.isSummary)return this.summaryFeature.outputSummaryRecord(n.record,n,t),!1},priority:1e3},showSummaryRow:!0,init:function(){var n=this;n.view.summaryFeature=n;n.rowTpl=n.view.self.prototype.rowTpl;n.view.addRowTpl(n.summaryRowTpl).summaryFeature=n},toggleSummaryRow:function(n){this.showSummaryRow=!!n},outputSummaryRecord:function(n,t,i){for(var f=t.view,h=f.rowValues,e=t.columns||f.headerCt.getVisibleGridColumns(),o=e.length,r,s={view:f,record:n,rowStyle:"",rowClasses:[this.summaryRowCls],itemClasses:[],recordIndex:-1,rowId:f.getRowId(n),columns:e},u=0;u<o;u++)r=e[u],r.savedRenderer=r.renderer,r.summaryRenderer?r.renderer=r.summaryRenderer:r.summaryType||(r.renderer=Ext.emptyFn),r.dataIndex||(r.dataIndex=r.id);for(f.rowValues=s,f.self.prototype.rowTpl.applyOut(s,i),f.rowValues=h,u=0;u<o;u++)r=e[u],r.renderer=r.savedRenderer,r.savedRenderer=null},getSummary:function(n,t,i,r){var u=r.records;if(t){if(Ext.isFunction(t))return n.getAggregate(t,null,u,[i]);switch(t){case"count":return u.length;case"min":return n.getMin(u,i);case"max":return n.getMax(u,i);case"sum":return n.getSum(u,i);case"average":return n.getAverage(u,i);default:return""}}},generateSummaryData:function(){var t=this,c=t.view.store,l=c.groups.items,n=c.proxy.reader,f=l.length,y=t.getGroupField(),a={},p=t.lockingPartner,i,r,e,v,o,s,u,h;if(t.remoteRoot&&n.rawData){for(s=!0,h={},v=n.root,n.root=t.remoteRoot,n.buildExtractors(!0),o=n.getRoot(n.rawData)||[],f=o.length,n.convertRecordData||n.buildExtractors(),i=0;i<f;++i)u={},n.convertRecordData(u,o[i]),h[u[y]]=u;n.root=v;n.buildExtractors(!0)}for(i=0;i<f;++i)r=l[i],s||r.isDirty()||!r.hasAggregate()?(e=s?t.populateRemoteRecord(r,h):t.populateRecord(r),p&&t.view.ownerCt!==t.view.ownerCt.ownerLockable.normalGrid||r.commit()):e=r.getAggregateRecord(),a[r.key]=e;return a},populateRemoteRecord:function(n,t){var i=n.getAggregateRecord(!0),u=t[n.key],r;i.beginEdit();for(r in u)u.hasOwnProperty(r)&&r!==i.idProperty&&i.set(r,u[r]);return i.endEdit(!0),i.commit(!0),i},populateRecord:function(n){var t=this,o=t.grid.ownerLockable?t.grid.ownerLockable.view:t.view,s=t.view.store,i=n.getAggregateRecord(),e=o.headerCt.getGridColumns(),h=e.length,r,u,f;for(i.beginEdit(),r=0;r<h;++r)u=e[r],f=u.dataIndex||u.id,i.set(f,t.getSummary(s,u.summaryType,f,n));return i.endEdit(!0),i.commit(),i}})