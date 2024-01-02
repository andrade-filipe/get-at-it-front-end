import { Component, Input } from '@angular/core';
import { Sprint } from '../../../../model/interfaces/sprint';

@Component({
  selector: 'app-card-sprint',
  templateUrl: './card-sprint.component.html',
  styleUrl: './card-sprint.component.css'
})
export class CardSprintComponent {
    @Input() sprints !: Sprint[];
}
