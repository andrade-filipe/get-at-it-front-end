import { Component } from '@angular/core';
import { setupTasks } from '../../common/setup-test-task';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent{

    tasks$ = setupTasks();

    creatingTask : boolean = false;

    handleCreateTask(): void{
        this.creatingTask = true;
    }

    handleFormCreateTaskData(event: FormGroup){
        console.log(event.get('title')?.getRawValue());
    }
}
