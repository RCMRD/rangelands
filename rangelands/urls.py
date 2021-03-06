"""rangelandsapi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin

admin.site.site_header = 'RDST Dashboard'

urlpatterns = [
	url(r'^$', 'rangelands.views.home', name='home'),
    url(r'^admin/', admin.site.urls),
    url(r'^config/', 'rangelands.views.map_config', name='map_config'),
    url(r'^timeseries/(?P<region>[^/]*)/$', 'rangelands.views.time_series'),
	url(r'^stats/(?P<boundary>[^/]*)/(?P<region>[^/]*)/(?P<year>[^/]*)/$', 'rangelands.views.statistics'),
	url(r'^raster/(?P<rasterfile>[^/]*)/$', 'rangelands.views.raster'),
	url(r'^appconfig/', 'rangelands.views.app_config', name='app_config'),
	url(r'^latest/', 'rangelands.views.latest_wms', name='latest_wms'),
	url(r'^surfacewater/', 'rangelands.views.get_pond_map', name='surface_water'),
	url(r'^', include('django.contrib.auth.urls')),
	url(r'^admin/', include(admin.site.urls)),

]
