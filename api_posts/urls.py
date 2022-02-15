from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import PostListView, PostDetailView

app_name='api_posts'

urlpatterns = [
    path('posts/', PostListView.as_view()),
    path('posts/<int:id>', PostDetailView.as_view())
]