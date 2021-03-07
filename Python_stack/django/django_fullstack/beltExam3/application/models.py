from django.db import models
import re

from django.db.models.fields import DateField, DateTimeField
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


# create your managers here
class UserManager(models.Manager):
    def register_validator(self, postData):
        errors = {}
        print(len(postData))
        # if 'fname' in postData:
        if len(postData['fname']) < 2:
            errors['fname'] = 'First Name needs to be more than 2 characters.'
        if not str.isalpha(postData['fname']):
            errors['fname'] = "Your first name should not have a number in it!"
        # else:
            # errors['fname'] = 'You did not put anything in!!!!'

        if 'lname' in postData:
            if len(postData['lname']) < 2:
                errors['lname'] = 'Last Name needs to be more than 2 character.'
            if not str.isalpha(postData['lname']):
                errors['lname'] = "Your last name should not have a number in it!"
        else:
            errors['lname'] = "Come on, man, don't leave me hanging!"

        # this checks to make sure if the email is in the database
        if 'email' in postData:
            if not EMAIL_REGEX.match(postData['email']):
                errors['email'] = "Invalid email address!"
        # this checks to make sure the account email isn't already being used
            if User.objects.filter(email=postData['email']):
                errors['emails'] = 'This address is already being used with another account!!'
        else:
            errors['email'] = 'Your email is required here, dude!'

        if 'password' in postData:
            if len(postData['password']) < 8:
                errors['password'] = 'Your password is less than 8 characters'
        else:
            errors['password'] = 'Well, how am I supposed to connect with you? Try again, man!'

        if 'chkpassword' in postData:
            if postData['password'] != postData['chkpassword']:
                errors['chkpassword'] = 'Sorry, your passwords does not match!'
        else:
            errors['chkpassword'] = "No password found!"

        return errors

    def login_validator(self, postData):
        errors = {}
        if 'email' in postData:
            if not EMAIL_REGEX.match(postData['email']):
                errors['email'] = "Email or password doesn't exist!"
        # this checks to make sure the account email isn't already being used
            if not User.objects.filter(email=postData['email']):
                errors['emails'] = "Email or password doesn't exist!"
        return errors


class WishManager(models.Manager):
    def wish_validator(self, postData):
        errors = {}
        if len(postData['iWishFor']) < 3:
            errors['iWishFor'] = 'Your wish needs to be more than 3 characters.'
        if 'description' in postData:
            if len(postData['description']) < 3:
                errors['description'] = 'Sorry, your description is not long enough!'

        return errors


class User(models.Model):
    # id
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = UserManager()


class Wish(models.Model):
    # id
    iWishFor = models.CharField(max_length=255)
    description = models.TextField()
    granted = models.BooleanField(('granted'))
    granted_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        User, related_name='wishes', on_delete=models.CASCADE)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now_add=True)
    objects = WishManager()
# Create your models here.
