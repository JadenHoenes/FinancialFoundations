# Financial Foundations Web App

Clone the repo:

```
$ git clone https://choenes@bitbucket.org/choenes/ff.git
$ cd ff/api
$ npm install
```
- Install mysql server locally if you don't have one already
- Create a new db called ff
- Change make your db credentials match the "db" key in server/datasources.json

user: root
pwd: {empty}

Setup the database and start the server:

```
$ node server/create-tables.js
$ npm run start
```
