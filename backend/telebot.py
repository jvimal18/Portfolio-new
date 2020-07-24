import requests
from os import getenv
from env import TELE_BOT_TOKEN as api_token

import logging

logging.basicConfig(level=logging.DEBUG)

# https://www.pythonanywhere.com/forums/topic/27934/

chat_id=158775078

def send_message(userName, emailId, message):
    text = f"""*Name*: {userName}
*MailID*: {emailId}  
*Message*:  
{message}"""

    url = f'https://api.telegram.org/bot{api_token}/sendMessage'
    params = { 'chat_id':chat_id, 'text':text, 'parse_mode':'Markdown' }

    res = requests.get(url, params=params )

    return res.status_code


if __name__ == "__main__":
    from sys import argv

    print(send_message(argv[1], argv[2], argv[3]))