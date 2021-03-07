# 1 Create virtual environment
 python3 - m venv name_of_environment
# 2 Activate environment
 source name_of_environment/bin/activate 
# 3 install Django in you environment
(name_of_environment)  pip install Django == 2.2.4
# 4 Create Django project.
> cd python_stack/django/django_intro
django_intro > django-admin startproject your_project_name_here
# 5 test it out on the server. Open Localhost:8000 in a browser window.
django_intro > cd your_project_name_here
your_project_name_here > python manage.py runserver
# 6 add an App to the project. Apps in projects CANNOT have the same name as the project. DO THIS FIRST BEFORE EDITING SETTINGS AND URLS!
your_project_name_here > python manage.py startapp your_app_name_here
# 7 find settings.py.
```py
INSTALLED_APPS = [
    'your_app_name_here',  # added this line. Don't forget the comma!!
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]      # the trailing comma after the last item in a list, tuple, or dictionary is commonly accepted in Python
```
# 8 create the route "/" to be associated with a specific function. This will be in your settings file for the project name.
```py
# You should be in your_project_name_here/your_project_name_here/urls.py
# from django.urls import path, include           # import include
# from django.contrib import admin              # comment out, or just delete
urlpatterns = [
    path('', include('your_app_name_here.urls')),

    # path('admin/', admin.sites.urls)         # comment out, or just delete
]
```

# 9 create a new urls.py file in the your_app_name_here folder.    your_project_name_here/your_app_name_here/urls.py
```py
# from django.urls import path
# from . import views
urlpatterns = [
    path('', views.index),
]
```
# 10 put a function called index in our app's views.py file    your_project_name_here/your_app_name_here/views.py
```py
# from django.shortcuts import render, HttpResponse
def index(request):
    return HttpResponse("this is the equivalent of @app.route('/')!")
```

# 11 run app again. localhost:8000/

# Note: Do not manually change the name of any of your folders after creation! You will have to redo the entire project if you do.


# 12 Routing.
# be sure you are in project_name/project_name/urls.py for below code
```py
# from django.urls import path, include
urlpatterns = [
    path('', include('app_name.urls')),
]
```

# 13
# project_name/app_name/urls.py for below code
```py
# from django.urls import path
# from . import views	               # the . indicates that the views file can be found in the same directory as this file

urlpatterns = [
    path('', views.index),
]
```

# 14
# You should be in project_name/app_name/views.py
```py
# from django.shortcuts import render, HttpResponse
def index(request):
    return HttpResponse("response from index method from root route, localhost:8000!")


# THIS IS HOW THE CONNECTION IS MADE BETWEEN urls AND view.
# ROUTING WITH PARAMETERS
urlpatterns = [
    path('bears', views.one_method),  # would only match localhost:8000/bears
    # would match localhost:8000/bears/23
    path('bears/<int:my_val>', views.another_method),
    # would match localhost:8000/bears/pooh/poke
    path('bears/<str:name>/poke', views.yet_another),
    # would match localhost:8000/17/brown
    path('<int:id>/<str:color>', views.one_more),
]
# Look at how they connect. views.ONE is a function that you are wanting to be performed so you put that in the views file.


def one_method(request):  # no values passed via URL
    pass                                 


def another_method(request, my_val):  # my_val would be a number from the URL
    pass                                   # given the example above, my_val would be 23


def yet_another(request, name):	          # name would be a string from the URL


pass                                   # given the example above, name would be 'pooh'


def one_more(request, id, color): 	# id would be a number, and color a string from the URL
    # given the example above, id would be 17 and color would be 'brown'
    pass
```

# 15 set up your template files
# You should be in project_name/app_name/views.py
# You must name the folder 'templates', no exceptions.
```py
# from django.shortcuts import render	# notice the import!


def index(request):
    return render(request, "index.html")
    # when we call render, request is first, then second is string indicating which html file to render.

    # This is what you would see in the views files.
# from django.shortcuts import render


def index(request):
    context = {
        "name": "Noelle",
        "favorite_color": "turquoise",
        "pets": ["Bruce", "Fitz", "Georgie"]
    }
    return render(request, "index.html", context)
    ```

    # this is what it looks like in the in the index.html You cannot use square brackets with Django's template engine. Instead use dot notation. For example, array[0] becomes {{ array.0 }}
<h1 > Info From Server: < /h1 >
<p > Name: {{name}} < /p >
<p > Color: {{favorite_color}} < /p >
<p > Pets < /p >
<ul >
{ % for pet in pets % }
<li > {{pet}} < /li >
{ % endfor % }
</ul >


# 16 Set up static files. ie. style.css, images, js files. You set this up in EACH app, at the same level as templates folder.

<!DOCTYPE html >
   <html >
       <head >
            <meta charset = "utf-8" >
            <title > Index < /title >
            {% load static % }    # This is how we reference the static files on the HTML
            <link rel = "stylesheet" href = "{% static 'css/style.css' %}" >     
            <script src = "{% static 'js/script.js' %}" > </script >
        </head >
        <body >
            <img src = "{% static 'images/image.jpg' %}" />
        </body >

# 17 Be sure to migrate your file if you use session!
(djangoPy3Env) project_name> python manage.py migrate

# BIG THING TO REMEMBER 
# the ACTION of the form MUST be the same as what is LISTED in the urls which then is what ACTIVATES the method of what you want done


