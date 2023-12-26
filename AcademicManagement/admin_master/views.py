from django.shortcuts import render

# Create your views here.
def department_manage(request):
    return render(request,'department_manage.html')


def designation_manage(request):
    return render(request,'designation_manage.html')


def qualification_manage(request):
    return render(request,'qualification_manage.html')

def class_manage(request):
    return render(request,'class_manage.html')

def division_manage(request):
    return render(request,'division_manage.html')


def employee_category_manage(request):
    return render(request,'employee_category_manage.html')

