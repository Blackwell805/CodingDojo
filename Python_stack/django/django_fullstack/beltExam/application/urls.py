from django.urls import path
from . import views


urlpatterns = [
    # display paths
    path('', views.dispLogin),
    path('dashboard', views.dispDashboard),
    path('trips/new', views.dispCreateTrip),
    path('trips/edit/<int:trip_id>', views.dispEditTrip),
    path('trips/<int:trip_id>', views.dispInfoTrip),

    # action paths
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logOut),
    path('create', views.createTrip),
    path('edit/<int:trip_id>', views.editTrip),
    path('destroy/<int:trip_id>', views.destroy),
]
