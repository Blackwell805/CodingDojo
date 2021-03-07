from django.db import models


class Books(models.Model):
    title = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    # author = models.ManyToManyField(
    #     Authors, related_name="book")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Authors(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    notes = models.TextField()
    book = models.ManyToManyField(Books, related_name="author")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# Create your models here.
