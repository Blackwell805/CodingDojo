from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from . models import User, Book, Review


# display methods


def dispLogin(request):
    if 'userID' in request.session:
        return redirect('/books')
    return render(request, 'login.html')


def dispBooks(request):
    if "userID" not in request.session:
        return redirect('/')
    recentBooks = Book.objects.order_by('-created_at')[:3]
    context = {
        'allBooks': Book.objects.all(),
        'thisUser': User.objects.get(id=request.session['userID']),
        'firstThree': recentBooks
    }
    return render(request, 'books.html', context)


def dispAddBook(request):
    context = {
        'thisUser': User.objects.get(id=request.session['userID']),
        'allBooks': Book.objects.all()
    }
    return render(request, 'add.html', context)


def dispAddReview(request, book_id):
    context = {
        'thisUser': User.objects.get(id=request.session['userID']),
        'thisBook': Book.objects.get(id=book_id),
    }
    return render(request, 'review.html', context)


def dispUser(request):
    context = {
        'thisUser': User.objects.get(id=request.session['userID']),
        'allBooks': Book.objects.all()
    }
    return render(request, 'user.html', context)

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
    return redirect('/books')


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
        return redirect('/books')
    else:
        messages.error(request, 'email or password invalid')
        return redirect('/')


def logOut(request):
    # this is when you click on the log out button
    request.session.clear()
    return redirect('/')


def deleteBooks(request):
    deleteBook = Book.objects.all()
    deleteBook.delete()
    # if deleteBook == True:
    #     deleteUser = User.objects.all()
    #     deleteUser.delete()

    return redirect('/books')


def addBook(request):
    print(request.POST)
    if request.POST['typedAuthor']:
        author = request.POST['typedAuthor'],
    else:
        author = request.POST['selectedAuthor'],
        # this is where I add a new book
    newBook = Book.objects.create(
        title=request.POST['title'],
        author=author
    )
    # this is where I adding a book to this review
    newReview = Review.objects.create(
        review=request.POST['review'],
        rating=request.POST['rating'],
        book_reviewed=newBook,
        reviewed_by=User.objects.get(id=request.session['userID'])
    )

    return redirect(f'/books/{newBook.id}')
# Create your views here.
