from django.contrib import admin

from main.models import Blog, Author, Entry, Topping, Pizza, Restaurant

admin.site.register(Blog)
admin.site.register(Author)
admin.site.register(Entry)
admin.site.register(Topping)
admin.site.register(Pizza)
admin.site.register(Restaurant)