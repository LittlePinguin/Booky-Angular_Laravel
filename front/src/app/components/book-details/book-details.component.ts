import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id: any;
  book: any;
  author: any;
  authorBooks: any;

  constructor(private dataService:DataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookDetails();
    this.getBookSameAuthor();
  }

  getBookDetails() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getBookDetailsById(this.id).then(response => {
      this.book = response;
      this.author = this.book.author;
    })
  }


  getBookSameAuthor() {
    console.log(this.author);
    this.dataService.getBookByAuthor(this.author).then(response => {
      this.authorBooks = response;
      console.log(this.authorBooks);
    })
  }

}
