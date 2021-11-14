import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  data:any;
  books:any;
  
  constructor(private dataService:DataService) { }

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
}
