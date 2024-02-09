import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  constructor(private courses: CourseService, private http: HttpClient) {}

  Courses: Course[] = this.courses.getCourses();

  startDate = new Date(2000, 0, 1);

  ngOnInit() {
    this.http.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello').subscribe(response => console.log(response))
  }
}
