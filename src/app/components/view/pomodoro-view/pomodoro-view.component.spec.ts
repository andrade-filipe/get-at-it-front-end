import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroViewComponent } from './pomodoro-view.component';

describe('PomodoroViewComponent', () => {
    let component: PomodoroViewComponent;
    let fixture: ComponentFixture<PomodoroViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PomodoroViewComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PomodoroViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
