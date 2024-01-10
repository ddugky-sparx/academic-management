from django.urls import path
from . import views 

urlpatterns = [
    path('employee_register/', views.employee_register),
    path('get_register_subjects/', views.get_register_subjects),
    
]