# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='County',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=128)),
                ('longitude', models.DecimalField(max_digits=20, decimal_places=10)),
                ('latitude', models.DecimalField(max_digits=20, decimal_places=10)),
            ],
        ),
        migrations.CreateModel(
            name='Lwf_area',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=128)),
                ('longitude', models.DecimalField(max_digits=20, decimal_places=10)),
                ('latitude', models.DecimalField(max_digits=20, decimal_places=10)),
            ],
        ),
        migrations.CreateModel(
            name='Nrt_conservancy',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=128)),
                ('longitude', models.DecimalField(max_digits=20, decimal_places=10)),
                ('latitude', models.DecimalField(max_digits=20, decimal_places=10)),
            ],
        ),
        migrations.CreateModel(
            name='Nrt_grazing_block',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=128)),
                ('block', models.CharField(max_length=128)),
                ('longitude', models.DecimalField(max_digits=20, decimal_places=10)),
                ('latitude', models.DecimalField(max_digits=20, decimal_places=10)),
            ],
        ),
        migrations.CreateModel(
            name='Nrt_rehab_area',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=128)),
                ('longitude', models.DecimalField(max_digits=20, decimal_places=10)),
                ('latitude', models.DecimalField(max_digits=20, decimal_places=10)),
            ],
        ),
    ]
