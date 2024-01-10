import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
    @Output() createTask = new EventEmitter<void>();

    onClick() {
        console.log('is clicking')
        this.createTask.emit();
    }
}
