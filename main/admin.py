from django.contrib import admin

from main.models import Country


class CountryAdmin(admin.ModelAdmin):
    class Meta:
        model = Country
        fields = '__all__'

admin.site.register(Country, CountryAdmin)
