from django.shortcuts import render, redirect
from . models import Dojo, Ninjas


def index(request):
    context = {
        'dojos': Dojo.objects.all()
    }
    return render(request, 'index.html', context)


def newDojo(request):

    newDojo = Dojo.objects.create(
        name=request.POST['name'],
        city=request.POST['city'],
        state=request.POST['state'],
        desc=request.POST['desc']
    )
    newDojo.save()
    return redirect('/')


def newNinja(request):

    newNinja = Ninjas.objects.create(
        first_name=request.POST['first_name'], last_name=request.POST['last_name'],
        dojo_id=request.POST['dojo_id'],
    )
    newNinja.save()

    return redirect('/')


def destroy(request):
    for dojo in Dojo.objects.all():
        dojo.delete()
    return redirect("/")
# Create your views here.
