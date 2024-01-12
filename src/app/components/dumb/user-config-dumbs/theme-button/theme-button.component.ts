import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatButtonToggleChange} from '@angular/material/button-toggle';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css'
})
export class ThemeButtonComponent {

    @Output() changeTheme = new EventEmitter<string>();

    @HostListener('click', ['$event'])
    onClick(event: MatButtonToggleChange){
        this.changeTheme.emit(event.value);
    }
}
