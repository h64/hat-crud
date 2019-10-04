from flask import Blueprint, render_template, redirect, request
from sense_hat import SenseHat

sense = SenseHat()
paint_blueprint = Blueprint('paint', __name__, url_prefix='/paint')

@paint_blueprint.route('/', methods=('GET', 'POST'))
def paint():
    if request.method == 'GET':
        return render_template('paint.html')
    elif request.method == 'POST':
        # request.form[]
        # pixel_matrix = [

        # ]
        # sense.set_pixels(pixel_matrix)
        pass
    else:
        return redirect('/paint')
