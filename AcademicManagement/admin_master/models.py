from django.db import models

# Create your models here.
class AcademicClass(models.Model):
    class_name = models.CharField(max_length=150)
    is_enabled = models.BooleanField(default=True)



class AcademicDepartment(models.Model):
    department_name = models.CharField(max_length=100)
    department_code = models.CharField(max_length=10)
    is_active = models.BooleanField(default=True)


class AcademicDesignation(models.Model):
    designation_name = models.CharField(max_length=100)
    designation_code = models.CharField(max_length=10)
    is_active = models.BooleanField(default=True)


class AcademicQualification(models.Model):
    qualification_name = models.CharField(max_length=150)
    is_active = models.BooleanField(default=True)

class AcademicDivision(models.Model):
    division_name = models.CharField(max_length=150)
    is_active = models.BooleanField(default=True)


class AcademicEmployeeCategory(models.Model):
    name = models.CharField(max_length=255)
    area = models.CharField(max_length=255)