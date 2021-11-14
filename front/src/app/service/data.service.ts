import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/books');
  }

  getSearchBookName(name: string) {
    const response = new Promise(resolve =>{
      this.httpClient.get('http://127.0.0.1:8000/api/books'+`/search_book?search_book=${name}`)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
    return response; 
  }

  getPopularBooksName() {
    return this.httpClient.get('http://127.0.0.1:8000/api/books/popular');
  }

  getBookDetailsById(id: number) {
    const response = new Promise(resolve =>{
      this.httpClient.get('http://127.0.0.1:8000/api/books/book_details/'+`${id}`)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
    return response;
  }

  getBookByAuthor(author: string) {
    const response = new Promise(resolve =>{
      this.httpClient.get('http://127.0.0.1:8000/api/books/same_author/'+`${author}`)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
    return response;
  }
}
