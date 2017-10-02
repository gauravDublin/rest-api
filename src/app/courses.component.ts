import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', //<courses>                "courses"
              // <div class = "courses"          ".courses"
              // <div id ="aId"                   "#courses"
  template: `
              <h2>{{ title }}</h2>
              <ul>
                <li *ngFor="let subject of courses">{{subject}}</li>
              </ul>
            `
})
export class CoursesComponent {
    title = "Courses";
    courses;
    constructor(service: CoursesService) {
      this.courses = service.getCoursesList();
    }
}
