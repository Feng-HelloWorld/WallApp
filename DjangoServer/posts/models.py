from django.db import models


# Create your models here.
class Post(models.Model):
    """
    post info
    """
    text = models.CharField(max_length=1000)
    username = models.CharField(max_length=64)
    time = models.DateTimeField(auto_now_add=True)
