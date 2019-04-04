Ext.define("Ext.form.FieldContainer",{extend:"Ext.container.Container",mixins:{labelable:"Ext.form.Labelable",fieldAncestor:"Ext.form.FieldAncestor"},requires:"Ext.layout.component.field.FieldContainer",alias:"widget.fieldcontainer",componentLayout:"fieldcontainer",componentCls:Ext.baseCSSPrefix+"form-fieldcontainer",customOverflowEl:"containerEl",childEls:["containerEl"],combineLabels:!1,labelConnector:", ",combineErrors:!1,maskOnDisable:!1,invalidCls:"",fieldSubTpl:'<div id="{id}-containerEl" class="{containerElCls}">{%this.renderContainer(out,values)%}<\/div>',initComponent:function(){var n=this;n.initLabelable();n.initFieldAncestor();n.callParent();n.initMonitor()},getOverflowEl:function(){return this.containerEl},onAdd:function(n){var t=this;Ext.isGecko&&t.layout.type==="absolute"&&!t.hideLabel&&t.labelAlign!=="top"&&(n.x+=t.labelWidth+t.labelPad);t.callParent(arguments);t.combineLabels&&(n.oldHideLabel=n.hideLabel,n.hideLabel=!0);t.updateLabel()},onRemove:function(n,t){var i=this;i.callParent(arguments);t||(i.combineLabels&&(n.hideLabel=n.oldHideLabel),i.updateLabel())},initRenderTpl:function(){var n=this;return n.hasOwnProperty("renderTpl")||(n.renderTpl=n.getTpl("labelableRenderTpl")),n.callParent()},initRenderData:function(){var n=this,t=n.callParent();return t.containerElCls=n.containerElCls,Ext.applyIf(t,n.getLabelableRenderData())},getFieldLabel:function(){var n=this.fieldLabel||"";return!n&&this.combineLabels&&(n=Ext.Array.map(this.query("[isFieldLabelable]"),function(n){return n.getFieldLabel()}).join(this.labelConnector)),n},getSubTplData:function(){var n=this.initRenderData();return Ext.apply(n,this.subTplData),n},getSubTplMarkup:function(){var n=this,t=n.getTpl("fieldSubTpl");return t.renderContent||n.setupRenderTpl(t),t.apply(n.getSubTplData())},updateLabel:function(){var n=this,t=n.labelEl;t&&n.setFieldLabel(n.getFieldLabel())},onFieldErrorChange:function(){if(this.combineErrors){var n=this,i=n.getActiveError(),r=Ext.Array.filter(n.query("[isFormField]"),function(n){return n.hasActiveError()}),t=n.getCombinedErrors(r);t?n.setActiveErrors(t):n.unsetActiveError();i!==n.getActiveError()&&n.doComponentLayout()}},getCombinedErrors:function(n){for(var e=[],h=n.length,r,u,i,o,s,f,t=0;t<h;t++)for(r=n[t],u=r.getActiveErrors(),o=u.length,i=0;i<o;i++)s=u[i],f=r.getFieldLabel(),e.push((f?f+": ":"")+s);return e},getTargetEl:function(){return this.containerEl},applyTargetCls:function(n){var t=this.containerElCls;this.containerElCls=t?t+" "+n:n}})