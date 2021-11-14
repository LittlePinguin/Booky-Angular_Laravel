import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  data:any;
  books:any;
  book:any;
  id:any;
  
  constructor(private dataService:DataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBooksData();
  }

  getBooksData() {
    this.dataService.getData().subscribe(res => {
      this.books = res;
    })
  }

  getBookSearch(name: any) {
    const keyword = name.target.value;
    this.dataService.getSearchBookName(keyword).then(response =>{
      this.data = response;
    });
  }

  getBookDetails() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getBookDetailsById(this.id).then(response => {
      this.book = response;
    })
  }
}
