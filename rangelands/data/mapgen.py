#
# Arcgis Server geoprocessing service for generating maps 
# Created on 11/2/2017 - Allan Oware (RCMRD)
#

import os, sys
from datetime import datetime as dt

import arcpy


class Toolbox(object):
    def __init__(self):
        """Define the toolbox (the name of the toolbox is the name of the
        .pyt file)."""
        self.label = "Mapgen"
        self.alias = ""

        # List of tool classes associated with this toolbox
        self.tools = [GenerateMap]


class GenerateMap(object):
    def __init__(self):
        """Define the tool (tool name is the name of the class)."""
        self.label = "Generate Map"
        self.description = "Generate Map"
        self.canRunInBackground = False

    def getParameterInfo(self):
        """Define parameter definitions"""
        # ndvi 
        param1 = arcpy.Parameter(
            displayName="NDVI",
            name="ndvi",
            datatype="GPString",
            parameterType="Required",
            direction="Input")

        # shpfile
        param2 = arcpy.Parameter(
            displayName="Shapefile",
            name="shpfile",
            datatype="GPString",
            parameterType="Required",
            direction="Input")

        # filter value
        param3 = arcpy.Parameter(
            displayName="Region",
            name="filter_value",
            datatype="GPString",
            parameterType="Required",
            direction="Input")

        params = [param1, param2, param3]

        return params

    def isLicensed(self):
        """Set whether tool is licensed to execute."""
        return True

    def updateParameters(self, parameters):
        """Modify the values and properties of parameters before internal
        validation is performed.  This method is called whenever a parameter
        has been changed."""
        return

    def updateMessages(self, parameters):
        """Modify the messages created by internal validation for each tool
        parameter.  This method is called after internal validation."""
        return


    def find_dir(self, ndvi_fname):
        """
        Returns specific ndvi directory 
        """
        products1 = [
                {'prefix': 'modis.dekadal', 'folder': 'ndvi_Receiver_Downloaded_Dekadal_FINAL'},
                {'prefix': 'modis.monthly', 'folder': 'ndvi_Receiver_Downloaded_Monthly_FINAL'},
                {'prefix': 'modis.seasonal', 'folder': 'ndvi_Receiver_Downloaded_Seasonal_FINAL'},

                ]

        products2 = [
                {'prefix': 'modis.monthly.AA','folder': 'ndvi_Monthly_ABS_Anomaly_FINAL'},
                {'prefix': 'modis.monthly.SA', 'folder': 'ndvi_Monthly_STD_Anomaly_FINAL'},
                {'prefix': 'modis.monthly.VCI', 'folder': 'ndvi_Monthly_VCI_FINAL'},
                {'prefix': 'modis.seasonal.AA', 'folder': 'ndvi_Seasonal_ABS_Anomaly_FINAL'},
                {'prefix': 'modis.seasonal.SA', 'folder': 'ndvi_Seasonal_STD_Anomaly_FINAL'},
                {'prefix': 'modis.seasonal.VCI', 'folder': 'ndvi_Seasonal_VCI_FINAL'},

                ]

        ndvi_list = ndvi_fname.split('.')

        if len(ndvi_list) == 4:
            ndvi_fname2 = ndvi_list[1]
            for product in products1:
                _prefix = product['prefix']
                if ndvi_fname2 in _prefix:
                    ndvi_dir = product['folder']
                    

        else:
            ndvi_fname2 = ndvi_list[1]+'.'+ndvi_list[2]
            for product in products2:
                _prefix = product['prefix']
                if ndvi_fname2 in _prefix:
                    ndvi_dir = product['folder']
                    
        return ndvi_dir

    def map_title(self, ndvi_name):
        """
        Return map title
        :param ndvi_name:
        :return:
        """
        ndvi_list = ndvi_name.split('.')
        if len(ndvi_list) == 4:
            _date = ndvi_list[2]
            if len(_date) == 6:
                map_date = _date[0:4] + '-' + _date[4:6]
            else:
                map_date = _date[0:4] + '-' + _date[4:6] + '-' + _date[6:8]
            _map_title = (ndvi_list[0]).upper() + ' NDVI ' + (ndvi_list[1]).capitalize() + ' ' + map_date
        else:
            _date = ndvi_list[3]
            map_date = _date[0:4] + '-' + _date[4:6]
            _map_title = (ndvi_list[0]).upper() + ' NDVI ' + (ndvi_list[1]).capitalize() + ' ' + ndvi_list[2] + ' ' + map_date

        return _map_title

    def generate_map(self, ndvi, shpfile, filter_value):
        # funcion clips raster with filtered shp, overlays on map and renders to file
        # ndvi = ea_20070311.tif
        # shpfile = Kenya_Range_Counties.shp
        # filter_value = Marsabit

        # 1. define map document
        mxd_path = "H:\Toolbox\map_gen\\arcmap\Base_map_ndvi.mxd"
        mxd = arcpy.mapping.MapDocument(mxd_path)

        df = arcpy.mapping.ListDataFrames(mxd)[0]

        # 2. define ndvi layer
        ndvi_folder = self.find_dir(ndvi)
        ndvi_src = "H:\Toolbox\map_gen\\arcmap\data\\ndvi\\" + ndvi_folder + "\\" + ndvi
        ndvi_layer = arcpy.mapping.Layer(ndvi_src)

        # 3. define county/conservancy layer
        boundary_src = "H:\Toolbox\map_gen\\arcmap\data\\" + shpfile
        boundary_layer = arcpy.mapping.Layer(boundary_src)

        # 4. add layers to map and apply symbology
        arcpy.mapping.AddLayer(df, ndvi_layer, "TOP")
        raster_layer = arcpy.mapping.ListLayers(mxd, "", df)[0]
        raster_symbology = "H:\Toolbox\map_gen\\arcmap\NDVI_2.lyr"
        arcpy.ApplySymbologyFromLayer_management(raster_layer, raster_symbology)

        arcpy.mapping.AddLayer(df, boundary_layer, "TOP")
        vector_layer = arcpy.mapping.ListLayers(mxd, "", df)[0]

        if shpfile == 'Kenya_Range_Counties.shp':
            vector_symbology = "H:\Toolbox\map_gen\\arcmap\Kenya_Range_Counties_2.lyr"
        else:
            vector_symbology = "H:\Toolbox\map_gen\\arcmap\Conservancies_2.lyr"

        arcpy.ApplySymbologyFromLayer_management(vector_layer, vector_symbology)

        # 6. filter selected county/conservancy
        if shpfile == 'Kenya_Range_Counties.shp':
            query = """"COUNTY" = '%s'"""%filter_value
        else:
            query = """"NAME" = '%s'"""%filter_value    
        
        arcpy.SelectLayerByAttribute_management(vector_layer, "NEW_SELECTION", query)
        df.extent = vector_layer.getSelectedExtent(False)

        # 6.5 update text elements
        _map_title = self.map_title(ndvi)
        today = dt.today()
        _today = today.strftime("%d-%b-%Y")

        for elem in arcpy.mapping.ListLayoutElements(mxd, "TEXT_ELEMENT"):
            if elem.text.startswith("Current NDVI condition (10 days):"):
                elem.text = _map_title
            elif elem.text.startswith("Map produced on:"):
                elem.text = "Map produced on: " + _today
            else:
                pass

        # 7. export map to pdf
        pdf_ext = dt.now().strftime('%Y%m%d%H%M%S%f')
        _file_name = filter_value + '_' + pdf_ext + '.pdf'
        pdf_file = 'H:\Toolbox\map_gen\maps\\' + _file_name 
        arcpy.mapping.ExportToPDF(mxd, pdf_file) 

        return _file_name

    def execute(self, parameters, messages):
        """The source code of the tool."""

        ndvi = parameters[0].valueAsText
        shpfile = parameters[1].valueAsText
        filter_value = parameters[2].valueAsText

        #msg = "shapefile selected: " + shpfile
        #messages.addMessage(msg)

        pdf_map = self.generate_map(ndvi, shpfile, filter_value)

        return
