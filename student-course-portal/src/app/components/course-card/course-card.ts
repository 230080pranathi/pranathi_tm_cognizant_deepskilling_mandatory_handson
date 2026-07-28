import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Course } from '../../models/course';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: Course;

  constructor(
    private enrollmentService: EnrollmentService
  ) {}

  isEnrolled(courseId: number): boolean {

    return this.enrollmentService.isEnrolled(courseId);

  }

  toggleEnrollment(): void {

    if (this.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(
        this.course.id
      );

    } else {

      this.enrollmentService.enroll(
        this.course.id
      );

    }

  }

}