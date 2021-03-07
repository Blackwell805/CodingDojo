from flask import Flask
app = Flask(__name__)


@app.route('/')
def helloWorld():
    print('in hello world function')
    return "Hello World"


@app.route("/Dojo/")
def dojo():
    print('in dojo function')
    return "Dojo"


@app.route("/say/<name>")
def sayHi(name):
    print('in sayHi function')
    print(name)
    return f"Hi {name}!"


@app.route("/repeat/<num>/<str>/")
def repeats(num, str):
    print('in repeat function')
    print(num, str)
    return (int(num) * str)


# @app.route('')  # sensei bonus


if __name__ == "__main__":
    app.run(debug=True)
