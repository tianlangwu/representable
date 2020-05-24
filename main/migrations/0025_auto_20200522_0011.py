# Generated by Django 2.2.10 on 2020-05-22 00:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0024_merge_20200521_1950"),
    ]

    operations = [
        migrations.AddField(
            model_name="campaign",
            name="slug",
            field=models.SlugField(null=True, unique=True),
        ),
        migrations.AlterField(
            model_name="campaign",
            name="description",
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]