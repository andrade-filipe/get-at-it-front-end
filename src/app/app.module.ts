import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './infrastructure/app-config/app-config.service';
import { ErrorHandlerService } from './core/error-handler/error-handler.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalHttpInterceptor } from './infrastructure/interceptors/global-http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarMobileComponent } from './components/dumb/nav/nav-bar-mobile/nav-bar-mobile.component';
import { TasksComponent } from './components/smart/tasks/tasks.component';
import { PomodoroComponent } from './components/smart/pomodoro/pomodoro.component';
import { SprintComponent } from './components/smart/sprint/sprint.component';
import { TasksViewComponent } from './components/view/tasks-view/tasks-view.component';
import { PomodoroViewComponent } from './components/view/pomodoro-view/pomodoro-view.component';
import { SprintViewComponent } from './components/view/sprint-view/sprint-view.component';
import { LogoComponent } from './components/dumb/nav/logo/logo.component';
import { NavBarComponent } from './components/smart/nav-bar/nav-bar.component';
import { NavBarViewComponent } from './components/view/nav-bar-view/nav-bar-view.component';
import { NavBarLargeComponent } from './components/dumb/nav/nav-bar-large/nav-bar-large.component';
import { CreateTaskComponent } from './components/dumb/task/create-task/create-task.component';
import { CardTaskComponent } from './components/dumb/task/card-task/card-task.component';
import { TimerPomodoroComponent } from './components/dumb/pomodoro/timer-pomodoro/timer-pomodoro.component';
import { CreateSprintComponent } from './components/dumb/sprint/create-sprint/create-sprint.component';
import { CardSprintComponent } from './components/dumb/sprint/card-sprint/card-sprint.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarMobileComponent,
        TasksComponent,
        PomodoroComponent,
        SprintComponent,
        TasksViewComponent,
        PomodoroViewComponent,
        SprintViewComponent,
        LogoComponent,
        NavBarComponent,
        NavBarViewComponent,
        NavBarLargeComponent,
        CreateTaskComponent,
        CardTaskComponent,
        TimerPomodoroComponent,
        CreateSprintComponent,
        CardSprintComponent,
    ],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [
        provideClientHydration(),
        {
            provide: APP_SERVICE_CONFIG,
            useValue: APP_CONFIG,
        },
        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GlobalHttpInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
