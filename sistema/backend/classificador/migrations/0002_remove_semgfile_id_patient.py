# Generated by Django 2.1.1 on 2018-10-09 18:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('classificador', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='semgfile',
            name='id_patient',
        ),
    ]
