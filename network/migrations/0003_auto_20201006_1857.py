# Generated by Django 3.0.3 on 2020-10-06 13:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0002_auto_20201006_1856'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_creator',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
