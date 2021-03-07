from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from . models import Trip, User


##############################################
# display methods
def dispLogin(request):
    if 'userID' in request.session:
        return redirect('/dashboard')
    return render(request, 'login.html')


def dispDashboard(request):
    if 'userID' not in request.session:
        return redirect('/')
    context = {
        "thisUser": User.objects.get(id=request.session['userID']),
        'fun': Trip.objects.all()
    }
    return render(request, 'dashboard.html', context)


def dispCreateTrip(request):
    context = {
        "thisUser": User.objects.get(id=request.session['userID'])
    }
    return render(request, 'createTrip.html', context)


def dispEditTrip(request, trip_id):
    context = {
        'editThisUser': User.objects.get(id=request.session['userID']),
        'editFun': Trip.objects.get(id=trip_id)
    }
    return render(request, 'editTrip.html', context)


def dispInfoTrip(request, trip_id):
    context = {
        'thisUser': User.objects.get(id=request.session['userID']),
        'thisTrip': Trip.objects.get(id=trip_id)
    }
    return render(request, 'infoTrip.html', context)


# action methods


def register(request):
    if not request.POST:
        return redirect('/')
    # When I click register I come here and I determine what
    # need get post data from
    # this comes in on request.POST
    # validate that everything is valid
    errors = User.objects.register_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        # if valid add to database and login bcrypt
        return redirect('/')
        # if invalid we return redirect to the register page
    else:  # if everything checks out, the info will process through.
        pw_hash = bcrypt.hashpw(
            request.POST['password'].encode(), bcrypt.gensalt()).decode()

        newUser = User.objects.create(
            first_name=request.POST['fname'],
            last_name=request.POST['lname'],
            email=request.POST['email'],
            password=pw_hash,
        )
        request.session['userID'] = newUser.id
    return redirect('/dashboard')


def login(request):
    # this is when you click on the login button
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        # if valid add to database and login bcrypt
        return redirect('/')
    user = User.objects.filter(email=request.POST['email'])
    logUser = user[0]
    if bcrypt.checkpw(request.POST['password'].encode(), logUser.password.encode()):
        request.session['userID'] = logUser.id
        return redirect('/dashboard')
    else:
        messages.error(request, 'email or password invalid')
        return redirect('/')


def logOut(request):
    # this is when you click on the log out button
    request.session.clear()
    return redirect('/')


def createTrip(request):
    errors = Trip.objects.trip_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        # if valid add to database and login bcrypt
        return redirect('/trips/new')

    newTrip = Trip.objects.create(
        destination=request.POST['destination'],
        start_date=request.POST['start_date'],
        end_date=request.POST['end_date'],
        plan=request.POST['plan'],
        user=User.objects.get(id=request.session['userID'])
    )

    return redirect('/dashboard')


def editTrip(request, trip_id):

    errors = Trip.objects.trip_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        # if valid add to database and login bcrypt
        return redirect(f'/trips/edit/{trip_id}')

    print('in the edit')
    newEdit = Trip.objects.get(id=trip_id)
    newEdit.destination = request.POST['destination']
    newEdit.start_date = request.POST['start_date']
    newEdit.end_date = request.POST['end_date']
    newEdit.plan = request.POST['plan']
    newEdit.save()
    return redirect('/dashboard')


def destroy(request, trip_id):
    deleteTrip = Trip.objects.get(id=trip_id)
    deleteTrip.delete()
    return redirect('/dashboard')

# Create your views here.
