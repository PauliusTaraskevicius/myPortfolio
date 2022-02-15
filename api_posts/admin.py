from django.contrib import admin

from .models import Post

@admin.register(Post)
class PostModel(admin.ModelAdmin):
    list_filter = ('title', 'sub_title', 'created')
    list_display = ('title', 'sub_title', 'created')
    prepopulated_fields = {'slug': ('title',)}