# Generated by Django 2.1.1 on 2018-09-25 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feature',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.TextField()),
                ('idade', models.IntegerField()),
                ('sexo', models.BooleanField()),
            ],
        ),
    ]