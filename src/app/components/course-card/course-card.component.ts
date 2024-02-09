import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../interfaces/interface';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  constructor(private courses:CourseService){}

  Courses:Course[] = this.courses.getCourses()

  startDate = new Date(2000, 0, 1);



}
