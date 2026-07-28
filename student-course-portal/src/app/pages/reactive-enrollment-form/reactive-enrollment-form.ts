import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';


// Custom synchronous validator
// Returns an error if the course code starts with "XX"
function noCourseCode(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value;

  if (value && value.toString().startsWith('XX')) {
    return {
      noCourseCode: true
    };
  }

  return null;
}


// Custom asynchronous validator
// Simulates checking whether an email is already registered
function simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {

  return new Promise((resolve) => {

    setTimeout(() => {

      const email = control.value;

      if (email && email.includes('test@')) {
        resolve({
          emailTaken: true
        });
      } else {
        resolve(null);
      }

    }, 800);

  });

}


@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: [
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          simulateEmailCheck
        ]
      ],

      courseId: [
        null,
        [
          Validators.required,
          noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      // FormArray for dynamically added courses
      additionalCourses:
        this.fb.array<FormControl<string>>([])

    });

  }


  // Typed getter for FormArray
  get additionalCourses(): FormArray<FormControl<string>> {

    return this.enrollForm.get(
      'additionalCourses'
    ) as FormArray<FormControl<string>>;

  }


  // Add a new course
  addCourse(): void {

    const courseControl =
      new FormControl<string>(
        '',
        {
          nonNullable: true,
          validators: Validators.required
        }
      );

    this.additionalCourses.push(
      courseControl
    );

  }


  // Remove course
  removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

  }


  // Submit form
  onSubmit(): void {

    console.log(
      'Form Value:',
      this.enrollForm.value
    );

    // value excludes disabled controls.
    console.log(
      'Raw Form Value:',
      this.enrollForm.getRawValue()
    );

  }

}