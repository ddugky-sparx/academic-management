from django.shortcuts import render
from .models import AcademicClass,AcademicDepartment,AcademicDesignation,AcademicQualification,AcademicDivision
# Create your views here.
def department_manage(request):
    message = None
    academic_department = AcademicDepartment.objects.all()
    if request.method == 'POST':
        department_name = request.POST.get('department_name','').strip()
        department_code = request.POST.get('department_code','').strip()
        
        # Server-side validation
        if not department_name or not department_code:
            message ='Both Department Name and Code are required.'
        elif AcademicDepartment.objects.filter(department_name__iexact=department_name).exists():
            message='Department Name already exists.'
        elif AcademicDepartment.objects.filter(department_code__iexact=department_code).exists():
            message='Department Code already exists.'
        else:
           
            # Create the department object
            AcademicDepartment.objects.create(
                department_name=department_name,
                department_code=department_code
            )

            message='Department added successfully.'

            
    context = {
        'message': message,
        'academic_department': academic_department,
    }

    return render(request, 'department_manage.html',context)


def designation_manage(request):
    message = None
    academic_designation = AcademicDesignation.objects.all()
    if request.method == 'POST':
        designation_name = request.POST.get('designation_name','').strip()
        designation_code = request.POST.get('designation_code','').strip()

        if not designation_name or not designation_code:
            message ='Both Designation Name and Code are required.'
        elif AcademicDesignation.objects.filter(designation_name__iexact=designation_name).exists():
            message='Designation Name already exists.'
        elif AcademicDesignation.objects.filter(designation_code__iexact=designation_code).exists():
            message='Designation Code already exists.'
        else:
           
            AcademicDesignation.objects.create(
                designation_name=designation_name,
                designation_code=designation_code
            )

            message='Designation added successfully.'

            
    context = {
        'message': message,
        'academic_designation': academic_designation,
    }

    return render(request, 'designation_manage.html',context)


def qualification_manage(request):
    message = None
    academic_qualification = AcademicQualification.objects.all()

    if request.method == 'POST':
        qualification_name = request.POST.get('qualification_name', '').strip()

        if not qualification_name:
            message = 'Qualification name cannot be empty.'
        else:
            if AcademicQualification.objects.filter(qualification_name=qualification_name).exists():
                message = 'Qualification name already exists.'
            else:
                AcademicQualification.objects.create(qualification_name=qualification_name)
                message = 'Qualification created successfully.'

    context = {
        'message': message,
        'academic_qualifications': academic_qualification,
    }

    return render(request, 'qualification_manage.html', context)

def class_manage(request):
    message = None
    academic_classes = AcademicClass.objects.all()

    if request.method == 'POST':
        class_name = request.POST.get('class_name', '').strip()

        if not class_name:
            message = 'Class name cannot be empty.'
        else:
            if AcademicClass.objects.filter(class_name=class_name).exists():
                message = 'Class name already exists.'
            else:
                AcademicClass.objects.create(class_name=class_name)
                message = 'Class created successfully.'

    context = {
        'message': message,
        'academic_classes': academic_classes,
    }

    return render(request, 'class_manage.html', context)


def division_manage(request):
    message = None
    academic_division = AcademicDivision.objects.all()

    if request.method == 'POST':
        division_name = request.POST.get('division_name', '').strip()

        if not division_name:
            message = 'Division name cannot be empty.'
        else:
            if AcademicDivision.objects.filter(division_name=division_name).exists():
                message = 'Division name already exists.'
            else:
                AcademicDivision.objects.create(division_name=division_name)
                message = 'Division created successfully.'

    context = {
        'message': message,
        'academic_divisions': academic_division,
    }

    return render(request, 'division_manage.html', context)


def employee_category_manage(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        area = request.POST.get('area')
        print(area)
       

    return render(request,'employee_category_manage.html')

