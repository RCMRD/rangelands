Ext.define("Ext.view.DropZone",{extend:"Ext.dd.DropZone",indicatorHtml:'<div class="'+Ext.baseCSSPrefix+'grid-drop-indicator-left"><\/div><div class="'+Ext.baseCSSPrefix+'grid-drop-indicator-right"><\/div>',indicatorCls:Ext.baseCSSPrefix+"grid-drop-indicator",constructor:function(n){var t=this;Ext.apply(t,n);t.ddGroup||(t.ddGroup="view-dd-zone-"+t.view.id);t.callParent([t.view.el])},fireViewEvent:function(){var n=this,t;return n.lock(),t=n.view.fireEvent.apply(n.view,arguments),n.unlock(),t},getTargetFromEvent:function(n){var u=n.getTarget(this.view.getItemSelector()),f,i,r,t,e,o;if(!u)for(f=n.getPageY(),t=0,i=this.view.getNodes(),e=i.length;t<e;t++)if(r=i[t],o=Ext.fly(r).getBox(),f<=o.bottom)return r;return u},getIndicator:function(){var n=this;return n.indicator||(n.indicator=new Ext.Component({html:n.indicatorHtml,cls:n.indicatorCls,ownerCt:n.view,floating:!0,shadow:!1})),n.indicator},getPosition:function(n,t){var r=n.getXY()[1],i=Ext.fly(t).getRegion();return i.bottom-r>=(i.bottom-i.top)/2?"before":"after"},containsRecordAtOffset:function(n,t,i){if(!t)return!1;var r=this.view,e=r.indexOf(t),u=r.getNode(e+i,!0),f=u?r.getRecord(u):null;return f&&Ext.Array.contains(n,f)},positionIndicator:function(n,t,i){var r=this,e=r.view,u=r.getPosition(i,n),f=e.getRecord(n),o=t.records,s;Ext.Array.contains(o,f)||(u!="before"||r.containsRecordAtOffset(o,f,-1))&&(u!="after"||r.containsRecordAtOffset(o,f,1))?r.invalidateDrop():(r.valid=!0,(r.overRecord!=f||r.currentPosition!=u)&&(s=Ext.fly(n).getY()-e.el.getY()-1,u=="after"&&(s+=Ext.fly(n).getHeight()),r.getIndicator().setWidth(Ext.fly(e.el).getWidth()).showAt(0,s),r.overRecord=f,r.currentPosition=u))},invalidateDrop:function(){this.valid&&(this.valid=!1,this.getIndicator().hide())},onNodeOver:function(n,t,i,r){var u=this;return Ext.Array.contains(r.records,u.view.getRecord(n))||u.positionIndicator(n,r,i),u.valid?u.dropAllowed:u.dropNotAllowed},notifyOut:function(){var n=this;n.callParent(arguments);n.overRecord=n.currentPosition=null;n.valid=!1;n.indicator&&n.indicator.hide()},onContainerOver:function(n,t,i){var r=this,u=r.view,f=u.dataSource.getCount();return f?r.positionIndicator(u.all.last(),i,t):(r.overRecord=r.currentPosition=null,r.getIndicator().setWidth(Ext.fly(u.el).getWidth()).showAt(0,0),r.valid=!0),r.dropAllowed},onContainerDrop:function(n,t,i){return this.onNodeDrop(n,null,t,i)},onNodeDrop:function(n,t,i,r){var u=this,f=!1,e={wait:!1,processDrop:function(){u.invalidateDrop();u.handleNodeDrop(r,u.overRecord,u.currentPosition);f=!0;u.fireViewEvent("drop",n,r,u.overRecord,u.currentPosition)},cancelDrop:function(){u.invalidateDrop();f=!0}},o=!1;if(u.valid){if(o=u.fireViewEvent("beforedrop",n,r,u.overRecord,u.currentPosition,e),e.wait)return;o!==!1&&(f||e.processDrop())}return o},destroy:function(){Ext.destroy(this.indicator);delete this.indicator;this.callParent()}})