# Strapi application

## Método 1 (usando banco online e npm):
<b>· Instale as dependências:</b><br>
```yarn``` <br><br>
### Rodar com mongodb Atlas
<b>· Antes de rodar o strapi, associe o link do banco online MongoDB:</b><br>
```Connect ➞ Connect Your Application```<br>
➞ Copie e cole o link no arquivo .env do cms (ver .env.exemplo), usando a sua senha em ```<password>``` <br><br>
### Rodar com mongodb local no docker
  ``` docker-compose up -d ```

➞ Copie e cole tudo do arquivo .env.example para um novo arquivo .env
➞ em database.js 
### Para rodar o strapi:
```yarn develop```<br><br>
<b>· Com o strapi rodando, entre no link [/admin](http://localhost:1337/admin) e crie um usuário </b>
