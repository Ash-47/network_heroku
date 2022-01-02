# Generated by Django 3.0.3 on 2020-10-07 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0012_user_followers'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='liked_post',
            field=models.ManyToManyField(blank=True, default=None, related_name='liked_by', to='network.Post'),
        ),
    ]
