import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

from os import path
if path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'Project3'
app.config["MONGO_URI"] = os.environ.get("MONGODB_URIs")
mongo = PyMongo(app)


@app.route('/')
def hello():
    return "Hello World... Again"

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
    port=int(os.environ.get('PORT')),
    debug=True)

