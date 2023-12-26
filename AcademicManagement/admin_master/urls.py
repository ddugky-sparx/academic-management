from django.urls import path
from . import views 

urlpatterns = [
    path('departments/', views.department_manage),
    path('designation/', views.designation_manage),
    path('qualification/', views.qualification_manage),
    path('class/', views.class_manage),
    path('division/', views.division_manage),
    path('employee-category/', views.employee_category_manage),

]
