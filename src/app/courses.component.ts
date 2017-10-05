import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', // <courses>                "courses"
              // <div class = "courses"          ".courses"
              // <div id ="aId"                   "#courses"
  template: `
              <h2>{{ title }}</h2>
<!--              <ul>
                <li *ngFor="let subject of courses">{{subject}}</li>
              </ul>
              &lt;!&ndash;<img src="{{ imageURL }}"/>&ndash;&gt;
              <img [src]="imageURL" height="100px" width="200px"/>
              <table>
                <tr>
                  <td [attr.colspan]="columnSpan">
                  </td>
                </tr>
              </table>-->
              <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>
              <button class="btn btn-primary" [style.backgroundColor]="isActive? 'lightgreen': 'pink'">Style Binding</button>
              <div>
                <br>
              </div>
               <div (click)="onDivClicked()">
                  <button class="btn btn-primary" (click)="onSave($event)">Even Binding</button>
              </div>
              <div>
                <br>
              </div>
              <!--<input (keyup)="onKeyUp($event)"/> Submit Data-->
              <input #email (keyup.enter)="onKeyUp(email.value)"/> Submit Data
            `
})
export class CoursesComponent {
    title = 'Courses';
    imageURL = 'https://cdn-images-1.medium.com/max/622/1*grk7btEn0OJEQRKgG2Qs2A.png';
    columnSpan = 2 ;
    isActive = true;
    courses;
    onSave($event) {
      $event.stopPropagation(); // STop the bubbleing
      console.log('Btn was clicked.', $event);
    }

    onDivClicked() {
      console.log('Div was clicked.');
    }

/*    onKeyUp($event) {
      if ($event.keyCode === 13) {
        console.log('Enter was pressed.');
      }
    }*/

    onKeyUp(email) {
      console.log('Enter was pressed.' + email);
    }

    constructor(service: CoursesService) {
      this.courses = service.getCoursesList();
    }
}
