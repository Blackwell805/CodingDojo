from django.urls import path
from . import views

urlpatterns = [
    # display paths
    path('', views.dispLogin),
    path('success', views.dispSuccess),

    # action paths
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logOut),
    path('message', views.postMessage),
    path('comment', views.postComment),
]
