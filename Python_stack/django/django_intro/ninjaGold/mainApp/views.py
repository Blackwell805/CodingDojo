from django.shortcuts import render, redirect
import random
from time import strftime, localtime


def index(request):
    if not 'gold' in request.session:
        request.session['gold'] = 0
    return render(request, 'index.html')


def process_money(request):
    time = strftime("%Y-%m-%d %H-%M %P", localtime())
    if not 'activities' in request.session:
        request.session['activities'] = []

    if request.POST['location'] == 'farm':
        randNum = random.randint(10, 20)
        request.session['gold'] += randNum
        print("enter farm button", randNum)
        request.session['activities'].append(
            f'received {randNum} gold from the farm! {time}')
    elif request.POST['location'] == 'cave':
        randNum = random.randint(5, 10)
        request.session['gold'] += randNum
        print("enter cave button", randNum)
        request.session['activities'].append(
            f'received {randNum} gold from the cave! {time}')
    elif request.POST['location'] == 'house':
        randNum = random.randint(2, 5)
        request.session['gold'] += randNum
        print("enter house button", randNum)
        request.session['activities'].append(
            f'received {randNum} gold from the house! {time}')
    elif request.POST['location'] == 'casino':
        randNum = random.randint(-50, 50)
        request.session['gold'] += randNum
        print("enter casino button", randNum)
        request.session['activities'].append(
            f'received {randNum} gold from the casino! {time}')
    return redirect('/')


def destroy(request):
    del request.session['gold']
    return redirect('/')
# Create your views here.
