
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrl: './user-config.component.css'
})
export class UserConfigComponent{

    constructor(){}

    changeTheme(event: any) {
        if(event == 'light'){
            if(document.body.classList.contains('dark-theme')){
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                document.getElementById("nav-bar__config-icon")?.setAttribute("src", "assets/config.png");
            }
        } else if (event == 'dark'){
            if(document.body.classList.contains('light-theme')){
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                document.getElementById("nav-bar__config-icon")?.setAttribute("src", "assets/config-light.png");
            }
        }
    }
}
