from django.shortcuts import render, HttpResponse
from time import gmtime, strftime


def index(request):
    return HttpResponse('Here is the beginning')


def whatTimeIsIt(request):
    context = {
        "time": strftime('%c', gmtime())
    }
    return render(request, 'index.html', context)

# Create your views here.
