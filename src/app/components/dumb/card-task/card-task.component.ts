import { Component, Input } from '@angular/core';
import { Task } from '../../../model/interfaces/task';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.css'
})
export class CardTaskComponent {
    @Input() tasks !: Task[];
}
