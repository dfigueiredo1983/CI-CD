from django.db import models

# Create your models here.
class Produto(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.TextField()
    preco = models.FloatField()

    def __str__(self):
        return f'{self.nome}'