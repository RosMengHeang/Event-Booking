import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CreateEventComponent implements OnInit {
  eventForm!: FormGroup;
  currentStep = 1;
  selectedImageName: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      tickets: this.fb.array([this.createTicketGroup()]),
    });
  }

  createTicketGroup(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
    });
  }

  get tickets(): FormArray {
    return this.eventForm.get('tickets') as FormArray;
  }

  addTicket(): void {
    this.tickets.push(this.createTicketGroup());
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImageName = input.files[0].name;
    }
  }

  get progressWidth(): string {
    return `${(this.currentStep / 4) * 100}%`;
  }

  nextStep(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      console.log('Event created:', this.eventForm.value);
      // Here you would typically send the form data to your backend
    } else {
      console.log('Form is invalid');
    }
  }
}
