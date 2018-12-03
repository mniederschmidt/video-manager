import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vm-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {
  details: FormGroup;

  constructor(fb: FormBuilder) {
    this.details = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  saveEmployeeDetails(): void {
    console.log('Form Submitted', this.details.value);
  }

  logTheForm(): void {
    console.log('form: ', this.details);
  }
}
