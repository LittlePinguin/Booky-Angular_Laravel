<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Books;

class BooksController extends Controller
{
    public function getBook() {
        return response()->json(Books::all(), 200);
    }

    public function getBookBySearch(Request $request) {
        $query = Books::query();
        $data = $request->input('search_book');
        if ($data){
            $query->whereRaw("title LIKE '%" .$data. "%'")
            ->orWhereRaw("author LIKE '%" .$data. "%'");
        }
        return $query->orderBy('title', 'asc')->get();
    }

    public function getPopularBooks() {
        $query = Books::query();
        return $query->orderBy('followers', 'desc')->limit(3)->get();
    }

    public function getBookDetails($id) {
        $book = Books::find($id);
        if(is_null($book)){
            return response()->json(['message'=>'Book not found'], 404);
        }
        return response()->json($book::find($id), 200);
    }

    public function getBookSameAuthor($author) {
        $query = Books::query();
        return $query->select("image")->whereRaw("author LIKE '%" .$author. "%'")->get();
    }
}

// public function getBookByTitle($title) {
//     $book = DB::table('books')->where('title','like','%' . $title . '%')->get();
//     if (is_null($book)){
//         return response()->json(['message' => 'Book Not Found.'], 404);
//     }
//     return response()->json(DB::table('books')->where('title','like','%' . $title . '%')->get(), 200);
// }

// public function getBookByYear($year) {
//     $book = DB::table('books')->where('year','=',$year)->get();
//     if (is_null($book)){
//         return response()->json(['message' => 'Book Not Found.'], 404);
//     }
//     return response()->json(DB::table('books')->where('year','=',$year)->get(), 200);
// }

// public function getBookByGenre() {
    
// }