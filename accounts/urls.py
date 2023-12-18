#write the code to display the home page
from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('login', views.login_page, name='login'),
    path('register', views.register, name='register')
]
