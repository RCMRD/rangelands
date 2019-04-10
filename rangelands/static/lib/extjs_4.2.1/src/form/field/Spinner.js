Ext.define("Ext.form.field.Spinner",{extend:"Ext.form.field.Trigger",alias:"widget.spinnerfield",alternateClassName:"Ext.form.Spinner",requires:["Ext.util.KeyNav"],trigger1Cls:Ext.baseCSSPrefix+"form-spinner-up",trigger2Cls:Ext.baseCSSPrefix+"form-spinner-down",spinUpEnabled:!0,spinDownEnabled:!0,keyNavEnabled:!0,mouseWheelEnabled:!0,repeatTriggerClick:!0,onSpinUp:Ext.emptyFn,onSpinDown:Ext.emptyFn,triggerTpl:'<td style="{triggerStyle}" class="{triggerCls}"><div class="'+Ext.baseCSSPrefix+"trigger-index-0 "+Ext.baseCSSPrefix+"form-trigger "+Ext.baseCSSPrefix+'form-spinner-up {spinnerUpCls} {childElCls}" role="button"><\/div><div class="'+Ext.baseCSSPrefix+"trigger-index-1 "+Ext.baseCSSPrefix+"form-trigger "+Ext.baseCSSPrefix+'form-spinner-down {spinnerDownCls} {childElCls}" role="button"><\/div><\/td><\/tr>',initComponent:function(){this.callParent();this.addEvents("spin","spinup","spindown")},onRender:function(){var n=this,t;n.callParent(arguments);t=n.triggerEl;n.spinUpEl=t.item(0);n.spinDownEl=t.item(1);n.triggerCell=n.spinUpEl.parent();n.keyNavEnabled&&(n.spinnerKeyNav=new Ext.util.KeyNav(n.inputEl,{scope:n,up:n.spinUp,down:n.spinDown}));n.mouseWheelEnabled&&n.mon(n.bodyEl,"mousewheel",n.onMouseWheel,n)},getSubTplMarkup:function(n){var t=this,i=n.childElCls,r=Ext.form.field.Base.prototype.getSubTplMarkup.apply(t,arguments);return'<table id="'+t.id+'-triggerWrap" class="'+Ext.baseCSSPrefix+"form-trigger-wrap"+i+'" cellpadding="0" cellspacing="0"><tbody><tr><td id="'+t.id+'-inputCell" class="'+Ext.baseCSSPrefix+"form-trigger-input-cell"+i+'">'+r+"<\/td>"+t.getTriggerMarkup()+"<\/tbody><\/table>"},getTriggerMarkup:function(){return this.getTpl("triggerTpl").apply(this.getTriggerData())},getTriggerData:function(){var n=this,t=n.readOnly||n.hideTrigger;return{triggerCls:Ext.baseCSSPrefix+"trigger-cell",triggerStyle:t?"display:none":"",spinnerUpCls:n.spinUpEnabled?"":n.trigger1Cls+"-disabled",spinnerDownCls:n.spinDownEnabled?"":n.trigger2Cls+"-disabled"}},getTriggerWidth:function(){var n=this,t=0;return!n.triggerWrap||n.hideTrigger||n.readOnly||(t=n.triggerWidth),t},onTrigger1Click:function(){this.spinUp()},onTrigger2Click:function(){this.spinDown()},onTriggerWrapMouseup:function(){this.inputEl.focus()},spinUp:function(){var n=this;n.spinUpEnabled&&!n.disabled&&(n.fireEvent("spin",n,"up"),n.fireEvent("spinup",n),n.onSpinUp())},spinDown:function(){var n=this;n.spinDownEnabled&&!n.disabled&&(n.fireEvent("spin",n,"down"),n.fireEvent("spindown",n),n.onSpinDown())},setSpinUpEnabled:function(n){var t=this,i=t.spinUpEnabled;t.spinUpEnabled=n;i!==n&&t.rendered&&t.spinUpEl[n?"removeCls":"addCls"](t.trigger1Cls+"-disabled")},setSpinDownEnabled:function(n){var t=this,i=t.spinDownEnabled;t.spinDownEnabled=n;i!==n&&t.rendered&&t.spinDownEl[n?"removeCls":"addCls"](t.trigger2Cls+"-disabled")},onMouseWheel:function(n){var t=this,i;t.hasFocus&&(i=n.getWheelDelta(),i>0?t.spinUp():i<0&&t.spinDown(),n.stopEvent())},onDestroy:function(){Ext.destroyMembers(this,"spinnerKeyNav","spinUpEl","spinDownEl");this.callParent()}})