from rest_framework.generics import ListCreateAPIView
from main.models import Country
from main.serializers import CountrySerializer, LoginSerializer, UserSerializer, ProfileSerializer
# Token avtorizatsiya
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class CountryView(ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

# Token avtorizatsiya
class LoginView(APIView):

    permission_classes = [~IsAuthenticated]

    def post(self, request):
        serializers = LoginSerializer(data=request.data)
        if not serializers.is_valid():
            return Response({
                'ok': False,
                'data': "Validatsiya xato"
            })

        user = authenticate(username=serializers.validated_data["username"],
                            password=serializers.validated_data["password"])
        if user is None:
            return Response({
                'ok': False,
                'data': "Login va/yoki parol noto'g'ri"
            })

        token, is_create = Token.objects.get_or_create(user=user)

        return Response({
            'ok': True,
            'data': {
                'token': token.key,
                'user': UserSerializer(user).data
            }
        })

    def delete(self, request):
        if request.user.is_authenticated:
            request.auth.delete()# auth - token model obyekti

        return Response({
            'ok': True
        })


class ProfileView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        return Response({
            'ok': True,
            'data': {
                'user': UserSerializer(request.user).data
            }
        })

    def put(self, request):
        profile = ProfileSerializer(instance=request.user, data=request.data)

        if not profile.is_valid():
            return Response({
                'ok': False,
                'data': 'Validatsiya xato'
            })

        profile.save()

        return Response({
            'ok': True,
            'data': profile.data
        })



