import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-sprint',
  templateUrl: './form-create-sprint.component.html',
  styleUrl: './form-create-sprint.component.css'
})
export class FormCreateSprintComponent {
    @Output() createSprintFormData : EventEmitter<FormGroup> = new EventEmitter();

    createSprintForm = new FormGroup({
        title: new FormControl('', Validators.required)
    });

    onSubmit(){
        this.createSprintFormData.emit(this.createSprintForm);
    }
}
