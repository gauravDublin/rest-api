import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', // <courses>                "courses"
              // <div class = "courses"          ".courses"
              // <div id ="aId"                   "#courses"
  template: `
                  {{longText|summary : 10}}
<!--              <h2>{{ title }}</h2>-->
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
              <!--<button class="btn btn-primary" [class.active]="isActive">Class Binding</button>
              <button class="btn btn-primary" [style.backgroundColor]="isActive? 'lightgreen': 'pink'">Style Binding</button>
              <div>
                <br>
              </div>
               <div (click)="onDivClicked()">
                  <button class="btn btn-primary" (click)="onSave($event)">Even Binding</button>
              </div>
              <div>
                <br>
              </div>-->
              <!--<input (keyup)="onKeyUp($event)"/> Submit Data-->
              <!--<input #email (keyup.enter)="onKeyUp(email.value)"/> Submit Data-->
             <!-- <input [value]="email" (keyup.enter)="email=$event.target.value; onKeyUp()"/> Submit Data-->  <!-- 2 way binding-->
              <!--<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> Submit Data-->
            `
})
export class CoursesComponent {
  longText = 'India, officially the Republic of India (Bhārat Gaṇarājya),[e] is a country in South Asia. It is the seventh-largest country by area, the second-most populous country (with over 1.2 billion people), and the most populous democracy in the world. It is bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast. It shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the northeast; and Myanmar (Burma) and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives. Indias Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.';
/*    title = 'Courses';
    email = 'gaurav.kapoor2@mail.dcu.ie';
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

/!*    onKeyUp($event) {
      if ($event.keyCode === 13) {
        console.log('Enter was pressed.');
      }
    }*!/

    onKeyUp() {
      console.log('Enter was pressed.' + this.email);
    }

    constructor(service: CoursesService) {
      this.courses = service.getCoursesList();
    }*/
}
