# Generated by Django 4.2.8 on 2023-12-27 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin_master', '0004_academicqualification'),
    ]

    operations = [
        migrations.CreateModel(
            name='AcademicDivision',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('division_name', models.CharField(max_length=150)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
    ]
