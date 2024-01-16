from django.urls import path
from . import views 
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('employee_register/', views.employee_register),
    path('get_register_subjects/', views.get_register_subjects),
    path('get_employee_details/', views.get_employee_details,name='get_employee_details'),
    path('employee_full_details/', views.employee_full_details,name="employee_full_details"),
    
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)