import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrl: './create-sprint.component.css'
})
export class CreateSprintComponent {
    @Output() createSprint = new EventEmitter<void>();

    onClick() {
        this.createSprint.emit();
    }
}
