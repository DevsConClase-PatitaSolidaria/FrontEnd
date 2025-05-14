/*import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Publication } from '../../model/publication.entity';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss']
})
export class PublicationFormComponent implements OnInit {
  @Input() publication: Publication | null = null;
  @Output() formSubmit = new EventEmitter<Publication>();
  publicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.publicationForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      animalType: ['', [Validators.required]],
      breed: [''],
      age: [null],
      gender: ['', [Validators.required]],
      size: ['', [Validators.required]],
      healthStatus: ['', [Validators.required]],
      imageUrl: [''],
      location: [''],
      contactPhone: [''],
      contactEmail: ['', [Validators.email]],
      status: ['available', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.publication) {
      this.publicationForm.patchValue(this.publication);
    }
  }

  onSubmit(): void {
    if (this.publicationForm.valid) {
      const formData = this.publicationForm.value;

      const publication: Publication = {
        ...this.publication,
        ...formData,
        createdAt: this.publication?.createdAt || new Date(),
        updatedAt: new Date()
      };

      this.formSubmit.emit(publication);
    }
  }
}*/
