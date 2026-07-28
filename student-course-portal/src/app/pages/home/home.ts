import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
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