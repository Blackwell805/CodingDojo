from django.urls import path
from . import views


urlpatterns = [
    # display paths
    path('', views.dispLogin),
    path('books', views.dispBooks),
    path('books/add', views.dispAddBook),
    path('books/<int:book_id>', views.dispAddReview),
    path('users/<int:userID>', views.dispUser),
    # action paths
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logOut),
    path('destroy', views.deleteBooks),
    path('add', views.addBook),
]
