# from gevent import monkey; monkey.patch_all()

import sys
import os

from bottle import Bottle, route, run, static_file, url, request, get, redirect, default_app, response
from json import loads, dumps
from mixins import enable_cors
from api import api

import plugins

app = application = Bottle()
app.mount("/api/v1", api)
# app.mount("/api/v1", flames_app)

api_logger = plugins.Logger(app_name='app')
app.install(api_logger)


@app.hook('after_request')
def after_hook():
    enable_cors()


@app.get("/test")
def home():
    return {"test": True}


@app.get("/")
def home():
    redirect('index.html')


@app.route('/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root='./dist')


if __name__ == '__main__':
    if "vscode-debug" in sys.argv:
        run(app, host='0.0.0.0', port=1808,  debug=True) # server="gevent"
    else:
        run(app, host='0.0.0.0', port=1808,  debug=True, reloader=True) # , server="gevent"

