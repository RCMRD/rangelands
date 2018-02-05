 Ext.define('Download', {
     extend: 'Ext.data.Model',
     fields: [
         {name: 'label1', type: 'string'},
         {name: 'url1',  type: 'string'}
        
     ]
 });

// layer tree store

layers_tree_store = Ext.create('Ext.data.TreeStore', {
	model: 'GeoExt.data.LayerTreeModel',
	root: {
		expanded: true,
		children: 
		[
			{
				text: "Base Maps",
				plugins: ['gx_baselayercontainer'],
				collapsed: true
			}, 
			{
                text: "Overlays",
                plugins: ['gx_overlaylayercontainer'],
                expanded: true
            }
		]
	}
});

layer_legend_tree = Ext.create('GeoExt.tree.Panel', {
	title: "",
	autoScroll: true,
    collapsible: true,
    height: 300,
    //preventHeader: true,
 	viewConfig:
	{
		plugins: [{
			ptype: 'treeviewdragdrop',
			appendOnly: false
		}]
	},
	store: layers_tree_store,
    listeners:{
        'checkchange': function(node, checked){
           
            var legend_container = document.getElementById('legend_items-innerCt'); 
            
            
        }
    },
	rootVisible: false,
	lines: false
});



novatree = Ext.create('GeoExt.tree.LayerTreeBuilder', {
    enableWmsLegends: false,
    enableVectorLegends: false,
    otherLayersText: 'Overlays',
    //layerStore: map.layers,
    title: "",
    autoScroll: true,
    collapsible: true,
    height: 300,
    width: 250

});


LogoPanel = new Ext.Panel({  
    region: 'south',      
    xtype: 'panel',
    id: 'logopanelID',
    height: 90,
    width: 330,
    minWidth: 260,
    collapsible: true,
    collapseMode: 'mini',
    preventHeader: true,
    split: true,
    items:[
        {
            xtype: 'panel',
            html:'<div class="logos"><a target="new" href="http://www.rcmrd.org/?page_id=5130"><img alt="SERVIR East and Southern Africa" width="240" height="35" src="assets/images/servir-easafricab.png"></a>'+
            '<a target="new" href="http://www.usaid.gov/"><img alt="USAID" width="134" height="40" src="assets/images/usaid.png"></a>'+
            '<a target="new" href="http://www.nasa.gov/"><img alt="NASA" width="49" height="40" src="assets/images/nasa.png"></a> </div>'
        }
    ]
}); 


NdviSearchForm = Ext.create('Ext.form.Panel', {
    bodyPadding: 10,
    id: 'ndvi_form_id', 
    title: 'Normalized Difference Vegetation Index (NDVI)',
    //height: 300,
    autoScroll: true,
    collapsible: true,
    items: [{

            xtype:'tabpanel',
            name: 'ndvi_tabs',
            id: 'ndvi_tabs',
            activeTab: 0,
            defaults:{
                bodyPadding: 10,
                layout: 'anchor'
            },
            items:[{
                title:'Near Real Time (10 days)',
                id: 'nrt',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    //disabled: true,
                    name: 'ndvi_year1',
                    id: 'ndvi_year1',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Month',
                    disabled: true,
                    name: 'ndvi_month1',
                    id: 'ndvi_month1',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.months 
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select month...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Dekad',
                    disabled: true,
                    name: 'ndvi_dekad',
                    id: 'ndvi_dekad',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.dekads 
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select dekad...'
                }]
            },{
                title: 'Monthly',
                id: 'monthly',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    //disabled: true,
                    name: 'ndvi_year',
                    id: 'ndvi_year',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Month',
                    disabled: true,
                    name: 'ndvi_month',
                    id: 'ndvi_month',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.months 
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select month...'
                }]
            },{
                title: 'Seasonal',
                defaultType: 'textfield',
                id: 'seasonal',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    //disabled: true,
                    name: 'ndvi_year2',
                    id: 'ndvi_year2',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Season',
                    disabled: true,
                    name: 'ndvi_season',
                    id: 'ndvi_season',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.seasons
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select season...'
                }]
            }]

    },{
                
                html: '<br /><br /> The Normalized Difference Vegetation Index (NDVI) measures the greenness of ground cover, and is used as a proxy to indicate the density and health of vegetation. NDVI values range from +1 to -1, with high positive values corresponding to dense and healthy vegetation, while a low and/or negative NDVI value would indicate poor vegetation conditions or sparse vegetative cover.'
            }]
});

AnomalyForm = Ext.create('Ext.form.Panel', {
    bodyPadding: 10,
    id: 'anomaly_form_id', 
    title: 'NDVI Anomaly',
    //height: 300,
    autoScroll: true,
    collapsible: true,
    collapsed: true,
    items: [{

            xtype:'tabpanel',
            name: 'anomaly_tabs',
            id: 'anomaly_tabs',
            activeTab: 0,
            defaults:{
                bodyPadding: 10,
                layout: 'anchor'
            },
            items:[{
                title: 'STD Monthly',
                id: 'std_monthly',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    //disabled: true,
                    name: 'std_anomaly_year',
                    id: 'std_anomaly_year',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Month',
                    disabled: true,
                    name: 'std_anomaly_month',
                    id: 'std_anomaly_month',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.months 
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select month...'
                }]
            },{
                title: 'STD Seasonal',
                defaultType: 'textfield',
                id: 'std_seasonal',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    //disabled: true,
                    name: 'std_anomaly_year2',
                    id: 'std_anomaly_year2',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Season',
                    disabled: true,
                    name: 'std_anomaly_season',
                    id: 'std_anomaly_season',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.seasons
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select season...'
                }]
            },{
                title: 'ABS Monthly',
                id: 'abs_monthly',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    //disabled: true,
                    name: 'abs_anomaly_year',
                    id: 'abs_anomaly_year',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Month',
                    disabled: true,
                    name: 'abs_anomaly_month',
                    id: 'abs_anomaly_month',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.months 
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select month...'
                }]
            },{
                title: 'ABS Seasonal',
                defaultType: 'textfield',
                id: 'abs_seasonal',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    //disabled: true,
                    name: 'abs_anomaly_year2',
                    id: 'abs_anomaly_year2',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Season',
                    disabled: true,
                    name: 'abs_anomaly_season',
                    id: 'abs_anomaly_season',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.seasons
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select season...'
                }]
            }]

    },{
                
                html: '<br /><br />The NDVI anomaly indicates the variation of the current dekad to the long-term average, where a positive value (for example 20 percent) would signify enhanced vegetation conditions compared to the average, while a negative value (for instance -40 percent) would indicate comparatively poor vegetation conditions.'
            }]
});

VCIForm = Ext.create('Ext.form.Panel', {
    bodyPadding: 10,
    id: 'vci_form_id', 
    title: 'Vegetation Condition Index',
    //height: 300,
    autoScroll: true,
    collapsible: true,
    collapsed: true,
    items: [{

            xtype:'tabpanel',
            name: 'vci_tabs',
            id: 'vci_tabs',
            activeTab: 0,
            defaults:{
                bodyPadding: 10,
                layout: 'anchor'
            },
            items:[{
                title: 'VCI Monthly',
                id: 'vci_monthly',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    //disabled: true,
                    name: 'vci_year',
                    id: 'vci_year',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Month',
                    disabled: true,
                    name: 'vci_month',
                    id: 'vci_month',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.months 
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select month...'
                }]
            },{
                title: 'VCI Seasonal',
                defaultType: 'textfield',
                id: 'vci_seasonal',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    //disabled: true,
                    name: 'vci_year2',
                    id: 'vci_year2',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Season',
                    disabled: true,
                    name: 'vci_season',
                    id: 'vci_season',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_display','_value'],
                        data : Ext.rangelands.seasons
                    }),
                    valueField: '_value',
                    displayField: '_display',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select season...'
                }]
            }]

    },{
                
                html: '<br /><br />The Vegetation Condition Index (VCI) relates the current dekadal NDVI to its long-term minimum, normalized by the historical range of NDVI values for the same dekad. The VCI was designed to separate the weather-related component of the NDVI from the ecological element.'
            }]
});

SingleSearchForm = Ext.create('Ext.form.Panel', {
    bodyPadding: 10,
    id: 'single_search_id', 
    //title: 'Generate Map',
    height: 200,
    autoScroll: true,
    collapsible: true,
    items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Boundary',
                    name: 'boundarytype',
                    disabled: true,
                    width: 300,
                    id: 'boundarytype',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.boundary 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select..',
                    listeners:{
                        'select': function(valueField){
                            
                        }
                    }
                },

                {
                    xtype: 'combobox',
                    fieldLabel: 'Name',
                    name: 'county',
                    width: 300,
                    disabled: true,
                    id: 'county',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.rangelands.counties 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select...',
                    listeners:{
                        'select': function(valueField){
                            
                        }
                    }
                }

    ],
    buttons:
	[
		{
			text: 'Produce Map',
            disabled: true,
            id:'generate_map',
			width: 100,
			action: 'generateMap'
		}
	]
});

// create the Downloads Store
   var downstore = Ext.create('Ext.data.Store', {
    model: 'Download',
    data: [
        //{label1: 'NDVI Map'}

    ]

   });

    var downloads = Ext.create('Ext.grid.Panel', {
        store: downstore,
        id: 'downgrid',
        //title: 'Downloads',
        columns: [
            {text: "Download NDVI Map", width: 250, dataIndex: 'label1'}
            
            
        ]
        //renderTo:'example-grid',
        //width: 200,
        //height: 50
    });

    var output_panel = new Ext.Panel({
        //region: 'west',
        xtype: 'panel',
        //width: 470,
        title: 'Map Output',
        //minWidth: 200,
        //height: 400, 
        autoScroll: true,
        active:true,
       // maxWidth: 500,
        // title: 'Layers',
        collapsible: true,
        split: true,
        items:[SingleSearchForm, downloads]

    }); 


    GeoExtPanel = new Ext.Panel ({
        region: 'west',
        xtype: 'panel',
        width: 480,
        minWidth: 300,
        height: 650, 
        autoScroll: true,
        active:true,
       // maxWidth: 500,
        listeners: {
            resize: Ext.Function.bind(function(comp, width, height,
                    oldWidth, oldHeight, eOpts) {
                comp.doLayout();
            }, this)
        },
        title: 'Data',
        //collapsible: true,
        //split: true,
        layout: {
            // layout-specific configs go here
            type: 'accordion',
            titleCollapse: false,
            animate: true,
            activeOnTop: false
        },
        items: [NdviSearchForm, AnomalyForm, VCIForm, output_panel]

    }); 

var GeneralTabs = Ext.create('Ext.tab.Panel', {
    id: "generaltabsID",
    layout: 'card',
    region: 'west',
    width:500,
    minWidth:300,
    //height: 600, 
    //autoScroll: true,
    animate: true,
    preventHeader: true,
     hideCollapseTool: true,
    collapsible: true,
    activeTab: 0,
    split: true,
    tabPosition: 'top',
    items: [
            GeoExtPanel, 
        {
            title: 'Maps',
            items:[
                layer_legend_tree,
                //novatree
            //downloads
            ]
        }
    ]
});

 function fix_to_bottom(){

     if (legend_popup.collapsed){
         legend_popup.anchorTo("GeoExtMapPanelId", "bl", [0, -30]);
     }else {
         legend_popup.anchorTo("GeoExtMapPanelId", "bl", [0, -235]);
     }
 }

WestPanel = new Ext.Panel({  
    region: 'west',
    xtype: 'panel',
    width: 500,
    minWidth: 300,
    collapsible: true,
    autoScroll: true,
    title: '',
   // preventHeader: true,
    //  hideCollapseTool: true,
    split: true,
    //items: [layer_legend_tree, SingleSearchForm, downloads, LogoPanel],
    items: [GeneralTabs, LogoPanel],
    listeners: {
        collapse: function() {
            fix_to_bottom();
        },
        expand: function() {
            fix_to_bottom();
        }
    }

});


 legendPanel = Ext.create ('GeoExt.LegendPanel', {
     bodyStyle: 'padding:5px',
     autoScroll: true,
     header:false,
     id:"legend_id",
     width:240,
     height:205,
     collapsible: true,
     defaults: {
         style: 'padding:5px',
         baseParams: {
             FORMAT: 'image/png',
             LEGEND_OPTIONS: 'forceLabels:on;fontName=Verdana;fontSize:12',
             WIDTH:'16',
             HEIGHT:'12'
         }
     },
     lines: false,
     layers: []
     
 });

 legend_popup = new Ext.Window({
     extend: 'Ext.window.Window',
     title:'Legend',
     width: 240,
     id:'legend_popup_id',
     minimizable: true,
     closable:false,
     collapseDirection: Ext.Component.DIRECTION_BOTTOM,
     items:[legendPanel],
     listeners: {
         show: function() {
             Ext.select('#legend_popup_id .x-tool-restore').setStyle('display', 'none');
             Ext.select('#legend_popup_id .x-tool-minimize').setStyle('display', 'block');
         },
         "minimize": function (window, opts) {
             window.collapse();
             window.setWidth(150);
             window.anchorTo("GeoExtMapPanelId", "bl", [0, -30]);
             Ext.select('#legend_popup_id .x-tool-restore').setStyle('display', 'block');
             Ext.select('#legend_popup_restore_id').setStyle('left', '122px');
             Ext.select('#legend_popup_restore_id').setStyle('z-index', '100');
             Ext.select('#legend_popup_id .x-tool-minimize').setStyle('display', 'none');
         }
     },
     tools: [{
         type: 'restore',
         id: 'legend_popup_restore_id',
         handler: function (evt, toolEl, owner, tool) {
             var window = owner.up('window');
             window.setWidth(200);
             window.expand('', false);
             window.anchorTo("GeoExtMapPanelId", "bl", [0, -350]);
             Ext.select('#legend_popup_id .x-tool-restore').setStyle('display', 'none');
             Ext.select('#legend_popup_id .x-tool-minimize').setStyle('display', 'block');
         }
     }]
 });

 var chart_1 = new Ext.Panel({
        //region: 'west',
        xtype: 'panel',
        width: 300,
        //minWidth: 200,
        height: 400, 
        autoScroll: true,
        active:true,
       // maxWidth: 500,
        // title: 'Layers',
        collapsible: true,
        split: true,
        contentEl: 'chart1_div',

    }); 

 var chart_2 = new Ext.Panel({
        //region: 'west',
        xtype: 'panel',
        width: 300,
        //minWidth: 200,
        height: 400, 
        autoScroll: true,
        active:true,
       // maxWidth: 500,
        // title: 'Layers',
        collapsible: true,
        split: true,
        contentEl: 'chart2_div',

    }); 

 Ext.onReady(function(){


     legend_popup.show();
     legend_popup.anchorTo("GeoExtMapPanelId", "bl", [0, -350]);
     window.onresize = function() {
         fix_to_bottom();
     };

 });

 Ext.define('LandCover.view.WebMappingViewport',
{
    extend: 'Ext.container.Viewport',
    alias: 'widget.WebMappingViewport',
	id: 'viewportId',
	renderTo: Ext.getBody(),
    layout: {
        type: 'border'
    },
    initComponent: function() 
	{
        var me = this;
        Ext.applyIf(me, {
		items: 
			[
				{
					xtype: 'panel',
					region: 'north',
					height: 60, //orignal 60
					html: '<div class="fire"><div class="satimage"><div class="fireimage"><div class="topcont">' +
                    '<div class="logobox"><a href=""><img alt="RCMRD" width="153"' +
                    ' height="53" class="rcmrd" src="assets/images/rcmrd.png"></a></div><h1 class="topheader">'+
					'Rangelands Decision Support Tool</h1></div></div></div></div>'
				},
				{
					xtype: 'MapPanel'
				},
                 WestPanel
                 /*{
                    // statistics panel
                    xtype: 'panel',
                    region: 'east',
                    id: 'chart',
                    //contentEl: 'chart_div',
                    autoScroll: true,
                    split: true,
                    //height: 200,
                    width: 300,
                    minWidth: 200,
                    //minSize: 100,
                    //maxSize: 200,
                    collapsible: true,
                    collapsed: true,
                    title: 'Statistics',
                    margins: '0 0 0 0',
                    items: [chart_1, chart_2]
                }*/
			]
        });
        me.callParent(arguments);
    }
});