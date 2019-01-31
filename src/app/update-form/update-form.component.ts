import { Component, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { ADD_TODO } from '../query';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {

  public title = new FormControl('');
  public completed = new FormControl('');

  constructor(private apollo: Apollo) { }

  createTodo() {
    this.apollo.mutate({
      mutation: ADD_TODO, /** Query for mutation **/
      variables: {
        title: this.title.value,
        completed: this.completed.value  /** Arguments passed for mutation **/
      }
    }).subscribe(() => {
      this.title.setValue('');
      this.completed.setValue('');
    });

  }

}
