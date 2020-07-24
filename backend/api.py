from bottle import Bottle, route, run, static_file, url, request, get, redirect, default_app, response
from json import loads, dumps
from plugins import response_to_json
from mixins import enable_cors
from os import path

# Application level imports
from Apps.flames import flames_app
from Apps.tictactoe import ttt as tictactoe_app

from dbconnector import SiteData, BlogData
from sitecache import Cache
from config import GIST_URL, SITE_DATA, BLOG_META
from env import TELE_BOT_TOKEN
# from my_logging import Logger

# Tiny db imports
from tinydb.operations import increment
from tinydb import Query

# import telebot
import telegram
import sendmail
import plugins

import requests
import datetime
import json

api = Bottle()
site_cache = Cache()
# Adding Plugins
api.install(response_to_json)

# logger
api_logger = plugins.Logger(app_name='api')
api.install(api_logger)


# Adding Application to API interface
api.merge(flames_app)
api.merge(tictactoe_app)

# Initialize database
site_data = SiteData(SITE_DATA, sort_keys=True, indent=2)
blog_data = BlogData(BLOG_META, sort_keys=True, indent=2)
query = Query()

tele_bot = telegram.Bot(token=TELE_BOT_TOKEN)


# def getsitedate():  # Setup SiteDATA
#     with open(SITE_DATE, 'r') as sitedata:
#         _sitedata = loads(sitedata.read())
#     return _sitedata


# _sitedata = getsitedate()
# _data_mod_time = path.getmtime(SITE_DATE)


# @api.hook('before_request')
# def read_sitedata():
#     global _sitedata, _data_mod_time
#     temp_time = path.getmtime(SITE_DATE)
#     if _data_mod_time != temp_time:
#         _data_mod_time = temp_time
#         _sitedata = getsitedate()
@api.hook('after_request')
def after_hook():
    enable_cors()

@api.route('/getcompanydetails')
def getcompanydetails():
    return site_data.companies.all()


@api.route('/getpersonaldetails')
def getpersonaldetails():
    return site_data.personalDetails.get(doc_id=1)


@api.route('/getskills')
def getskills():
    return site_data.technicalKnowledge.all()


@api.route('/projects')
def getprojects():
    return site_data.personalProjects.all()


@api.route('/credits')
def getcredits():
    return site_data.credit.get(doc_id=1)


@api.route('/socialmedia')
def getcredits():
    return site_data.socialMedia.all()


@api.route('/getblogmeta')
def getblogmeta():
    return blog_data.get_all()


@api.route('/getblogcontent')
def getblogcontent():
    iid = request.query.get('id')
    data = site_cache.get_cache(iid, 'json')
    if data:
        return json.loads(data)

    res = requests.get(f'{GIST_URL}/{iid}.json').json()
    time = datetime.datetime.strptime(res['created_at'], "%Y-%m-%dT%H:%M:%S.%fZ")
    res['created_at'] = time.strftime('%d %b %Y')

    site_cache.save_cache(iid, json.dumps(res), 'json' )
    return res


@api.route('/incrementBlogView', method='POST')
def incrementBlogView():
    iid = request.json.get('id')
    name = request.json.get('name')
    return blog_data.increment_views(name, iid)


@api.route('/addpost', method='PUT')
def add_blog_meta():
    data = request.json
    blog_data.add_meta(data['category'], data['meta'])
    return blog_data.get_meta(data['category'], data['meta']['id'])
    

@api.route('/clearcache', method="DELETE")
def clear_cache():
    site_cache.reset_cache()


@api.post('/sendmsg')
def send_tele_msg():
    username, emailid, message = request.json.get('userName'), request.json.get('emailId'), request.json.get('message')
    chat_id=158775078

    text = f"""*Name*: {username}\n*MailID*: {emailid}\n*Message*:\n{message}"""

    res = tele_bot.send_message(chat_id=chat_id, 
                 text=text, 
                 parse_mode=telegram.ParseMode.MARKDOWN)

    sendmail.send_mail(username, emailid, text)
    return {'status':  True }



# Cross Origin Bypass for all routes
@api.route("/<url:re:.+>", method="OPTIONS")
def handle_options(url):
    enable_cors()
