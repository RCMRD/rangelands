Ext.define("GeoExt.data.reader.Feature",{extend:"Ext.data.reader.Json",alias:"reader.feature",requires:["GeoExt.Version"],buildExtractors:function(){this.callParent(arguments);this.convertRecordData=this.convertFeatureRecordData},convertFeatureRecordData:function(n,t,i){var e,h,f,o,r,u,s;if(t){if(e=i.fields,h={},t.attributes)for(f=0,o=e.length;f<o;f++){if(r=e.items[f],/[\[\.]/.test(r.mapping))try{u=new Function("obj","return obj."+r.mapping)(t.attributes)}catch(c){u=r.defaultValue}else u=t.attributes[r.mapping||r.name]||r.defaultValue;r.convert&&(u=r.convert(u,i));n[r.name]=u}i.state=t.state;(t.state==OpenLayers.State.INSERT||t.state==OpenLayers.State.UPDATE)&&i.setDirty();s=t.state===OpenLayers.State.INSERT?undefined:t.id;n.id=s}}})