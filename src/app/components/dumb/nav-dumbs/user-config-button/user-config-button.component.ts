import { Component } from '@angular/core';

@Component({
  selector: 'app-user-config-button',
  templateUrl: './user-config-button.component.html',
  styleUrl: './user-config-button.component.css'
})
export class UserConfigButtonComponent {
    prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    ngOnInit(): void {
        if(this.prefersDarkMode){
            document.body.classList.add('dark-theme');
        } else if (!this.prefersDarkMode){
            document.body.classList.add('light-theme');
        }
    }
}
