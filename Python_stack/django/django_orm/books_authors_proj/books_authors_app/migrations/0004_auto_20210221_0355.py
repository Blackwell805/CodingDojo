# Generated by Django 2.2.4 on 2021-02-21 03:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books_authors_app', '0003_books_has_publishers'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='books_has_publishers',
            new_name='books_has_authors',
        ),
    ]
