from django.shortcuts import render, redirect, HttpResponse
from . models import Show, Blog
from . contrib import messages


# DISPLAY METHODS


def root(request):
    return redirect('/shows')


def dispALL(request):
    context = {
        'shows': Show.objects.all()
    }
    return render(request, 'listOfShows.html', context)


def dispNewShow(request):
    return render(request, 'newShow.html')


def dispEditShow(request, show_id):
    context = {
        'thisShow': Show.objects.get(id=show_id)
    }
    return render(request, 'editShow.html', context)


def dispOneShow(request, show_id):
    context = {
        'show': Show.objects.get(id=show_id)
    }
    return render(request, 'Show.html', context)

    # ACTION METHODS


def addShow(request):
    addShow = Show.objects.create(
        title=request.POST['title'],
        network=request.POST['network'],
        releaseDate=request.POST['releaseDate'],
        desc=request.POST['desc'],
    )
    return redirect(f'/shows/{addShow.id}')


def updateShow(request, show_id):
    updated = Show.objects.get(id=show_id)
    updated.title = request.POST['title']
    updated.network = request.POST['network']
    updated.releaseDate = request.POST['releaseDate']
    updated.desc = request.POST['desc']
    updated.save()
    # this method updates my show in the database
    return redirect(f'/shows/{show_id}')


def deleteShow(request, show_id):
    erase = Show.objects.get(id=show_id)
    erase.delete()
    return redirect('/shows')


def clearList(request):
    for item in Show.objects.all():
        item.delete()
    return redirect('/shows')


# Create your views here.
