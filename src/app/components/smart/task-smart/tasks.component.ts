import { Component } from '@angular/core';
import { setupTasks } from '../../common/setup-test-task';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent{

    tasks$ = setupTasks();

    handleCreateTask(): void{
    }
}
