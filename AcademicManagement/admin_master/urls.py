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

]
