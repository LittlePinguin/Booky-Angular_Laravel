import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.getPopularBooks();
  }

  getPopularBooks(){
    this.dataService.getPopularBooksName().subscribe(res => {
      this.books = res;
      console.log(this.books);
    })
  }
}
