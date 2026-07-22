import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseList } from '../course-list/course-list';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    CourseList,
    NgIf

],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 5;

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

}