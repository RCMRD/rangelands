Ext.define("Ext.resizer.SplitterTracker",{extend:"Ext.dd.DragTracker",requires:["Ext.util.Region"],enabled:!0,overlayCls:Ext.baseCSSPrefix+"resizable-overlay",createDragOverlay:function(){var n;n=this.overlay=Ext.getBody().createChild({cls:this.overlayCls,html:"&#160;"});n.unselectable();n.setSize(Ext.Element.getViewWidth(!0),Ext.Element.getViewHeight(!0));n.show()},getPrevCmp:function(){var n=this.getSplitter();return n.previousSibling(":not([hidden])")},getNextCmp:function(){var n=this.getSplitter();return n.nextSibling(":not([hidden])")},onBeforeStart:function(n){var t=this,i=t.getPrevCmp(),r=t.getNextCmp(),f=t.getSplitter().collapseEl,e=n.getTarget(),u;return!i||!r?!1:f&&e===t.getSplitter().collapseEl.dom?!1:r.collapsed||i.collapsed?!1:(t.prevBox=i.getEl().getBox(),t.nextBox=r.getEl().getBox(),t.constrainTo=u=t.calculateConstrainRegion(),!u)?!1:u},onStart:function(){var n=this.getSplitter();this.createDragOverlay();n.addCls(n.baseCls+"-active")},calculateConstrainRegion:function(){var n=this,o=n.getSplitter(),s=o.getWidth(),r=o.defaultSplitMin,l=o.orientation,t=n.prevBox,u=n.getPrevCmp(),i=n.nextBox,f=n.getNextCmp(),h,c,e;return l==="vertical"?(e={prevCmp:u,nextCmp:f,prevBox:t,nextBox:i,defaultMin:r,splitWidth:s},h=new Ext.util.Region(t.y,n.getVertPrevConstrainRight(e),t.bottom,n.getVertPrevConstrainLeft(e)),c=new Ext.util.Region(i.y,n.getVertNextConstrainRight(e),i.bottom,n.getVertNextConstrainLeft(e))):(h=new Ext.util.Region(t.y+(u.minHeight||r),t.right,(u.maxHeight?t.y+u.maxHeight:i.bottom-(f.minHeight||r))+s,t.x),c=new Ext.util.Region((f.maxHeight?i.bottom-f.maxHeight:t.y+(u.minHeight||r))-s,i.right,i.bottom-(f.minHeight||r),i.x)),h.intersect(c)},performResize:function(n,t){for(var r=this,c=r.getSplitter(),v=c.orientation,u=r.getPrevCmp(),f=r.getNextCmp(),l=c.ownerCt,a=l.query(">[flex]"),y=a.length,s=v==="vertical",h=0,e=s?"width":"height",p=0,o,i;h<y;h++)o=a[h],i=s?o.getWidth():o.getHeight(),p+=i,o.flex=i;t=s?t[0]:t[1];u&&(i=r.prevBox[e]+t,u.flex?u.flex=i:u[e]=i);f&&(i=r.nextBox[e]-t,f.flex?f.flex=i:f[e]=i);l.updateLayout()},endDrag:function(){var n=this;n.overlay&&(n.overlay.remove(),delete n.overlay);n.callParent(arguments)},onEnd:function(n){var t=this,i=t.getSplitter();i.removeCls(i.baseCls+"-active");t.performResize(n,t.getResizeOffset())},onDrag:function(){var n=this,t=n.getOffset("dragTarget"),i=n.getSplitter(),r=i.getEl(),u=i.orientation;u==="vertical"?r.setX(n.startRegion.left+t[0]):r.setY(n.startRegion.top+t[1])},getSplitter:function(){return this.splitter},getVertPrevConstrainRight:function(n){return(n.prevCmp.maxWidth?n.prevBox.x+n.prevCmp.maxWidth:n.nextBox.right-(n.nextCmp.minWidth||n.defaultMin))+n.splitWidth},getVertPrevConstrainLeft:function(n){return n.prevBox.x+(n.prevCmp.minWidth||n.defaultMin)},getVertNextConstrainRight:function(n){return n.nextBox.right-(n.nextCmp.minWidth||n.defaultMin)},getVertNextConstrainLeft:function(n){return(n.nextCmp.maxWidth?n.nextBox.right-n.nextCmp.maxWidth:n.prevBox.x+(n.prevBox.minWidth||n.defaultMin))-n.splitWidth},getResizeOffset:function(){return this.getOffset("dragTarget")}})