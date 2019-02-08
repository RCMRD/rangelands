#!/usr/bin/env python
#
# Created on 12/4/2018 Maungu Oware - RCMRD
#	
#
# MODIS NDVI timeseries json generation
# Ported from PGSQL_getJSON.py - Steve Firsake
#


import os, sys, json
#sys.path.append('/home/modis/dev/rangelands')
#os.environ.setdefault("DJANGO_SETTINGS_MODULE", "rangelands.settings")

from rangelands import settings
from django.db import connection

def extract_date(table):
	"""
	Return date from file name
	"""
	_date = table.split('_')[2]

	return _date



def runTimeseries(region):
	# run timeseries
	tbl_list = [
		'modis_dekadal_20180101',
		'modis_dekadal_20180111',
		'modis_dekadal_20180121',
		'modis_dekadal_20180201',
		'modis_dekadal_20180211',
		'modis_dekadal_20180221',
		'modis_dekadal_20180301',
		'modis_dekadal_20180311'
	]

	means = []

	cur = connection.cursor()

	for tbl in tbl_list:
		cur.execute("SELECT (ST_SummaryStats(ST_Union(ST_Clip(k.rast, c.geom )))).mean FROM " + tbl + " AS k, (SELECT * FROM kenya_range_counties WHERE county = '"+ region +"') AS c")
		_date = extract_date(tbl)
		means.append({
			"date": _date,
			"ndvi": cur.fetchall()[0][0]
			})

	cur.close()

	return means

def runStats(boundary, region, year):
	# query statistics tables and export to json
	table_list = [
		'kenya_county_mean_statistics',
		'kenya_conservancy_mean_statistics',
		'kenya_ward_mean_statistics'
	]

	stats = []
	cropland = []
	forest = []
	grassland = []
	shrubland = []
	water = []
	settlement = []
	bareland = []

	months = {"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep","10":"Oct","11":"Nov","12":"Dec"}

	cur = connection.cursor()

	if boundary == 'county':
		region = region.title()
		cur.execute("SELECT county_name, county_year, county_month, county_mean, county_class FROM kenya_county_mean_statistics WHERE county_name = '"+region+"' AND county_year = '"+year+"'")
	elif boundary == 'conservancy':
		cur.execute("SELECT conservancy_name, conservancy_year, conservancy_month, conservancy_mean, conservancy_class FROM kenya_conservancy_mean_statistics WHERE conservancy_name = '"+region+"' AND conservancy_year = '"+year+"'")
	else:
		cur.execute("SELECT ward_name, ward_year, ward_month, ward_mean, ward_class FROM kenya_ward_mean_statistics WHERE ward_name = '"+region+"' AND ward_year = '"+year+"'")

	statistics = cur.fetchall()



	for row in statistics:
		mean = round(row[3], 2)
		_mean = "{:,}".format(mean)
		
		_class = row[4]
		month = row[2]
		_month = months[month]

		if _class == '10':
			cropland.append({"month": _month, "mean": _mean})
		elif _class == '20':
			forest.append({"month": _month, "mean": _mean})
		elif _class == '30':
			grassland.append({"month": _month, "mean": _mean})
		elif _class == '40':
			shrubland.append({"month": _month, "mean": _mean})
		elif _class == '60':
			water.append({"month": _month, "mean": _mean})
		elif _class == '80':
			settlement.append({"month": _month, "mean": _mean})
		elif _class == '90':
			bareland.append({"month": _month, "mean": _mean})
		else:
			pass

	stats = {
		"cropland": cropland,
		"forest": forest,
		"grassland": grassland,
		"shrubland": shrubland,
		"water": water,
		"settlement": settlement,
		"bareland": bareland
	}


	cur.close()

	return stats
	
