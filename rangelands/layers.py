#!/usr/bin/env python
#
# Created on 5/8/2021 Maungu Oware - RCMRD
#
#
# Retrieves RDST layers in Geoserver and updates text file
#

from geoserver.catalog import Catalog
from rangelands import settings
import os
import fnmatch

def get_layers():
    module_dir = os.path.dirname(__file__)
    file_path = os.path.join(module_dir, 'layers.txt')
    data_file = open(file_path, 'w')

    geoserver_api = settings.GEOSERVER_URL + '/rest'
    cat = Catalog(geoserver_api, settings.GEOSERVER_USER, settings.GEOSERVER_PASS)

    all_layers = cat.get_layers()
    for layer in all_layers:
        layer_name = layer.name
        if fnmatch.fnmatch(layer_name, '*rangelands*'):
            layer_name = layer_name.replace("rangelands:", "")
            data_file.write(layer_name)
            data_file.write("\n")



    data_file.close()

def list_layers():
    module_dir = os.path.dirname(__file__)
    file_path = os.path.join(module_dir, 'layers.txt')

    all_layers = []
    with open(file_path, "r") as data_file:
        geo_layers = data_file.readlines()
        for _layer in geo_layers:
            _layer = _layer.replace("\n","")
            all_layers.append(_layer)

        print all_layers


def update_layers():
    pass

#get_layers()
list_layers()
