from django.shortcuts import render, redirect,  HttpResponse
from django.http import JsonResponse

# Create your views here.


def index(request):
    return redirect('blogs/')


def blog(request):
    return HttpResponse('placeholder to later display a list of all blogs')


def new(request):
    return HttpResponse("placehold to display a new form to create a new blog")


def create(request):
    return redirect('/')


def show(request, number):
    return HttpResponse(f'placeholder to display blog number: {number} ')


def edit(request, number):
    return HttpResponse(f'placeholder to edit blog: {number}')


def destroy(request):
    return redirect('blogs')


def json(request):
    return JsonResponse({"first_name": "Austin", 'last_name': "Blackwell"})
