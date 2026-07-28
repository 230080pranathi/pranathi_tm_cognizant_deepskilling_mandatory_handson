import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../../models/course';
import { CourseService } from '../../services/course';

import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];

  errorMessage: string = '';

  isLoading: boolean = true;

  searchTerm: string = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // Read search query parameter from URL
    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

    // Load courses from JSON Server
    this.loadCourses();

  }

  loadCourses(): void {

    this.isLoading = true;

    this.errorMessage = '';

    this.courseService.getCourses().subscribe({

      next: (courses: Course[]) => {

        this.courses = courses;

        this.isLoading = false;

      },

      error: (error) => {

        console.error(
          'Error loading courses:',
          error
        );

        this.errorMessage =
          error.message ||
          'Failed to load courses. Please try again.';

        this.isLoading = false;

      },

      complete: () => {

        this.isLoading = false;

      }

    });

  }

  searchCourses(): void {

    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );

  }

  viewCourse(course: Course): void {

    this.router.navigate(
      ['courses', course.id]
    );

  }

  trackByCourseId(
    index: number,
    course: Course
  ): number {

    return course.id;

  }

}