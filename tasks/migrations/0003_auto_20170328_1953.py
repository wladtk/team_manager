# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-28 19:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_auto_20170328_1928'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.TextField(blank=True, max_length=1024, null=True),
        ),
    ]
