
## API Reference

### Games

#### Get all games

```http
  GET /games
```

#

#### Get Games by Genre

```http
  GET /games/count
```

#

#### Get Games by Genre Id

```http
  GET /games/genre/id
```

#

#### Insert Game
```http
  POST /games
```
body: 
```
  {
    "name" : "Settlement Survival",
    "plataform": "Steam",
    "genreId": 1
  }
```

#

#### Add to Wishlist or Rate Game
```http
  POST /games/wishlist/id
```
[body] Add on Wishlist: 
```
  {
    "idUser": 1
  }
```

[body] Rate Game: 
```
  {
    "idUser": 1
    "rating": 6
  }
```

#

#### Delete Game
```http
  DELETE /games/id
```

### Genres

#### Get all genres

```http
  GET /genres
```

#

#### Insert genre

```http
  POST /genres
```
body: 
```
  {
    "type" : "Strategy"
  }
```
#

#### Delete Genre
```http
  DELETE /genres/id
```

#

### Users

#### Get all users

```http
  GET /users
```

#

#### Get all games in wishlist by user id

```http
  GET /users/id/wishlist
```

#

#### Insert user

```http
  POST /users
```
body: 
```
  {
    "name" : "João",
	"email" : "joao@hotmail.com",
	"password" : "123456"
  }
```
#

#### Delete Genre
```http
  DELETE /users/id
```
