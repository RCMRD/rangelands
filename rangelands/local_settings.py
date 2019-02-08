# -*- coding: utf-8 -*-

DEBUG = TEMPLATE_DEBUG = True

DATABASE_ENGINE = 'postgresql_psycopg2'
DATABASE_NAME = 'rangelands'
DATABASE_USER = 'postgres'
DATABASE_PASSWORD = 'postgres'
DATABASE_HOST = ''
DATABASE_PORT = '5432'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': DATABASE_NAME,
        'USER': DATABASE_USER,
        'PASSWORD': DATABASE_PASSWORD,
        'HOST': DATABASE_HOST,
        'PORT': DATABASE_PORT,
    },
   
}

ALLOWED_HOSTS = ['localhost']

GEOSERVER_URL = 'http://apps.rcmrd.org:8080/geoserver'
GEOSERVER_USER = 'oware'
GEOSERVER_PASS = 'ow@re'