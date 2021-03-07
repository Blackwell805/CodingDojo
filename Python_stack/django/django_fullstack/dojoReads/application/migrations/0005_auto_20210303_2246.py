# Generated by Django 2.2.4 on 2021-03-03 22:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0004_auto_20210302_1816'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='rating',
        ),
        migrations.RemoveField(
            model_name='book',
            name='review',
        ),
        migrations.RemoveField(
            model_name='book',
            name='user',
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.TextField()),
                ('rating', models.IntegerField()),
                ('book_reviewed', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='application.Book')),
                ('reviewed_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='application.User')),
            ],
        ),
    ]
