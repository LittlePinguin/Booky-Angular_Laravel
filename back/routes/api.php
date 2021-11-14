<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Get all books
Route::get('books', 'App\Http\Controllers\BooksController@getBook');

// Get books by author or title
Route::get('books/search_book', 'App\Http\Controllers\BooksController@getBookBySearch');

// Most popular books
Route::get('books/popular', 'App\Http\Controllers\BooksController@getPopularBooks');

// Get book details with id
Route::get('books/book_details/{id}', 'App\Http\Controllers\BooksController@getBookDetails');

// Get books from same author
Route::get('books/same_author/{author}', 'App\Http\Controllers\BooksController@getBookSameAuthor');