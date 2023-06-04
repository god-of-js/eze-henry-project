# Lord of the Rings API Documentation

The Lord of the Rings API is a RESTful API that provides access to various resources related to the Lord of the Rings movies. The API is used in this project to fetch data such as movies, characters, and quotes.

## BASE URL

The base URL for the API is https://the-one-api.dev/v2.

## API Requests

This project utilizes the repository pattern for API requests. The reason is to make the underlying technology changeable with little modification to it's dependants. e.g (Changing from REST to GraphQL);

### GET Movies

To retrieve all movies in the Lord of the rings collection.

```
getMovies(): Promise<Movie[]>
```

### GET Movie

To retrieve details of a particular movie

```
getMovieBy(id: string): Promise<Movie>

```

### GET Quotes Of a Movie

To retrieve quotes of a particular movie. NB: This feature is only available on the Lord of the rings Trilogy

```
getMovieQuotesBy(id: string): Promise<{
  docs: Quote[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}>
```

### GET All Quotes

To get all quotes on the platform

```
getQuotes(): Promise<{
  docs: Quote[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}>
```

### GET Characters

To get all characters and casts, 

```
getCharacters(): Character[];
```