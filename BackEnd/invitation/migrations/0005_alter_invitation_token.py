# Generated by Django 5.0 on 2024-01-01 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('invitation', '0004_alter_invitation_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invitation',
            name='token',
            field=models.CharField(blank=True, max_length=64, null=True, unique=True),
        ),
    ]