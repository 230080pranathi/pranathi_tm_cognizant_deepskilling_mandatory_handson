import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit {

  enrolledCourses: any[] = [];

  constructor(
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {

    // Get all courses currently enrolled by the student
    this.enrolledCourses =
      this.enrollmentService.getEnrolledCourses();

  }

}