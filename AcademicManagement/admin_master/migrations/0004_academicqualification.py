# Generated by Django 4.2.8 on 2023-12-27 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin_master', '0003_academicdesignation'),
    ]

    operations = [
        migrations.CreateModel(
            name='AcademicQualification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qualification_name', models.CharField(max_length=150)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
    ]
