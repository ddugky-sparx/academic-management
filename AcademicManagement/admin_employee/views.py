from django.shortcuts import render
from admin_master.models import AcademicClass,AcademicQualification,AcademicDivision,AcademicDepartment,AcademicDesignation,AcademicEmployeeCategory,AcademicSubject
# Create your views here.
def employee_register(request):
    qualification_data=AcademicQualification.objects.filter(is_active=True)
    designation_data=AcademicDesignation.objects.filter(is_active=True)
    department_data=AcademicDepartment.objects.filter(is_active=True)
    employee_data=AcademicEmployeeCategory.objects.filter(is_active=True)
    class_data=AcademicClass.objects.filter(is_enabled=True)
    division_data=AcademicDivision.objects.filter(is_active=True)
    subject_data=AcademicSubject.objects.filter(is_active=True)

    context={
        'qualification_data':qualification_data,
        'designation_data':designation_data,
        'department_data':department_data,
        'employee_data':employee_data,
        'class_data':class_data,
        'division_data':division_data,
        'subject_data':subject_data,

    }
    return render(request,"employee_register.html",context)