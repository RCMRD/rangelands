Ext.define("Ext.data.SortTypes",{singleton:!0,none:Ext.identityFn,stripTagsRE:/<\/?[^>]+>/gi,asText:function(n){return String(n).replace(this.stripTagsRE,"")},asUCText:function(n){return String(n).toUpperCase().replace(this.stripTagsRE,"")},asUCString:function(n){return String(n).toUpperCase()},asDate:function(n){return n?Ext.isDate(n)?n.getTime():Date.parse(String(n)):0},asFloat:function(n){var t=parseFloat(String(n).replace(/,/g,""));return isNaN(t)?0:t},asInt:function(n){var t=parseInt(String(n).replace(/,/g,""),10);return isNaN(t)?0:t}})