# Generated by Django 2.2.4 on 2020-04-24 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0011_auto_20200424_0946"),
    ]

    operations = [
        migrations.AlterField(
            model_name="campaign",
            name="end_date",
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="campaign",
            name="start_date",
            field=models.DateField(blank=True, null=True),
        ),
    ]
