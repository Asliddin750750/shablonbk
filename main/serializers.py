# from rest_framework import serializers
#
# from main.models import Country
#
#
# class CountrySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Country
#         fields = '__all__'
from rest_framework import serializers

from main.models import Blog


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'