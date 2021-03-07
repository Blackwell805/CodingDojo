from django.shortcuts import render


def index(request):
    return render(request, "index.html")


def result(request):
    name = request.POST['name']
    cities = request.POST['cities']
    favorite = request.POST['favorite']
    comment = request.POST["comment"]
    context = {
        'name': name,
        'cities': cities,
        'favorite': favorite,
        'comment': comment,
        # 'name': request.POST['name'],
        # 'cities': request.POST['cities'],
        # 'favorite': request.POST['favorite'],
        # "comment": request.POST["comment"],
    }
    return render(request, 'show.html', context)

    # Create your views here.
