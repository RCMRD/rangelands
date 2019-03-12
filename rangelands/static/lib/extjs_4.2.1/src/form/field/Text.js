Ext.define("Ext.form.field.Text",{extend:"Ext.form.field.Base",alias:"widget.textfield",requires:["Ext.form.field.VTypes","Ext.layout.component.field.Text"],alternateClassName:["Ext.form.TextField","Ext.form.Text"],size:20,growMin:30,growMax:800,growAppend:"W",allowBlank:!0,validateBlank:!1,allowOnlyWhitespace:!0,minLength:0,maxLength:Number.MAX_VALUE,minLengthText:"The minimum length for this field is {0}",maxLengthText:"The maximum length for this field is {0}",blankText:"This field is required",regexText:"",emptyCls:Ext.baseCSSPrefix+"form-empty-field",requiredCls:Ext.baseCSSPrefix+"form-required-field",componentLayout:"textfield",valueContainsPlaceholder:!1,initComponent:function(){var n=this;n.allowOnlyWhitespace===!1&&(n.allowBlank=!1);n.callParent();n.addEvents("autosize","keydown","keyup","keypress");n.addStateEvents("change");n.setGrowSizePolicy()},setGrowSizePolicy:function(){this.grow&&(this.shrinkWrap|=1)},initEvents:function(){var n=this,t=n.inputEl;n.callParent();(n.selectOnFocus||n.emptyText)&&n.mon(t,"mousedown",n.onMouseDown,n);(n.maskRe||n.vtype&&n.disableKeyFilter!==!0&&(n.maskRe=Ext.form.field.VTypes[n.vtype+"Mask"]))&&n.mon(t,"keypress",n.filterKeys,n);n.enableKeyEvents&&n.mon(t,{scope:n,keyup:n.onKeyUp,keydown:n.onKeyDown,keypress:n.onKeyPress})},isEqual:function(n,t){return this.isEqualAsString(n,t)},onChange:function(){this.callParent(arguments);this.autoSize()},getSubTplData:function(){var n=this,t=n.getRawValue(),u=n.emptyText&&t.length<1,i=n.maxLength,r;return n.enforceMaxLength?i===Number.MAX_VALUE&&(i=undefined):i=undefined,u&&(Ext.supports.Placeholder?r=n.emptyText:(t=n.emptyText,n.valueContainsPlaceholder=!0)),Ext.apply(n.callParent(),{maxLength:i,readOnly:n.readOnly,placeholder:r,value:t,fieldCls:n.fieldCls+(u&&(r||t)?" "+n.emptyCls:"")+(n.allowBlank?"":" "+n.requiredCls)})},afterRender:function(){this.autoSize();this.callParent()},onMouseDown:function(){var n=this;n.hasFocus||n.mon(n.inputEl,"mouseup",Ext.emptyFn,n,{single:!0,preventDefault:!0})},processRawValue:function(n){var i=this,r=i.stripCharsRe,t;return r&&(t=n.replace(r,""),t!==n&&(i.setRawValue(t),n=t)),n},onDisable:function(){this.callParent();Ext.isIE&&(this.inputEl.dom.unselectable="on")},onEnable:function(){this.callParent();Ext.isIE&&(this.inputEl.dom.unselectable="")},onKeyDown:function(n){this.fireEvent("keydown",this,n)},onKeyUp:function(n){this.fireEvent("keyup",this,n)},onKeyPress:function(n){this.fireEvent("keypress",this,n)},reset:function(){this.callParent();this.applyEmptyText()},applyEmptyText:function(){var n=this,t=n.emptyText,i;n.rendered&&t&&(i=n.getRawValue().length<1&&!n.hasFocus,Ext.supports.Placeholder?n.inputEl.dom.placeholder=t:i&&(n.setRawValue(t),n.valueContainsPlaceholder=!0),i&&n.inputEl.addCls(n.emptyCls),n.autoSize())},afterFirstLayout:function(){if(this.callParent(),Ext.isIE&&this.disabled){var n=this.inputEl;n&&(n.dom.unselectable="on")}},beforeFocus:function(){var n=this,t=n.inputEl,r=n.emptyText,i;n.callParent(arguments);r&&!Ext.supports.Placeholder&&t.dom.value===n.emptyText&&n.valueContainsPlaceholder?(n.setRawValue(""),i=!0,t.removeCls(n.emptyCls),n.valueContainsPlaceholder=!1):Ext.supports.Placeholder&&n.inputEl.removeCls(n.emptyCls);(n.selectOnFocus||i)&&(Ext.isWebKit?(n.inputFocusTask||(n.inputFocusTask=new Ext.util.DelayedTask(n.focusInput,n)),n.inputFocusTask.delay(1)):t.dom.select())},focusInput:function(){var n=this.inputEl;n&&(n=n.dom,n&&n.select())},onFocus:function(){var n=this;n.callParent(arguments);n.emptyText&&n.autoSize()},postBlur:function(){this.callParent(arguments);this.applyEmptyText()},filterKeys:function(n){if(!n.ctrlKey||n.altKey){var t=n.getKey(),i=String.fromCharCode(n.getCharCode());(Ext.isGecko||Ext.isOpera)&&(n.isNavKeyPress()||t===n.BACKSPACE||t===n.DELETE&&n.button===-1)||(Ext.isGecko||Ext.isOpera||!n.isSpecialKey()||i)&&(this.maskRe.test(i)||n.stopEvent())}},getState:function(){return this.addPropertyToState(this.callParent(),"value")},applyState:function(n){this.callParent(arguments);n.hasOwnProperty("value")&&this.setValue(n.value)},getRawValue:function(){var n=this,t=n.callParent();return t===n.emptyText&&n.valueContainsPlaceholder&&(t=""),t},setValue:function(n){var t=this,i=t.inputEl;return i&&t.emptyText&&!Ext.isEmpty(n)&&(i.removeCls(t.emptyCls),t.valueContainsPlaceholder=!1),t.callParent(arguments),t.applyEmptyText(),t},getErrors:function(n){var t=this,i=t.callParent(arguments),f=t.validator,r=t.vtype,e=Ext.form.field.VTypes,o=t.regex,s=Ext.String.format,u,h,c;if(n=n||t.processRawValue(t.getRawValue()),Ext.isFunction(f)&&(u=f.call(t,n),u!==!0&&i.push(u)),h=t.allowOnlyWhitespace?n:Ext.String.trim(n),h.length<1||n===t.emptyText&&t.valueContainsPlaceholder){if(t.allowBlank||i.push(t.blankText),!t.validateBlank)return i;c=!0}return!c&&n.length<t.minLength&&i.push(s(t.minLengthText,t.minLength)),n.length>t.maxLength&&i.push(s(t.maxLengthText,t.maxLength)),r&&(e[r](n,t)||i.push(t.vtypeText||e[r+"Text"])),o&&!o.test(n)&&i.push(t.regexText||t.invalidText),i},selectText:function(n,t){var u=this,f=u.getRawValue(),e=!0,i=u.inputEl.dom,o,r;f.length>0&&(n=n===o?0:n,t=t===o?f.length:t,i.setSelectionRange?i.setSelectionRange(n,t):i.createTextRange&&(r=i.createTextRange(),r.moveStart("character",n),r.moveEnd("character",t-f.length),r.select()),e=Ext.isGecko||Ext.isOpera);e&&u.focus()},autoSize:function(){var n=this;n.grow&&n.rendered&&(n.autoSizing=!0,n.updateLayout())},afterComponentLayout:function(){var n=this,t;n.callParent(arguments);n.autoSizing&&(t=n.inputEl.getWidth(),t!==n.lastInputWidth&&(n.fireEvent("autosize",n,t),n.lastInputWidth=t,delete n.autoSizing))},onDestroy:function(){var n=this;n.callParent();n.inputFocusTask&&(n.inputFocusTask.cancel(),n.inputFocusTask=null)}})