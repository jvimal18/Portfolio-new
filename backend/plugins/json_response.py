from functools import wraps
from json import dumps
from bottle import response


# Bottle Plugin to convert api response to JSON
def response_to_json(callback):
    @wraps(callback)
    def wrapper(*args, **kwargs):
        body = callback(*args, **kwargs)
        response.set_header("Content-Type", "application/json")
        return dumps(body)
    return wrapper