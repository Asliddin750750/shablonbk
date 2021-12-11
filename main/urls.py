from django.urls import path

from main.views import BlogView, AuthorView, EntryView, TestView

urlpatterns = [
    path('blog/', BlogView.as_view(), name='blog'),
    path('author/', AuthorView.as_view(), name='author'),
    path('entry/', EntryView.as_view(), name='entry'),
    path('test/', TestView.as_view(), name='test')
]
