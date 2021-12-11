from django.db.models import Count
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from main.models import Blog, Author, Entry, Pizza
import random

from main.serializers import BlogSerializer


class BlogView(APIView):
    def get(self, request):
        blogs = []
        for i in range(20):
            blogs.append(Blog(name=f'Blog Name {random.random()}', tagline=f'Blog tagline {random.random()}'))
        Blog.objects.bulk_create(blogs)

        return Response({
            "ok": True
        }, status=status.HTTP_200_OK)


class AuthorView(APIView):
    def get(self, request):
        authors = []
        for i in range(20):
            authors.append(Author(name=f'Author Name {random.random()}', email=f'authoremail{random.randint(1, 100)}@gmail.com'))
        Author.objects.bulk_create(authors)

        return Response({
            "ok": True
        }, status=status.HTTP_200_OK)


class EntryView(APIView):
    def get(self, request):
        entries = []
        for i in range(10):
            entry = Entry(blog_id=random.randint(1, 20),
                                         headline=f'Entry headline {random.random()}',
                                         body_text=f'Entry body_text {random.random()}')
            for i in range(random.randint(1, 4)):
                author = Author.objects.create(name=f'Author name {random.random()}').save()
                entry.authors.add(author)
            entries.append(entry)

        Entry.objects.bulk_create(entries)

        return Response({
            'ok': True
        }, status=status.HTTP_200_OK)


class TestView(APIView):
    def get(self, request):
        pizzas = Pizza.objects.all()
        for pizza in pizzas:
            print(pizza)
        # print(q)
        # print(q.query)
        # entry = Entry.objects.select_related('blog').get(id=1)
        # print(entry.blog)
        # print(Entry.objects.values_list('authors'))
        # q = Blog.objects.annotate(a=Count('tagline'))
        return Response({
            'ok': True
            # 'count': q[22].a,
            # 'data': BlogSerializer(q, many=True).data
        }, status=status.HTTP_200_OK)
