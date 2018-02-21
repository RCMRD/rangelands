// some data used in the forms
Ext.namespace('Ext.rangelands');

Ext.rangelands.counties = [
    ['Turkana'], 
    ['Marsabit'], 
    ['Mandera'], 
    ['Wajir'], 
    ['West Pokot'], 
    ['Samburu'],
    ['Isiolo'], 
    ['Baringo'], 
    ['Garissa'], 
    ['Laikipia'], 
    ['Meru'], 
    ['Tharaka'],
    ['Nyeri'], 
    ['Tana River'], 
    ['Kitui'], 
    ['Embu'], 
    ['Narok'], 
    ['Machakos'],
    ['Kajiado'], 
    ['Makueni'], 
    ['Lamu'], 
    ['Kilifi'], 
    ['Taita Taveta'], 
    ['Kwale'] 
    
];

Ext.rangelands.conservancies = [
    ['Shurr'], 
    ['Melako'], 
    ['Namunyak'], 
    ['Mathews Range Forest'], 
    ['Biliqo Bulesa'], 
    ['Sera'], 
    ['Meibae'], 
    ['Ltungai'], 
    ['West Gate'], 
    ['Kalama'], 
    ['Nakuprat-Gotu'], 
    ['Ruko'], 
    ['Mpus Kutuk'], 
    ['Shaba National Reserve'], 
    ['Samburu National Reserve'], 
    ['Buffalo National Reserve'], 
    ['Nasuulu'], 
    ['Naibunga'], 
    ['Lekurruki'], 
    ['Leparua'], 
    ['II Ngwesi'], 
    ['Ngare Ndare'], 
    ['Jaldessa'], 
    ['Songa'], 
];

Ext.rangelands.boundary = [
    ['County'], 
    ['Conservancy']
];


var countydata = [
	{
		"name": "Turkana",
		"centerX": 35.434957399135776,
		"centerY": 3.412963769747267,
		"zoomLevel": 8
	},
	{
		"name": "Marsabit",
		"centerX": 37.567986408043808,
		"centerY": 2.980503398974592,
		"zoomLevel": 8
	},
	{
		"name": "Mandera",
		"centerX": 40.736653326452362,
		"centerY": 3.438399557185803,
		"zoomLevel": 8
	},
	{
		"name": "Wajir",
		"centerX": 40.03355622066195,
		"centerY": 1.809709378068272,
		"zoomLevel": 8
	},
	{
		"name": "West Pokot",
		"centerX": 35.243095626477626,
		"centerY": 1.727335358232473,
		"zoomLevel": 8
	},
	{
		"name": "Samburu",
		"centerX": 37.116796177113855,
		"centerY": 1.319876783265621,
		"zoomLevel": 8
	},
	{
		"name": "Isiolo",
		"centerX": 38.539095932509682,
		"centerY": 1.011825872671544,
		"zoomLevel": 8
	},
	{
		"name": "Baringo",
		"centerX": 35.940325289879254,
		"centerY": 0.67643441156588,
		"zoomLevel": 8
	},
	{
		"name": "Garissa",
		"centerX": 40.180794458468675,
		"centerY": -0.488364576944122,
		"zoomLevel": 8
	},
	{
		"name": "Laikipia",
		"centerX": 36.762521620296219,
		"centerY": 0.323864787860787,
		"zoomLevel": 8
	},
	{
		"name": "Meru",
		"centerX": 37.760178795246119,
		"centerY": 0.171766123780441,
		"zoomLevel": 8
	},
	{
		"name": "Tharaka",
		"centerX": 37.871707603168979,
		"centerY": -0.199028135167895,
		"zoomLevel": 8
	},
	{
		"name": "Nyeri",
		"centerX": 36.953828854934983,
		"centerY": -0.34307614059664,
		"zoomLevel": 8
	},
	{
		"name": "Tana River",
		"centerX": 39.412165071680832,
		"centerY": -1.557155314307147,
		"zoomLevel": 8
	},
	{
		"name": "Kitui",
		"centerX": 38.405844150137817,
		"centerY": -1.48590304102223,
		"zoomLevel": 8
	},
	{
		"name": "Embu",
		"centerX": 37.62519011144893,
		"centerY": -0.601300590990351,
		"zoomLevel": 8
	},
	{
		"name": "Narok",
		"centerX": 35.575278974683243,
		"centerY": -1.253918786449594,
		"zoomLevel": 8
	},
	{
		"name": "Machakos",
		"centerX": 37.405647897842705,
		"centerY": -1.289852643113056,
		"zoomLevel": 8
	},
	{
		"name": "Kajiado",
		"centerX": 36.909127892476178,
		"centerY": -2.120649731548841,
		"zoomLevel": 8
	},
	{
		"name": "Makueni",
		"centerX": 37.799673665186361,
		"centerY": -2.166198118492794,
		"zoomLevel": 8
	},
	{
		"name": "Lamu",
		"centerX": 40.766286244921716,
		"centerY": -2.039559640723352,
		"zoomLevel": 8
	},
	{
		"name": "Kilifi",
		"centerX": 39.683142893748538,
		"centerY": -3.173136117926263,
		"zoomLevel": 8
	},
	{
		"name": "Taita Taveta",
		"centerX": 38.418100077357778,
		"centerY": -3.432458074217745,
		"zoomLevel": 8
	},
	{
		"name": "Kwale",
		"centerX": 39.151555998668677,
		"centerY": -4.139057670119397,
		"zoomLevel": 8
	}

];


var conservancydata = [
	{
		"name": "Shurr",
		"centerX": 38.504086077245439,
		"centerY": 2.104798047414867,
		"zoomLevel": 10
	},
	{
		"name": "Melako",
		"centerX": 37.929294591303318,
		"centerY": 1.681288719037125,
		"zoomLevel": 10
	},
	{
		"name": "Meibae",
		"centerX": 37.137955972757126,
		"centerY": 0.899939142200688,
		"zoomLevel": 10
	},
	{
		"name": "Namunyak",
		"centerX": 37.398499317102903,
		"centerY": 1.229172240762179,
		"zoomLevel": 10
	},
	{
		"name": "Mathews Range Forest",
		"centerX": 37.316316685507928,
		"centerY": 1.224416517537103,
		"zoomLevel": 10
	},
	{
		"name": "Biliqo Bulesa",
		"centerX": 38.273856830584613,
		"centerY": 1.131678438301432,
		"zoomLevel": 10
	},
	{
		"name": "Sera",
		"centerX": 37.801581888094717,
		"centerY": 1.019848770175185,
		"zoomLevel": 10
	},
	{
		"name": "Ltungai",
		"centerX": 36.490652025736722,
		"centerY": 0.899765238242347,
		"zoomLevel": 10
	},
	{
		"name": "West Gate",
		"centerX": 37.349951569196847,
		"centerY": 0.731201510768958,
		"zoomLevel": 10
	},
	{
		"name": "Kalama",
		"centerX": 37.515347982620149,
		"centerY": 0.724845478946103,
		"zoomLevel": 10
	},
	{
		"name": "Nakuprat-Gotu",
		"centerX": 37.965887172540548,
		"centerY": 0.671947797878047,
		"zoomLevel": 10
	},
	{
		"name": "Ruko",
		"centerX": 36.146901773158369,
		"centerY": 0.658888779882193,
		"zoomLevel": 10
	},
	{
		"name": "Mpus Kutuk",
		"centerX": 37.239276415845971,
		"centerY": 0.605369072836604,
		"zoomLevel": 10
	},
	{
		"name": "Shaba National Reserve",
		"centerX": 37.839661871542184,
		"centerY": 0.646436022714284,
		"zoomLevel": 10
	},
	{
		"name": "Samburu National Reserve",
		"centerX": 37.53900881477751,
		"centerY": 0.612004922487909,
		"zoomLevel": 10
	},
	{
		"name": "Buffalo National Reserve",
		"centerX": 37.606455395891253,
		"centerY": 0.558429884676525,
		"zoomLevel": 10
	},
	{
		"name": "Nasuulu",
		"centerX": 37.488278821856312,
		"centerY": 0.487451365262201,
		"zoomLevel": 10
	},
	{
		"name": "Naibunga",
		"centerX": 37.035172249501514,
		"centerY": 0.476966669835191,
		"zoomLevel": 10
	},
	{
		"name": "Lekurruki",
		"centerX": 37.265718115241647,
		"centerY": 0.470165270253003,
		"zoomLevel": 10
	},
	{
		"name": "Leparua",
		"centerX": 37.449062966413244,
		"centerY": 0.366856513292455,
		"zoomLevel": 10
	},
	{
		"name": "II Ngwesi",
		"centerX": 37.357753926475596,
		"centerY": 0.333877290555607,
		"zoomLevel": 10
	},
	{
		"name": "Ngare Ndare",
		"centerX": 37.365842345225055,
		"centerY": 0.161743162735017,
		"zoomLevel": 10
	},
	{
		"name": "Jaldessa",
		"centerX": 38.075411731210941,
		"centerY": 2.349565467730028,
		"zoomLevel": 10
	},
	{
		"name": "Songa",
		"centerX": 37.913859086239171,
		"centerY": 2.159860271950585,
		"zoomLevel": 10
	}
];


Ext.rangelands.years = [

    ['2018'],
    ['2017'],
    ['2016'],
    ['2015'],
    ['2014'],
    ['2013'],
    ['2012'],
    ['2011'],
    ['2010'],
    ['2009'],
    ['2008'],
    ['2007'],
    ['2006'],
    ['2005'],
    ['2004'],
    ['2003'],
    ['2002'],
    ['2001']
  
    
];

Ext.rangelands.months = [
    ['January',1],
    ['February',2],
    ['March',3],
    ['April',4],
    ['May',5],
    ['June',6],
    ['July',7],
    ['August',8],
    ['September',9],
    ['October',10],
    ['November',11],
    ['December',12]

    
];

Ext.rangelands.seasons = [
    ['Mar-Apr-May','01'],
    ['Oct-Nov-Dec','02']
    
];

Ext.rangelands.dekads1 = [
    ['Dekad 1 (1st - 10th)','01'],
    ['Dekad 2 (11th - 20th)','11'],
    ['Dekad 3 (21st - 30th)','21']
    
];

Ext.rangelands.dekads2 = [
    ['Dekad 1 (1st - 10th)','01'],
    ['Dekad 2 (11th - 20th)','11'],
    ['Dekad 3 (21st - 31st)','21']
    
];

Ext.rangelands.dekads3 = [
    ['Dekad 1 (1st - 10th)','01'],
    ['Dekad 2 (11th - 20th)','11'],
    ['Dekad 3 (21st - 28th)','21']
    
];

Ext.rangelands.dekads4 = [
    ['Dekad 1 (1st - 10th)','01'],
    ['Dekad 2 (11th - 20th)','11'],
    ['Dekad 3 (21st - 29th)','21']
    
];

dojo.require("esri.tasks.gp");

var _county;
var ndvi_tif = '';
var current_wms = '';

function makeGraph(ghgdata){
	var _gdata = [
		['Land Cover', 'Area (Ha)']
	];
	for(var x=0; x < ghgdata.length; x++){
		_gdata.push([ghgdata[x].cover, parseFloat(ghgdata[x].area)]);
	}

	return _gdata;
	
}

function loadLayer(wms_name){

	// check layer availability
	var _url = 'http://crest.rcmrd.org/raster/' + wms_name

	$.ajax({
    	type: "GET",
    	url: _url,
    	//async: false,
    	dataType: "json",
		crossDomain: true,
    	success: function(data){

        	if (data.result == 'data unavailable'){

        		Ext.Msg.alert("Data Unavailable","Please select another date");

        	} else {


        		// clear current overlay
				var current_layer = map.getLayersByName(current_wms);
				if(current_layer.length != 0){
					map.removeLayer(current_layer[0]);
				}

				var wms_layer = new OpenLayers.Layer.WMS(wms_name,
						"http://apps.rcmrd.org:8080/geoserver/wms",
						{
						   layers: 'rangelands:' + wms_name,
						   transparent: true,
						   format: "image/png"
						}, {
						       buffer: 0,
						       visibility: true,
						       displayOutsideMaxExtent: true,
						       displayInLayerSwitcher: true,
						       isBaseLayer: false,
						       yx : {'EPSG:4326' : true}
						});


				
				map.addLayer(wms_layer);

				map.setLayerIndex(wms_layer, map.layers.length-9);

				current_wms = wms_name;



        	}

    	}
	});




}


function highLight(_layer, _name){
	// filter sld and highligh selected county/conservancy
	//alert(_layer + ' ' + _name);
	// clear current selected
	var current_selected = map.getLayersByName("Selected Boundary");
	if(current_selected.length != 0){
		map.removeLayer(current_selected[0]);
	}

	var _layer_name, property_name, selected_wms;
	var sld = '';

	if( _layer == 'County'){
		_layer_name = "counties";
		property_name = 'county';
	} else {
		_layer_name = "conservancies";
		property_name = 'name';
	}

	sld += '<sld:StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" version="1.0.0">';
	sld += '<sld:NamedLayer><sld:Name>rangelands:';
	sld += _layer_name;
	sld += '</sld:Name><sld:UserStyle><sld:Name>query</sld:Name><sld:FeatureTypeStyle>'
	sld += '<sld:Rule>';
	sld += '<ogc:Filter><ogc:PropertyIsEqualTo><ogc:PropertyName>';
	sld += property_name;
	sld += '</ogc:PropertyName><ogc:Literal>';
	sld += _name;
	sld += '</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Filter>';
	sld += '<PolygonSymbolizer><Stroke><CssParameter name="stroke">#F933FF</CssParameter><CssParameter name="stroke-width">2</CssParameter>';
	sld += '</Stroke></PolygonSymbolizer></sld:Rule></sld:FeatureTypeStyle></sld:UserStyle></sld:NamedLayer></sld:StyledLayerDescriptor>';

	selected_wms = new OpenLayers.Layer.WMS("Selected Boundary",
			"http://tools.rcmrd.org/geoserver/wms",
			{
			   layers: 'rangelands:' + _layer_name,
			   transparent: true,
			   format: "image/png",
			   SLD_BODY: sld
			}, {
			       //buffer: 0,
			       visibility: true,
			       displayOutsideMaxExtent: true,
			       //displayInLayerSwitcher: false,
			       isBaseLayer: false,
			       hover: true,
			       yx : {'EPSG:4326' : true},
			       singleTile: true,
			       tiled: false
			});

	map.addLayer(selected_wms);



}


var gpTask;

function generate_Map(ndvi_file, shapefile, fieldvalue) 
		{
			
			//var county_or_conservancy_name = fieldvalue;
			var county_or_conservancy_name = fieldvalue;
			var gis_shapefile_name = shapefile;
			//var gis_shapefile_name = 'Kenya_Range_Counties.shp';
			var normalized_difference_vegetation_index_filename = ndvi_file;
			//var normalized_difference_vegetation_index_filename = 'ea_20010101.tif';

			var gpTaskUrl = "http://maps.rcmrd.org/arcgis/rest/services/wps/KenyaRangelandMapGenerator/GPServer/Kenya_Rangeland_Map_Generator";

			var gp_Parameters = {"county_or_conservancy_name":county_or_conservancy_name, "gis_shapefile_name":gis_shapefile_name,"normalized_difference_vegetation_index_filename":normalized_difference_vegetation_index_filename};

			gpTask = new esri.tasks.Geoprocessor(gpTaskUrl, 
			{
				async : true
			});
			
			dojo.connect(gpTask, "onJobComplete",onTaskComplete);
			dojo.connect(gpTask, "onStatusUpdate",onTaskStatus);			
			dojo.connect(gpTask, "onError",onTaskFailure);


			gpTask.submitJob(gp_Parameters);
			
		}

		function onTaskComplete(jobInfo) 
		{
			console.log("Job ID: " + jobInfo.jobId);
			gpTask.getResultData(jobInfo.jobId,"PDF_Output_File", downloadFile);
		}
		
		function onTaskStatus(jobInfo)
		{
			//document.getElementById("Download_PDF_Output_File").innerHTML =jobInfo.jobStatus;
			console.log(jobInfo.jobStatus);
		}

		function onTaskFailure(error) 
		{
			console.log("Error Message: "+ error); 
		}
		function downloadFile(PDF_Output_File)
		{
			var pdf_download_url = PDF_Output_File.value.url; 
			//document.getElementById("Download_PDF_Output_File").innerHTML = "<a href="+pdf_download_url+" target=_blank>Click to Download Map</a>";
			//console.log("Map Output Download Link: " + pdf_download_url); 

			// load map download link
			var _downgrid = Ext.getCmp('downgrid').getStore();
			//_downgrid.removeAll();      

			var map_link = pdf_download_url;
			var link_label = map_link.split('/');
			var _link_label = link_label[11];

			var map_url = "<a href='" + map_link + "' target=_blank>" + _link_label + "</a>";
			var mapdata = [
				{label1: map_url}
			];

			_downgrid.loadData(mapdata, true);  

		}

var splash_win = new Ext.Window
					({
						width:500,
						height:500,
						autoScroll:true,
						title: 'RANGELANDS DECISION SUPPORT TOOL',
						autoLoad:{
							url:'pages/splash.html'
						}
					});

splash_win.show();


Ext.define('LandCover.controller.WebMapping.ButonOnclickActions', {
	extend: 'Ext.app.Controller',
	init: function(){
		
		this.control(
		{		
			'WebMappingViewport button[action=generateMap]':
			{
				click:function() {

					var _vector_, _property;
					var _boundarytype = Ext.getCmp('boundarytype').getValue();
					var _feature = Ext.getCmp('county').getValue();
					

					if( _boundarytype == 'County'){
						_vector = "Kenya_Range_Counties.shp";
						_property = 'county';
					} else {
						_vector = "Centre-Conservancies_Ver1-Nov-15.shp";
						_property = 'name';
					}

					Ext.MessageBox.show({
			           msg: 'Generating map, please wait...',
			           progressText: 'Processing...',
			           width:300,
			           wait:true,
			           //waitConfig: {interval:200},
			           icon:'ext-mb-download', //custom class in msg-box.html
			           iconHeight: 50
			           //animateTarget: 'mb7'
			       });

					generate_Map(ndvi_tif, _vector, _feature);

					setTimeout(function(){

						
                		Ext.MessageBox.hide();

                		Ext.Msg.alert('Done', 'NDVI map generated.');
                		}, 6000);
					

					//alert(_vector + ': ' + _property + ': ' + _feature + ': ' + ndvi_tif);
					
									
				}
			},

			'WebMappingViewport button[action=loadMonthly]':
			{
				click:function() {

									
				}
			},

			'WebMappingViewport combobox[name=county]': {
				select:function(valueField) {
					_county = valueField.value;

					var boundarytype = Ext.getCmp('boundarytype').getValue();

					if(boundarytype == 'County'){
						for(var i=0; i < countydata.length; i++){
							if(countydata[i].name == _county){
								
								map.setCenter(
	                            	new OpenLayers.LonLat(countydata[i].centerX, countydata[i].centerY).transform(
	                                	new OpenLayers.Projection("EPSG:4326"),
	                                	map.getProjectionObject() ), countydata[i].zoomLevel);


								highLight(boundarytype, _county);

							
							}
						}
					} else {

						for(var i=0; i < conservancydata.length; i++){
							if(conservancydata[i].name == _county){
								
								map.setCenter(
	                            	new OpenLayers.LonLat(conservancydata[i].centerX, conservancydata[i].centerY).transform(
	                                	new OpenLayers.Projection("EPSG:4326"),
	                                	map.getProjectionObject() ), conservancydata[i].zoomLevel);

								highLight(boundarytype, _county);

							
							}
						}

					}

					// enable button
					Ext.getCmp('generate_map').enable();
					
					
					
				}
			},

			'WebMappingViewport combobox[name=boundarytype]': {
				select:function(valueField) {
					var _name = Ext.getCmp('county');
					_name.clearValue();

					var _store = _name.getStore();
					_store.removeAll();
					
					if(valueField.value == 'County'){

						_store.loadData(Ext.rangelands.counties);

					} else {
								
						_store.loadData(Ext.rangelands.conservancies);
					}
					
					_name.enable();
				}
			},   
			'WebMappingViewport combobox[name=ndvi_month1]': {
				select:function(valueField) {

					var _dekad = Ext.getCmp('ndvi_dekad');
					_dekad.clearValue();
					var _store = _dekad.getStore();
					_store.removeAll();

					var _year = Ext.getCmp('ndvi_year1').getValue();
					_year = parseInt(_year);
					var _month = valueField.value;
					var days = new Date(_year, _month, 0).getDate();

					if(days == 30) {
						_store.loadData(Ext.rangelands.dekads1);
					} else if (days == 31) {
						_store.loadData(Ext.rangelands.dekads2);
					} else if (days == 28) {
						_store.loadData(Ext.rangelands.dekads3);
					} else {
						_store.loadData(Ext.rangelands.dekads4);
					}

					_dekad.enable();
					
				}
			}, 
			'WebMappingViewport combobox[name=ndvi_year1]': {
				select:function() {
					
					var ndvi_month1 = Ext.getCmp('ndvi_month1');
					ndvi_month1.enable();
					ndvi_month1.clearValue();

					Ext.getCmp('ndvi_dekad').clearValue();

					
				}
			},  	
			'WebMappingViewport combobox[name=ndvi_dekad]': {
				select:function() {
					
					// Get selected year, month, dekad
					var sel_year = Ext.getCmp('ndvi_year1').getValue();
					var sel_month = Ext.getCmp('ndvi_month1').getValue();
					if(sel_month < 10){
						sel_month = '0' + sel_month;
					}
					var sel_dekad = Ext.getCmp('ndvi_dekad').getValue();

					var dekad_layer = 'modis.dekadal.' + sel_year + sel_month + sel_dekad + '.tif';

					loadLayer(dekad_layer);
					ndvi_tif = dekad_layer;

					Ext.getCmp('boundarytype').enable();


					
				}
			},  	
			'WebMappingViewport combobox[name=ndvi_year]': {
				select:function() {

					Ext.getCmp('ndvi_month').enable();
					Ext.getCmp('ndvi_month').clearValue();
					
				}
			},  	
			'WebMappingViewport combobox[name=ndvi_month]': {
				select:function() {
					
						// Get selected year, month
					var sel_year = Ext.getCmp('ndvi_year').getValue();
					var sel_month = Ext.getCmp('ndvi_month').getValue();
					if(sel_month < 10){
						sel_month = '0' + sel_month;
					}
					//var sel_dekad = Ext.getCmp('ndvi_dekad').getValue();

					var monthly_layer = 'modis.monthly.' + sel_year + sel_month + '.tif';

					loadLayer(monthly_layer);
					ndvi_tif = monthly_layer;

					Ext.getCmp('boundarytype').enable();

					
					
				}
			},  	
			'WebMappingViewport combobox[name=ndvi_year2]': {
				select:function() {
					Ext.getCmp('ndvi_season').enable();
					Ext.getCmp('ndvi_season').clearValue();
				}
			},  	
			'WebMappingViewport combobox[name=ndvi_season]': {
				select:function() {

					// get selected year/season
					var sel_year = Ext.getCmp('ndvi_year2').getValue();
					var sel_season = Ext.getCmp('ndvi_season').getValue();
					//if(sel_month < 10){
					//	sel_month = '0' + sel_month;
					//}
					//var sel_dekad = Ext.getCmp('ndvi_dekad').getValue();

					var seasonal_layer = 'modis.seasonal.' + sel_year + sel_season + '.tif';

					loadLayer(seasonal_layer);
					ndvi_tif = seasonal_layer;

					Ext.getCmp('boundarytype').enable();
					
					
				}
			},  
			'WebMappingViewport tabpanel[name=ndvi_tabs]': {
				tabchange:function(tabPanel, tab) {
					// clear all combos in other tabs
					var activetab = tab.id;
					if (activetab == 'nrt'){

						Ext.getCmp('ndvi_year').clearValue();
						Ext.getCmp('ndvi_month').clearValue();

						Ext.getCmp('ndvi_year2').clearValue();
						Ext.getCmp('ndvi_season').clearValue();

					} else if ( activetab == 'monthly'){

						Ext.getCmp('ndvi_year1').clearValue();
						Ext.getCmp('ndvi_month1').clearValue();
						Ext.getCmp('ndvi_dekad').clearValue();

						Ext.getCmp('ndvi_year2').clearValue();
						Ext.getCmp('ndvi_season').clearValue();

					} else {

						Ext.getCmp('ndvi_year1').clearValue();
						Ext.getCmp('ndvi_month1').clearValue();
						Ext.getCmp('ndvi_dekad').clearValue();

						Ext.getCmp('ndvi_year').clearValue();
						Ext.getCmp('ndvi_month').clearValue();
					}
					
				}
			}, 
			'WebMappingViewport tabpanel[name=anomaly_tabs]': {
				tabchange:function(tabPanel, tab) {
					// clear all combos in other tabs
					var activetab = tab.id;
					if (activetab == 'std_monthly'){

						Ext.getCmp('std_anomaly_year2').clearValue();
						Ext.getCmp('std_anomaly_season').clearValue();
						Ext.getCmp('abs_anomaly_year').clearValue();
						Ext.getCmp('abs_anomaly_month').clearValue();
						Ext.getCmp('abs_anomaly_year2').clearValue();
						Ext.getCmp('abs_anomaly_season').clearValue();
						

					} else if ( activetab == 'std_seasonal'){

						Ext.getCmp('std_anomaly_year').clearValue();
						Ext.getCmp('std_anomaly_month').clearValue();
						Ext.getCmp('abs_anomaly_year').clearValue();
						Ext.getCmp('abs_anomaly_month').clearValue();
						Ext.getCmp('abs_anomaly_year2').clearValue();
						Ext.getCmp('abs_anomaly_season').clearValue();
						

					} else if ( activetab == 'std_seasonal'){

						Ext.getCmp('std_anomaly_year').clearValue();
						Ext.getCmp('std_anomaly_month').clearValue();
						Ext.getCmp('abs_anomaly_year').clearValue();
						Ext.getCmp('abs_anomaly_month').clearValue();
						Ext.getCmp('abs_anomaly_year2').clearValue();
						Ext.getCmp('abs_anomaly_season').clearValue();
						
					} else {

						Ext.getCmp('std_anomaly_year').clearValue();
						Ext.getCmp('std_anomaly_month').clearValue();
						Ext.getCmp('std_anomaly_year2').clearValue();
						Ext.getCmp('std_anomaly_season').clearValue();
						Ext.getCmp('abs_anomaly_year').clearValue();
						Ext.getCmp('abs_anomaly_month').clearValue();
					}
					
				}
			},  		
			'WebMappingViewport tabpanel[name=vci_tabs]': {
				tabchange:function(tabPanel, tab) {
					// clear all combos in other tabs
					var activetab = tab.id;
					if (activetab == 'vci_monthly'){
						
						Ext.getCmp('vci_year2').clearValue();
						Ext.getCmp('vci_season').clearValue();

					} else {
						Ext.getCmp('vci_year').clearValue();
						Ext.getCmp('vci_month').clearValue();
					}
					
				}
			},  		 		
			'WebMappingViewport combobox[name=std_anomaly_year]': {
				select:function() {
					Ext.getCmp('std_anomaly_month').enable();
					Ext.getCmp('std_anomaly_month').clearValue();
				}
			},  
			'WebMappingViewport combobox[name=std_anomaly_month]': {
				select:function() {

					//get selected year and month
					var sel_year = Ext.getCmp('std_anomaly_year').getValue();
					var sel_month = Ext.getCmp('std_anomaly_month').getValue();
					if(sel_month < 10){
						sel_month = '0' + sel_month;
					}
					var monthly_layer = 'modis.monthly.SA.' + sel_year + sel_month + '.tif';
					loadLayer(monthly_layer);
					ndvi_tif = monthly_layer;
					Ext.getCmp('boundarytype').enable();

				}
			},  
			'WebMappingViewport combobox[name=std_anomaly_year2]': {
				select:function() {
					Ext.getCmp('std_anomaly_season').enable();
					Ext.getCmp('std_anomaly_season').clearValue();
				}
			},  
			'WebMappingViewport combobox[name=std_anomaly_season]': {
				select:function() {

					// get selected year/season
					var sel_year = Ext.getCmp('std_anomaly_year2').getValue();
					var sel_season = Ext.getCmp('std_anomaly_season').getValue();
					var seasonal_layer = 'modis.seasonal.SA.' + sel_year + sel_season + '.tif';
					loadLayer(seasonal_layer);
					ndvi_tif = seasonal_layer;
					Ext.getCmp('boundarytype').enable();

				}
			},  	
			'WebMappingViewport combobox[name=abs_anomaly_year]': {
				select:function() {
					Ext.getCmp('abs_anomaly_month').enable();
					Ext.getCmp('abs_anomaly_month').clearValue();
				}
			},  
			'WebMappingViewport combobox[name=abs_anomaly_month]': {
				select:function() {

					//get selected year and month
					var sel_year = Ext.getCmp('abs_anomaly_year').getValue();
					var sel_month = Ext.getCmp('abs_anomaly_month').getValue();
					if(sel_month < 10){
						sel_month = '0' + sel_month;
					}
					var monthly_layer = 'modis.monthly.AA.' + sel_year + sel_month + '.tif';
					loadLayer(monthly_layer);
					ndvi_tif = monthly_layer;
					Ext.getCmp('boundarytype').enable();
					
				}
			},  	
			'WebMappingViewport combobox[name=abs_anomaly_year2]': {
				select:function() {
					Ext.getCmp('abs_anomaly_season').enable();
					Ext.getCmp('abs_anomaly_season').clearValue();
				}
			},  
			'WebMappingViewport combobox[name=abs_anomaly_season]': {
				select:function() {

					// get selected year/season
					var sel_year = Ext.getCmp('abs_anomaly_year2').getValue();
					var sel_season = Ext.getCmp('abs_anomaly_season').getValue();
					var seasonal_layer = 'modis.seasonal.AA.' + sel_year + sel_season + '.tif';
					loadLayer(seasonal_layer);
					ndvi_tif = seasonal_layer;
					Ext.getCmp('boundarytype').enable();
					
				}
			},  	
			'WebMappingViewport combobox[name=vci_year]': {
				select:function() {
					Ext.getCmp('vci_month').enable();
					Ext.getCmp('vci_month').clearValue();
				}
			},  
			'WebMappingViewport combobox[name=vci_month]': {
				select:function() {

					//get selected year and month
					var sel_year = Ext.getCmp('vci_year').getValue();
					var sel_month = Ext.getCmp('vci_month').getValue();
					if(sel_month < 10){
						sel_month = '0' + sel_month;
					}
					var monthly_layer = 'modis.monthly.VCI.' + sel_year + sel_month + '.tif';
					loadLayer(monthly_layer);
					ndvi_tif = monthly_layer;
					Ext.getCmp('boundarytype').enable();
					
				}
			},  	
			'WebMappingViewport combobox[name=vci_year2]': {
				select:function() {
					Ext.getCmp('vci_season').enable();
					Ext.getCmp('vci_season').clearValue();
				}
			},  
			'WebMappingViewport combobox[name=vci_season]': {
				select:function() {

					// get selected year/season
					var sel_year = Ext.getCmp('vci_year2').getValue();
					var sel_season = Ext.getCmp('vci_season').getValue();
					var seasonal_layer = 'modis.seasonal.VCI.' + sel_year + sel_season + '.tif';
					loadLayer(seasonal_layer);
					ndvi_tif = seasonal_layer;
					Ext.getCmp('boundarytype').enable();
					
				}
			},  		
			'WebMappingViewport button[action=rangeSearchAction]':
			{
				click: function() 
				{

					var loadingPanel = new OpenLayers.Control.LoadingPanel();
					map.addControl(loadingPanel);    
					//show the control
					loadingPanel.maximizeControl();
					// load your layers here
					// remove it as the above function returns

					range_search();

					loadingPanel.minimizeControl();

		 			resizeElementHeight('legend_items', 'legend_items-body');
				}
			},
			'WebMappingViewport button[action=customSearchAction]':
			{
				click: function() 
				{

					var loadingPanel = new OpenLayers.Control.LoadingPanel();
					map.addControl(loadingPanel);    
					//show the control
					loadingPanel.maximizeControl();
					// load your layers here
					// remove it as the above function returns
					
					//flag="no_flag";
					custom_search();

					loadingPanel.minimizeControl();
					
				}
			},
			'MapPanel button[action=map_zoom_in]':
			{
				click:function()
				{	
					zoomInCtrl.trigger();
				}
			},
			'MapPanel button[action=map_zoom_out]':
			{
				click:function()
				{	
					zoomOutCtrl.trigger();
				}
			},
			'MapPanel button[action=navigation_history_previous]':
			{
				click:function()
				{	
					navigationHistoryCtrl.previousTrigger();
				}
			},
			'MapPanel button[action=navigation_history_next]':
			{
				click:function()
				{	
					navigationHistoryCtrl.nextTrigger();
				}
			},
			'MapPanel button[action=about_us]':
			{
				click: function ()
				{
					var win = new Ext.Window
					({
						width:500,
						height:500,
						autoScroll:true,
						title: 'About the Tool',
						autoLoad:{
							url:'pages/about_us.html'
						}
					});
					win.show();
				}
			},
			'MapPanel button[action=useful_links]':
			{
				click: function ()
				{
					
					var win = new Ext.Window({
						width:270,
						height:130,
						autoScroll:true,
						title: 'Useful Links',
						autoLoad:{
							url:'pages/useful_links.html'
						}
					});
					win.show();
				}
			},
			'MapPanel button[action=help_action]':
			{
				click: function ()
				{
					var win = new Ext.Window
					({
						width:500,
						height:500,
						autoScroll:true,
						title: 'Help',
						autoLoad:{
							url:'pages/help.html'
						}
					});
					win.show();
				}
			},
			'MapPanel button[action=map_default_map_extent]':
			{
				click: function() 
				{
					map.setCenter(
						new OpenLayers.LonLat(29.577899,3.443310).transform(
							new OpenLayers.Projection("EPSG:4326"),
							map.getProjectionObject()
							), 
						5);
				}
			},

			'MapPanel button[action=zoom_to_countries]':
			{
				click: function() 
				{
					var selected_country=Ext.getCmp('Zoom_to_Countries_Id').getValue();
					if(selected_country==null)
					{
						Ext.Msg.alert("No selection","Please select a country you want to Zoom to");
					}
					

				}
				
			}

		});
	}

});
