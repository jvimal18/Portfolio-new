import config
from bottle import response

def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = config.ALLOWED_ORIGINS
    response.headers['Access-Control-Allow-Methods'] = config.ALLOWED_METHODS
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'