from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.core.mail import send_mail
from .serializers import RegisterModelSerializer
from wall import settings

class RegisterView(APIView):
    def post(self, request):
        # get user register data and valid
        serializer = RegisterModelSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # save to db
        user = User.objects.create_user(**serializer.validated_data)

        # send email
        subject = "Welcome to WALL APP"
        message = "You have registered successfully. Thanks for your support."
        send_mail(subject, message, settings.EMAIL_HOST_USER, [user.email], fail_silently=False)
        
        # return
        return Response({"code": 201, "detail": "Registration success"}, status=status.HTTP_201_CREATED)
