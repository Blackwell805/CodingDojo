from django.urls import path
from . import views


urlpatterns = [
    # display paths
    path('', views.dispLogin),
    path('wishes', views.dispWishes),
    path('wishes/new', views.dispNewWishes),
    path('wishes/edit/<int:wish_id>', views.dispEditWish),

    # action paths
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logOut),
    path('destroy/<int:wish_id>', views.destroy),
    path('createWish', views.createWish),
    path('edit/<int:wish_id>', views.editWish),
    path('wishes/<int:wish_id>/granted', views.granted)
]
