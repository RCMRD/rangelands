// some data used in the forms
Ext.namespace('Ext.rangelands');

Ext.rangelands.counties = [];

Ext.rangelands.conservancies = [];

Ext.rangelands.nrt_grazing_blocks = [];

Ext.rangelands.nrt_rehab_areas = [];

Ext.rangelands.lwf_areas = [];

Ext.rangelands.lewa_blocks = [];

Ext.rangelands.boundary = [
    ['Counties', 'County'], 
    ['NRT Conservancies', 'Conservancy'],
    ['NRT Grazing Blocks', 'NRT Grazing Blocks'],
    ['NRT Rehabilitation Areas', 'NRT Rehabilitation Areas'],
    ['LWF Areas', 'LWF Areas'],
    ['Lewa Blocks', 'Lewa Blocks']
];

var countydata = [];

var conservancydata = [];


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

function loadConfig(){

	var _url = 'http://tools.rcmrd.org/appconfig/'

	$.ajax({
    	type: "GET",
    	url: _url,
    	//async: false,
    	dataType: "json",
		crossDomain: true,
    	success: function(data){


    		for(var i=0; i < data.kenya_range_counties.length; i++){
    			Ext.rangelands.counties.push([data.kenya_range_counties[i].name, data.kenya_range_counties[i].longitude, data.kenya_range_counties[i].latitude]);
    		}
    		
    		for(var i=0; i < data.lwf_areas.length; i++){
    			Ext.rangelands.lwf_areas.push([data.lwf_areas[i].name, data.lwf_areas[i].longitude, data.lwf_areas[i].latitude]);
    		}

    		for(var i=0; i < data.nrt_conservancies.length; i++){
    			Ext.rangelands.conservancies.push([data.nrt_conservancies[i].name, data.nrt_conservancies[i].longitude, data.nrt_conservancies[i].latitude]);
    		}


    		for(var i=0; i < data.nrt_rehab_areas.length; i++){
    			Ext.rangelands.nrt_rehab_areas.push([data.nrt_rehab_areas[i].name, data.nrt_rehab_areas[i].longitude, data.nrt_rehab_areas[i].latitude]);
    		}


    		for(var i=0; i < data.nrt_grazing_blocks.length; i++){
    			Ext.rangelands.nrt_grazing_blocks.push([data.nrt_grazing_blocks[i].name, data.nrt_grazing_blocks[i].longitude, data.nrt_grazing_blocks[i].latitude]);
    		}

    		for(var i=0; i < data.lewa_blocks.length; i++){
    			Ext.rangelands.lewa_blocks.push([data.lewa_blocks[i].name, data.lewa_blocks[i].longitude, data.lewa_blocks[i].latitude]);
    		}



        	

    	}
	});




}


loadConfig();


function drawChart(region, data1){

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

            $('#chart_div').highcharts({

                credits: 
                {
                    text: 'MODIS NDVI',
                    href: 'http://rcmrd.org'
                },

                chart: 
                {
                    type: 'line'
                },

                title:
                {
                    text: 'MODIS NDVI (10-day) timeseries for '+region+' County'
                },

                xAxis:
                {
                    tickWidth: 1,
                    gridLineWidth: 1,
                    type: 'datetime',
                    //categories: [],
					dateTimeLabelFormats: {
           				day: '%d-%m-%Y'    //ex- 01 Jan 2017
        			},
                    labels:{
						 format: '{value:%d-%m-%Y}'
                     
                    }
                },

                yAxis: [
						{
                            labels:{formatter:function(){return this.value+" "},
                            style:{color:"#4572A7"}},
                            title:{text:"NDVI",style:{color:"#4572A7"}},
							//min: 2,
							//max: 309
							//opposite:!0,
                        }
						
						
                
                ],

                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },

                tooltip:{
                    shared: true,
                    crosshairs: true
                },

                plotOptions:{
                    series : 
                    {
                        cursor : 'pointer',
                        point : 
                        {
                            events : 
                            {
                                click : function(e){
                                    //var chart = $('#highcharts-container').highcharts();
                                    //$chartName = chart.series[0].options.name;
                                 
                                }
                            }
                        },
                        marker : 
                        {
                            lineWidth : 1
                        }
                    }
                },
                series: [
                    {
                        name: 'MODIS NDVI',
                        data: data1,
						yAxis: 0
                    }
                   
                    
                ]

                
            });

}

function plotGraph(region){

	//alert('Drawing graph');
	//dt_timestamp__gte=2015-09-01T03:00&dt_timestamp__lte=2015-10-05T09:00

	var results1 = [];

	

	$.ajax({
	    type: "GET",
	    url: 'http://frost.rcmrd.org/timeseries/'+region+'/',
	    async: false,
	    dataType: "json",
	    success: function(data){

	        //console.log(data.length);
	       
	        for(var i = 0; i < data.length; i++){
	        	var datestamp = data[i].date;
	        	var year_ = parseInt(datestamp.slice(0,4));
	        	var month_ = parseInt(datestamp.slice(4,6)) - 1;
	        	var day_ = parseInt(datestamp.slice(6,8));

	            var _date = Date.UTC(year_, month_, day_);

				var ndvi = data[i].ndvi;

				//console.log(_date);
	            

	            results1.push([_date, ndvi]);
	            
	        }

	        //console.log(results1);
	        
	        drawChart(region, results1);


	      
			var chart_win = new Ext.Window
					({
						width:750,
						height:450,
						autoScroll:true,
						title: 'MODIS NDVI Time Series',
						contentEl: 'chart_div'
					});

			chart_win.show(); 
			

	        
	       

	    }
	});


}


dojo.require("esri.tasks.gp");

var _county;
var _boundary;
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
	var _url = 'http://tools.rcmrd.org/raster/' + wms_name

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

				map.setLayerIndex(wms_layer, map.layers.length-13);

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
	} 

	else if( _layer == 'NRT Grazing Blocks'){
		_layer_name = "nrt_grazing_blocks";
		property_name = 'block';
	} 

	else if( _layer == 'NRT Rehabilitation Areas'){
		_layer_name = "nrt_rehab_areas";
		property_name = 'block';
	} 

	else if( _layer == 'LWF Areas'){
		_layer_name = "lwf_areas";
		property_name = 'block';
	}

	else if( _layer == 'Lewa Blocks'){
		_layer_name = "lewa_blocks";
		property_name = 'block';
	} 

	else {
		_layer_name = "nrt_conservancies";
		property_name = 'block';
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

			Ext.MessageBox.show({
			           msg: 'Generating map, please wait...',
			           //progressText: 'Processing...',
			           width:300,
			           wait:true,
			           //waitConfig: {interval:200},
			           icon:'ext-mb-download', //custom class in msg-box.html
			           iconHeight: 50
			           //animateTarget: 'mb7'
			       });
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

			var _msg = "NDVI map generated <a href='" + map_link + "' target=_blank>View Map</a>";

			Ext.Msg.alert('Done', _msg); 

		}

var splash_win = new Ext.Window
					({
						width:500,
						height:550,
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

					} else if( _boundarytype == 'NRT Grazing Blocks'){
						_vector = "NRT_Grazing_Blocks.shp";
						_property = 'GrazingBlo';

					} else if( _boundarytype == 'NRT Rehabilitation Areas'){
						_vector = "NRT_Rehab_Areas.shp";
						_property = 'Site_1';

					} else if( _boundarytype == 'LWF Areas'){
						_vector = "LWF_Areas.shp";
						_property = 'NAME_96';

					} else if( _boundarytype == 'Lewa Blocks'){
						_vector = "LWF_Areas.shp";
						_property = 'NAME_96';

					}
					else {
						_vector = "NRT_Conservancies.shp";
						_property = 'Conservanc';
					}

					var all_layers = [];

					
					var map_layers = map.layers;
					//alert(map_layers[3].isBaseLayer);
					for(var i=0; i < map_layers.length; i++){
						if(map_layers[i].isBaseLayer == false){
							if(map_layers[i].visibility == true){

								all_layers.push(map_layers[i].name);
								//alert(map_layers[i].name);

							}
						}
					}

					

					generate_Map(ndvi_tif, _vector, _feature);


					/*
					setTimeout(function(){

						
                		Ext.MessageBox.hide();

                		Ext.Msg.alert('Done', 'NDVI map generated.');
                		}, 6000); */
					

					//alert(_vector + ': ' + _property + ': ' + _feature + ': ' + ndvi_tif);
					
									
				}
			},

			'WebMappingViewport button[action=updateGraph]':
			{
				click:function() {

					var region = Ext.getCmp('county').getValue();

					Ext.MessageBox.show({
			           msg: 'Plotting timeseries, please wait...',
			           //progressText: 'Processing...',
			           width:300,
			           wait:true,
			           //waitConfig: {interval:200},
			           icon:'ext-mb-download', //custom class in msg-box.html
			           iconHeight: 50
			           //animateTarget: 'mb7'
			       });

					setTimeout(function(){

						plotGraph(region);
                		Ext.MessageBox.hide();
                		//Ext.example.msg('Done', 'inundation map generated!');
                		}, 8000);

					

									
				}
			},

			'WebMappingViewport combobox[name=county]': {
				select:function(valueField) {
					_boundary = valueField.value;

					var boundarytype = Ext.getCmp('boundarytype').getValue();

					

					if(boundarytype == 'County'){
						for(var i=0; i < Ext.rangelands.counties.length; i++){
							if(Ext.rangelands.counties[i][0] == _boundary){
								
								map.setCenter(
	                            	new OpenLayers.LonLat(Ext.rangelands.counties[i][1], Ext.rangelands.counties[i][2]).transform(
	                                	new OpenLayers.Projection("EPSG:4326"),
	                                	map.getProjectionObject() ), 8);


								highLight(boundarytype, _boundary);

							
							}
						}

					} else if(boundarytype == 'NRT Grazing Blocks'){

						for(var i=0; i < Ext.rangelands.nrt_grazing_blocks.length; i++){
							if(Ext.rangelands.nrt_grazing_blocks[i][0] == _boundary){
								
								map.setCenter(
	                            	new OpenLayers.LonLat(Ext.rangelands.nrt_grazing_blocks[i][1], Ext.rangelands.nrt_grazing_blocks[i][2]).transform(
	                                	new OpenLayers.Projection("EPSG:4326"),
	                                	map.getProjectionObject() ), 12);


								highLight(boundarytype, _boundary);

							
							}
						}
						
					}

					else if(boundarytype == 'NRT Rehabilitation Areas'){
						
						for(var i=0; i < Ext.rangelands.nrt_rehab_areas.length; i++){
							if(Ext.rangelands.nrt_rehab_areas[i][0] == _boundary){
								
								map.setCenter(
	                            	new OpenLayers.LonLat(Ext.rangelands.nrt_rehab_areas[i][1], Ext.rangelands.nrt_rehab_areas[i][2]).transform(
	                                	new OpenLayers.Projection("EPSG:4326"),
	                                	map.getProjectionObject() ), 12);


								highLight(boundarytype, _boundary);

							
							}
						}
						
					}

					else if(boundarytype == 'LWF Areas'){
						
						for(var i=0; i < Ext.rangelands.lwf_areas.length; i++){
							if(Ext.rangelands.lwf_areas[i][0] == _boundary){
								
								map.setCenter(
	                            	new OpenLayers.LonLat(Ext.rangelands.lwf_areas[i][1], Ext.rangelands.lwf_areas[i][2]).transform(
	                                	new OpenLayers.Projection("EPSG:4326"),
	                                	map.getProjectionObject() ), 12);


								highLight(boundarytype, _boundary);

							
							}
						}
						
					}


					else {

						for(var i=0; i < Ext.rangelands.conservancies.length; i++){
							if(Ext.rangelands.conservancies[i][0] == _boundary){
								
								map.setCenter(
	                            	new OpenLayers.LonLat(Ext.rangelands.conservancies[i][1], Ext.rangelands.conservancies[i][2]).transform(
	                                	new OpenLayers.Projection("EPSG:4326"),
	                                	map.getProjectionObject() ), 12);

								highLight(boundarytype, _boundary);

							
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

					} else if(valueField.value == 'NRT Grazing Blocks'){
						_store.loadData(Ext.rangelands.nrt_grazing_blocks);

					}

					else if(valueField.value == 'NRT Rehabilitation Areas'){
						_store.loadData(Ext.rangelands.nrt_rehab_areas);
						
					}

					else if(valueField.value == 'LWF Areas'){
						_store.loadData(Ext.rangelands.lwf_areas);
						
					}

					else if(valueField.value == 'Lewa Blocks'){
						_store.loadData(Ext.rangelands.lewa_blocks);
						
					}

					else {
								
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
						width:500,
						height:500,
						autoScroll:true,
						title: 'Metadata',
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
					/*
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
					*/
					var win = window.open('http://tools.rcmrd.org/rangelands/docs/help/', '_blank');
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
