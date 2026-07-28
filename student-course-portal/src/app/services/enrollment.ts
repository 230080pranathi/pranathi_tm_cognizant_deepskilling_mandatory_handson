import { Injectable } from '@angular/core';
import { CourseService } from './course';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  // Stores the IDs of courses that the student has enrolled in
  private enrolledCourseIds: number[] = [];

  constructor(
    private courseService: CourseService
  ) {}

  // Enroll in a course
  enroll(courseId: number): void {

    // Add the course ID only if it is not already enrolled
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }

  }

  // Unenroll from a course
  unenroll(courseId: number): void {

    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);

  }

  // Check whether a course is already enrolled
  isEnrolled(courseId: number): boolean {

    return this.enrolledCourseIds.includes(courseId);

  }

  // Return complete course objects for enrolled courses
  getEnrolledCourses() {

    return this.enrolledCourseIds
      .map(id => this.courseService.getCourseById(id))
      .filter(course => course !== undefined);

  }

}