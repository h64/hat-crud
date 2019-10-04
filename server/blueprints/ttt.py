from flask import Blueprint, render_template

ttt_blueprint = Blueprint('ttt', __name__, url_prefix='/ttt')

@ttt_blueprint.route('/')
def ttt():
    return render_template('ttt.html')
