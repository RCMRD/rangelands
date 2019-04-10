Ext.define("Ext.dd.DD",{extend:"Ext.dd.DragDrop",requires:["Ext.dd.DragDropManager"],constructor:function(n,t,i){n&&this.init(n,t,i)},scroll:!0,autoOffset:function(n,t){var i=n-this.startPageX,r=t-this.startPageY;this.setDelta(i,r)},setDelta:function(n,t){this.deltaX=n;this.deltaY=t},setDragElPos:function(n,t){var i=this.getDragEl();this.alignElWithMouse(i,n,t)},alignElWithMouse:function(n,t,i){var r=this.getTargetCoord(t,i),f=n.dom?n:Ext.fly(n,"_dd"),e=f.getSize(),o=Ext.Element,u,s,h,c;return this.deltaSetXY?(u=this.cachedViewportSize,this.setLocalXY(f,Math.max(0,Math.min(r.x+this.deltaSetXY[0],u.width-e.width)),Math.max(0,Math.min(r.y+this.deltaSetXY[1],u.height-e.height)))):(u=this.cachedViewportSize={width:o.getDocumentWidth(),height:o.getDocumentHeight()},s=[Math.max(0,Math.min(r.x,u.width-e.width)),Math.max(0,Math.min(r.y,u.height-e.height))],f.setXY(s),h=this.getLocalX(f),c=f.getLocalY(),this.deltaSetXY=[h-r.x,c-r.y]),this.cachePosition(r.x,r.y),this.autoScroll(r.x,r.y,n.offsetHeight,n.offsetWidth),r},cachePosition:function(n,t){if(n)this.lastPageX=n,this.lastPageY=t;else{var i=Ext.Element.getXY(this.getEl());this.lastPageX=i[0];this.lastPageY=i[1]}},autoScroll:function(n,t,i,r){if(this.scroll){var s=Ext.Element.getViewHeight(),h=Ext.Element.getViewWidth(),u=this.DDMInstance.getScrollTop(),f=this.DDMInstance.getScrollLeft(),c=i+t,l=r+n,a=s+u-t-this.deltaY,v=h+f-n-this.deltaX,e=40,o=document.all?80:30;c>s&&a<e&&window.scrollTo(f,u+o);t<u&&u>0&&t-u<e&&window.scrollTo(f,u-o);l>h&&v<e&&window.scrollTo(f+o,u);n<f&&f>0&&n-f<e&&window.scrollTo(f-o,u)}},getTargetCoord:function(n,t){var i=n-this.deltaX,r=t-this.deltaY;return this.constrainX&&(i<this.minX&&(i=this.minX),i>this.maxX&&(i=this.maxX)),this.constrainY&&(r<this.minY&&(r=this.minY),r>this.maxY&&(r=this.maxY)),i=this.getTick(i,this.xTicks),r=this.getTick(r,this.yTicks),{x:i,y:r}},applyConfig:function(){this.callParent();this.scroll=this.config.scroll!==!1},b4MouseDown:function(n){this.autoOffset(n.getPageX(),n.getPageY())},b4Drag:function(n){this.setDragElPos(n.getPageX(),n.getPageY())},toString:function(){return"DD "+this.id},getLocalX:function(n){return n.getLocalX()},setLocalXY:function(n,t,i){n.setLocalXY(t,i)}})