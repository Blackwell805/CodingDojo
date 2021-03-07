from django.shortcuts import redirect, render
from . models import Books, Authors


def index(request):
    context = {
        'books': Books.objects.all(),
        'authors': Authors.objects.all()
    }
    return render(request, 'index.html', context)


def addBook(request):
    addBook = Books.objects.create(
        title=request.POST['title'],
        desc=request.POST['desc'],
    )
    addBook.save()
    return redirect('/')


def addAuthor(request):
    addAuthor = Authors.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        notes=request.POST['notes'],
    )
    addAuthor.save()
    return redirect('/')


def displayBook(request, id):
    book = Books.objects.get(id=id)
    authors = Authors.objects.all(id=id)
    context = {
        'book': book,
        'authors': authors
    }
    return render(request, 'book.html', context)


def displayAuthor(request, id):
    author = Authors.objects.get(id=id)
    books = Books.objects.all()
    context = {
        'author': author,
        'books': books,
    }
    return render(request, 'author.html', context)


def addToBookList(request, id):
    banana = Authors.objects.get(id=id)
    bananaBook = Books.objects.get(id=request.POST['book_id'])
    bananaBook.author.add(banana)
    return redirect('/author/' + str(id))


def addToAuthorList(request, id):
    banana = Books.objects.get(id=id)
    bananaBook = Authors.objects.get(id=request.POST['author_id'])
    bananaBook.book.add(banana)
    return redirect('/book/' + str(id))


def destroy(request):
    for book in Books.objects.all():
        book.delete()
    for author in Authors.objects.all():
        author.delete()
    return redirect("/")
    # Create your views here.
