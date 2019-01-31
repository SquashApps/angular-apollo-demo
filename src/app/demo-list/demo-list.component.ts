import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Query } from '../app.types';
import { GET_TODOS } from '../query';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})

export class DemoListComponent implements OnInit {
  todoList: Observable<any[]>;

  constructor(private apollo: Apollo) { }



  ngOnInit() {
    this.todoList = this.apollo.watchQuery<Query>({   /** Watch for updation in query **/
      query: GET_TODOS
    })
      .valueChanges
      .pipe(
        map(result => result.data.todos)
      );
  }


}


