# Generated by Django 3.2.1 on 2021-05-19 23:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vote', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='candidate',
            options={'ordering': ['name']},
        ),
    ]
