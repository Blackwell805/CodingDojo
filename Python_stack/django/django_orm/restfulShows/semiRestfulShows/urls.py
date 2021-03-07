from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('shows', views.dispALL),
    path('shows/new', views.dispNewShow),
    path('shows/<int:show_id>', views.dispOneShow),
    path('shows/<int:show_id>/edit', views.dispEditShow),
    path('shows/create', views.addShow),
    path('shows/<int:show_id>/update', views.updateShow),
    path('shows/<int:show_id>/destroy', views.deleteShow),
    path('clear', views.clearList),

]
