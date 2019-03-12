Ext.define("Ext.draw.Draw",{singleton:!0,requires:["Ext.draw.Color"],pathToStringRE:/,?([achlmqrstvxz]),?/gi,pathCommandRE:/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,pathValuesRE:/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,stopsRE:/^(\d+%?)$/,radian:Math.PI/180,availableAnimAttrs:{along:"along",blur:null,"clip-rect":"csv",cx:null,cy:null,fill:"color","fill-opacity":null,"font-size":null,height:null,opacity:null,path:"path",r:null,rotation:"csv",rx:null,ry:null,scale:"csv",stroke:"color","stroke-opacity":null,"stroke-width":null,translation:"csv",width:null,x:null,y:null},is:function(n,t){return t=String(t).toLowerCase(),t=="object"&&n===Object(n)||t=="undefined"&&typeof n==t||t=="null"&&n===null||t=="array"&&Array.isArray&&Array.isArray(n)||Object.prototype.toString.call(n).toLowerCase().slice(8,-1)==t},ellipsePath:function(n){var t=n.attr;return Ext.String.format("M{0},{1}A{2},{3},0,1,1,{0},{4}A{2},{3},0,1,1,{0},{1}z",t.x,t.y-t.ry,t.rx,t.ry,t.y+t.ry)},rectPath:function(n){var t=n.attr;return t.radius?Ext.String.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",t.x+t.radius,t.y,t.width-t.radius*2,t.radius,-t.radius,t.height-t.radius*2,t.radius*2-t.width,t.radius*2-t.height):Ext.String.format("M{0},{1}L{2},{1},{2},{3},{0},{3}z",t.x,t.y,t.width+t.x,t.height+t.y)},path2string:function(){return this.join(",").replace(Ext.draw.Draw.pathToStringRE,"$1")},pathToString:function(n){return n.join(",").replace(Ext.draw.Draw.pathToStringRE,"$1")},parsePathString:function(n){if(!n)return null;var r={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},t=[],i=this;return i.is(n,"array")&&i.is(n[0],"array")&&(t=i.pathClone(n)),t.length||String(n).replace(i.pathCommandRE,function(n,u,f){var e=[],o=u.toLowerCase();for(f.replace(i.pathValuesRE,function(n,t){t&&e.push(+t)}),o=="m"&&e.length>2&&(t.push([u].concat(Ext.Array.splice(e,0,2))),o="l",u=u=="m"?"l":"L");e.length>=r[o];)if(t.push([u].concat(Ext.Array.splice(e,0,r[o]))),!r[o])break}),t.toString=i.path2string,t},mapPath:function(n,t){if(!t)return n;var f,e,u,o,i,s,r;for(n=this.path2curve(n),u=0,o=n.length;u<o;u++)for(r=n[u],i=1,s=r.length;i<s-1;i+=2)f=t.x(r[i],r[i+1]),e=t.y(r[i],r[i+1]),r[i]=f,r[i+1]=e;return n},pathClone:function(n){var r=[],i,u,t,f;for(this.is(n,"array")&&this.is(n&&n[0],"array")||(n=this.parsePathString(n)),t=0,f=n.length;t<f;t++)for(r[t]=[],i=0,u=n[t].length;i<u;i++)r[t][i]=n[t][i];return r.toString=this.path2string,r},pathToAbsolute:function(n){this.is(n,"array")&&this.is(n&&n[0],"array")||(n=this.parsePathString(n));var s=[],u=0,f=0,h=0,c=0,o=0,l=n.length,i,t,r,e;for(l&&n[0][0]=="M"&&(u=+n[0][1],f=+n[0][2],h=u,c=f,o++,s[0]=["M",u,f]);o<l;o++){if(i=s[o]=[],t=n[o],t[0]!=t[0].toUpperCase()){i[0]=t[0].toUpperCase();switch(i[0]){case"A":i[1]=t[1];i[2]=t[2];i[3]=t[3];i[4]=t[4];i[5]=t[5];i[6]=+(t[6]+u);i[7]=+(t[7]+f);break;case"V":i[1]=+t[1]+f;break;case"H":i[1]=+t[1]+u;break;case"M":h=+t[1]+u;c=+t[2]+f;default:for(r=1,e=t.length;r<e;r++)i[r]=+t[r]+(r%2?u:f)}}else for(r=0,e=t.length;r<e;r++)s[o][r]=t[r];switch(i[0]){case"Z":u=h;f=c;break;case"H":u=i[1];break;case"V":f=i[1];break;case"M":t=s[o];e=t.length;h=t[e-2];c=t[e-1];default:t=s[o];e=t.length;u=t[e-2];f=t[e-1]}}return s.toString=this.path2string,s},pathToRelative:function(n){this.is(n,"array")&&this.is(n&&n[0],"array")||(n=this.parsePathString(n));var u=[],e=0,f=0,c=0,l=0,a=0,i,t,r,o,s,h,v,y,p;for(n[0][0]=="M"&&(e=n[0][1],f=n[0][2],c=e,l=f,a++,u.push(["M",e,f])),r=a,v=n.length;r<v;r++){if(i=u[r]=[],t=n[r],t[0]!=t[0].toLowerCase()){i[0]=t[0].toLowerCase();switch(i[0]){case"a":i[1]=t[1];i[2]=t[2];i[3]=t[3];i[4]=t[4];i[5]=t[5];i[6]=+(t[6]-e).toFixed(3);i[7]=+(t[7]-f).toFixed(3);break;case"v":i[1]=+(t[1]-f).toFixed(3);break;case"m":c=t[1];l=t[2];default:for(o=1,y=t.length;o<y;o++)i[o]=+(t[o]-(o%2?e:f)).toFixed(3)}}else for(i=u[r]=[],t[0]=="m"&&(c=t[1]+e,l=t[2]+f),s=0,p=t.length;s<p;s++)u[r][s]=t[s];h=u[r].length;switch(u[r][0]){case"z":e=c;f=l;break;case"h":e+=+u[r][h-1];break;case"v":f+=+u[r][h-1];break;default:e+=+u[r][h-2];f+=+u[r][h-1]}}return u.toString=this.path2string,u},path2curve:function(n){for(var o=this,i=o.pathToAbsolute(n),s=i.length,r={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},u,f,e,t=0;t<s;t++){if(i[t]=o.command2curve(i[t],r),i[t].length>7){for(i[t].shift(),e=i[t];e.length;)Ext.Array.splice(i,t++,0,["C"].concat(Ext.Array.splice(e,0,6)));Ext.Array.erase(i,t,1);s=i.length;t--}u=i[t];f=u.length;r.x=u[f-2];r.y=u[f-1];r.bx=parseFloat(u[f-4])||r.x;r.by=parseFloat(u[f-3])||r.y}return i},interpolatePaths:function(n,t){for(var l=this,r=l.pathToAbsolute(n),u=l.pathToAbsolute(t),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},e={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},v=function(n,t){if(n[t].length>7){n[t].shift();for(var i=n[t];i.length;)Ext.Array.splice(n,t++,0,["C"].concat(Ext.Array.splice(i,0,6)));Ext.Array.erase(n,t,1);a=Math.max(r.length,u.length||0)}},y=function(n,t,i,f,e){n&&t&&n[e][0]=="M"&&t[e][0]!="M"&&(Ext.Array.splice(t,e,0,["M",f.x,f.y]),i.bx=0,i.by=0,i.x=n[e][1],i.y=n[e][2],a=Math.max(r.length,u.length||0))},o,s,h,c,i=0,a=Math.max(r.length,u.length||0);i<a;i++)r[i]=l.command2curve(r[i],f),v(r,i),u[i]=l.command2curve(u[i],e),v(u,i),y(r,u,f,e,i),y(u,r,e,f,i),o=r[i],s=u[i],h=o.length,c=s.length,f.x=o[h-2],f.y=o[h-1],f.bx=parseFloat(o[h-4])||f.x,f.by=parseFloat(o[h-3])||f.y,e.bx=parseFloat(s[c-4])||e.x,e.by=parseFloat(s[c-3])||e.y,e.x=s[c-2],e.y=s[c-1];return[r,u]},command2curve:function(n,t){var i=this;if(!n)return["C",t.x,t.y,t.x,t.y,t.x,t.y];n[0]!="T"&&n[0]!="Q"&&(t.qx=t.qy=null);switch(n[0]){case"M":t.X=n[1];t.Y=n[2];break;case"A":n=["C"].concat(i.arc2curve.apply(i,[t.x,t.y].concat(n.slice(1))));break;case"S":n=["C",t.x+(t.x-(t.bx||t.x)),t.y+(t.y-(t.by||t.y))].concat(n.slice(1));break;case"T":t.qx=t.x+(t.x-(t.qx||t.x));t.qy=t.y+(t.y-(t.qy||t.y));n=["C"].concat(i.quadratic2curve(t.x,t.y,t.qx,t.qy,n[1],n[2]));break;case"Q":t.qx=n[1];t.qy=n[2];n=["C"].concat(i.quadratic2curve(t.x,t.y,n[1],n[2],n[3],n[4]));break;case"L":n=["C"].concat(t.x,t.y,n[1],n[2],n[1],n[2]);break;case"H":n=["C"].concat(t.x,t.y,n[1],t.y,n[1],t.y);break;case"V":n=["C"].concat(t.x,t.y,t.x,n[1],t.x,n[1]);break;case"Z":n=["C"].concat(t.x,t.y,t.X,t.Y,t.X,t.Y)}return n},quadratic2curve:function(n,t,i,r,u,f){var e=1/3,o=2/3;return[e*n+o*i,e*t+o*r,e*u+o*i,e*f+o*r,u,f]},rotate:function(n,t,i){var r=Math.cos(i),u=Math.sin(i),f=n*r-t*u,e=n*u+t*r;return{x:f,y:e}},arc2curve:function(n,t,i,r,u,f,e,o,s,h){var k=this,w=Math.PI,si=k.radian,bt=w*120/180,rt=si*(+u||0),a=[],d=Math,ot=d.cos,st=d.sin,kt=d.sqrt,dt=d.abs,gt=d.asin,g,y,p,nt,ut,ft,ht,tt,it,l,c,et,ni,ti,ii,ri,ct,lt,at,vt,b,yt,pt,wt,v,ui,fi,ei,oi;if(h?(l=h[0],c=h[1],tt=h[2],it=h[3]):(g=k.rotate(n,t,-rt),n=g.x,t=g.y,g=k.rotate(o,s,-rt),o=g.x,s=g.y,y=(n-o)/2,p=(t-s)/2,nt=y*y/(i*i)+p*p/(r*r),nt>1&&(nt=kt(nt),i=nt*i,r=nt*r),ut=i*i,ft=r*r,ht=(f==e?-1:1)*kt(dt((ut*ft-ut*p*p-ft*y*y)/(ut*p*p+ft*y*y))),tt=ht*i*p/r+(n+o)/2,it=ht*-r*y/i+(t+s)/2,l=gt(((t-it)/r).toFixed(7)),c=gt(((s-it)/r).toFixed(7)),l=n<tt?w-l:l,c=o<tt?w-c:c,l<0&&(l=w*2+l),c<0&&(c=w*2+c),e&&l>c&&(l=l-w*2),!e&&c>l&&(c=c-w*2)),et=c-l,dt(et)>bt&&(fi=c,ei=o,oi=s,c=l+bt*(e&&c>l?1:-1),o=tt+i*ot(c),s=it+r*st(c),a=k.arc2curve(o,s,i,r,u,0,e,ei,oi,[c,fi,tt,it])),et=c-l,ni=ot(l),ti=st(l),ii=ot(c),ri=st(c),ct=d.tan(et/4),lt=4/3*i*ct,at=4/3*r*ct,vt=[n,t],b=[n+lt*ti,t-at*ni],yt=[o+lt*ri,s-at*ii],pt=[o,s],b[0]=2*vt[0]-b[0],b[1]=2*vt[1]-b[1],h)return[b,yt,pt].concat(a);for(a=[b,yt,pt].concat(a).join().split(","),wt=[],ui=a.length,v=0;v<ui;v++)wt[v]=v%2?k.rotate(a[v-1],a[v],rt).y:k.rotate(a[v],a[v+1],rt).x;return wt},rotateAndTranslatePath:function(n){var o=n.rotation.degrees,h=n.rotation.x,c=n.rotation.y,u=n.translation.x,f=n.translation.y,s,e,t,r,i,l=[];if(!o&&!u&&!f)return this.pathToAbsolute(n.attr.path);for(u=u||0,f=f||0,s=this.pathToAbsolute(n.attr.path),e=s.length;e--;)if(t=l[e]=s[e].slice(),t[0]=="A")r=this.rotatePoint(t[6],t[7],o,h,c),t[6]=r.x+u,t[7]=r.y+f;else for(i=1;t[i+1]!=null;)r=this.rotatePoint(t[i],t[i+1],o,h,c),t[i]=r.x+u,t[i+1]=r.y+f,i+=2;return l},rotatePoint:function(n,t,i,r,u){if(!i)return{x:n,y:t};r=r||0;u=u||0;n=n-r;t=t-u;i=i*this.radian;var f=Math.cos(i),e=Math.sin(i);return{x:n*f-t*e+r,y:n*e+t*f+u}},pathDimensions:function(n){if(!n||!(n+""))return{x:0,y:0,width:0,height:0};n=this.path2curve(n);for(var f=0,e=0,i=[],r=[],o=0,a=n.length,t,s,h,c,l,u;o<a;o++)t=n[o],t[0]=="M"?(f=t[1],e=t[2],i.push(f),r.push(e)):(u=this.curveDim(f,e,t[1],t[2],t[3],t[4],t[5],t[6]),i=i.concat(u.min.x,u.max.x),r=r.concat(u.min.y,u.max.y),f=t[5],e=t[6]);return s=Math.min.apply(0,i),h=Math.min.apply(0,r),c=Math.max.apply(0,i),l=Math.max.apply(0,r),{x:Math.round(s),y:Math.round(h),path:n,width:Math.round(c-s),height:Math.round(l-h)}},intersectInside:function(n,t,i){return(i[0]-t[0])*(n[1]-t[1])>(i[1]-t[1])*(n[0]-t[0])},intersectIntersection:function(n,t,i,r){var u=[],f=i[0]-r[0],e=i[1]-r[1],o=n[0]-t[0],s=n[1]-t[1],h=i[0]*r[1]-i[1]*r[0],c=n[0]*t[1]-n[1]*t[0],l=1/(f*s-e*o);return u[0]=(h*o-c*f)*l,u[1]=(h*s-c*e)*l,u},intersect:function(n,t){for(var o=this,c=0,l=t.length,r=t[l-1],u=n,i,f,e,a,s,h;c<l;++c){for(i=t[c],s=u,u=[],f=s[s.length-1],h=0,a=s.length;h<a;h++)e=s[h],o.intersectInside(e,r,i)?(o.intersectInside(f,r,i)||u.push(o.intersectIntersection(f,e,r,i)),u.push(e)):o.intersectInside(f,r,i)&&u.push(o.intersectIntersection(f,e,r,i)),f=e;r=i}return u},bezier:function(n,t,i,r,u){if(u===0)return n;if(u===1)return r;var f=1-u,o=f*f*f,e=u/f;return o*(n+e*(3*t+e*(3*i+r*e)))},bezierDim:function(n,t,i,r){var f=[],u,s,e,y,h,c,v,l,a,o;for(n+3*i==r+3*t?(u=n-t,u/=2*(n-t-t+i),u<1&&u>0&&f.push(u)):(s=n-3*t+3*i-r,e=2*(n-t-t+i),y=n-t,h=e*e-4*s*y,c=s+s,h===0?(u=e/c,u<1&&u>0&&f.push(u)):h>0&&(v=Math.sqrt(h),u=(v+e)/c,u<1&&u>0&&f.push(u),u=(e-v)/c,u<1&&u>0&&f.push(u))),l=Math.min(n,r),a=Math.max(n,r),o=0;o<f.length;o++)l=Math.min(l,this.bezier(n,t,i,r,f[o])),a=Math.max(a,this.bezier(n,t,i,r,f[o]));return[l,a]},curveDim:function(n,t,i,r,u,f,e,o){var s=this.bezierDim(n,i,u,e),h=this.bezierDim(t,r,f,o);return{min:{x:s[0],y:h[0]},max:{x:s[1],y:h[1]}}},getAnchors:function(n,t,i,r,u,f,e){e=e||4;var l=Math,a=l.PI,b=a/2,y=l.abs,g=l.sin,nt=l.cos,tt=l.atan,k,d,o,s,p,h,w,c,v;return k=(i-n)/e,d=(u-i)/e,r>=t&&r>=f||r<=t&&r<=f?o=s=b:(o=tt((i-n)/y(r-t)),t<r&&(o=a-o),s=tt((u-i)/y(r-f)),f<r&&(s=a-s)),v=b-(o+s)%(a*2)/2,v>b&&(v-=a),o+=v,s+=v,p=i-k*g(o),h=r+k*nt(o),w=i+d*g(s),c=r+d*nt(s),(r>t&&h<t||r<t&&h>t)&&(p+=y(t-h)*(p-i)/(h-r),h=t),(r>f&&c<f||r<f&&c>f)&&(w-=y(f-c)*(w-i)/(c-r),c=f),{x1:p,y1:h,x2:w,y2:c}},smooth:function(n,t){for(var e=this.path2curve(n),r=[e[0]],y=e[0][1],p=e[0][2],w,o,s=1,d=e.length,h=1,l=y,a=p,i,u,c,v,f,b,k;s<d;s++){if(i=e[s],u=i.length,c=e[s-1],v=c.length,f=e[s+1],b=f&&f.length,i[0]=="M"){for(l=i[1],a=i[2],w=s+1;e[w][0]!="C";)w++;r.push(["M",l,a]);h=r.length;y=l;p=a;continue}i[u-2]!=l||i[u-1]!=a||f&&f[0]!="M"?o=f&&f[0]!="M"?this.getAnchors(c[v-2],c[v-1],i[u-2],i[u-1],f[b-2],f[b-1],t):{x1:i[u-2],y1:i[u-1]}:(k=r[h].length,o=this.getAnchors(c[v-2],c[v-1],l,a,r[h][k-2],r[h][k-1],t),r[h][1]=o.x2,r[h][2]=o.y2);r.push(["C",y,p,o.x1,o.y1,i[u-2],i[u-1]]);y=o.x2;p=o.y2}return r},findDotAtSegment:function(n,t,i,r,u,f,e,o,s){var h=1-s;return{x:Math.pow(h,3)*n+Math.pow(h,2)*3*s*i+h*3*s*s*u+Math.pow(s,3)*e,y:Math.pow(h,3)*t+Math.pow(h,2)*3*s*r+h*3*s*s*f+Math.pow(s,3)*o}},snapEnds:function(n,t,i,r){if(Ext.isDate(n))return this.snapEndsByDate(n,t,i);var f=(t-n)/i,e=Math.floor(Math.log(f)/Math.LN10)+1,o=Math.pow(10,e),u,s,y=Math.round(f%o*Math.pow(10,2-e)),a=[[0,15],[10,1],[20,4],[25,2],[50,9],[100,15]],h=0,l,v,c,p,w=1e9,b=a.length;if(s=Math.floor(n/o)*o,n==s&&s>0&&(s=Math.floor((n-o/10)/o)*o),r){for(c=0;c<b;c++)l=a[c][0],v=l-y<0?1e6:(l-y)/a[c][1],v<w&&(p=l,w=v);if(f=Math.floor(f*Math.pow(10,-e))*Math.pow(10,e)+p*Math.pow(10,e-2),n<0&&t>=0){for(u=0;u>n;)u-=f,h++;for(n=+u.toFixed(10),u=0;u<t;)u+=f,h++;t=+u.toFixed(10)}else for(u=n=s;u<t;)u+=f,h++;t=+u.toFixed(10)}else n=s,h=i;return{from:n,to:t,power:e,step:f,steps:h}},snapEndsByDate:function(n,t,i,r){for(var e=!1,s=[[Ext.Date.MILLI,[1,2,5,10,20,50,100,200,250,500]],[Ext.Date.SECOND,[1,2,5,10,15,30]],[Ext.Date.MINUTE,[1,2,5,10,15,30]],[Ext.Date.HOUR,[1,2,3,4,6,12]],[Ext.Date.DAY,[1,2,7,14]],[Ext.Date.MONTH,[1,2,3,6]]],l=s.length,h=!1,u,f,c,o=0;o<l;o++)if(u=s[o],!h)for(f=0;f<u[1].length;f++)if(t<Ext.Date.add(n,u[0],u[1][f]*i)){e=[u[0],u[1][f]];h=!0;break}return e||(c=this.snapEnds(n.getFullYear(),t.getFullYear()+1,i,r),e=[Date.YEAR,Math.round(c.step)]),this.snapEndsByDateAndStep(n,t,e,r)},snapEndsByDateAndStep:function(n,t,i,r){var u=[n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()],h,s,o,a,c,l,e,v,y=i[0],f=i[1];if(r)s=n;else switch(y){case Ext.Date.MILLI:s=new Date(u[0],u[1],u[2],u[3],u[4],u[5],Math.floor(u[6]/f)*f);break;case Ext.Date.SECOND:s=new Date(u[0],u[1],u[2],u[3],u[4],Math.floor(u[5]/f)*f,0);break;case Ext.Date.MINUTE:s=new Date(u[0],u[1],u[2],u[3],Math.floor(u[4]/f)*f,0,0);break;case Ext.Date.HOUR:s=new Date(u[0],u[1],u[2],Math.floor(u[3]/f)*f,0,0,0);break;case Ext.Date.DAY:s=new Date(u[0],u[1],Math.floor((u[2]-1)/f)*f+1,0,0,0,0);break;case Ext.Date.MONTH:s=new Date(u[0],Math.floor(u[1]/f)*f,1,0,0,0,0);break;default:s=new Date(Math.floor(u[0]/f)*f,0,1,0,0,0,0)}for(v=y===Ext.Date.MONTH&&(f==1/2||f==1/3||f==1/4),h=v?[]:0,o=new Date(s);o<t;)if(v){a=new Date(o);c=a.getFullYear();l=a.getMonth();e=a.getDate();switch(f){case 1/2:e>=15?(e=1,++l>11&&c++):e=15;break;case 1/3:e>=20?(e=1,++l>11&&c++):e=e>=10?20:10;break;case 1/4:e>=22?(e=1,++l>11&&c++):e=e>=15?22:e>=8?15:8}o.setYear(c);o.setMonth(l);o.setDate(e);h.push(new Date(o))}else o=Ext.Date.add(o,y,f),h++;return r&&(o=t),v?{from:+s,to:+o,steps:h}:{from:+s,to:+o,step:(o-s)/h,steps:h}},sorter:function(n,t){return n.offset-t.offset},rad:function(n){return n%360*Math.PI/180},degrees:function(n){return n*180/Math.PI%360},withinBox:function(n,t,i){return i=i||{},n>=i.x&&n<=i.x+i.width&&t>=i.y&&t<=i.y+i.height},parseGradient:function(n){var e=this,r=n.type||"linear",s=n.angle||0,h=e.radian,u=n.stops,f=[],i,t,o,c;r=="linear"&&(t=[0,0,Math.cos(s*h),Math.sin(s*h)],o=1/(Math.max(Math.abs(t[2]),Math.abs(t[3]))||1),t[2]*=o,t[3]*=o,t[2]<0&&(t[0]=-t[2],t[2]=0),t[3]<0&&(t[1]=-t[3],t[3]=0));for(i in u)u.hasOwnProperty(i)&&e.stopsRE.test(i)&&(c={offset:parseInt(i,10),color:Ext.draw.Color.toHex(u[i].color)||"#ffffff",opacity:u[i].opacity||1},f.push(c));return Ext.Array.sort(f,e.sorter),r=="linear"?{id:n.id,type:r,vector:t,stops:f}:{id:n.id,type:r,centerX:n.centerX,centerY:n.centerY,focalX:n.focalX,focalY:n.focalY,radius:n.radius,vector:t,stops:f}}})