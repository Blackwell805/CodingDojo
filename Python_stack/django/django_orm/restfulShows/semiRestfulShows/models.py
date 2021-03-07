from django.db import models
from datetime import date
import re


# Our custom manager!
# No methods in our new manager should ever receive the whole request object as an argument!
# (just parts, like request.POST)
class showManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
    if postData['title']:
        if postData['title'] == Show.objects.get(title=postData['title']):
            if len(postData['title']) < 2:
                errors["title"] = "Title should be at least 2 characters"
            else:
                errors['title'] = 'Title field is required.'

    if postData['network']:
        if len(postData['network']) < 3:
            errors["network"] = "Network should be at least 5 characters"
        else:
            errors['network'] = 'Network field is required.'

    if postData['desc']:
        if len(postData['desc']) < 10:
            errors["desc"] = "Description should be at least 10 characters"
        return errors


class Show(models.Model):
    title = models.CharField(max_length=50)
    network = models.CharField(max_length=50)
    releaseDate = models.DateField(default=date.today)
    desc = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# Create your models here.
