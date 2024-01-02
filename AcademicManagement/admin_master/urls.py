from django.urls import path
from . import views 

urlpatterns = [
    path('departments/', views.department_manage,name="department"),
    path('designation/', views.designation_manage,name="designation"),
    path('qualification/', views.qualification_manage,name="qualification"),
    path('class/', views.class_manage,name="class"),
    path('division/', views.division_manage,name="division"),
    path('employee-category/', views.employee_category_manage,name="employee-category"),
    path('get_class_details/', views.get_class_details, name='get_class_details'),
    path('update_class_details/', views.update_class_details, name='update_class_details'),
    path('delete_class/', views.delete_class, name='delete_class'),
    path('get_departments_details/', views.get_departments_details, name='get_departments_details'),
    path('update_departments_details/', views.update_departments_details, name='update_departments_details'),
    path('delete_department/', views.delete_department, name='delete_department'),
    path('get_designation_details/', views.get_designation_details, name='get_designation_details'),
    path('update_designation_details/', views.update_designation_details, name='update_designation_details'),
    path('delete_designation/', views.delete_designation, name='delete_designation'),
    path('get_qualification_details/', views.get_qualification_details, name='get_qualification_details'),
    path('update_qualification_details/', views.update_qualification_details, name='update_qualification_details'),
    path('delete_qualification/', views.delete_qualification, name='delete_qualification'),


]
