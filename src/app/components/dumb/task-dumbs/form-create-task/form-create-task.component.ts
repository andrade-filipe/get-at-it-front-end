import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-task',
  templateUrl: './form-create-task.component.html',
  styleUrl: './form-create-task.component.css'
})
export class FormCreateTaskComponent {
    @Output() createTaskFormData : EventEmitter<FormGroup> = new EventEmitter();

    createTaskForm = new FormGroup({
        title: new FormControl('', Validators.required)
    });

    onSubmit(){
        this.createTaskFormData.emit(this.createTaskForm);
    }
}
