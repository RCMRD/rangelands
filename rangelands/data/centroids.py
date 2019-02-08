#!/usr/bin/env python
#
# Created on 12/4/2018 Maungu Oware - RCMRD
#	
#


import os, sys, json
#sys.path.append('/home/modis/dev/rangelands')
#os.environ.setdefault("DJANGO_SETTINGS_MODULE", "rangelands.settings")

from rangelands import settings
from django.db import connection


def runBlocks():
	"""
	Return info of all areas in boundary
	"""

	tbl_list = [
		'lewa_blocks',
		'nrt_conservancies',
		'nrt_rehab_areas',
		'nrt_grazing_blocks',
		'lwf_areas',
		'counties',
		'kenya_wards'
		
	]

	boundaries = {}

	cur = connection.cursor()

	for tbl in tbl_list:
		if tbl == 'kenya_wards':
			cur.execute('SELECT ST_AsGeoJSON(ST_Centroid(geom)), block, county_nam FROM %s' % (tbl,))
			features = cur.fetchall()

			_blocks = []

			for feature in features:
				centroids = str(feature[0])
				_centroids = centroids.split('[')
	
				if len(_centroids) == 2:
					_centroids = _centroids[1].replace(']','').replace('}','')
					_longitude = _centroids.split(',')[0]
					_latitude = _centroids.split(',')[1]
		
					_blocks.append({
						"name": feature[1],
						"county": feature[2],
						"longitude": _longitude,
						"latitude": _latitude
						})
		
			boundaries[tbl] = _blocks

		else:
			cur.execute('SELECT ST_AsGeoJSON(ST_Centroid(geom)), block FROM %s' % (tbl,))
			features = cur.fetchall()

			_blocks = []
			
			for feature in features:
				centroids = str(feature[0])
				_centroids = centroids.split('[')
	
				if len(_centroids) == 2:
					_centroids = _centroids[1].replace(']','').replace('}','')
					_longitude = _centroids.split(',')[0]
					_latitude = _centroids.split(',')[1]

					_blocks.append({
						"name": feature[1],
						"longitude": _longitude,
						"latitude": _latitude
						})

			boundaries[tbl] = _blocks

	cur.close()

	return boundaries


if __name__ == '__main__':
    all_boundaries = runBlocks()
    config = json.dumps(all_boundaries)
    print(config)




