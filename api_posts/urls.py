from django.urls import path

from .views import PostListView, PostDetailView

app_name='api_posts'

urlpatterns = [
    path('posts/', PostListView.as_view()),
    path('posts/<str:slug>', PostDetailView.as_view())
]