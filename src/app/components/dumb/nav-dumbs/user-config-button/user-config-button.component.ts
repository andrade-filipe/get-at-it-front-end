import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-config-button',
  templateUrl: './user-config-button.component.html',
  styleUrl: './user-config-button.component.css'
})
export class UserConfigButtonComponent {
    prefersDarkMode !: boolean;

    ngOnInit(): void {
        if(typeof window !== 'undefined'){
            this.prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            if(this.prefersDarkMode){
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                document.getElementById("nav-bar__config-icon")?.setAttribute("src", "assets/config-light.png");
            } else{
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                document.getElementById("nav-bar__config-icon")?.setAttribute("src", "assets/config.png");
            }
        }
    }
}
