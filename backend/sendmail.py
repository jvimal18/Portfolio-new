import smtplib
from os import getenv

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from env import GMAIL_BOT_ID, GMAIL_BOT_PASS


def send_mail(user, email, msg, mail_bot=GMAIL_BOT_ID, mail_bot_pass=GMAIL_BOT_PASS):
    receiverid = ['j.vimal18@gmail.com', 'j.vimal@outlook.com']

    mail_content = msg

    #Setup the MIME
    message = MIMEMultipart()
    message['From'] = mail_bot
    message['To'] = ', '.join(receiverid)
    message['X-Priority'] = '2' # Setting high prioriy
    message['Subject'] = f'alert: Portfolio {user}:{email}'   #The subject line
    
    #The body and the attachments for the mail
    message.attach(MIMEText(msg, 'plain'))

    #Create SMTP session for sending the mail
    session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
    session.starttls() #enable security
    session.login(mail_bot, mail_bot_pass) #login with mail_id and password
    text = message.as_string()
    session.sendmail(mail_bot, receiverid, text)
    session.quit()

    return True