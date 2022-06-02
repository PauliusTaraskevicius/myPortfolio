from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('administracija/', admin.site.urls),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('', include('api_posts.urls', namespace='api_posts')),
] 


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)