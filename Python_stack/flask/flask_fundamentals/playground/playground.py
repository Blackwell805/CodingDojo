from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/play/<int:times>/<color>')
def display(times, color):
    return render_template('index.html', times=times, color=color)


# @app.route pass


if __name__ == "__main__":
    app.run(debug=True)
