from geoserver.catalog import Catalog
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse

from rangelands.gee_utils import getPondMap
from rangelands.data.models import *
from rangelands.data.timeseries import *
from rangelands.data.centroids import *
from rangelands import settings
import json
import datetime
import fnmatch


def home(request):
	"""
		Return latest modis dekadal wms layer
	"""
	geoserver_api = settings.GEOSERVER_URL + '/rest'
	cat = Catalog(geoserver_api, settings.GEOSERVER_USER, settings.GEOSERVER_PASS)

	all_layers = cat.get_layers()
	dekadal = []
	for layer in all_layers:
		layer_name = layer.name
		if fnmatch.fnmatch(layer_name, 'modis.dekadal.2019*'):
			dekadal.append(layer_name)

	today = datetime.datetime.now().strftime('%Y-%m-%d')
	result = getPondMap(today)

	context_dict = {
		'latest_dekadal': max(dekadal),
		'pond_mapid':result['mapid'],
		'pond_token': result['token']
	}

	return render_to_response('index.html', RequestContext(request, context_dict))

def raster(request, rasterfile):
    # check layer availability
    geoserver_api = settings.GEOSERVER_URL + '/rest'
    cat = Catalog(geoserver_api, settings.GEOSERVER_USER, settings.GEOSERVER_PASS)

    _layer = cat.get_layer(rasterfile)

    if(_layer):
        geoserver_response = {
            'result':'data available'
        }
    else:
        geoserver_response = {
            'result': 'data unavailable'
        }

    return HttpResponse(json.dumps(geoserver_response), content_type="application/json")

def app_config(request):
	"""
	Return app configuration
	"""

	boundaries = runBlocks()

	return HttpResponse(json.dumps(boundaries), content_type="application/json")

def latest_wms(request):
	"""
	Return latest modis dekadal wms layer
	"""
	geoserver_api = settings.GEOSERVER_URL + '/rest'
	cat = Catalog(geoserver_api, settings.GEOSERVER_USER, settings.GEOSERVER_PASS)

	all_layers = cat.get_layers()
	dekadal = []
	for layer in all_layers:
		layer_name = layer.name
		if fnmatch.fnmatch(layer_name, 'modis.dekadal.2020*'):
			dekadal.append(layer_name)

	recent_wms = {
		'recent_wms': max(dekadal)
	}

	return HttpResponse(json.dumps(recent_wms), content_type="application/json")


def map_config(request):

	"""
	Return app configuration
	"""

	_counties = []
	_lwf_areas = []
	_nrt_conservancies = []
	_nrt_rehab_areas = []
	_nrt_grazing_blocks = []

	range_counties = County.objects.all()
	lwf_areas = Lwf_area.objects.all()
	nrt_conservancies = Nrt_conservancy.objects.all()
	nrt_rehab_areas = Nrt_rehab_area.objects.all()
	nrt_grazing_blocks = Nrt_grazing_block.objects.all()

	for row in range_counties:
		_counties.append({
			'name': row.name,
			'longitude': str(row.longitude),
			'latitude': str(row.latitude)
			})


	for row in lwf_areas:
		_lwf_areas.append({
			'name': row.name,
			'longitude': str(row.longitude),
			'latitude': str(row.latitude)
			})

	for row in nrt_conservancies:
		_nrt_conservancies.append({
			'name': row.name,
			'longitude': str(row.longitude),
			'latitude': str(row.latitude)
			})

	for row in nrt_rehab_areas:
		_nrt_rehab_areas.append({
			'name': row.name,
			'longitude': str(row.longitude),
			'latitude': str(row.latitude)
			})

	for row in nrt_grazing_blocks:
		_nrt_grazing_blocks.append({
			'name': row.block,
			'longitude': str(row.longitude),
			'latitude': str(row.latitude)
			})

	boundaries = {
		'all_counties': _counties,
		'all_lwf_areas': _lwf_areas,
		'all_nrt_conservancies': _nrt_conservancies,
		'all_nrt_rehab_areas': _nrt_rehab_areas,
		'all_nrt_grazing_blocks': _nrt_grazing_blocks
	}


	return HttpResponse(json.dumps(boundaries), content_type="application/json")


def time_series(request, region):
	"""
	Return ndvi time series json given period and location
	"""
	#time_series_data = runTimeseries(product, timestep, boundary, region, start, stop)
	time_series_data = runTimeseries(region)

	return HttpResponse(json.dumps(time_series_data), content_type="application/json")


def statistics(request, boundary, region, year):
	"""
	Return statistics given boundary, region and year
	"""
	stats_data = runStats(boundary, region, year)

	return HttpResponse(json.dumps(stats_data), content_type="application/json")


def get_pond_map(request):
	today = datetime.datetime.now().strftime('%Y-%m-%d')
	result = getPondMap(today)

	return HttpResponse(json.dumps(result), content_type="application/json")
