import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget implements OnInit {

  courseCount: number = 0;

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {
        this.courseCount = courses.length;
      },

      error: (error) => {
        console.error(
          'Error loading course count:',
          error
        );

        this.courseCount = 0;
      }

    });

  }

}