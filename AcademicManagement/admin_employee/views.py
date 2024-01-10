from django.shortcuts import render
from admin_master.models import AcademicClass,AcademicQualification,AcademicDivision,AcademicDepartment,AcademicDesignation,AcademicEmployeeCategory,AcademicSubject
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
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

def get_register_subjects(request):
    class_id = request.GET['classId']
    academic_class = get_object_or_404(AcademicClass, id=class_id, is_enabled=True)
    subjects = list(AcademicSubject.objects.filter(classes=academic_class, is_active=True).values('id', 'subject_name'))
    print(subjects)
    response_data={"subjects":subjects}
    return JsonResponse(response_data)