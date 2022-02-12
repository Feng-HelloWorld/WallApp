from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import PostModelSerializer
from .models import Post


# Create your views here.
class PostList(APIView):
    """
    List all posts, or create a new post.
    """
    def get(self, request):
        # get all data and serialize
        posts = Post.objects.all()
        serializer = PostModelSerializer(posts, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


    def post(self, request):
        # Check if user is logged in
        if not request.auth:
            return Response({'code': '401'}, status=status.HTTP_401_UNAUTHORIZED)

        # check data
        serializer = PostModelSerializer(data=request.data, partial=True)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # save data as current user
        serializer.validated_data['username'] = request.user.username
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class PostDetail(APIView):
    """
    Retrieve, update or delete a post instance.
    """
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            return Response({'code': '404'}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = PostModelSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        post = self.get_object(pk)
        serializer = PostModelSerializer(post, data=request.data,  partial=True)
        # serializer = PostModelSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
