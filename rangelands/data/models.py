from django.db import models

class County(models.Model):
	"""
	Kenya Range Counties
	"""
	name = models.CharField(max_length=128)
	longitude = models.DecimalField(max_digits=20, decimal_places=10)
	latitude = models.DecimalField(max_digits=20, decimal_places=10)

	def __unicode__(self):
		return self.name


class Lwf_area(models.Model):
	"""
	Kenya Range Counties
	"""
	name = models.CharField(max_length=128)
	longitude = models.DecimalField(max_digits=20, decimal_places=10)
	latitude = models.DecimalField(max_digits=20, decimal_places=10)

	def __unicode__(self):
		return self.name


class Nrt_conservancy(models.Model):
	"""
	Kenya Range Counties
	"""
	name = models.CharField(max_length=128)
	longitude = models.DecimalField(max_digits=20, decimal_places=10)
	latitude = models.DecimalField(max_digits=20, decimal_places=10)

	def __unicode__(self):
		return self.name


class Nrt_rehab_area(models.Model):
	"""
	Kenya Range Counties
	"""
	name = models.CharField(max_length=128)
	longitude = models.DecimalField(max_digits=20, decimal_places=10)
	latitude = models.DecimalField(max_digits=20, decimal_places=10)

	def __unicode__(self):
		return self.name


class Nrt_grazing_block(models.Model):
	"""
	Kenya Range Counties
	"""
	name = models.CharField(max_length=128)
	block = models.CharField(max_length=128)
	longitude = models.DecimalField(max_digits=20, decimal_places=10)
	latitude = models.DecimalField(max_digits=20, decimal_places=10)

	def __unicode__(self):
		return self.name