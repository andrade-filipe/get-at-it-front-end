import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksViewComponent } from './components/view/tasks-view/tasks-view.component';
import { PomodoroViewComponent } from './components/view/pomodoro-view/pomodoro-view.component';
import { SprintViewComponent } from './components/view/sprint-view/sprint-view.component';

const routes: Routes = [
    { path: 'tasks', component: TasksViewComponent },
    { path: 'pomodoro', component: PomodoroViewComponent },
    { path: 'sprint', component: SprintViewComponent },
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
