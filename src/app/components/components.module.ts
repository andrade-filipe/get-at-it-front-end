import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPomodoroComponent } from './dumb/pomodoro-dumbs/timer-pomodoro/timer-pomodoro.component';
import { CardSprintComponent } from './dumb/sprint-dumbs/card-sprint/card-sprint.component';
import { CreateSprintComponent } from './dumb/sprint-dumbs/create-sprint/create-sprint.component';
import { CardTaskComponent } from './dumb/task-dumbs/card-task/card-task.component';
import { CreateTaskComponent } from './dumb/task-dumbs/create-task/create-task.component';
import { PomodoroComponent } from './smart/pomodoro-smart/pomodoro.component';
import { SprintComponent } from './smart/sprint-smart/sprint.component';
import { TasksComponent } from './smart/task-smart/tasks.component';
import { PomodoroViewComponent } from './view/pomodoro-view/pomodoro-view.component';
import { SprintViewComponent } from './view/sprint-view/sprint-view.component';
import { TasksViewComponent } from './view/tasks-view/tasks-view.component';
import { LogoComponent } from './dumb/nav-dumbs/logo/logo.component';
import { NavBarLargeComponent } from './dumb/nav-dumbs/nav-bar-large/nav-bar-large.component';
import { NavBarMobileComponent } from './dumb/nav-dumbs/nav-bar-mobile/nav-bar-mobile.component';
import { NavBarComponent } from './smart/nav-bar-smart/nav-bar.component';
import { NavBarViewComponent } from './view/nav-bar-view/nav-bar-view.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        TasksComponent,
        LogoComponent,
        NavBarViewComponent,
        NavBarComponent,
        NavBarLargeComponent,
        NavBarMobileComponent,
        PomodoroComponent,
        SprintComponent,
        TasksViewComponent,
        PomodoroViewComponent,
        SprintViewComponent,
        CreateTaskComponent,
        CardTaskComponent,
        TimerPomodoroComponent,
        CreateSprintComponent,
        CardSprintComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ],
    exports: [
        LogoComponent,
        NavBarViewComponent,
        NavBarComponent,
        NavBarLargeComponent,
        NavBarMobileComponent
    ],
    providers: [],
})
export class ComponentsModule {}