# Generated by Django 2.2 on 2019-04-04 19:35

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entry_ID', models.CharField(default=uuid.uuid4, max_length=100, unique=True)),
                ('entry_location', django.contrib.gis.db.models.fields.PointField(srid=4326)),
                ('entry_polgyon', django.contrib.gis.db.models.fields.PolygonField(srid=4326)),
            ],
        ),
    ]