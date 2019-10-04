from flask import Flask, render_template
from sense_hat import SenseHat
from blueprints.paint import paint_blueprint
from blueprints.ttt import ttt_blueprint

app = Flask(__name__)

# Routes
@app.route('/')
def home():
    return render_template('index.html')

# Blueprints
app.register_blueprint(paint_blueprint)
app.register_blueprint(ttt_blueprint)

# Listen on port 5000 on debug mode. Open to all connections from same local network
app.run(debug=True, host='0.0.0.0')
