Ext.define("Ext.form.CheckboxManager",{extend:"Ext.util.MixedCollection",singleton:!0,getByName:function(n,t){return this.filterBy(function(i){return i.name==n&&i.getFormId()==t})}})