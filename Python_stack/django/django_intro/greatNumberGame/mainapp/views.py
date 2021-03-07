from django.shortcuts import redirect, render, HttpResponse
import random


def index(request):
    if not 'roll' in request.session:
        request.session['roll'] = random.randint(1, 100)
        print(random.randint)
    return render(request, 'index.html')


def guess(request):
    if request.session['roll'] == int(request.POST['number']):
        print('you win')
        return render(request, 'youwin.html')
    elif request.session['roll'] < int(request.POST['number']):
        print('Too high')
        return render(request, 'toohigh.html')
    else:
        print('Too low')
        return render(request, 'toolow.html')


def destroy(request):
    del request.session['roll']
    return redirect('/')

# Create your views here.
