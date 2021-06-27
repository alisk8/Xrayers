from flask import Flask, render_template, request
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
from keras.models import load_model
import tensorflow as tf
import matplotlib.pyplot as plt
import cv2
import os
import numpy as np
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing import image
from tensorflow.keras.optimizers import RMSprop

model = load_model('bone_classification_model.h5')

app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello_world():
    return render_template('classifier.html')


@app.route('/home', methods=["GET"])
def get_contact():
    return(render_template('home.html'))


@app.route('/medbot', methods=['GET'])
def get_medbot():
    return render_template('medbot.html')


@app.route('/hosp', methods=["GET"])
def get_hosp():
    return(render_template('hosp.html'))


@app.route('/', methods=['POST'])
def predict():
    image_file = request.files['imagefile']
    image_path = './images/' + image_file.filename
    image_file.save(image_path)

    img = load_img(
        image_path, target_size=(200, 200))

    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    images = np.vstack([x])

    classification = ''

    val = model.predict(images)

    if val == 0:
        classification = 'Prediction: Bone is broken'
    else:
        classification = 'Prediction: Bone is not broken'

    return render_template('classifier.html', prediction=classification)


if __name__ == '__main__':
    app.run(debug=True)
