Ext.define("Ext.form.action.Load",{extend:"Ext.form.action.Action",requires:["Ext.data.Connection"],alternateClassName:"Ext.form.Action.Load",alias:"formaction.load",type:"load",run:function(){Ext.Ajax.request(Ext.apply(this.createCallback(),{method:this.getMethod(),url:this.getUrl(),headers:this.headers,params:this.getParams()}))},onSuccess:function(n){var t=this.processResponse(n),i=this.form;if(t===!0||!t.success||!t.data){this.failureType=Ext.form.action.Action.LOAD_FAILURE;i.afterAction(this,!1);return}i.clearInvalid();i.setValues(t.data);i.afterAction(this,!0)},handleResponse:function(n){var i=this.form.reader,t,r;return i?(t=i.read(n),r=t.records&&t.records[0]?t.records[0].data:null,{success:t.success,data:r}):Ext.decode(n.responseText)}})