from django.shortcuts import render
from django.core.mail import send_mail, EmailMessage, EmailMultiAlternatives
from django.http import HttpResponse
from django.conf import settings

EMAIL_FROM = settings.EMAIL_FROM
EMAIL_TO = settings.EMAIL_FROM

def index(request):
    nome = request.GET.get('nome','')
    email=request.GET.get('email','') 
    ddd1=request.GET.get('ddd1','')
    ddd2=request.GET.get('ddd2','')
    consultor=request.GET.get('consultor','')
    conheceu1=request.GET.get('conheceu1','')
    conheceu2=request.GET.get('conheceu2','')
    conheceu3=request.GET.get('conheceu3','')
    conheceu4=request.GET.get('conheceu4','')
    conheceu5=request.GET.get('conheceu5','')
    conheceu55=request.GET.get('conheceu55','')
    precisa = request.GET.get('precisa','')
    cliente = request.GET.get('cliente','')

    conheceu = ''
    if conheceu1: conheceu += conheceu1 + ', '
    if conheceu2: conheceu += conheceu2 + ', '
    if conheceu3: conheceu += conheceu3 + ', '
    if conheceu4: conheceu += conheceu4 + ', '
    if conheceu5: conheceu += conheceu5 + ', '
    if conheceu55: conheceu += conheceu55 + ', '


    mensagem = """
    Segue os dados de contato:
    <br/>
    <br/>
    Nome: %s
    <br/>
    Email: %s
    <br/>
    Telefone: %s %s
    <br/>
    Consultor peferencial: %s
    <br/>
    Conheceu onde?: %s
    <br/>
    O que voce precisa?: %s
    <br/>
    Deseja receber nossa newsletter: %s
    <br/>
    """ % (nome, email, ddd1, ddd2, consultor, conheceu,  precisa, cliente)

    mail = EmailMultiAlternatives('Novo contato', mensagem, EMAIL_FROM, [EMAIL_TO])
    mail.attach_alternative(mensagem, "text/html")
    mail.send()   

    return HttpResponse("Mensagem %s " % mensagem)