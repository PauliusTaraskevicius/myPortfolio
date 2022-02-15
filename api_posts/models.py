from django.db import models
from slugify import slugify


class Post(models.Model):
    title = models.CharField(max_length=100, blank=False)
    sub_title = models.CharField(max_length=100, blank=True)
    thumbnail = models.ImageField(null=True, upload_to='images', default='default.jpg')
    body = models.TextField(max_length=1000, null=True, blank=False)
    technologies_used = models.TextField(max_length=1000, null=True, blank=False)
    url = models.URLField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Post, self).save(*args, **kwargs)
