from django.shortcuts import redirect, render


def index(request):
    if not 'counter' in request.session:
        # This is creating it the counter. We are creating a variable here. This variable will go into the HTML to be called upon.
        request.session['counter'] = 0
    request.session['counter'] += 1  # how it adds one everytime
    return render(request, 'index.html')


def destroy(request):
    del request.session['counter']
    return redirect('/')


# Create your views here
