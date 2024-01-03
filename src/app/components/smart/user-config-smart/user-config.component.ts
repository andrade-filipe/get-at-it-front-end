import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrl: './user-config.component.css'
})
export class UserConfigComponent {

    constructor(){

    }

    changeTheme(event: string){
        console.log(event);
        if(event.match('light')){
        } else if(event.match('dark')){
        }
    }
}
