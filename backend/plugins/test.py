import logging
from logging.handlers import RotatingFileHandler


logger = logging.getLogger('my_logger')
handler = RotatingFileHandler("my_log.log", maxBytes=20000, backupCount=10)
log_file_format = "[%(levelname)s] - %(asctime)s - %(name)s - : %(message)s in %(pathname)s:%(lineno)d"


formatter = logging.Formatter(log_file_format)
handler.setFormatter(formatter)

logger.addHandler(handler)
logger.setLevel(logging.INFO)


for _ in range(10000):
    logger.debug("Hello, world!")

for _ in range(10000):
    logger.warning('Hello, world!')

for _ in range(10000):
    logger.info('Hello, world!')