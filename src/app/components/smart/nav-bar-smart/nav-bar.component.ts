import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
})
export class NavBarComponent  implements OnInit {
    constructor(public breakpointObserver: BreakpointObserver) {}

    isMobile !: boolean;

    ngOnInit(): void {
        this.observeScreenSize();
    }
    observeScreenSize(){
        this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.TabletPortrait,
        ]).subscribe(result => {
            if(result.matches){
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        });
    }
}
