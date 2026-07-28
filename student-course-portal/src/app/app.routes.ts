import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

  // Home page
  {
    path: '',
    component: Home
  },

  // Home page
  {
    path: 'home',
    component: Home
  },

  // Courses page with nested routes
  {
    path: 'courses',
    component: CoursesLayout,
    children: [

      // /courses
      {
        path: '',
        component: CourseList
      },

      // /courses/:id
      {
        path: ':id',
        component: CourseDetail
      }

    ]
  },

  // Student profile
  {
    path: 'profile',
    component: StudentProfile
  },

  // Enrollment Form - lazy loaded
  {
    path: 'enroll',
    loadComponent: () =>
      import('./pages/enrollment-form/enrollment-form')
        .then(m => m.EnrollmentForm)
  },

  // Reactive Enrollment Form - lazy loaded
  {
    path: 'enroll/reactive',
    loadComponent: () =>
      import('./pages/reactive-enrollment-form/reactive-enrollment-form')
        .then(m => m.ReactiveEnrollmentForm)
  },

  // Page not found
  // This must always be the last route
  {
    path: '**',
    component: NotFound
  }

];