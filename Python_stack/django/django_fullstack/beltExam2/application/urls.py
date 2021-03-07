from django.urls import path
from . import views

urlpatterns = [
    # display paths
    path('', views.dispLogin),
    path('dashboard', views.dispDashboard),
    path('jobs/new', views.dispCreateJob),
    path('jobs/edit/<int:job_id>', views.dispEditJob),
    path('jobs/<int:job_id>', views.dispViewJob),
    # action paths
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logOut),
    path('destroy/<int:job_id>', views.destroy),
    path('create', views.createJob),
    path('edit/<int:job_id>', views.editJob)
]
