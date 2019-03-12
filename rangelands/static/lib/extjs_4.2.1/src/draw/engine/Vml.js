Ext.define("Ext.draw.engine.Vml",{extend:"Ext.draw.Surface",requires:["Ext.draw.Draw","Ext.draw.Color","Ext.draw.Sprite","Ext.draw.Matrix","Ext.Element"],engine:"Vml",map:{M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},bitesRe:/([clmz]),?([^clmz]*)/gi,valRe:/-?[^,\s\-]+/g,fillUrlRe:/^url\(\s*['"]?([^\)]+?)['"]?\s*\)$/i,pathlike:/^(path|rect)$/,NonVmlPathRe:/[ahqstv]/ig,partialPathRe:/[clmz]/g,fontFamilyRe:/^['"]+|['"]+$/g,baseVmlCls:Ext.baseCSSPrefix+"vml-base",vmlGroupCls:Ext.baseCSSPrefix+"vml-group",spriteCls:Ext.baseCSSPrefix+"vml-sprite",measureSpanCls:Ext.baseCSSPrefix+"vml-measure-span",zoom:21600,coordsize:1e3,coordorigin:"0 0",zIndexShift:0,orderSpritesByZIndex:!1,path2vml:function(n){var t=this,a=t.NonVmlPathRe,h=t.map,v=t.valRe,y=t.zoom,p=t.bitesRe,c=Ext.Function.bind(Ext.draw.Draw.pathToAbsolute,Ext.draw.Draw),e,f,o,i,r,l,u,s;if(String(n).match(a))c=Ext.Function.bind(Ext.draw.Draw.path2curve,Ext.draw.Draw);else if(!String(n).match(t.partialPathRe))return String(n).replace(p,function(n,t,i){var r=[],f=t.toLowerCase()=="m",u=h[t];return i.replace(v,function(n){f&&r.length===2&&(u+=r+h[t=="m"?"l":"L"],r=[]);r.push(Math.round(n*y))}),u+r});for(f=c(n),e=[],r=0,l=f.length;r<l;r++){for(o=f[r],i=f[r][0].toLowerCase(),i=="z"&&(i="x"),u=1,s=o.length;u<s;u++)i+=Math.round(o[u]*t.zoom)+(u!=s-1?",":"");e.push(i)}return e.join(" ")},translateAttrs:{radius:"r",radiusX:"rx",radiusY:"ry",lineWidth:"stroke-width",fillOpacity:"fill-opacity",strokeOpacity:"stroke-opacity",strokeLinejoin:"stroke-linejoin"},minDefaults:{circle:{fill:"none",stroke:null,"stroke-width":null,opacity:null,"fill-opacity":null,"stroke-opacity":null},ellipse:{cx:0,cy:0,rx:0,ry:0,fill:"none",stroke:null,"stroke-width":null,opacity:null,"fill-opacity":null,"stroke-opacity":null},rect:{x:0,y:0,width:0,height:0,rx:0,ry:0,fill:"none",stroke:null,"stroke-width":null,opacity:null,"fill-opacity":null,"stroke-opacity":null},text:{x:0,y:0,"text-anchor":"start",font:'10px "Arial"',fill:"#000",stroke:null,"stroke-width":null,opacity:null,"fill-opacity":null,"stroke-opacity":null},path:{d:"M0,0",fill:"none",stroke:null,"stroke-width":null,opacity:null,"fill-opacity":null,"stroke-opacity":null},image:{x:0,y:0,width:0,height:0,preserveAspectRatio:"none",opacity:null}},onMouseEnter:function(n){this.fireEvent("mouseenter",n)},onMouseLeave:function(n){this.fireEvent("mouseleave",n)},processEvent:function(n,t){var r=t.getTarget(),u=this.surface,i;this.fireEvent(n,t);i=this.items.get(r.id);i&&i.fireEvent(n,i,t)},createSpriteElement:function(n){var t=this,h=n.attr,u=n.type,o=t.zoom,s=n.vml||(n.vml={}),c=Math.round,i=u==="image"?t.createNode("image"):t.createNode("shape"),f,r,e;return i.coordsize=o+" "+o,i.coordorigin=h.coordorigin||"0 0",Ext.get(i).addCls(t.spriteCls),u=="text"&&(s.path=f=t.createNode("path"),f.textpathok=!0,s.textpath=e=t.createNode("textpath"),e.on=!0,i.appendChild(e),i.appendChild(f)),i.id=n.id,n.el=Ext.get(i),n.el.setStyle("zIndex",-t.zIndexShift),t.el.appendChild(i),u!=="image"&&(r=t.createNode("skew"),r.on=!0,i.appendChild(r),n.skew=r),n.matrix=new Ext.draw.Matrix,n.bbox={plain:null,transform:null},this.applyAttrs(n),this.applyTransformations(n),n.fireEvent("render",n),n.el},getBBoxText:function(n){var t=n.vml;return{x:t.X+(t.bbx||0)-t.W/2,y:t.Y-t.H/2,width:t.W,height:t.H}},applyAttrs:function(n){var i=this,p=n.vml,u=n.group,y=n.attr,o=n.el,r=o.dom,s,h,f,v,t,e,c,l,a;if(u){for(h=[].concat(u),v=h.length,f=0;f<v;f++)u=h[f],i.getGroup(u).add(n);delete n.group}t=i.scrubAttrs(n)||{};n.zIndexDirty&&i.setZIndex(n);Ext.applyIf(t,i.minDefaults[n.type]);n.type=="image"&&(Ext.apply(n.attr,{x:t.x,y:t.y,width:t.width,height:t.height}),o.setStyle({width:t.width+"px",height:t.height+"px"}),r.src=t.src);r.href&&(r.href=t.href);r.title&&(r.title=t.title);r.target&&(r.target=t.target);r.cursor&&(r.cursor=t.cursor);n.dirtyHidden&&(t.hidden?i.hidePrim(n):i.showPrim(n),n.dirtyHidden=!1);n.dirtyPath&&(n.type=="circle"||n.type=="ellipse"?(e=t.x,c=t.y,l=t.rx||t.r||0,a=t.ry||t.r||0,r.path=Ext.String.format("ar{0},{1},{2},{3},{4},{1},{4},{1}",Math.round((e-l)*i.zoom),Math.round((c-a)*i.zoom),Math.round((e+l)*i.zoom),Math.round((c+a)*i.zoom),Math.round(e*i.zoom)),n.dirtyPath=!1):n.type!=="text"&&n.type!=="image"&&(n.attr.path=t.path=i.setPaths(n,t)||t.path,r.path=i.path2vml(t.path),n.dirtyPath=!1));"clip-rect"in t&&i.setClip(n,t);n.type=="text"&&i.setTextAttributes(n,t);(t.opacity||t["stroke-opacity"]||t.fill)&&i.setFill(n,t);(t.stroke||t["stroke-opacity"]||t.fill)&&i.setStroke(n,t);s=y.style;s&&o.setStyle(s);n.dirty=!1},setZIndex:function(n){var e=this,r=n.attr.zIndex,i=e.zIndexShift,f,o,u,t;if(r<i){for(f=e.items.items,o=f.length,t=0;t<o;t++)(r=f[t].attr.zIndex)&&r<i&&(i=r);for(e.zIndexShift=i,t=0;t<o;t++)u=f[t],u.el&&u.el.setStyle("zIndex",u.attr.zIndex-i),u.zIndexDirty=!1}else n.el&&(n.el.setStyle("zIndex",r-i),n.zIndexDirty=!1)},setPaths:function(n,t){var i=n.attr,r=n.attr["stroke-width"]||1;return(n.bbox.plain=null,n.bbox.transform=null,n.type=="circle")?(i.rx=i.ry=t.r,Ext.draw.Draw.ellipsePath(n)):n.type=="ellipse"?(i.rx=t.rx,i.ry=t.ry,Ext.draw.Draw.ellipsePath(n)):n.type=="rect"?(i.rx=i.ry=t.r,Ext.draw.Draw.rectPath(n)):n.type=="path"&&i.path?Ext.draw.Draw.pathToAbsolute(i.path):!1},setFill:function(n,t){var e=this,o=n.el.dom,i=o.fill,h=!1,u,r,s,f;i||(i=o.fill=e.createNode("fill"),h=!0);Ext.isArray(t.fill)&&(t.fill=t.fill[0]);t.fill=="none"?i.on=!1:(typeof t.opacity=="number"&&(i.opacity=t.opacity),typeof t["fill-opacity"]=="number"&&(i.opacity=t["fill-opacity"]),i.on=!0,typeof t.fill=="string"&&(r=t.fill.match(e.fillUrlRe),r?(r=r[1],r.charAt(0)=="#"&&(u=e.gradientsColl.getByKey(r.substring(1))),u?(s=t.rotation,f=-(u.angle+270+(s?s.degrees:0))%360,f===0&&(f=180),i.angle=f,i.type="gradient",i.method="sigma",i.colors?i.colors.value=u.colors:i.colors=u.colors):(i.src=r,i.type="tile")):(i.color=Ext.draw.Color.toHex(t.fill),i.src="",i.type="solid")));h&&o.appendChild(i)},setStroke:function(n,t){var f=this,o=n.el.dom,i=n.strokeEl,e=!1,r,u;i||(i=n.strokeEl=f.createNode("stroke"),e=!0);Ext.isArray(t.stroke)&&(t.stroke=t.stroke[0]);t.stroke&&t.stroke!="none"&&t.stroke!=0&&t["stroke-width"]!=0?(i.on=!0,t.stroke&&!t.stroke.match(f.fillUrlRe)&&(i.color=Ext.draw.Color.toHex(t.stroke)),i.dashstyle=t["stroke-dasharray"]?"dash":"solid",i.joinstyle=t["stroke-linejoin"],i.endcap=t["stroke-linecap"]||"round",i.miterlimit=t["stroke-miterlimit"]||8,r=parseFloat(t["stroke-width"]||1)*.75,u=t["stroke-opacity"]||1,Ext.isNumber(r)&&r<1?(i.weight=1,i.opacity=u*r):(i.weight=r,i.opacity=u)):i.on=!1;e&&o.appendChild(i)},setClip:function(n,t){var u=this,f=n.el,r=n.clipEl,i=String(t["clip-rect"]).split(u.separatorRe);r||(r=n.clipEl=u.el.insertFirst(Ext.getDoc().dom.createElement("div")),r.addCls(Ext.baseCSSPrefix+"vml-sprite"));i.length==4?(i[2]=+i[2]+ +i[0],i[3]=+i[3]+ +i[1],r.setStyle("clip",Ext.String.format("rect({1}px {2}px {3}px {0}px)",i[0],i[1],i[2],i[3])),r.setSize(u.el.width,u.el.height)):r.setStyle("clip","")},setTextAttributes:function(n,t){var r=this,i=n.vml,u=i.textpath.style,e=r.span.style,o=r.zoom,c=Math.round,h={fontSize:"font-size",fontWeight:"font-weight",fontStyle:"font-style"},f,s;if(n.dirtyFont){t.font&&(u.font=e.font=t.font);t["font-family"]&&(u.fontFamily='"'+t["font-family"].split(",")[0].replace(r.fontFamilyRe,"")+'"',e.fontFamily=t["font-family"]);for(f in h)s=t[h[f]],s&&(u[f]=e[f]=s);r.setText(n,t.text);i.textpath.string&&(r.span.innerHTML=String(i.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br/>"));i.W=r.span.offsetWidth;i.H=r.span.offsetHeight+2;t["text-anchor"]=="middle"?u["v-text-align"]="center":t["text-anchor"]=="end"?(u["v-text-align"]="right",i.bbx=-Math.round(i.W/2)):(u["v-text-align"]="left",i.bbx=Math.round(i.W/2))}i.X=t.x;i.Y=t.y;i.path.v=Ext.String.format("m{0},{1}l{2},{1}",Math.round(i.X*o),Math.round(i.Y*o),Math.round(i.X*o)+1);n.bbox.plain=null;n.bbox.transform=null;n.dirtyFont=!1},setText:function(n,t){n.vml.textpath.string=Ext.htmlDecode(t)},hide:function(){this.el.hide()},show:function(){this.el.show()},hidePrim:function(n){n.el.addCls(Ext.baseCSSPrefix+"hide-visibility")},showPrim:function(n){n.el.removeCls(Ext.baseCSSPrefix+"hide-visibility")},setSize:function(n,t){var i=this;n=n||i.width;t=t||i.height;i.width=n;i.height=t;i.el&&(n!=undefined&&i.el.setWidth(n),t!=undefined&&i.el.setHeight(t));i.callParent(arguments)},applyViewBox:function(){var n=this,u=n.viewBox,f=n.width,e=n.height,i,r,t;if(n.callParent(),u&&(f||e))for(i=n.items.items,r=i.length,t=0;t<r;t++)n.applyTransformations(i[t])},onAdd:function(n){this.callParent(arguments);this.el&&this.renderItem(n)},onRemove:function(n){n.el&&(n.el.remove(),delete n.el);this.callParent(arguments)},render:function(n){var t=this,i=Ext.getDoc().dom,r;if(!t.createNode)try{i.namespaces.rvml||i.namespaces.add("rvml","urn:schemas-microsoft-com:vml");t.createNode=function(n){return i.createElement("<rvml:"+n+' class="rvml">')}}catch(u){t.createNode=function(n){return i.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}if(!t.el){r=i.createElement("div");t.el=Ext.get(r);t.el.addCls(t.baseVmlCls);t.span=i.createElement("span");Ext.get(t.span).addCls(t.measureSpanCls);r.appendChild(t.span);t.el.setSize(t.width||0,t.height||0);n.appendChild(r);t.el.on({scope:t,mouseup:t.onMouseUp,mousedown:t.onMouseDown,mouseover:t.onMouseOver,mouseout:t.onMouseOut,mousemove:t.onMouseMove,mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,click:t.onClick,dblclick:t.onDblClick})}t.renderAll()},renderAll:function(){this.items.each(this.renderItem,this)},redraw:function(n){n.dirty=!0;this.renderItem(n)},renderItem:function(n){this.el&&(n.el||this.createSpriteElement(n),n.dirty&&(this.applyAttrs(n),n.dirtyTransform&&this.applyTransformations(n)))},rotationCompensation:function(n,t,i){var r=new Ext.draw.Matrix;return r.rotate(-n,.5,.5),{x:r.x(t,i),y:r.y(t,i)}},transform:function(n,t){for(var h=this,i=h.getBBox(n,!0),d=i.x+i.width*.5,g=i.y+i.height*.5,r=new Ext.draw.Matrix,a=n.transformations,v=a.length,c=0,y=0,p=1,w=1,b=n.el,k=b.dom,l=k.style,nt=h.zoom,o=n.skew,e=h.viewBoxShift,u,s,f;c<v;c++)u=a[c],s=u.type,s=="translate"?r.translate(u.x,u.y):s=="rotate"?(r.rotate(u.degrees,u.x,u.y),y+=u.degrees):s=="scale"&&(r.scale(u.x,u.y,u.centerX,u.centerY),p*=u.x,w*=u.y);(n.matrix=r.clone(),t)||(e&&r.prepend(e.scale,0,0,e.scale,e.dx*e.scale,e.dy*e.scale),n.type!="image"&&o?(o.origin="0,0",o.matrix=r.toString(),f=r.offset(),f[0]>32767?f[0]=32767:f[0]<-32768&&(f[0]=-32768),f[1]>32767?f[1]=32767:f[1]<-32768&&(f[1]=-32768),o.offset=f):(l.filter=r.toFilter(),l.left=Math.min(r.x(i.x,i.y),r.x(i.x+i.width,i.y),r.x(i.x,i.y+i.height),r.x(i.x+i.width,i.y+i.height))+"px",l.top=Math.min(r.y(i.x,i.y),r.y(i.x+i.width,i.y),r.y(i.x,i.y+i.height),r.y(i.x+i.width,i.y+i.height))+"px"))},createItem:function(n){return Ext.create("Ext.draw.Sprite",n)},getRegion:function(){return this.el.getRegion()},addCls:function(n,t){n&&n.el&&n.el.addCls(t)},removeCls:function(n,t){n&&n.el&&n.el.removeCls(t)},addGradient:function(n){var h=this.gradientsColl||(this.gradientsColl=Ext.create("Ext.util.MixedCollection")),u=[],i=Ext.create("Ext.util.MixedCollection"),r,f,e,o,s,t;for(i.addAll(n.stops),i.sortByKey("ASC",function(n,t){return n=parseInt(n,10),t=parseInt(t,10),n>t?1:n<t?-1:0}),r=i.keys,f=i.items,e=r.length,t=0;t<e;t++)o=r[t],s=f[t],u.push(o+"% "+s.color);h.add(n.id,{colors:u.join(","),angle:n.angle})},destroy:function(){var n=this;n.callParent(arguments);n.el&&n.el.remove();delete n.el}})