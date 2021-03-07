# Import Flask to allow us to create our app
from flask import Flask, render_template
# Create a new instance of the Flask class called "app"
app = Flask(__name__)


# The "@" decorator associates this route with the function immediately following
@app.route('/')
def index():
    return render_template('index.html', phrase="hello", times=5)


@app.route('/success')
def success():
    print('in success function')
    return "success"


# for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
@app.route('/hello/<name>')
def hello(name):
    print('*'*80)
    print('in hello name function')
    print(name)
    return "Hello, " + name

    # for a route '/users/____/____', two parameters in the url get passed as username and id


@app.route('/users/<username>/<id>')
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id: " + id


# app.run(debug=True) should be the very last statement!


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
