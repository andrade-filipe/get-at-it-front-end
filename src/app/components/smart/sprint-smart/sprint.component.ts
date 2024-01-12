import { Component } from '@angular/core';
import { setupSprints } from '../../common/setup-test-sprint';
import { FormGroup } from '@angular/forms';
import e from 'express';

@Component({
    selector: 'app-sprint',
    templateUrl: './sprint.component.html',
    styleUrl: './sprint.component.css',
})
export class SprintComponent {
    sprints$ = setupSprints();

    creatingSprint : boolean = false;

    handleCreateSprint(){
        this.creatingSprint = true;
    }

    handleFormCreateSprintData(event : FormGroup){
        console.log(event.get('title')?.getRawValue());
    }
}
