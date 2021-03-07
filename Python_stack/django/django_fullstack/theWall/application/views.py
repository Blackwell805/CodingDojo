from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from . models import Message, User, Comment


##############################################
# display methods
def dispLogin(request):
    if ('userID' not in request.session):
        return redirect('/')
    return render(request, 'login.html')


def dispSuccess(request):
    if ('userID' not in request.session):
        return redirect('/')
    context = {
        "thisUser": User.objects.get(id=request.session['userID']),
        'messages': Message.objects.all()

    }
    return render(request, 'success.html', context)

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
    return redirect('/success')


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
        return redirect('/success')
    else:
        messages.error(request, 'email or password invalid')
        return redirect('/')


def logOut(request):
    # this is when you click on the log out button
    request.session.clear()
    return redirect('/')
# Create your views here.


def postMessage(request):
    message = Message.objects.create(
        user_id=request.POST['userID'],
        message=request.POST['post']
    )
    user = User.objects.get(id=message.userID)
    user.messages.add(message)
    return redirect('/success')


def postComment(request):
    comment = Comment.objects.create(
        user_id=request.POST['messageID'],
        comment=request.POST['comment']
    )

    return redirect('/success')
