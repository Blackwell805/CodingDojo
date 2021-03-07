from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from . models import User, Wish


##############################################
# display methods
def dispLogin(request):
    if 'userID' in request.session:
        return redirect('/wishes')
    return render(request, 'login.html')


def dispWishes(request):
    if ('userID' not in request.session):
        return redirect('/')
    context = {
        "thisUser": User.objects.get(id=request.session['userID']),
        'allWishes': Wish.objects.all()
    }
    return render(request, 'wishes.html', context)


def dispNewWishes(request):
    context = {
        'thisUser': User.objects.get(id=request.session['userID'])
    }
    return render(request, 'newWishes.html', context)


def dispEditWish(request, wish_id):
    context = {
        'thisUser': User.objects.get(id=request.session['userID']),
        'editWish': Wish.objects.get(id=wish_id)
    }
    return render(request, 'editWish.html', context)

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
    return redirect('/wishes')


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
        return redirect('/wishes')
    else:
        messages.error(request, 'email or password invalid')
        return redirect('/')


def logOut(request):
    # this is when you click on the log out button
    request.session.clear()
    return redirect('/')


def destroy(request, wish_id):
    deleteWish = Wish.objects.get(id=wish_id)
    deleteWish.delete()
    return redirect('/wishes')


def createWish(request):
    errors = Wish.objects.wish_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/wishes/new')

    newWish = Wish.objects.create(
        iWishFor=request.POST['iWishFor'],
        description=request.POST['description'],
        granted=False,
        user=User.objects.get(id=request.session['userID'])
    )
    return redirect('/wishes')


def editWish(request, wish_id):
    errors = Wish.objects.wish_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f'/wishes/edit/{wish_id}')

    editWish = Wish.objects.get(id=wish_id)
    editWish.iWishFor = request.POST['iWishFor']
    editWish.description = request.POST['description']
    editWish.save()
    return redirect('/wishes')


def granted(request, wish_id):
    grantedWish = Wish.objects.get(id=wish_id)
    grantedWish.granted = True
    grantedWish.save()
    print(grantedWish.user.first_name)
    print(grantedWish.granted)
    return redirect('/wishes')

##############################################
# helper function


# def isNotLoggedIn(request):
#     if 'userID' not in request.session:
#         return redirect('/')

# def isNotLoggedIn(request):
#     if 'userID' not in request.session:
#         return True
#     else:
#         return False
#############################################
# Create your views here.
