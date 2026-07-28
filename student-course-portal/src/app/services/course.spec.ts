import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java Programming',
      code: 'JAVA101',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Database Management',
      code: 'DB101',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 4,
      name: 'Computer Networks',
      code: 'CN101',
      credits: 4,
      gradeStatus: 'failed'
    },
    {
      id: 5,
      name: 'Web Development',
      code: 'WEB101',
      credits: 3,
      gradeStatus: 'pending'
    }
  ];

  // Returns all courses
  getCourses(): Course[] {
    return this.courses;
  }

  // Returns a course using its ID
  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  // Adds a new course
  addCourse(course: Course): void {
    this.courses.push(course);
  }

}