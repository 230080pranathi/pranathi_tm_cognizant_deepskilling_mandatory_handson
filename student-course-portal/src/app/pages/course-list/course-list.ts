import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    {
      id: 1,
      name: 'Java Programming',
      code: 'JAVA101',
      credits: 4
    },
    {
      id: 2,
      name: 'Web Development',
      code: 'WEB102',
      credits: 3
    },
    {
      id: 3,
      name: 'Database Management',
      code: 'DB103',
      credits: 4
    },
    {
      id: 4,
      name: 'Cloud Computing',
      code: 'CLOUD104',
      credits: 3
    },
    {
      id: 5,
      name: 'Data Structures',
      code: 'DS105',
      credits: 4
    }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {

    console.log('Enrolling in course: ' + courseId);

    this.selectedCourseId = courseId;

  }

}