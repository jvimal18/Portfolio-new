from bottle import request, response
from datetime import datetime
from functools import wraps
import logging
from logging.handlers import RotatingFileHandler


logger = logging.getLogger('myapp')

# set up the logger
# logger.setLevel(logging.INFO)
# file_handler = logging.FileHandler('site-logs/app.log')
# formatter = logging.Formatter('%(msg)s')
# file_handler.setLevel(logging.DEBUG)
# file_handler.setFormatter(formatter)
# logger.addHandler(file_handler)


logger = logging.getLogger('my_logger')
handler = RotatingFileHandler("site-logs/app.log", maxBytes=200000, backupCount=10)
log_file_format = "[%(levelname)s] - %(asctime)s : %(message)s"


formatter = logging.Formatter(log_file_format)
handler.setFormatter(formatter)

logger.addHandler(handler)
logger.setLevel(logging.INFO)

class Logger:
    api = 2

    def __init__(self, app_name=None):
        self.app = app_name  if app_name else 'app'


    def apply(self, callback, route):
        '''
        Wrap a Bottle request so that a log line is emitted after it's handled.
        (This decorator can be extended to take the desired logger as a param.)
        '''
        def _log_to_logger(*args, **kwargs):
            request_time = datetime.now()
            actual_response = callback(*args, **kwargs)
            # modify this to log exactly what you need:
            logger.info(f'[{request.remote_addr}] {request.method} {self.app} {request.url} {response.status}')
            return actual_response
        return _log_to_logger