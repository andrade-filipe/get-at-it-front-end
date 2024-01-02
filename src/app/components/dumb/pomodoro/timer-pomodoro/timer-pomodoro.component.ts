import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer-pomodoro',
  templateUrl: './timer-pomodoro.component.html',
  styleUrl: './timer-pomodoro.component.css'
})
export class TimerPomodoroComponent {

    @Input() timeInMinutes !: number;

}
