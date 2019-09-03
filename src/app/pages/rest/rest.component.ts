import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";


class Post {
  id: number;
  title: string;
}

// create an instance of the HttpParams
const params = new HttpParams({ fromString: '_page=1&_limit=10' });

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  private isSectionVisible = true;
  PostsObservable: Observable<Post[]>;

  constructor(private httpClient: HttpClient) { }

  list() {
    console.log('list')
    this.PostsObservable = this.httpClient
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", { params })
  }

  ngOnInit() {

  }

}
