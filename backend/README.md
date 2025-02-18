# Aprendendo CI/CD

# Backend
Criando novo usuário
curl -X POST http://127.0.0.1:8000/login/register/ -d "username=pedro&password=123456&email=pedro@email.com"
Resposta: {"message":"Usuário criado com sucesso!","user_id":2}

Solicitando token
curl -X POST http://127.0.0.1:8000/login/token/ -d "username=daniel&password=123456"
Resposta: {"refresh":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczOTk3NjIwMCwiaWF0IjoxNzM5ODg5ODAwLCJqdGkiOiJlNTJlNTMwMGQ3YTY0NGY1YjM3ZmI3YzE4YzI4MWE1OCIsInVzZXJfaWQiOjF9.zJmlQtRYkQgDymQXtTTydHlumLTdaDqAIQO8hBpXDWg","access":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5ODkxNjAwLCJpYXQiOjE3Mzk4ODk4MDAsImp0aSI6ImM0MjM0ZTI3N2ViYzQyYzQ5OTE3MjBiYmZhNzExNzYwIiwidXNlcl9pZCI6MX0.1_G1DgLY1zizclp5qaEB_v4k9E26vi7GXmdByyUp94w"}

Pesquisa de produtos
curl -H "Authorization: Bearer token" http://127.0.0.1:8000/api/produtos/
Resposta: [{"id":1,"nome":"Camiseta de time de futebol","descricao":"Camiseta para pratica de futebol","preco":89.99},{"id":2,"nome":"Impressora 3D","descricao":"Impressora 3D Creality K1C","preco":4199.99}]

Lista profile
curl -H "Authorization: Bearer token" http://127.0.0.1:8000/login/profile/
Resposta: {"id":1,"username":"daniel","email":"daniel@email.com","first_name":"","last_name":""}