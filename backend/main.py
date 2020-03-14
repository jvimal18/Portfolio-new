from bottle import Bottle,route, run, static_file, url, request, get, redirect, default_app, response
import sys, os
from Apps.flames import flames


app = Bottle()

@app.hook('after_request')
def enable_cors():
    print("After Request")
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

@app.get("/")
def home():
    redirect('index.html')

@app.route('/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root='./dist')

@app.get('/flames')
def getresult():
    male=request.query['male']
    female=request.query['female']
    return flames(male, female)


run(app, host='0.0.0.0', port=1808, reloader=True, debug=True )

# application = default_app()

