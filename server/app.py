import os
from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS, cross_origin
from sense_hat import SenseHat

app = Flask(__name__, static_folder='../client/build')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
sense = SenseHat()

# Helper functions
def hex_to_rgb(ls):
    '''Convert #FFFFFF to [255, 255, 255]'''
    rgb_list = []
    for hex_code in ls:
        hex_code = hex_code.lstrip('#') # Strip '#' chart
        rgb = list(int(hex_code[i:i+2], 16) for i in (0, 2, 4)) # Convert to list
        rgb_list.append(rgb)
    return rgb_list

def rbg_to_hex(ls):
    '''Convert [255, 255, 255] to #FFFFFF'''
    hex_list = []
    for rgb in ls:
        hex_code = '#'
        for val in rgb: # Convert each num in rgb list into hex codes
            hex_val = hex((val))[2:]
            if len(hex_val) == 1: # convert 0
                hex_val += '0'
            hex_code += hex_val
        hex_list.append(hex_code)
    return hex_list

# API
@app.route('/paint/clear', methods=['POST'])
def clear():
    if request.method == 'POST':
        sense.clear()
        return jsonify(msg='Clear Success!')
    else:
        return jsonify(msg='Failed to clear screen')

@app.route('/paint/current')
def get_current():
    # GET current color matrix
    current_pixel_matrix = sense.get_pixels()
    current_pixel_matrix = rbg_to_hex(current_pixel_matrix)
    return jsonify(data=current_pixel_matrix)

@app.route('/paint', methods=['POST'])
@cross_origin()
def paint():
    # POST a new color matrix
    if request.method == 'POST':
        color_matrix = request.get_json().get('colorMatrix')
        if color_matrix is None:
            return jsonify(msg='Failed to draw: Bad input')
        
        sense.set_pixels(hex_to_rgb(color_matrix))
        return jsonify(msg='Paint Success!')
    else:
        return jsonify(msg='Failed to paint')


# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# Listen on port 5000 on debug mode. Open to all connections from same local network
app.run(debug=True, host='0.0.0.0')
