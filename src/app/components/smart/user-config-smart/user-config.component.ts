
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrl: './user-config.component.css'
})
export class UserConfigComponent {

    constructor(){

    }

    changeTheme(event: any) {
        if(event == 'light'){

        } else if (event == 'dark'){

        }
    }
}
