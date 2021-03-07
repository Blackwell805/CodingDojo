from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from . models import Job, User
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
        'thisJob': Job.objects.all(),
    }
    return render(request, "dashboard.html", context)


def dispCreateJob(request):
    if 'userID' not in request.session:
        return redirect('/')
    context = {
        "thisUser": User.objects.get(id=request.session['userID']),
    }
    return render(request, 'createJob.html', context)


def dispEditJob(request, job_id):
    context = {
        'thisUser': User.objects.get(id=request.session['userID']),
        'editJob': Job.objects.get(id=job_id)
    }

    return render(request, 'editJob.html', context)


def dispViewJob(request, job_id):
    context = {
        'thisUser': User.objects.get(id=request.session['userID']),
        'thisJob': Job.objects.get(id=job_id)
    }
    return render(request, 'viewJob.html', context)


###############################################

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


def createJob(request):
    errors = Job.objects.job_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        # if valid add to database and login bcrypt
        return redirect('/jobs/new')

    newJob = Job.objects.create(
        title=request.POST['title'],
        description=request.POST['description'],
        location=request.POST['location'],
        user=User.objects.get(id=request.session['userID'])
    )

    return redirect('/dashboard')


def editJob(request, job_id):
    errors = Job.objects.job_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f'/jobs/edit/{job_id}')

    newEdit = Job.objects.get(id=job_id)
    newEdit.title = request.POST['title']
    newEdit.description = request.POST['description']
    newEdit.location = request.POST['location']
    newEdit.save()
    return redirect('/dashboard')


def destroy(request, job_id):
    deleteJob = Job.objects.get(id=job_id)
    deleteJob.delete()
    return redirect('/dashboard')
# Create your views here.
