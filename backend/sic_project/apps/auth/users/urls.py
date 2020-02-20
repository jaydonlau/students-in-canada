from django.urls import path
from apps.auth.users.views import UserLoginView, UserRegistrationView

urlpatterns = [
    path('login/', UserLoginView.as_view()),
    path('register/', UserRegistrationView.as_view()),
]