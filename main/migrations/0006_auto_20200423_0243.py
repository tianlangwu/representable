# Generated by Django 2.2.4 on 2020-04-23 02:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0005_auto_20200423_0217"),
    ]

    operations = [
        migrations.RenameField(
            model_name="organization",
            old_name="whitelisted_emails",
            new_name="whitelist",
        ),
    ]