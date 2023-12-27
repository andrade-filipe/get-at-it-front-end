import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './infrastructure/app-config/app-config.service';
import { ErrorHandlerService } from './core/error-handler/error-handler.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalHttpInterceptor } from './infrastructure/interceptors/global-http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/dumb/nav-bar/nav-bar.component';
import { TasksComponent } from './components/smart/tasks/tasks.component';
import { PomodoroComponent } from './components/smart/pomodoro/pomodoro.component';
import { SprintComponent } from './components/smart/sprint/sprint.component';
import { TasksViewComponent } from './components/view/tasks-view/tasks-view.component';
import { PomodoroViewComponent } from './components/view/pomodoro-view/pomodoro-view.component';
import { SprintViewComponent } from './components/view/sprint-view/sprint-view.component';
import { LogoComponent } from './components/dumb/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TasksComponent,
    PomodoroComponent,
    SprintComponent,
    TasksViewComponent,
    PomodoroViewComponent,
    SprintViewComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
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
  bootstrap: [AppComponent]
})
export class AppModule { }
