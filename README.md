# Xrayers
Since COVID has created a shortage of doctors, Xrayers is a website that helps you cure some of your common symptoms and detect fractured bones. All without a visit to the doctor's office.

## Inspiration
COVID-19 has caused a lot of havoc around the world and is constantly endangering the health of people. Accompanying endangered health and adding further to the misery, there is a shortage of doctors around the world. People who suffer from injuries and have disturbing symptoms can't book appointments because the doctors are too busy with other COVID-19 issues. Another inspiration for our project comes from low income households that can't afford health care and struggle with booking doctors appointments. We built Xrayers so that we can help people like this and make a positive impact on the community by providing a resource for people access in times of health difficulties. Finally, the main inspiration and goal of the website is to help people with health care regardless of their situations (whether their environment and surroundings don't allow a doctor's appointment or they can't afford one).

## What it does
Xrayers is a website/app that is designed to help people suffering health difficulties who can't visit a doctor because their surroundings don't allow them to or they can't afford it or for other reasons whatsoever. Xrayers provides three main features to the people using the website: **MedBot, Hospitals**, and **Classifier**

The first feature **MedBot** is an autonomic bot that interacts with users on their symptoms. It asks people for their symptoms and provides possible cures and actions a person can take. The goal of MedBot is to prevent a doctor's visit by treating minor distressing symptoms at home through the cures provided. This allows for people to solve their medical problems and saves a doctor's visit. It aims to help both the patients and the doctors through the benefits it provides    

The second feature is the **Hospitals** feature. The Hospitals feature quite simply provides locations for nearby hospitals if there really is an emergency or for the users to browse hospital locations as a precaution.

The last and the biggest feature Xrayers provides is the **Classification** feature. The Classification feature takes in images of X rays of bones and then through a trained machine learning model provides a prediction for whether the bone is fractured or not. This feature is helpful because people can just have their X rays done and they don't have to visit a doctor or have a doctor look over the X-rays (this helps save the doctor's time and a visit to the doctor's and money for low-income households). Since the forearm is one of the most commonly broken bone and approximately 40% of childhood fractures are radius and ulnar fractures and because of time and data-set restrictions, the model, for now, is only trained to detect fractures in the forearm still helping a great deal of people.  

## How we built it
The project vastly uses the three main languages of Web development: HTML, CSS, and JS. In addition, the project also uses python to train and use the machine learning model. Overall, the project uses the Flask framework to coordinate the backend.

The MedBot is build through JavaScript functions that respond according to the user's input and is shaped as a chat room to make the user feel like they are talking to a real person.

The Hospitals feature uses an embedded google map to show nearby hospital locations.

The Classification feature is a self made machine learning model built by our team and uses Keras and tensorflow for the backend and help manipulating the model. The model is trained through specially selected pictures by our team to provide maximum accuracy. The frontend takes in the picture given by the user and runs it through our image classifying neural network to provide the user with a prediction related to the bone. The neural network and the datasets were built by our team. The model is integrated into the website using the python Flask framework.  

## Challenges we ran into
One of the biggest challenges we ran into was finding a dataset to train the image classifying model. A lot of our time was spent looking for a dataset and upon not finding one, the team persevered through built their own dataset. Since we were new to flask, learning the framework was a new challenge. 

## Accomplishments that we're proud of
Building and completing a project that provides real value to human beings regardless of their condition or situation is the accomplishment we are proud of.

## What we learned
We learned a great deal on a lot of specific topics. 

Machine Learning: we learned how to organize folders for datasets, how to build a dataset, how to integrate a machine learning model into a website,  and how to build and train a machine learning image classifier.

Web Development: We learned how to code using the flask framework, how to use flask to integrate a model into a website, and we learned a lot of other JavaScript and CSS tips and tricks that helped us build a functional and user friendly website.

## What's next for Xrayers
The Xrayers team plans on making the machine learning model even more accurate (by adding more content into the dataset to train the model even efficiently. We were only able to built a limited dataset because of time restraints). The team also hopes to allow users to upload more pictures of different bones of the body so that they are not limited to just uploading forearm X-rays. Lastly, the team hopes to expand the project and make it available to as many people as possible so that they can gain value from it.
