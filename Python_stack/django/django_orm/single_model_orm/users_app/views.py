from django.shortcuts import render, redirect
from . models import User


def index(request):
    context = {
        'singleUser': User.objects.all()
    }
    return render(request, 'index.html', context)


def results(request):
    newUser = User.objects.create(
        first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], age=request.POST['age'])
    newUser.save()
    return redirect('/')


def destroy(request):
    request.session.clear()
    return redirect('/')
    # Create your views here.
