# Generated by Django 2.2.4 on 2021-02-25 00:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='userEmail',
            new_name='email',
        ),
    ]
