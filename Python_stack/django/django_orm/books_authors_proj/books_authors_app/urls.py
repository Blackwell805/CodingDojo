from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('addBook', views.addBook),
    path('addAuthor', views.addAuthor),
    path('book/<int:id>', views.displayBook, name='view_book'),
    path('author/<int:id>', views.displayAuthor, name='view_author'),
    path('destroy', views.destroy),
    path('author/<int:id>/addBook', views.addToBookList),
    path('book/<int:id>/addAuthor', views.addToBookList)
]
