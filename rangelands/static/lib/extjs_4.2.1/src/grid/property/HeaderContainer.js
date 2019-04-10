Ext.define("Ext.grid.property.HeaderContainer",{extend:"Ext.grid.header.Container",alternateClassName:"Ext.grid.PropertyColumnModel",nameWidth:115,nameText:"Name",valueText:"Value",dateFormat:"m/j/Y",trueText:"true",falseText:"false",nameColumnCls:Ext.baseCSSPrefix+"grid-property-name",nameColumnInnerCls:Ext.baseCSSPrefix+"grid-cell-inner-property-name",constructor:function(n,t){var i=this;i.grid=n;i.store=t;i.callParent([{isRootHeader:!0,enableColumnResize:Ext.isDefined(n.enableColumnResize)?n.enableColumnResize:i.enableColumnResize,enableColumnMove:Ext.isDefined(n.enableColumnMove)?n.enableColumnMove:i.enableColumnMove,items:[{header:i.nameText,width:n.nameColumnWidth||i.nameWidth,sortable:n.sortableColumns,dataIndex:n.nameField,renderer:Ext.Function.bind(i.renderProp,i),itemId:n.nameField,menuDisabled:!0,tdCls:i.nameColumnCls,innerCls:i.nameColumnInnerCls},{header:i.valueText,renderer:Ext.Function.bind(i.renderCell,i),getEditor:Ext.Function.bind(i.getCellEditor,i),sortable:n.sortableColumns,flex:1,fixed:!0,dataIndex:n.valueField,itemId:n.valueField,menuDisabled:!0}]}])},getCellEditor:function(n){return this.grid.getCellEditor(n,this)},renderProp:function(n){return this.getPropertyName(n)},renderCell:function(n,t,i){var r=this,f=r.grid,e=f.getConfig(i.get(f.nameField),"renderer"),u=n;return e?e.apply(r,arguments):(Ext.isDate(n)?u=r.renderDate(n):Ext.isBoolean(n)&&(u=r.renderBool(n)),Ext.util.Format.htmlEncode(u))},renderDate:Ext.util.Format.date,renderBool:function(n){return this[n?"trueText":"falseText"]},getPropertyName:function(n){return this.grid.getConfig(n,"displayName",n)}})