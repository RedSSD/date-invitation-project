# Generated by Django 5.0 on 2023-12-27 12:51

import invitation.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('invitation', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invitation',
            name='token',
            field=models.CharField(default=invitation.models.Invitation.generate_token, max_length=64, unique=True),
        ),
    ]