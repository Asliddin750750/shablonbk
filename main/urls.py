from django.urls import path

from main.views import CountryView, LoginView, ProfileView

urlpatterns = [
    path('country/', CountryView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/', ProfileView.as_view())
]