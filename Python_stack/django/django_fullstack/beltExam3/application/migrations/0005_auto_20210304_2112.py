# Generated by Django 2.2.4 on 2021-03-04 21:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0004_wish_granted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wish',
            name='granted',
            field=models.BooleanField(verbose_name='Granted'),
        ),
    ]
