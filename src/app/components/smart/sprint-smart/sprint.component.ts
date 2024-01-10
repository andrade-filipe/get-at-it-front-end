import { Component } from '@angular/core';
import { setupSprints } from '../../common/setup-test-sprint';

@Component({
    selector: 'app-sprint',
    templateUrl: './sprint.component.html',
    styleUrl: './sprint.component.css',
})
export class SprintComponent {
    sprints$ = setupSprints();

    handleCreateSprint(){
    }
}
